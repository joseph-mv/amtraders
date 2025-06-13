"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

type Category = {
  icon: string;
  title: string;
  description: string;
};

const categories: Category[] = [
  {
    icon: "🎁",
    title: "Toys & Gifts",
    description:
      "Surprise and delight with our wide selection of fun, educational, and creative toys and gift items. From classic toys to seasonal novelties, we ensure safety-tested products that appeal to all age groups and occasions.",
  },
  {
    icon: "📱",
    title: "Electronics & Mobile Accessories",
    description:
      "Stay on trend with high-demand electronics and mobile accessories—chargers, cables, earphones, power banks, and more. We source tech products that balance innovation, quality, and competitive pricing.",
  },
  {
    icon: "👗",
    title: "Fashion & Textiles",
    description:
      "From ready-made garments to bulk fabrics and accessories, we cater to apparel brands, boutiques, and textile distributors with fashion-forward, quality-assured products aligned with current market trends.",
  },
  {
    icon: "🚗",
    title: "Automobiles & Machinery Parts",
    description:
      "Reliable spare parts and components for automotive, agricultural, and industrial machinery. We ensure technical precision and consistency—sourced from certified manufacturers and tested for performance.",
  },
  {
    icon: "🪑",
    title: "Furniture & Building Materials",
    description:
      "Style meets durability in our furniture and building materials range. Whether for homes, offices, or commercial spaces, we supply modern, ergonomic furniture and strong, sustainable construction materials.",
  },
  {
    icon: "💡",
    title: "Lights & Equipment",
    description:
      "Illuminate with confidence—our lighting solutions include LED bulbs, decorative fixtures, industrial lighting, and electrical equipment, all tested to meet safety and energy standards.",
  },
  {
    icon: "🍽️",
    title: "Kitchen & Household Items",
    description:
      "Daily essentials made simple. We offer a broad catalog of cookware, utensils, organizers, cleaning tools, and home gadgets—designed for functionality, durability, and modern living.",
  },
  {
    icon: "📦",
    title: "Packing & Disposables",
    description:
      "From food-grade containers to industrial packaging solutions, we supply eco-friendly and disposable materials that help businesses pack, store, and ship efficiently.",
  },
];

const ProductCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollContRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {

    const scrollEvent = scrollContRef.current;
    scrollEvent?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  //scroll x-direction while mouse scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollEvent = scrollContRef.current;

    if (scrollContainer && scrollEvent) {
      const handleWheel = (e: WheelEvent) => {
        const deltaY = e.deltaY;
        const { scrollLeft, clientWidth, scrollWidth } = scrollContainer;

        const atLeft = scrollLeft == 0 && deltaY < 0;
        const atRight = scrollLeft + clientWidth >= scrollWidth -5 && deltaY > 0;
        console.log(scrollLeft , clientWidth , scrollWidth)
        if (!atLeft && !atRight) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
      };

      scrollEvent.addEventListener("wheel", handleWheel);

      return () => {
        scrollEvent.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);
  return (
    <section
      className="relative bg-accent-blue w-full text-j  md:px-12 py-16  text-text-secondary"
      ref={scrollContRef}
      onMouseEnter={handleMouseEnter}
    >
      {/* Section Title */}

      <div className="">
        <Image
          fill
          src="/images/products.webp"
          alt=""
          priority
          // unoptimized
          className=" fill-accent-blue  w-full h-full object-cover "
        ></Image>
        <div className="bg-black/40 absolute inset-0"></div>
      </div>
      <div className="relative   mx-4 text-center mb-10">
        <h2 className="text-3xl text-white  md:text-4xl font-bold mb-4">
          Our Product Categories
        </h2>
        <p className="text-lg text-justify text-white">
          At AM Traders, we source a wide range of high-quality products across
          diverse industries. Whether you are building a brand, expanding a
          store, or supplying bulk for projects, our product categories are
          curated to meet global demand with reliability and cost-efficiency.
        </p>
      </div>

      <div
        className="relative flex space-x-4 px-4 overflow-y-hidden  overflow-x-auto scrollbar-hide font-trebuchet "
        ref={scrollRef}
      >
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="flex items-start min-w-[300px] md:min-w-[360px] w-[50%] gap-4 p-5 bg-white rounded-tl-2xl  rounded-br-2xl shadow hover:shadow-md transition"
          >
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-700 text-justify text-sm mt-1">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Sourcing */}
      <div className="relative  mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-2 text-white">
          🚀 Custom Sourcing Available
        </h3>
        <p className="text-gray-100 m-4 text-md text-justify">
          Looking for something specific? Our team can source any product
          category not listed above. Share your requirements—we’ll find the
          right supplier and manage the rest.
        </p>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ProductCategories;
