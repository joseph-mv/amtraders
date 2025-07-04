import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Whatsapp from "../common/Whatspp";
import { chinaLocation } from "@/constant";
import SocialMediaLinks from "../common/SocialMediaLinks";
import NavigationLinks from "../common/NavigationLinks";

export default function Footer() {
  return (
    <footer className="relative w-full bg-card-bg   text-gray-300 py-12 px-6">
      {/* Our Branches Section */}
      <div className="md:absolute  md:right-4 md:-top-24 outline bg-white text-text-secondary p-4 rounded-2xl md:max-w-[70%] shadow-2xl">
        <h3 className="text-xl text-center font-semibold mb-4 text-black">
          Our Branches
        </h3>
        <div className="space-y-6 text-sm flex  items-center justify-center flex-wrap ">
          {/* Hong Kong Office */}
          <div className="outline p-2 rounded-2xl min-w-[80%] max-w-[80%]">
            <p className="font-semibold underline pb-2">
              Hong Kong Office{" "}
              {/* <a
                href="https://www.google.com/maps/place/YOUR_LOCATION_LINK"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="ml-2 hover:scale-110"
                  icon={faArrowUpRightFromSquare}
                />
              </a> */}
            </p>
            <p>AM IMPORT AND EXPORT TRADE CO., LIMITED</p>
            <address>
              Room D5, 5th Floor
              <br />
              King Yip Factory Building
              <br />
              No. 59 King Yip Street
              <br />
              Kwun Tong, Kowloon
              <br />
              Hong Kong
            </address>
            <p>📞 0852-6238 4253  </p>
            <p>
              📱{" "}
              <Whatsapp/>
            </p>
          </div>

          {/* China Office */}
          <div className="outline p-2 rounded-2xl min-w-[80%] max-w-[80%]">
            <p className="font-semibold underline pb-2 ">
              China Office{" "}
              <a
                href={chinaLocation}
                target="_blank"
              >
                <FontAwesomeIcon
                  className="ml-2 hover:scale-110"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            </p>
            <p>GUANGZHOU AM INTERNATIONAL TRADING LTD</p>
            <address>
            <p>Room 916, 9/F, Fuli International Shoes Trade Center,</p>
            <p>37 Huan Xi Road, Liwan District,</p>
            <p>Guangzhou City, Guangdong Province</p>
            </address>
            
            <p>📞 (020) 3264 4744</p>
            <p>
              📱{" "}
              <Whatsapp/>
            </p>
            <p>
              📧{" "}
              <a href="mailto:Afnastk2@yahoo.com" className="hover:font-bold">
                Afnastk2@yahoo.com
              </a>
            </p>
            <p>
              📧{" "}
              <a
                href="mailto:Amtradingchina@yahoo.com"
                className="hover:font-bold"
              >
                Amtradingchina@yahoo.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl md:text-start  text-center mx-auto  grid grid-cols-1  gap-10">
        {/* Navigation Links */}
        <div className=" mt-5">
          <h3 className="text-xl font-semibold mb-4 text-white">Navigation</h3>
         <NavigationLinks/>
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
              href="mailto:Amtradingchina@yahoo.com"
              className="hover:text-white"
            >
              Amtradingchina@yahoo.com
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
            <Whatsapp/>
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl md:mt-4 font-semibold mb-2 text-center text-white">
            Follow Us
          </h3>
          <SocialMediaLinks/>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AM Traders. All rights reserved.
      </div>
    </footer>
  );
}
