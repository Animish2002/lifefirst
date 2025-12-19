"use client";

import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
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
  "timeout-callback"?: () => void;
  size?: "normal" | "compact";
  language?: string;
  tabindex?: number;
  "response-field"?: boolean;
  "response-field-name"?: string;
  retry?: "auto" | "never";
  "retry-interval"?: number;
}

declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: TurnstileRenderOptions) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

const TurnstileWidget = forwardRef<TurnstileWidgetRef, TurnstileWidgetProps>(
  ({ 
    sitekey = "0x4AAAAAACFSNXQ8mz2Zw6sy",
    theme = "light",
    onVerify,
    onError,
    onExpire 
  }, ref) => {
    const widgetRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [token, setToken] = useState<string | undefined>(undefined);

    useImperativeHandle(ref, () => ({
      getToken: () => {
        if (widgetIdRef.current && window.turnstile) {
          const currentToken = window.turnstile.getResponse(widgetIdRef.current);
          return currentToken || token;
        }
        return token;
      },
      reset: () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
          setToken(undefined);
        }
      },
    }));

    useEffect(() => {
      if (isLoaded && widgetRef.current && !widgetIdRef.current) {
        const renderOptions: TurnstileRenderOptions = {
          sitekey,
          theme: theme as "light" | "dark" | "auto",
          callback: (newToken: string) => {
            setToken(newToken);
            if (onVerify) {
              onVerify(newToken);
            }
          },
        };
        
        if (onError) {
          renderOptions["error-callback"] = () => {
            setToken(undefined);
            onError();
          };
        }
        
        if (onExpire) {
          renderOptions["expired-callback"] = () => {
            setToken(undefined);
            onExpire();
          };
        }
        
        widgetIdRef.current = window.turnstile.render(widgetRef.current, renderOptions);
      }
    }, [isLoaded, sitekey, theme, onVerify, onError, onExpire]);

    return (
      <>
        <div className="flex justify-center">
          <div ref={widgetRef} className="cf-turnstile"></div>
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

