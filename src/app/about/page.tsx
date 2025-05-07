'use client'
import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity First",
    desc: "We build long-term relationships through transparent practices and honest communication—with our clients, suppliers, and partners.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Your success is our priority. Every service we offer is tailored to meet your specific business goals, no matter your size or industry.",
  },
  {
    title: "Reliability Through Experience",
    desc: "From factory floors to final delivery, we manage every stage of the sourcing process with precision and accountability.",
  },
  {
    title: "Quality Without Compromise",
    desc: "We follow strict quality control standards—including product inspections, supplier verification, and audit trails—so you get exactly what you ordered.",
  },
  {
    title: "Efficiency at Every Step",
    desc: "With smart sourcing, expert negotiations, and optimized logistics, we reduce your time-to-market and increase your profit margins.",
  },
];

const audience = [
  "Importers and wholesalers",
  "E-commerce retailers",
  "Brick-and-mortar stores",
  "Construction firms and manufacturers",
  "Startups launching private labels",
  "Entrepreneurs expanding into new categories",
];

const AboutUs = () => {
  return (
    <section className="w-full px-4 md:px-12 py-10 bg-white text-gray-800">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Global Trade Partner for Smart, Secure, and Scalable Sourcing
        </h2>
        <p className="text-lg">
          At <strong>AM Traders</strong>, we are more than just sourcing
          experts—we are solution providers. With years of industry insight and
          a robust international network, we help businesses around the world
          source quality products with confidence and ease.
        </p>
      </motion.div>

      {/* What We Stand For */}
      <div className="mt-12 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">What We Stand For</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg mb-1">✅ {item.title}</h4>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="mt-12 max-w-4xl mx-auto space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            To empower businesses worldwide by providing seamless access to
            reliable products, transparent sourcing processes, and end-to-end
            trade support—ensuring growth, efficiency, and peace of mind.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            To be a globally recognized sourcing partner that transforms how
            businesses manage procurement—by making international trade smarter,
            safer, and more accessible.
          </p>
        </div>
      </div>

      {/* Who We Serve */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Who We Serve</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {audience.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Wherever you are in your sourcing journey, <strong>AM Traders</strong>{' '}
          is here to make it simple, secure, and successful.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
