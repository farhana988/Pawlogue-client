import { useState } from "react";
import Container from "../Reusable/Container";
import Heading from "../Reusable/Heading";
import location from "../../assets/images/location.jpg";
import Swal from "sweetalert2";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out to us. We will get back to you soon.",
      confirmButtonText: "OK",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="mt-10">
      <Heading title="Contact Us" />

      {/* Contact Info Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="text-sm  mb-4">
          Have any questions or need assistance? Reach out to us through the
          contact details below or send us a message directly using the form.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-lCard dark:bg-dCard p-6 rounded-lg shadow-lg space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">
              Our Contact Information
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <strong>Phone:</strong>+8801712345678
              </li>
              <li>
                <strong>Email:</strong> contact@pawlogue.com
              </li>
              <li>
                <strong>Address:</strong> House 123, Road 45, Dhanmondi,
                Dhaka-1205, Bangladesh
              </li>
            </ul>
          </div>
          {/* Contact Form Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-lg">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     bg-lCard dark:bg-dCard"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     bg-lCard dark:bg-dCard"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg
                     bg-lCard dark:bg-dCard"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-lBtn dark:bg-dBtn py-2 px-6 rounded-lg text-lg font-semibold transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Map (Optional) */}
        <div className="bg-lCard dark:bg-dCard p-6 rounded-lg shadow-lg">
          <h4 className="text-xl font-semibold mb-4">Find Us Here</h4>
          <img className="rounded-xl" src={location} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
