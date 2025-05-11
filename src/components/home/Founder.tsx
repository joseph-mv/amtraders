import Image from "next/image";

const Founder = () => {
  return (
    <section className=" mx-auto  bg-white">
      <div className="max-w-6xl mx-auto pt-4">
      {/* Section Title */}
      <h1 className="text-center  text-3xl font-bold text-text-secondary">OUR FOUNDER</h1>
      <h3 className="font-serif text-lg md:ml-20 text-end mx-4 ">
        
      </h3>
      <div className="flex items-start gap-6 mx-4">
        <div className=" relative self-end min-w-44 w-44 bg-card-bg h-54 mt-28 float-left ">
          <Image data-aos='fade-left'
            className="absolute -top-[50%]  min-w-44 w-44 object-contain "
            src="/images/founder.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        {/* Description */}
        <div className="">
          <h4 className="mt-10 mb-2 text-lg underline font-bold">AFNAS TK</h4>
          <h3 className="font-bold">Managing Director</h3>
          <h3 className="font-bold">AM Import and Export Trade Co.Limited</h3>
          <p className="pt-4">AM Trading Company is a globally trusted trading partner, specializing in sourcing high-quality products from top suppliers across China and delivering them to clients worldwide with rigorous inspection standards. Founded with a commitment to reliability and excellence, we ensure seamless international trade solutions tailored to each customer&#39;s needs</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Founder;