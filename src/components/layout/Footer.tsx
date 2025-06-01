import Whatsapp from "../common/Whatspp";
import SocialMediaLinks from "../common/SocialMediaLinks";
import NavigationLinks from "../common/NavigationLinks";

// Navigation and contact data


const contactInfo = [
  {
    type: "Email",
    value: "Afnastk2@yahoo.com",
    href: "mailto:Afnastk2@yahoo.com",
  },
  {
    type: "Email",
    value: "Amtradingchina@yahoo.com",
    href: "mailto:Amtradingchina@yahoo.com",
  },
  {
    type: "Phone",
    value: "(020) 3264 4744",
    href: "tel:(020) 3264 4744",
  },
];


export default function Footer() {
  return (
    <footer className="relative w-full bg-card-bg text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Navigation Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navigation</h3>
          <NavigationLinks/>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Need Help?</h3>
          <ul className="text-sm space-y-2">
            {contactInfo.map((item, index) => (
              <li key={index}>
                {item.type}:{" "}
                <a href={item.href} className="hover:text-white transition">
                  {item.value}
                </a>
              </li>
            ))}
            <li>
              Phone: <Whatsapp />
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <SocialMediaLinks/>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AM Traders. All rights reserved.
      </div>
    
    </footer>
  );
}
