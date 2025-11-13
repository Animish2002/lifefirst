"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-blue-900 text-white px-6 text-center">
      <div className="max-w-lg">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium transition-all shadow-lg"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-10 opacity-40 text-sm">
        LifeFirst Concepts & Technologies Pvt. Ltd.
      </div>
    </div>
  );
}
