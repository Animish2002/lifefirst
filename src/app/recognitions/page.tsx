"use client";
import React, { useState } from "react";
import Navigation from "@/Landing/Navigation";
import Footer from "@/Landing/Footer";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eye, FileText, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaItem {
  type: "image" | "pdf";
  url: string;
  title?: string;
}

interface Certification {
  title: string;
  imageUrl: string;
  description?: string;
  media?: MediaItem[]; // Optional array of images/PDFs to display in modal
}

const certificationsAndClients: Certification[] = [
  {
    title: "ISO Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575747/iso_qqjfzt.jpg",
    description: "ISO Certification for Quality Management Systems",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766853929/ISO_QMS_Certificate_1_dzmipw.jpg", title: "ISO Certificate" },
    ]
  },
  {
    title: "CE Certification",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575747/ce_approved_wut8xj.jpg",
    description: "CE Marking Certification for European Conformity",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766853930/LIFEFIRST_CONCEPTS_AND_TECHNOLOGIES_PRIVATE_LIMITED_CE_CERTIFICATE_1_vjslj0.jpg", title: "CE Certificate" },
    ]
  },
  {
    title: "Startup India",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575749/Make_in_India_kgecqj.png",
    description: "Startup India Recognition Certificate",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766853929/StartupIndia_Registration_Certificate_1_hl6cy0.jpg", title: "Startup India Registration Certificate" },
    ]
  },
  {
    title: "MSME Udyam Registration",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1758575748/msme_lvs2fb.png",
    description: "MSME Udyam Aadhar Registration Certificate",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766939303/LifeFirst_Udyam_Aadhar_page-0001_zr2cfe.jpg", title: "MSME Udyam Aadhar Registration Certificate" },
    ]
  },
  {
    title: "MJP",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/mjp_xbwsxo.png",
    description: "MJP Certification",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766853929/LFCT_GG_Updated_MJP_RegistrationCertificate_1_jex22w.jpg", title: "MJP Certificate" },
    ]
  },
  {
    title: "PWD",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/pwd_gnabq8.jpg",
    description: "Public Works Department Certification",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766853929/PWD_LFCT_Registeration_1_yex6db.jpg", title: "PWD Certificate" },
    ]
  },
  {
    title: "SKOCH",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/skoch_c7kbao.png",
    description: "SKOCH Award Recognition",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854209/skoch_award_skixx2.jpg", title: "SKOCH Award Certificate" },
    ]
  },
  {
    title: "India Achievers",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/india_achievers_sojonp.png",
    description: "India Achievers Award",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854209/india_achievers_award_pjigru.jpg", title: "India Achievers Award Certificate" },
    ]
  },
  {
    title: "Swift N Lift",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764879630/swift_n_lift_lid9bg.png",
    description: "Swift N Lift Award",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766930903/swft_1_ie5cbl.jpg", title: "Swift N Lift Award Felicitation"},
    ]
  },
  {
    title: "Latur District",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1764880330/collector_latur_and_nanded_sfamuc.jpg",
    description: "Latur District Collector's Certificate of Appreciation",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854210/recognition_latur_district_collector_inxbje.jpg", title: "Latur District Collector's Certificate of Appreciation" },
    ]
  },
  {
    title: "Nanded Municipal Corporation",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854565/nanded_municipal_corporation_rjvpjq.png",
    description: "Nanded Municipal Corporation Certificate of Appreciation",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854208/recognition_nanded_district_collector_zx2cxo.jpg", title: "Nanded Municipal Corporation Certificate of Appreciation" },
    ]
  },
  {
    title: "CXO 2.0 Award",
    imageUrl:
      "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766855160/cxo2.0_award_zr0ou8.jpg",
    description: "CXO 2.0 Award Recognition",
    media: [
      { type: "image", url: "https://res.cloudinary.com/dsvfcckqy/image/upload/f_auto,q_auto/v1766854207/cxo_award_xyuxql.jpg", title: "CXO 2.0 Award Certificate" },
    ]
  }
];

