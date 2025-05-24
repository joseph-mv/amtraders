"use client";
import { useForm } from "@/hooks/useForm";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  const { formAction } = useForm();
  return (
    <form action={formAction} className="space-y-3">
      <div>
        <label className="block text-gray-700" htmlFor="name">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="company">
          Company Name:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter your company name (optional)"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="email">
          Email Address:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@domain.com"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="phone">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="inquiryType">
          Select Inquiry Type:
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
        >
          <option value="General">General</option>
          <option value="Quote Request">Quote Request</option>
          <option value="Custom Sourcing">Custom Sourcing</option>
          <option value="Logistics">Logistics</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="message">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          rows={2}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600  text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
      >
        <FontAwesomeIcon icon={faPaperPlane} /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
