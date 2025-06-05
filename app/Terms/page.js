import React from "react";
import Navbar from "../component/home/Navbar";
import Footer from "../component/home/Footer";

export default function page() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10 bg-[#060606]">
        <div className=" absolute bottom-0 -left-20 w-[15rem] h-[15rem]   lg:w-[20rem] lg:h-[20rem]   bg-[#2F7EF7] rounded-full blur-[180px]" />
        <div className="absolute top-0 -right-20 w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem]  bg-[#00FFF2] rounded-full blur-[180px]  " />
      </div>
      <div className=" p-22">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
          Terms and Conditions
        </h1>
        <p className="mb-4 italic text-[#FFFFFF]">
          Effective Date: January 1st, 2025
        </p>
        <p className="mb-4 text-[#FFFFFF]">
          Welcome to Drop In! Please read these Terms and Conditions ("Terms")
          carefully before using our mobile application (the "Service") operated
          by Drop In ("us", "we", or "our").
        </p>
        <p className="mb-4 text-[#FFFFFF]">
          By accessing or using Drop In, you agree to be bound by these Terms.
          If you do not agree, please do not use the Service.
        </p>

        <h2 className="text-2xl text-[#FFFFFF] font-semibold mt-6 mb-2">
          1. Use of the Service
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          You must be at least 18 years old to use Drop In. By using the
          Service, you represent and warrant that you meet this age requirement.
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          2. Accounts
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          When you create an account with us, you must provide accurate,
          complete, and current information. You are responsible for
          safeguarding the password you use and for any activities under your
          account. We reserve the right to suspend or terminate accounts that
          violate these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          3. User Content
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          You may post, upload, or otherwise share content through the Service
          ("User Content"). You retain ownership of your User Content but grant
          us a worldwide, non-exclusive, royalty-free license to use, display,
          and distribute your User Content in connection with operating the
          Service. You agree not to post content that is illegal, abusive,
          defamatory, or otherwise inappropriate.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          4. Intellectual Property
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          Drop In and its original content, features, and functionality are and
          will remain the exclusive property of Drop In and its licensors. The
          Service is protected by copyright, trademark, and other laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          5. Prohibited Conduct
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          You agree not to: use the Service for any illegal or unauthorized
          purpose, attempt to access or tamper with other users’ accounts,
          transmit viruses or harmful code, or engage in abusive, harassing, or
          threatening behavior.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          6. Disclaimers
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          The Service is provided "as is" and "as available." We make no
          warranties, expressed or implied, regarding the operation or
          availability of the Service.
        </p>

        <h2 className="text-2xl  text-[#FFFFFF] font-semibold mt-6 mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          In no event shall Drop In, its directors, employees, or affiliates be
          liable for any indirect, incidental, special, consequential, or
          punitive damages arising out of or related to your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          8. Changes to Terms
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We may update these Terms from time to time. We will notify you of any
          changes by posting the new Terms on this page. Your continued use of
          the Service after the changes become effective constitutes your
          acceptance of the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          9. Contact Us
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          If you have any questions about these Terms, please contact us at
          dropincorporated95@gmail.com.
        </p>
      </div>
      <Footer/>
    </div>
  );
}
