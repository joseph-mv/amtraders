// In your page or component file
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function BrandFamilySection() {
  return (
    <section className="p-2 px-4">
     
        <h2 className="text-2xl font-bold mb-4">
          Part of a Growing Family of Brands
        </h2>
        <p className="mb-6">
          AM Traders is proud to be part of a growing portfolio of ventures
          built on trust, quality, and a passion for serving diverse customer
          needs. Our group extends beyond sourcing and global trade into the
          vibrant food and beverage industry—serving customers across multiple
          locations in the world.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Juice Spot */}
          <div className="flex flex-col items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold">Juice Spot</h3>
              <p className="text-gray-700">
                A refreshing beverage brand offering a wide range of natural
                juices and smoothies, committed to health, taste, and quality.
              </p>
              <p className="text-sm text-gray-600 flex gap-2 items-center mt-2">
                <FontAwesomeIcon icon={faLocationDot} /> No. 13, Wantonghui
                Clothing City Commercial Street, No.135, HuanshiWest Road, Liwan
                District, Guangzou
              </p>
            </div>
            <Image
              src="/images/about/juice-spot.png" // Replace with actual path or URL
              alt="Hot-in-Spicy Logo"
              width={640}
              height={640}
              className="rounded w-full"
            />
          </div>

          {/* Hot-in-Spicy */}
          <div className="flex flex-col items-start gap-4">
            <div>
              <h3 className="text-xl font-semibold">Hot-in-Spicy</h3>
              <p className="text-gray-700">
                A fast-growing food venture known for its bold flavors,
                authentic spices, and a menu that celebrates the love for fiery,
                flavorful cuisine.
              </p>
              <p className="text-sm text-gray-600 flex gap-2 items-center mt-2">
                <FontAwesomeIcon icon={faLocationDot} /> No. 13, Wantonghui
                Clothing City Commercial Street, No.135, HuanshiWest Road, Liwan
                District, Guangzou
              </p>
            </div>
            <Image
              src="/images/about/hot-n-spicy.png" // Replace with actual path or URL
              alt="Hot-in-Spicy Logo"
              width={640}
              height={640}
              className="rounded w-full"
            />
          </div>
        </div>

    </section>
  );
}
