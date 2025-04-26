import Image from "next/image";

export default function About() {
  return (
    <section className="w-full px-6 py-12 md:py-20 bg-card-bg">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-4xl font-bold text-black mb-6">About Us</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-white text-lg leading-relaxed mb-4">
              At <strong>AM Traders</strong>, Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Vitae, maiores molestias dolorum,
              quidem, quisquam magni natus temporibus ullam adipisci in ducimus
              harum. Magni suscipit quidem iste cum aperiam enim. Provident.
            </p>
            <p className="text-white text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              illo quia ratione ut, cupiditate impedit distinctio sit similique
              eveniet eum et omnis saepe dolorem aperiam hic laborum magni animi
              dignissimos.
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
