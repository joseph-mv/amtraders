import Image from "next/image";
import React from "react";

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
  return (
    <section className="bg-white relative h-[400px]">
      {/* Bg image */}
      <div className="inset-0 absolute left-0 right-0">
        <Image
          src="/images/why-choose.jpg"
          width={1000}
          height={400}
          alt=""
          className="w-full object-left object-cover h-[400px]"
        />
      </div>

      {/* Scroll container */}

 
   
        <div className="relative flex flex-col   scrollbar-hide snap-y snap-mandatory  w-full  float-right  h-[400px] overflow-y-scroll scroll-auto">
         
        {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-gray-5 ml-[calc(20vw+10%)] mt-40 mb-40 rounded-xl snap-center shadow p-5  bg-black/50 mr-2 flex items-start gap-4"
             >
              <div>
                <h3 className="font-semibold text-white text-lg">{`${index + 1}. ${
                  item.title
                }`}</h3>
                <p className="text-sm text-white mt-1 text-justify">{item.description}</p>
              </div>
            </div>
          ))}
          </div>
        
      
        
      
    </section>
  );
}

export default WhyChoose;
