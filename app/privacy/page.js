import React from "react";
import Navbar from "../component/home/Navbar";
import Footer from "../component/home/Footer";

export default function page() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="fixed inset-0 -z-10 bg-[#060606]">
        <div className="absolute bottom-0 -left-20 w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] bg-[#2F7EF7] rounded-full blur-[180px]" />
        <div className="absolute top-0 -right-20 w-[15rem] h-[15rem] lg:w-[20rem] lg:h-[20rem] bg-[#00FFF2] rounded-full blur-[180px]" />
      </div>
      <div className="p-22">
        {/* ── Privacy Policy ── */}
        {/* <h1 className="text-4xl font-bold mb-6 bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
          Privacy Policy
        </h1> */}
        {/* <p className="mb-4 italic text-[#FFFFFF]">
          Effective Date: January 1st, 2025
        </p>
        <p className="mb-4 text-[#FFFFFF]">
          Drop In ("us", "we", or "our") operates the Drop In mobile application
          (the "Service"). This page informs you of our policies regarding the
          collection, use, and disclosure of personal information when you use
          our Service.
        </p>

        <h2 className="text-2xl text-[#FFFFFF] font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          <strong>Personal Information:</strong> When you register or interact
          with the Service, we may collect your name, email address, location,
          profile photo, and any content you upload.
          <br />
          <strong>Usage Data:</strong> We collect information on how you use the
          Service, such as pages visited, event participation, and device
          information.
          <br />
          <strong>Location Data:</strong> With your permission, we may collect
          your device's location to suggest nearby events.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          2. How We Use Information
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We use the collected information to:
          <ul className="list-disc pl-5">
            <li>Provide and maintain the Service.</li>
            <li>Personalize your experience.</li>
            <li>
              Communicate with you, including sending updates and promotions.
            </li>
            <li>Monitor usage and improve our Service.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          3. Sharing of Information
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We do not sell your personal information. We may share information
          with:
          <ul className="list-disc pl-5">
            <li>
              <strong>Service Providers:</strong> Third parties that help us
              operate the Service (e.g., hosting providers, analytics).
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          4. Security
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We take reasonable measures to protect your information, but no method
          of transmission over the Internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          5. Your Choices
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          You can update your account information at any time. You may also
          delete your account by contacting us. Location services can be turned
          off through your device settings.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          6. Children's Privacy
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          Our Service is not intended for children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          8. Contact Us
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          If you have any questions about this Privacy Policy, please contact us
          at dropincorporated95@gmail.com.
        </p> */}

        {/* ── Child Safety & Protection Policy ── */}
        <h1 className="text-4xl font-bold mt-16 mb-6 bg-gradient-to-l from-[#00FFF2] to-[#2F7EF7] bg-clip-text text-transparent">
          Child Safety &amp; Protection Policy
        </h1>
        <p className="mb-4 italic text-[#FFFFFF]">
          Last Updated: April 30, 2026
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          Our Commitment to Child Safety
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          At Drop In, we take child safety and online protection seriously. We
          are committed to ensuring a safe and secure environment for all users
          and strictly enforce policies to prevent Child Sexual Abuse and
          Exploitation (CSAE).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          Age Restrictions
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          <ul className="list-disc pl-5">
            <li>
              Drop In is intended for users of all ages, including children
              under 13.
            </li>
            <li>
              We do not knowingly allow minors to use our platform without
              parental knowledge or supervision.
            </li>
            <li>
              If we discover that a minor has registered and is being exposed to
              harmful or inappropriate content, we reserve the right to remove
              the account or limit its access immediately.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          Content Moderation &amp; Reporting
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          We have strict guidelines and enforcement mechanisms to prevent
          harmful content on Drop In:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Prohibited Content:</strong> Any content involving child
              exploitation, nudity, or abuse is strictly forbidden and will be
              removed immediately and reported to relevant law enforcement or
              child protection agencies.
            </li>
            <li>
              <strong>User Reporting System:</strong> All users can report any
              suspicious, harmful, or unsafe activity or content. Every report
              is reviewed promptly, and appropriate action is taken, including
              banning accounts and notifying authorities when necessary.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          User Safety Measures
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          To safeguard all users, including minors, we have implemented the
          following protocols:
          <ul className="list-disc pl-5 mt-2">
            <li>
              <strong>Profile Verification:</strong> We take steps to discourage
              fake accounts and impersonation through registration validation.
            </li>
            <li>
              <strong>Chat &amp; Interaction Controls:</strong> Users can block,
              mute, or report others if they feel unsafe or threatened in any
              way.
            </li>
            <li>
              <strong>Live Stream Monitoring:</strong> Our team monitors live
              sessions using a mix of automated alerts and user feedback to
              prevent misuse of the feature.
            </li>
            <li>
              <strong>Data Protection &amp; Privacy:</strong> Drop In does not
              sell or share personal data with third parties unless required by
              law or consented by the user. Our practices are aligned with COPPA
              and GDPR standards.
            </li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          Compliance &amp; Law Enforcement Collaboration
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          Drop In complies with child protection laws and platform policies
          including:
          <ul className="list-disc pl-5 mt-2">
            <li>COPPA (Children's Online Privacy Protection Act)</li>
            <li>GDPR (General Data Protection Regulation)</li>
            <li>Google Play &amp; Apple App Store CSAE policies</li>
          </ul>
        </p>
        <p className="mb-4 text-[#FFFFFF]">
          Any violations involving child abuse or exploitation are immediately
          reported to law enforcement agencies and child protection
          organizations.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-[#FFFFFF]">
          Contact for Child Safety Concerns
        </h2>
        <p className="mb-4 text-[#FFFFFF]">
          If you have concerns or inquiries regarding child safety on Drop In,
          please contact our team at{" "}
          <a
            href="mailto:dropincorporated95@gmail.com"
            className="underline text-[#00FFF2]"
          >
            dropincorporated95@gmail.com
          </a>
          .
        </p>
        <p className="mb-4 text-[#FFFFFF]">
          We are committed to maintaining a secure and positive environment for
          all users and are continuously working to improve our child safety
          policies and tools.
        </p>
      </div>
      <Footer />
    </div>
  );
}
