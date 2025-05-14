import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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

const WhatWeStandFor = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="p-2">
      <h3 className="text-2xl font-semibold mb-6">What We Stand For</h3>
      <div className=" gap-6">
        {values.map((item, idx) => (
          <div
            key={idx}
            className="p-4  rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-lg flex items-center"> <FontAwesomeIcon  className="mr-2 drop-shadow-[4px_4px_1px_rgba(154,74,107)] text-card-bg shadow-2xl" icon={faArrowsToDot}/> {item.title}</h4>
              <button
                onClick={() => toggleIndex(idx)}
                className="text-xl font-bold focus:outline-none w-4 h-4 flex items-center hover:scale-125 cursor-pointer justify-center p-4  rounded-full"
              >
                {openIndex === idx ? "x" : "+"}
              </button>
            </div>
            {openIndex === idx && (
              <p className=" text-gray-700 mt-2">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeStandFor;
