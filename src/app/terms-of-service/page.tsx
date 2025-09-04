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
                Terms of Service
              </h1>
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
                  Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You have the right to access, update, or delete your personal
                  information. You may also opt out of certain communications
                  from us. To exercise these rights, please contact us using the
                  information provided in our contact section.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze site traffic, and personalize
                  content. You can control cookie preferences through your
                  browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Changes to This Policy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the updated
                  policy on our website and updating the effective date.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-500">
                This privacy policy is effective as of the date last updated and
                applies to all users of LifeFirst services.
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
