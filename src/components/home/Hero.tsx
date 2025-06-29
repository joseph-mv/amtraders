import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="fixed top-10 -z-10 w-[100vw] h-[90vh] overflow-hidden bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
      <Image
        fill
        src="/images/heroBg.webp"
        alt=""
        priority
        className="fill-accent-blue  w-full h-[90vh] object-cover object-top"
      ></Image>

      {/* Dark overlay */}
      <div className="absolute inset-0">
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Maroon gradient top */}
        {/* <div className="absolute h-[40%] inset-0 bg-gradient-to-b from-header-bg via-transparent to-transparent" /> */}
      </div>

      <div className="relative">
        {/* Main Heading */}
        <h1 className=" text-4xl font-arial text-white font-extrabold  mb-8 ">
          {" "}
          Global Trade with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">
            AmTraders.
          </span>
        </h1>

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-bold text-white    font-trebuchet p-2 mb-6  text-justify">
          Your trusted partner in international trade. We connect businesses
          worldwide with reliable import-export solutions and logistics
          expertise.
        </h3>

        {/* Services Button */}
        <div className="flex gap-1">
          <Link
            href="#services"
            className=" bg-primary font-semibold text-nowrap w-max  text-black gap-3 p-4   rounded-md bg-white  transform hover:bg-card-bg 
            hover:-translate-y-0.5 hover:text-white flex items-center sm:ml-[calc(2*30%)] ml-[20%] animate-right2left transition duration-700"
          >
            Our Services
          </Link>
          <Link
            href="#contact-us"
            
            className=" bg-primary font-semibold text-nowrap w-max  text-black gap-3 p-4   rounded-md  bg-white  hover:bg-card-bg hover:text-white hover:-translate-y-0.5 flex items-center  animate-right2left transition duration-700 "
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