const Page = () => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: number]: number }>({});

  React.useEffect(() => {
    // Force scrollbar to always show
    const style = document.createElement('style');
    style.innerHTML = `
      html, body {
        overflow-y: scroll !important;
      }
      body[data-scroll-locked] {
        overflow: scroll !important;
        padding-right: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrevious = (certIndex: number, mediaLength: number) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [certIndex]: prev[certIndex] ? (prev[certIndex] - 1 + mediaLength) % mediaLength : mediaLength - 1,
    }));
  };

  const handleNext = (certIndex: number, mediaLength: number) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [certIndex]: prev[certIndex] !== undefined ? (prev[certIndex] + 1) % mediaLength : 1,
    }));
  };

  const getMediaItems = (cert: Certification): MediaItem[] => {
    // If custom media is provided, use it; otherwise, use the main image
    if (cert.media && cert.media.length > 0) {
      return cert.media;
    }
    return [{ type: "image" as const, url: cert.imageUrl, title: cert.title }];
  };

  return (
    <>
      <Navigation />
      <div className="relative md:mt-26 mt-24 overflow-hidden"></div>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recognitions & Certifications
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificationsAndClients.map((item, index) => {
              const mediaItems = getMediaItems(item);
              const currentIndex = currentMediaIndex[index] || 0;
              const currentMedia = mediaItems[currentIndex];

              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="group flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer transform hover:scale-105">
                      <div className="h-32 flex items-center justify-center mb-3 relative overflow-hidden rounded-md">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                          <Eye className="text-white w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-base font-semibold text-gray-800 text-center">
                        {item.title}
                      </h3>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 fixed">
                    <DialogHeader className="p-6 pb-4 bg-white border-b">
                      <DialogTitle className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </DialogTitle>
                      {item.description && (
                        <DialogDescription className="text-base text-gray-600 mt-2">
                          {item.description}
                        </DialogDescription>
                      )}
                    </DialogHeader>
                    
                    <div className="relative bg-gray-50 p-6">
                      {mediaItems.length > 0 && (
                        <>
                          {/* Media Display Area */}
                          <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-inner min-h-[400px] flex items-center justify-center">
                            {currentMedia.type === "image" ? (
                              <img
                                src={currentMedia.url}
                                alt={currentMedia.title || item.title}
                                className="max-w-full max-h-[70vh] object-contain"
                              />
                            ) : (
                              <div className="w-full h-[70vh] flex flex-col items-center justify-center p-4">
                                <FileText className="w-16 h-16 text-gray-400 mb-4" />
                                <p className="text-gray-600 mb-4 text-center">
                                  {currentMedia.title || "PDF Document"}
                                </p>
                                <iframe
                                  src={currentMedia.url}
                                  className="w-full h-full border-0 rounded-lg"
                                  title={currentMedia.title || item.title}
                                />
                                <Button
                                  asChild
                                  variant="outline"
                                  className="mt-4"
                                >
                                  <a
                                    href={currentMedia.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="flex items-center gap-2"
                                  >
                                    <Download className="w-4 h-4" />
                                    Download PDF
                                  </a>
                                </Button>
                              </div>
                            )}
                          </div>

                          {/* Navigation Controls */}
                          {mediaItems.length > 1 && (
                            <>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePrevious(index, mediaItems.length);
                                }}
                              >
                                <ChevronLeft className="w-5 h-5" />
                              </Button>
                              <Button
                                variant="outline"
                                size="icon"
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg z-10"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleNext(index, mediaItems.length);
                                }}
                              >
                                <ChevronRight className="w-5 h-5" />
                              </Button>

                              {/* Media Counter */}
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                                {currentIndex + 1} / {mediaItems.length}
                              </div>

                              {/* Media Thumbnails */}
                              <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
                                {mediaItems.map((media, mediaIndex) => (
                                  <button
                                    key={mediaIndex}
                                    onClick={() =>
                                      setCurrentMediaIndex((prev) => ({
                                        ...prev,
                                        [index]: mediaIndex,
                                      }))
                                    }
                                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                                      currentIndex === mediaIndex
                                        ? "border-blue-600 ring-2 ring-blue-300"
                                        : "border-gray-300 hover:border-gray-400"
                                    }`}
                                  >
                                    {media.type === "image" ? (
                                      <img
                                        src={media.url}
                                        alt={media.title || `${item.title} - ${mediaIndex + 1}`}
                                        className="w-full h-full object-cover"
                                      />
                                    ) : (
                                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-gray-600" />
                                      </div>
                                    )}
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
