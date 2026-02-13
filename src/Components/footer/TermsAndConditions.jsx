import Heading from "../Reusable/Heading";

const TermsAndConditions = () => {
  return (
    <div className="mt-10">
      <Heading title="Terms and Conditions" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-sm">
          Welcome to Pawlogue! By accessing or using our website and services,
          you agree to comply with the following terms and conditions. Please
          read them carefully before using our platform.
        </p>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
          <p className="text-sm">
            By accessing or using the Pawlogue website and services, you agree
            to be bound by these Terms and Conditions and all applicable laws
            and regulations. If you do not agree to these terms, you must not
            use our services.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">2. Use of Services</h3>
          <p className="text-sm">
            You agree to use our services only for lawful purposes and in
            accordance with our guidelines. You must not use the website to:
          </p>
          <ul className="list-disc list-inside text-sm">
            <li>Violate any applicable local, state, or international laws.</li>
            <li>
              Upload or distribute harmful, offensive, or illegal content.
            </li>
            <li>
              Attempt to disrupt or damage the website or its functionality.
            </li>
          </ul>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">3. User Account</h3>
          <p className="text-sm">
            In order to access certain features of our services, you may need to
            create an account. You are responsible for maintaining the
            confidentiality of your account credentials and agree to notify us
            immediately of any unauthorized use of your account.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">4. Privacy Policy</h3>
          <p className="text-sm">
            Our Privacy Policy governs the collection and use of personal data.
            By using our services, you consent to the collection and use of your
            information in accordance with our Privacy Policy.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">
            5. Intellectual Property
          </h3>
          <p className="text-sm">
            The content on our website, including text, graphics, logos, images,
            and software, is the property of Pawlogue or its licensors and is
            protected by intellectual property laws. You agree not to copy,
            reproduce, distribute, or create derivative works of any content
            without permission.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">
            6. Limitation of Liability
          </h3>
          <p className="text-sm">
            Pawlogue is not liable for any damages resulting from your use or
            inability to use our services. We make no representations or
            warranties regarding the accuracy, reliability, or availability of
            the services.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="">
          <h3 className="text-xl font-semibold mb-4">7. Modifications</h3>
          <p className="text-sm">
            Pawlogue reserves the right to modify or update these Terms and
            Conditions at any time. Any changes will be posted on this page, and
            the updated date will be noted at the bottom of the page. It is your
            responsibility to review these terms periodically.
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-semibold mb-4">8. Termination</h3>
          <p className="text-sm">
            We reserve the right to suspend or terminate your access to our
            services at any time, without notice, for violation of these Terms
            and Conditions or any other conduct we deem harmful to our platform
            or other users.
          </p>
        </div>
      </section>
      <div className="text-center mb-8">
        <p className="text-sm">
          By continuing to use our services, you acknowledge that you have read,
          understood, and agree to abide by these Terms and Conditions.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-sm">
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at <strong>contact@pawlogue.com</strong>
          .
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
