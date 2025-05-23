import Image from "next/image";

export default function About() {
  return (
    <section className="w-full mt-[90vh] px-6 py-12 md:py-20 bg-linear-to-b/srgb from-gray-300  to-gray-100   rounded-t-2xl">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-black mb-6">About Us</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}

          <div className="grid grid-cols-2  md:grid-cols-3 md:grid-rows-2 gap-2">
            {/* Mission Section */}
            <div className="flex items-center p-4 col-span-2   row-span-1 border-4 border-black  overflow-hidden">
              <p className="font-lucida text-justify">
               At AM Traders, our mission is to empower businesses worldwide by delivering seamless access to quality products, trusted suppliers, and transparent sourcing processes. We aim to simplify global trade through efficient procurement, strict quality control, and reliable logistics support—ensuring every client experiences growth, reduced risk, and total peace of mind throughout their international sourcing journey.
              </p>
            </div>
            {/* Mission Section Image*/}
            <div className="  max-h-44 ">
              <p className="bg-black text-white text-center text-xl font-bold max-w-[232px] md:max-w-[266px] mx-auto">
                Mission
              </p>
              <Image
                className="max-h-36 mx-auto w-auto"
                src="/images/mission.webp"
                alt=""
                width={200}
                height={200}
              />
            </div>

            {/* Vision Section Image*/}
            <div className="  max-h-44">
              <Image
                className="max-h-36 mx-auto  w-auto"
                src="/images/vision.webp"
                alt=""
                width={200}
                height={200}
              />
              <p className="bg-black text-white text-center text-xl font-bold max-w-[232px] md:max-w-[266px] mx-auto">
                Vision
              </p>
            </div>
            {/* Vision Section*/}
            <div className="flex items-center p-4 col-span-2 row-span-3 border-4 border-black  overflow-hidden">
              <p className="font-lucida text-justify">
                At AM Traders, our vision is to simplify and redefine global sourcing for businesses of all sizes. We aim to make international trade smarter, safer, and more efficient through trusted partnerships, transparent processes, and end-to-end support. By connecting businesses with reliable manufacturers and managing every step of procurement and logistics, we help our clients grow confidently in the global marketplace.
              </p>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/2">
            <p className="text-white text-lg leading-relaxed mb-4">
              At <strong>AM Traders</strong>, we simplify global trade for
              businesses of all sizes. From sourcing quality products to
              managing logistics, we are your one-stop solution for
              international procurement. With a proven network of verified
              manufacturers and end-to-end support, we ensure efficiency,
              reliability, and profitability at every step.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Founded with a vision to simplify cross-border trade, AM Traders
              has grown into a trusted name in global procurement. Whether
              youre a startup looking to scale or an enterprise expanding your
              product line, we provide the tools, expertise, and support you
              need to succeed in competitive markets.
            </p>
          </div> */}

          {/* Image */}
          {/* <div className="w-full lg:w-1/2">
            <Image
              src="/images/about-us.jpeg" // Replace with your image path
              alt="Global export and import"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-md brightness-75"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
