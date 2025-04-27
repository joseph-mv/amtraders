import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative w-full bg-card-bg   text-gray-300 py-12 px-6">
      {/* Our Branches Section */}
      <div className="md:absolute  md:right-4 md:-top-24 outline bg-white text-text-secondary p-4 rounded-2xl md:max-w-[70%] shadow-2xl">
        <h3 className="text-xl text-center font-semibold mb-4 text-black">
          Our Branches
        </h3>
        <div className="space-y-6 text-sm flex  items-center justify-center flex-wrap ">
          {/* China Office */}
          <div className="outline p-2 rounded-2xl min-w-[80%] max-w-[80%]">
            

            <p className="font-semibold underline pb-2 ">China Office <a
            
              href="https://www.google.com/maps/place/YOUR_LOCATION_LINK"
              target="_blank"
            >
              <FontAwesomeIcon className="ml-2 hover:scale-110" icon={faArrowUpRightFromSquare} />
            </a></p>
            
            <p>Room 916, 9/F, Fuli International Shoes Trade Center,</p>
            <p>37 Huan Xi Road, Liwan District,</p>
            <p>Guangzhou City, Guangdong Province</p>
            <p>📞 (020) 3264 4744</p>
            <p>
              📱{" "}
              <a href="tel:+8613249728354" className="hover:scale-105">
                +86 13249728354
              </a>
            </p>
            <p>
              📧{" "}
              <a href="mailto:Afnastk2@yahoo.com" className="hover:text-lg">
                Afnastk2@yahoo.com
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:Amtradingchina@yahoo.com"
                className="hover:text-lg"
              >
                Amtradingchina@yahoo.com
              </a>
            </p>
          </div>

          {/* Hong Kong Office */}
          <div className="outline p-2 rounded-2xl min-w-[80%] max-w-[80%]">
            <p className="font-semibold underline pb-2">Hong Kong Office <a
            
            href="https://www.google.com/maps/place/YOUR_LOCATION_LINK"
            target="_blank"
          >
            <FontAwesomeIcon className="ml-2 hover:scale-110" icon={faArrowUpRightFromSquare} />
          </a></p>
            <p>AM IMPORT AND EXPORT TRADE CO., LIMITED</p>
            <p>ROOM D5, 5TH FLOOR, KING YIP FACTORY BUILDING,</p>
            <p>NO.59 KING YIP STREET, KWUN TONG,</p>
            <p>KOWLOON, HONG KONG</p>
            <p>📞 0852-6238 4253</p>
            <p>
              📱{" "}
              <a
                href="tel:+861324972854354"
                className="transition-all hover:text-lg"
              >
                +86 1324972854354
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl md:text-start  text-center mx-auto  grid grid-cols-1  gap-10">
        {/* Navigation Links */}
        <div className=" mt-5">
          <h3 className="text-xl font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#careers" className="hover:text-white transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Need Help Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Need Help?</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a href="mailto:Afnastk2@yahoo.com" className="hover:text-white">
              Afnastk2@yahoo.com
            </a>
          </p>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:mtradingchina@yahoo.com"
              className="hover:text-white"
            >
              mtradingchina@yahoo.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:(020) 3264 4744" className="hover:text-white">
              (020) 3264 4744
            </a>
          </p>
          <p className="text-sm">
            Phone:{" "}
            <a href="tel:+86 13249728354" className="hover:text-white">
              +86 13249728354
            </a>
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-white">
            Follow Us
          </h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/gz_am_ltd?igsh=MTNqazB0bjA5dHNoNQ=="
              className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a
              href="https://wa.me/8613249728354"
              target="_blank"
              className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AM Traders. All rights reserved.
      </div>
    </footer>
  );
}
