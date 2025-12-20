"use client";

import {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import Script from "next/script";

interface TurnstileWidgetProps {
  sitekey?: string;
  theme?: "light" | "dark" | "auto";
  onVerify?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export interface TurnstileWidgetRef {
  getToken: () => string | undefined;
  reset: () => void;
}

interface TurnstileRenderOptions {
  sitekey: string;
  theme?: "light" | "dark" | "auto";
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
}

declare global {
  interface Window {
    turnstile: {
      render: (element: HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

const TurnstileWidget = forwardRef<TurnstileWidgetRef, TurnstileWidgetProps>(
  (
    {
      sitekey = "0x4AAAAAACFSNXQ8mz2Zw6sy",
      theme = "light",
      onVerify,
      onError,
      onExpire,
    },
    ref
  ) => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState<string>();

    // Memoize callbacks to prevent unnecessary re-renders
    const handleVerify = useCallback(
      (newToken: string) => {
        setToken(newToken);
        onVerify?.(newToken);
      },
      [onVerify]
    );

    const handleError = useCallback(() => {
      setToken(undefined);
      onError?.();
    }, [onError]);

    const handleExpire = useCallback(() => {
      setToken(undefined);
      onExpire?.();
    }, [onExpire]);

    useImperativeHandle(ref, () => ({
      getToken: () => token,
      reset: () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
          setToken(undefined);
        }
      },
    }));

    useEffect(() => {
      if (!isLoaded || !widgetRef.current || !window.turnstile) {
        return;
      }

      // Render the widget
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey,
        theme,
        callback: handleVerify,
        "error-callback": handleError,
        "expired-callback": handleExpire,
      });

      // Cleanup function
      return () => {
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch (e) {
            // Widget might already be removed
            console.warn("Failed to remove Turnstile widget:", e);
          }
          widgetIdRef.current = null;
        }
      };
    }, [isLoaded, sitekey, theme, handleVerify, handleError, handleExpire]);

    return (
      <>
        <div className="flex justify-center">
          <div ref={widgetRef} />
        </div>

        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          onLoad={() => setIsLoaded(true)}
        />
      </>
    );
  }
);

TurnstileWidget.displayName = "TurnstileWidget";
export default TurnstileWidget;