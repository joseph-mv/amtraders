"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const benefits = [
  {
    title: "Expert Sourcing That Saves You Money",
    description:
      "We connect you with verified manufacturers and negotiate the best rates—so you get high-quality goods without the high cost.",
  },
  {
    title: "End-to-End Procurement Support",
    description:
      "From the first quote to final delivery, we handle contracts, payments, and supplier coordination—so you don’t have to.",
  },
  {
    title: "Global-Standard Quality Control",
    description:
      "Every product goes through factory audits and strict inspections. We make sure what you order is what you receive.",
  },
  {
    title: "Fast & Reliable Shipping",
    description:
      "We manage logistics from customs clearance to doorstep delivery—ensuring on-time shipments without delays or surprises.",
  },
  {
    title: "Customized Solutions for Every Business",
    description:
      "Whether you're a small retailer or a large distributor, our services adapt to your scale, budget, and goals.",
  },
  {
    title: "Transparent, Honest Communication",
    description:
      "No hidden costs. No confusing processes. Just real support from a real team you can trust.",
  },
];
function WhyChoose() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const deltaY = event.deltaY;

      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;

      const atTop = scrollTop <= 100 && deltaY < 0;
      const atBottom =
        scrollTop + clientHeight >= scrollHeight - 100 && deltaY > 0;

      if (atTop || atBottom) {
        event.preventDefault();
        window.scrollBy(0, deltaY);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);
  const handleMouseEnter = () => {

    const scrollEvent = scrollRef.current;
    scrollEvent?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <section className="bg-accent-blue relative h-[400px]"
    onMouseEnter={handleMouseEnter}>
      {/* Bg image */}
      <Image
        src="/images/why-choose.webp"
        fill
        alt=""
        className="w-full object-[10%] sm:object-left object-cover h-[400px]"
      />

      <h1 className="text-white sm:hidden absolute top-4 text-center w-full text-4xl font-extrabold ">
        WHY CHOOSE US ?
      </h1>

      {/* Scroll container */}
      <div
        className="relative scroll-container flex flex-col   scrollbar-hide snap-y snap-mandatory  w-full  float-right  h-[400px] overflow-y-scroll scroll-smooth"
        ref={scrollRef}
      >
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-gray-5 ml-[calc(20vw+10%)] mt-40 mb-40 rounded-xl snap-center p-5   mr-2 flex items-start gap-4"
          >
            <div>
              <span className="border-2 bg-accent-green w-10 h-10 font-bold ml-auto border-white rounded-full flex justify-center items-center ">
                {index + 1}
              </span>
              <h3 className="flex font-semibold text-black text-lg">
                {" "}
                {` ${item.title}`}
              </h3>
              <p className="text-2xl text-white font-bold mt-1 text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;
