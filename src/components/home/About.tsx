import Image from "next/image";

export default function About() {
  return (
    <section className="w-full mt-[550px] px-6 py-12 md:py-20 bg-card-bg rounded-t-2xl">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-black mb-6">About Us</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
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
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/images/about-us.jpeg" // Replace with your image path
              alt="Global export and import"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-md brightness-75"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
