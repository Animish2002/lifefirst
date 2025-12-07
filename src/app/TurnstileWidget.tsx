"use client";

import Script from "next/script";

export default function Turnstile() {
  return (
    <>
    <div className="flex justify-center">
      <div
        className="cf-turnstile"
        data-sitekey="0x4AAAAAACFSNXQ8mz2Zw6sy"
        data-theme="light"
      ></div>
</div>  
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
    </>
  );
}
