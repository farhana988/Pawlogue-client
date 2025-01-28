import Container from "../Reusable/Container";
import Heading from "../Reusable/Heading";


const PrivacyPolicy = () => {
    return (
        <Container>
   
        <Heading title="Privacy Policy" />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="lg:text-lg">
            At Pawlogue, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the types of information we collect, how it is used, and the steps we take to safeguard your data.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Information We Collect</h3>
          <p className="lg:text-lg">
            We may collect the following types of information:
          </p>
          <ul className="list-disc list-inside lg:text-lg">
            <li>Personal Information: Name, email address, phone number, etc.</li>
            <li>Usage Data: How you interact with our website and services, including IP address, browser type, and pages visited.</li>
            <li>Cookies: We use cookies to enhance your experience on our website.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">How We Use Your Information</h3>
          <p className="lg:text-lg">
            The information we collect is used for various purposes, including:
          </p>
          <ul className="list-disc list-inside lg:text-lg">
            <li>Providing and improving our services</li>
            <li>Personalizing your experience</li>
            <li>Responding to inquiries or requests</li>
            <li>Communicating with you about promotions, updates, and news</li>
            <li>Ensuring the security and integrity of our website</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Data Security</h3>
          <p className="lg:text-lg">
            We take the security of your data seriously and use reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration. However, please note that no method of internet transmission is 100% secure.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Third-Party Services</h3>
          <p className="text-lg">
            We may share your information with trusted third-party partners who assist us in operating our website and providing services to you. These third parties are required to protect your information and only use it for the specific purpose for which it was shared.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Rights</h3>
          <p className="text-lg">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of receiving promotional emails.</li>
            <li>Request that we restrict or stop processing your data.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h3>
          <p className="text-lg">
            We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Please review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg">
            By using our website, you consent to our Privacy Policy.
          </p>
        </div>

    
    </Container>
    );
};

export default PrivacyPolicy;