import Image from "next/image";

const services = [
  {
    title: "Expert Sourcing",
    description:
      "We identify reliable manufacturers and suppliers, negotiating the best prices to maximize your profitability.",
    image: "/images/services/export-sourcing.jpg",
    alt: "Factory manufacturing",
  },
  {
    title: "Hassle-Free Purchasing",
    description:
      "Our team handles procurement, contracts, and payments, reducing risks and saving you time.",
    image: "/images/services/hasle-purchase.jpg",
    alt: "Business contract signing",
  },
  {
    title: "Strict Quality Control",
    description:
      "We conduct factory audits and product inspections to ensure your goods meet international standards.",
    image: "/images/services/qual-ctrl.jpg",
    alt: "Quality inspection",
  },
  {
    title: "Seamless Shipping & Logistics",
    description:
      "From customs clearance to door delivery, we manage all logistics for smooth, on-time shipments.",
    image: "/images/services/ship&logits.jpg",
    alt: "Shipping containers",
  },
  {
    title: "End-to-End Support",
    description:
      "Whether you’re a startup or an established brand, we tailor our services to fit your business needs.",
    image: "/images/services/end2end.jpg",
    alt: "Business team support",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-secondary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions to streamline your business operations.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg group shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                 className="group-hover:scale-105 group-active:scale-105 transition duration-200"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-text-secondary">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}