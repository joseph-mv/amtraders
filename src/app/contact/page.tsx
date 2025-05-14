
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/layout/Footer";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – Let’s Build Something Global, Together",
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen font-trebuchet mt-12 bg-gradient-to-br ">
        <div className="max-w-6xl mx-auto p-6 sm:p-8    mt-8 mb-12">
          {/* Page Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-gray-800">
            Contact Us
          </h1>

          {/* Map container */}
          <div className="p-2 rounded-t-2xl bg-gray-200 border-gray-300 shadow-2xl">
            <div className="flex gap-2 p-2 ">
              <FontAwesomeIcon icon={faLocation} className=" text-4xl" />
              <div>
                <h3>Location:</h3>
                <h4>Liwan District, Guangzhou, Guangdong Province, China</h4>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.7700388652192!2d113.23806107531743!3d23.14207937909023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA4JzMxLjUiTiAxMTPCsDE0JzI2LjMiRQ!5e0!3m2!1sen!2sin!4v1747141628433!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* <p className="text-center text-lg text-gray-600 mb-10">
          At AM Traders, we simplify global sourcing, procurement, and
          logistics—so you can focus on growth. Whether you&apos;re a small
          business testing your first international order or a large enterprise
          scaling global supply, we offer expert support every step of the way.
        </p> */}

          <h2 className="text-3xl mt-4 sm:text-4xl font-extrabold text-center mb-6 text-gray-800">
            Let’s Build Something Global, Together
          </h2>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
            {/* Left Side: Info Section */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-xl font-bold text-gray-800">
                🤝 We’d Love to Connect With You
              </h2>
              <p className="text-gray-600">
                Whether you need a quote, a custom sourcing request, or help
                with shipping and tracking, our team is ready to assist.
                Here&apos;s how we can help:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>🔹 General Inquiries:</strong> Have a question about
                  our services, process, or industry expertise? We&apos;re happy
                  to chat.
                </li>
                <li>
                  <strong>🔹 Product Quote Requests:</strong> Share your product
                  category or specifications—we’ll send you the best sourcing
                  options and pricing.
                </li>
                <li>
                  <strong>🔹 Custom Sourcing Solutions:</strong> Can’t find the
                  product you’re looking for? Let us know, and we’ll source it
                  for you from our trusted network.
                </li>
                <li>
                  <strong>🔹 Shipping & Logistics Support:</strong> Need help
                  with customs clearance, shipping updates, or delivery status?
                  We’ve got it handled.
                </li>
              </ul>
              <p className="text-gray-600 mt-4">
                📞 Prefer to Reach Out Directly?
              </p>
              <p className="text-blue-600">
                📧 Email:{" "}
                <a
                  href="mailto: Amtradingchina@yahoo.com

"
                  className="hover:underline"
                >
                  Amtradingchina@yahoo.com
                </a>
              </p>
              <p className="text-blue-600">
                📱 WhatsApp:{" "}
                <a
                  href="https://wa.me/8613249728354"
                  className="hover:underline"
                >
                  +86 13249728354
                </a>
              </p>
              {/* <p className="text-gray-600">
                🕒 Response Time: Typically within 24 hours on business days.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-8">
                💡 Why Businesses Choose AM Traders
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>🔹 Trusted sourcing experts with global experience</li>
                <li>🔹 Transparent, responsive communication</li>
                <li>🔹 End-to-end service from inquiry to delivery</li>
                <li>🔹 100% confidentiality guaranteed</li>
              </ul> */}
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full md:w-1/2 bg-gray-100 p-6 border border-black rounded-xl shadow-xl">
              {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2> */}
             <ContactForm/>
            </div>
          </div>

          {/* Closing Section */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-800">
              🔚 Let’s Start Something Global
            </h3>
            <p className="text-gray-600 mt-4">
              Ready to take your sourcing to the next level? AM Traders is more
              than just a trading partner—we’re your gateway to smarter, safer,
              and scalable global trade.
            </p>
            {/* <div className="mt-6 space-x-4">
            <a
              href="/free-consultation"
              className="text-blue-600 hover:underline"
            >
              🔗 Book a Free Consultation
            </a>
            <a
              href="https://wa.me/+91XXXXXXXXXX"
              className="text-blue-600 hover:underline"
            >
              📞 Chat with Our Team
            </a>
            <a href="/start-order" className="text-blue-600 hover:underline">
              📦 Start Your First Order
            </a>
          </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
