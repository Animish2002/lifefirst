"use client";
import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Loader2 } from "lucide-react";

interface HLSVideoPlayerProps {
  src: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  controls?: boolean;
}

type VideoOrientation = "landscape" | "portrait" | "square" | null;

const HLSVideoPlayer: React.FC<HLSVideoPlayerProps> = ({
  src,
  title,
  className = "",
  autoplay = false,
  controls = true,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isHLS, setIsHLS] = useState(false);
  const [orientation, setOrientation] = useState<VideoOrientation>(null);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  // Detect video orientation from metadata
  const detectOrientation = (video: HTMLVideoElement) => {
    if (!video.videoWidth || !video.videoHeight) return;

    const aspectRatio = video.videoWidth / video.videoHeight;
    
    if (aspectRatio > 1.2) {
      setOrientation("landscape");
    } else if (aspectRatio < 0.8) {
      setOrientation("portrait");
    } else {
      setOrientation("square");
    }
  };

  // Check HLS support
  const checkHLSSupport = (): boolean => {
    if (typeof window === "undefined") return false;
    
    const video = document.createElement("video");
    
    // Check native HLS support (Safari, iOS)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      return true;
    }
    
    // Check HLS.js support (Chrome, Firefox, Edge, Android)
    if (Hls && Hls.isSupported()) {
      return true;
    }
    
    return false;
  };

  // Fallback to MP4 if HLS fails
  const getFallbackUrl = (hlsUrl: string): string => {
    // Try to get MP4 version by replacing .m3u8 with .mp4
    // Adjust this based on your URL structure
    return hlsUrl.replace(/\.m3u8$/, ".mp4").replace(/\/hls\/[^/]+\//, "/");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check if source is HLS (.m3u8)
    const isHLSFormat = src.endsWith(".m3u8") || src.includes(".m3u8");
    setIsHLS(isHLSFormat);

    // Cleanup function
    const cleanup = () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };

    // Handle video metadata loaded to detect orientation
    const handleLoadedMetadata = () => {
      detectOrientation(video);
      setIsLoading(false);
    };

    // Handle video dimensions change (for responsive videos)
    const handleResize = () => {
      if (video.videoWidth && video.videoHeight) {
        detectOrientation(video);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("resize", handleResize);

    if (isHLSFormat) {
      const hlsSupported = checkHLSSupport();
      
      if (hlsSupported && Hls && Hls.isSupported()) {
        // Use HLS.js for browsers that support it (Chrome, Firefox, Edge, Android)
        try {
          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: false,
            // Optimized for fast startup
            backBufferLength: 30, // Reduced from 90
            maxBufferLength: 10, // Reduced from 30 for faster startup
            maxMaxBufferLength: 20, // Reduced from 60
            maxBufferSize: 30 * 1000 * 1000, // 30MB reduced from 60MB
            maxBufferHole: 0.5,
            highBufferWatchdogPeriod: 2,
            nudgeOffset: 0.1,
            nudgeMaxRetry: 2, // Reduced retries
            fragLoadingTimeOut: 10000, // Reduced from 20000
            manifestLoadingTimeOut: 5000, // Reduced from 10000
            manifestLoadingMaxRetry: 2, // Reduced from 3
            levelLoadingTimeOut: 5000, // Reduced from 10000
            levelLoadingMaxRetry: 2, // Reduced from 4
            fragLoadingMaxRetry: 3, // Reduced from 6
            startFragPrefetch: true, // Enable prefetch for faster start
            testBandwidth: false, // Disable for faster initial load
            progressive: false,
            // Start with lower quality for faster initial load
            startLevel: -1, // Auto-select, but prefer lower for speed
            abrEwmaFastLive: 3.0,
            abrEwmaSlowLive: 9.0,
            abrEwmaFastVoD: 3.0,
            abrEwmaSlowVoD: 9.0,
            abrBandWidthFactor: 0.95,
            abrBandWidthUpFactor: 0.7,
            maxStarvationDelay: 2, // Reduced from 4
            maxLoadingDelay: 2, // Reduced from 4
            minAutoBitrate: 0,
            emeEnabled: false,
            widevineLicenseUrl: undefined,
            drmSystemOptions: {},
            requestMediaKeySystemAccessFunc: undefined,
          });

          hlsRef.current = hls;

          hls.loadSource(src);
          hls.attachMedia(video);

          // Start loading immediately, don't wait for play
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            setIsLoading(false);
            setError(null);
            // Start loading the first segment immediately
            hls.startLoad(-1); // -1 means start from beginning
            // Try to play immediately if autoplay is enabled
            if (autoplay) {
              // Small delay to ensure first segment is loading
              setTimeout(() => {
                video.play().catch((err) => {
                  console.error("Autoplay failed:", err);
                });
              }, 100);
            }
          });

          // Start loading as soon as manifest starts loading
          hls.on(Hls.Events.MANIFEST_LOADING, () => {
            setIsLoading(true);
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  console.error("Fatal network error, trying to recover...");
                  hls.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  console.error("Fatal media error, trying to recover...");
                  hls.recoverMediaError();
                  break;
                default:
                  console.error("Fatal error, cannot recover");
                  // Try fallback to MP4
                  if (!hasTriedFallback) {
                    setHasTriedFallback(true);
                    const fallbackUrl = getFallbackUrl(src);
                    console.log("Trying fallback to MP4:", fallbackUrl);
                    video.src = fallbackUrl;
                    video.load();
                  } else {
                    setError("Failed to load video. Please try again.");
                    setIsLoading(false);
                    hls.destroy();
                  }
                  break;
              }
            }
          });

          // Handle loading states
          video.addEventListener("loadstart", () => setIsLoading(true));
          video.addEventListener("canplay", () => setIsLoading(false));
          video.addEventListener("waiting", () => setIsLoading(true));
          video.addEventListener("playing", () => setIsLoading(false));
          video.addEventListener("error", () => {
            if (!hasTriedFallback) {
              setHasTriedFallback(true);
              const fallbackUrl = getFallbackUrl(src);
              video.src = fallbackUrl;
              video.load();
            } else {
              setError("Failed to load video");
              setIsLoading(false);
            }
          });

          return cleanup;
        } catch (err) {
          console.error("HLS.js initialization failed:", err);
          // Fallback to native or MP4
          if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = src;
            setIsLoading(false);
            if (autoplay) {
              video.play().catch((err) => {
                console.error("Autoplay failed:", err);
              });
            }
          } else {
            const fallbackUrl = getFallbackUrl(src);
            video.src = fallbackUrl;
            video.load();
          }
        }
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS support (Safari, iOS)
        video.src = src;
        video.preload = "auto"; // Preload immediately
        setIsLoading(false);
        if (autoplay) {
          video.play().catch((err) => {
            console.error("Autoplay failed:", err);
          });
        }
      } else {
        // No HLS support, try MP4 fallback
        const fallbackUrl = getFallbackUrl(src);
        console.log("No HLS support, using MP4 fallback:", fallbackUrl);
        video.src = fallbackUrl;
        video.preload = "auto"; // Preload immediately
        video.load(); // Start loading immediately
      }
      } else {
        // Not HLS format, use directly
        video.src = src;
        video.preload = "auto"; // Preload immediately
        video.load(); // Start loading immediately
      }

    // Common event listeners for all video types
    video.addEventListener("loadstart", () => setIsLoading(true));
    video.addEventListener("canplay", () => setIsLoading(false));
    video.addEventListener("waiting", () => setIsLoading(true));
    video.addEventListener("playing", () => setIsLoading(false));
    video.addEventListener("error", () => {
      if (!hasTriedFallback && isHLSFormat) {
        setHasTriedFallback(true);
        const fallbackUrl = getFallbackUrl(src);
        video.src = fallbackUrl;
        video.load();
      } else {
        setError("Failed to load video");
        setIsLoading(false);
      }
    });

    if (autoplay && !isHLSFormat) {
      video.play().catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }

    return () => {
      cleanup();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("resize", handleResize);
    };
  }, [src, autoplay, isHLS, hasTriedFallback]);

  // Get container class based on orientation
  const getContainerClass = (): string => {
    const baseClass = "relative w-full h-full video-container";
    
    if (orientation === "portrait") {
      return `${baseClass} video-portrait`;
    } else if (orientation === "landscape") {
      return `${baseClass} video-landscape`;
    } else if (orientation === "square") {
      return `${baseClass} video-square`;
    }
    
    return `${baseClass} ${className}`;
  };

  return (
    <div 
      ref={containerRef}
      className={getContainerClass()}
      style={{ maxHeight: '100%', maxWidth: '100%' }}
    >
      <video
        ref={videoRef}
        className="object-contain bg-black"
        controls={controls}
        controlsList="nodownload"
        playsInline
        preload="auto"
        title={title}
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          width: "auto",
          height: "auto",
          display: "block",
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-white animate-spin" />
            <p className="text-white text-sm">Loading video...</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="text-center p-4">
            <p className="text-white text-sm mb-2">{error}</p>
            <button
              onClick={() => {
                setError(null);
                setIsLoading(true);
                setHasTriedFallback(false);
                if (videoRef.current) {
                  videoRef.current.load();
                }
              }}
              className="text-white underline text-sm hover:text-gray-300"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HLSVideoPlayer;
