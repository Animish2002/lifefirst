import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React from "react";

const page = () => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-50 min-h-screen py-8 mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Privacy Policy
              </h1>
              <span>Effective Date: 05 September 2025</span>

              <p className="text-gray-700 leading-relaxed">
                LifeFirst Concepts & Technologies Pvt. Ltd. (“LifeFirst”, “we”,
                “our”, “us”) respects your privacy and is committed to
                protecting the personal information you share with us. This
                Privacy Policy explains how we collect, use, and safeguard your
                information when you use our website.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When you use our website or contact form, we may collect:
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Website</li>
                  <li>Product or Service of Interest</li>
                  We may also collect limited technical information (such as IP
                  address, browser type, and device details) for analytics and
                  security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information you provide to:
                  <li>Respond to your inquiries and schedule calls</li>
                  <li>Share proposals or relevant product information</li>
                  <li>
                    Send marketing, promotional, or informational communications
                  </li>
                  <li>
                    Improve our website, services, and customer experience
                  </li>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Legal Basis for Processing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We process your personal information:
                  <li>With your consent (when you submit our form)</li>
                  <li>
                    For legitimate business purposes (responding to inquiries,
                    providing services)
                  </li>
                  <li>To comply with legal obligations</li>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the internet or electronic storage
                  is completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Sharing of Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell your personal information. We may share it
                  with:
                  <li>
                    Service providers who assist us in communication, hosting,
                    or analytics
                  </li>
                  <li>Legal authorities if required by law</li>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Marketing Communication
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By submitting your information, you consent to receive
                  marketing and promotional messages from us. You may opt-out at
                  any time by following the unsubscribe instructions in our
                  emails or by contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your information as long as necessary for business
                  purposes or as required by law. You can request deletion of
                  your data at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location, you may have the right to:
                  <li>Access the personal data we hold about you</li>
                  <li>Request corrections or updates </li>
                  <li>Request deletion of your data </li>
                  <li> Opt-out of marketing communications</li>
                  To exercise these rights, contact us at:{" "}
                  <a
                    href="mailto:coo@life-first.in"
                    className="hover:text-blue-600  "
                  >
                    coo@life-first.in
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Changes to this Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with a revised “Effective Date.”
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or how we
                  handle your information, please write us at:{" "}
                  <a
                    href="mailto:coo@life-first.in"
                    className="hover:text-blue-600  "
                  >
                    coo@life-first.in
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                This privacy policy is effective as of the date last updated and
                applies to all visitors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
