import Footer from "@/Landing/Footer";
import Navigation from "@/Landing/Navigation";
import React from "react";

const page = () => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-50 min-h-screen py-8 mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Terms of Use
              </h1>
              <span>Effective Date: 05 September 2025</span>
              <p className="text-gray-700 leading-relaxed">
                Welcome to the LifeFirst Concepts & Technologies Pvt. Ltd.
                (“LifeFirst”, “we”, “our”, “us”) website. By accessing or using
                our website, you agree to these Terms of Use.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  By using our website, you agree to comply with these Terms of
                  Use and all applicable laws. If you do not agree, please do
                  not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Use of Website
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You may use this site for lawful purposes only. You agree not
                  to misuse the site, attempt to disrupt its operation, or use
                  it to distribute harmful content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  All content on this website, including text, images, graphics,
                  logos, and designs, are the property of LifeFirst Concepts &
                  Technologies Pvt. Ltd. You may not reproduce, copy, or
                  distribute any content without our prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Contact Forms & Submissions
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When you submit details through our contact form (name, email,
                  phone, company website, and product interests), you agree
                  that: The information provided is accurate and truthful. We
                  may use the information to contact you, schedule calls, and
                  send promotional or marketing content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Third-Party Links
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are
                  not responsible for their content, policies, or practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  The website is provided “as is.” We make no guarantees about
                  accuracy, availability, or fitness for purpose. LifeFirst is
                  not liable for any damages resulting from the use (or
                  inability to use) this website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Indemnity
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold LifeFirst harmless from any
                  claims, damages, or losses arising out of your misuse of this
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Use at any time without prior
                  notice. Your continued use of the site constitutes acceptance
                  of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of India. If you are
                  accessing the site from outside India, you are responsible for
                  compliance with local laws.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  For any questions about these Terms, please contact at:{" "}
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
                This terms of use is effective as of the date last updated and
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
