import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Whatsapp from "../common/Whatspp";

// Navigation and contact data
const navigationLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

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

const socialLinks = [
  {
    icon: faFacebookF,
    href: "#",
  },
  {
    icon: faInstagram,
    href: "https://www.instagram.com/gz_am_ltd?igsh=MTNqazB0bjA5dHNoNQ==",
  },
  {
    icon: faTwitter,
    href: "#",
  },
  {
    icon: faLinkedinIn,
    href: "#",
  },
  {
    icon: faWhatsapp,
    href: "https://wa.me/8613249728354",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-card-bg text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Navigation Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-3 text-sm">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
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
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900 transition"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} AM Traders. All rights reserved.
      </div>
    
    </footer>
  );
}
