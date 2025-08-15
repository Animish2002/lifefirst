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
              <p className="text-2xl text-blue-800 font-semibold inline">
                LifeFirst
              </p>
              <span className="text-lg font-thin">
                &nbsp;Concepts & Technologies.Pvt.Ltd.
              </span>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We collect information you provide directly to us, such as
                  when you create an account, make a purchase, or contact us.
                  This may include your name, email address, phone number, and
                  payment information. We also automatically collect certain
                  information about your device and how you interact with our
                  services, including IP address, browser type, operating
                  system, and usage patterns.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect to provide, maintain, and
                  improve our services, process transactions, communicate with
                  you, and ensure the security of our platform. We may also use
                  your information to personalize your experience and send you
                  relevant updates about our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Information Sharing
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information with trusted
                  service providers who assist us in operating our business,
                  such as payment processors and email service providers. These
                  partners are contractually obligated to keep your information
                  confidential and secure.
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
