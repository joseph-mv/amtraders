"use client";
import { useForm } from "@/hooks/useForm";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";

const inquiryOptions = [
  "General",
  "Quote Request",
  "Sourcing",
  "Logistics",
  "Other",
];



const Contact = () => {
const {formAction}= useForm()

  return (
    <section id="contact-us" className="relative bg-white  py-20 px-4 md:px-10">
      <div className="  h-full w-full">
        <Image
          fill
          src="/images/shape/shape-dotted-light.svg"
          alt="Dotted"
          className="hidden dark:block"
        />
      </div>

      <div className="max-w-6xl  mx-auto grid grid-cols-1 rounded-3xl p-2 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 text-center ">
          <h2 className="text-4xl md:text-3xl font-extrabold text-gray-900 leading-tight font-lucida">
            Let’s Build Something Global, Together
          </h2>
          <p className="text-lg text-gray-600 text-justify">
            Whether you&apos;re sourcing your first product or scaling a global
            supply chain, we’re here to help—every step of the way.
          </p>
          <div className="text-base text-gray-700">
            <p>
              🤝 <strong>We&apos;d Love to Hear From You</strong>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form
          action={formAction}
          className="relative bg-white border  border-gray-200 p-8 md:p-10 rounded-2xl shadow-xl grid gap-6"
        >
          <div className="">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 "
            >
              Your Name{" "}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
            />
          </div>
          <div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address{" "}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example@domain.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
              />
              <p className="text-sm p-1 text-gray-500">
                We&apos;ll never share your email with anyone else.
              </p>
            </div>
          </div>

          <div>
            <label
              htmlFor="inquiryType"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
            >
              {inquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message{" "}
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              placeholder="Write your message here..."
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            // disabled={!isFormValid()}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-55"
          >
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </button>
         
        </form>
      </div>
    </section>
  );
};

export default Contact;
