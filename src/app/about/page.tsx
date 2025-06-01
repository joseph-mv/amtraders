"use client";

import BrandFamilySection from "@/components/about/BrandFamilySection";
import WhatWeStandFor from "@/components/about/WhatWeStandFor";
import WhoWeServe from "@/components/about/WhoWeServe";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className="min-h-screen font-trebuchet mt-12">
        <div className=" max-w-6xl mx-auto p-6 sm:p-8  mb-12 mt-8 font-trebuchet">
          <h1 className="text-3xl md:mt-10 sm:text-4xl font-extrabold text-center mb-6 text-gray-800">
            About Us
          </h1>
          {/* Intro */}
          <div className=" flex flex-wrap justify-between  items-center gap-6">
            <div className="w-full lg:w-[45%]">
              <p className=" text-lg leading-relaxed mb-4 text-justify">
                At <strong>AM Traders</strong>, we simplify global trade for
                businesses of all sizes. From sourcing quality products to
                managing logistics, we are your one-stop solution for
                international procurement. With a proven network of verified
                manufacturers and end-to-end support, we ensure efficiency,
                reliability, and profitability at every step.
              </p>
              <p className=" text-lg leading-relaxed text-justify">
                Founded with a vision to simplify cross-border trade, AM Traders
                has grown into a trusted name in global procurement. Whether
                youre a startup looking to scale or an enterprise expanding your
                product line, we provide the tools, expertise, and support you
                need to succeed in competitive markets.
              </p>
            </div>

            {/* Image */}
            <div className="w-full lg:w-[45%]">
              <Image
                src="/images/about/about1.jpg" // Replace with your image path
                alt="Global export and import"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-md "
              />
            </div>
          </div>
          <hr className="mt-6  text-gray-300" />
          <div className="max-w-5xl mx-auto text-center mt-6 ">
            <h1 className="text-2xl sm:text-3xl  font-extrabold text-center mb-6 text-gray-800">
              Your Global Trade Partner for Smart, Secure, and Scalable Sourcing
            </h1>

            <p className="text-lg">
              At <strong>AM Traders</strong>, we are more than just sourcing
              experts—we are solution providers. With years of industry insight
              and a robust international network, we help businesses around the
              world source quality products with confidence and ease.
            </p>
          </div>
          <hr className="mt-6  text-gray-300" />

          <div className="grid p-4 mt-6 mx-auto grid-cols-1 md:grid-cols-2 gap-6">
            <WhoWeServe />
            <WhatWeStandFor />
          </div>

          <p className="mt-4 text-center">
            Wherever you are in your sourcing journey,{" "}
            <strong>AM Traders</strong> is here to make it simple, secure, and
            successful.
          </p>
          {/* Mission and Vision */}
          {/* <div className="mt-12 max-w-4xl mx-auto space-y-6">
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
              businesses manage procurement—by making international trade
              smarter, safer, and more accessible.
            </p>
          </div>
        </div> */}
          <BrandFamilySection />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
