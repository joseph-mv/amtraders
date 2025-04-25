import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className=" relative  w-[100vw] h-[550px] overflow-hidden bg-blend-overlay antialiased flex flex-col justify-center pl-[calc(2*10%)] pr-[10%]">
      <Image
        width={1800}
        height={1800}
        src="/images/heroBg.jpg"
        alt=""
        priority
        unoptimized
        className=" absolute inset-0 fill-accent-blue  w-full h-[550px] object-cover object-top"
      ></Image>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 " />
      <div className="relative">
        {/* Main Heading */}
        <h1 className="animate-text-flicker-in-glow text-4xl font-arial text-white font-extrabold  mb-8 ">
          {" "}
          Global Trade with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white">
            AmTraders.
          </span>
        </h1>

        <Image
          className="absolute top-0 z-10 delay-200  animate-zigzag-fly"
          width={100}
          height={20}
          src="/images/plane.png"
          alt=""
          unoptimized
        />

        {/* Subheading */}
        <h3 className="text-lg md:text-xl font-bold text-white    font-trebuchet p-2 mb-6 animate-zoom-in-out text-justify">
          Your trusted partner in international trade. We connect businesses
          worldwide with reliable import-export solutions and logistics
          expertise.
        </h3>

        {/* Services Button */}
        <div className="flex gap-1">
          <Link
            href="/"
            target="_blank"
            className=" bg-primary font-semibold text-nowrap w-max left- text-black gap-3 p-4   rounded-md bg-white transition-transform transform hover:bg-card-bg hover:text-white flex items-center sm:ml-[calc(2*30%)] ml-[20%] animate-right2left"
          >
            {/* <FontAwesomeIcon icon={faUsers} className="animate-zoom-in-out" /> */}
            Our Services
          </Link>
          <Link
            href="/"
            target="_blank"
            className=" bg-primary font-semibold text-nowrap w-max left- text-black gap-3 p-4   rounded-md  bg-white  hover:bg-card-bg hover:text-white flex items-center  animate-right2left"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
