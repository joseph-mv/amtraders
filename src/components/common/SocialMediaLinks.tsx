import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";



const socialLinks = [
  {
    href: "#",
    icon: faFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/gz_am_ltd?igsh=MTNqazB0bjA5dHNoNQ==",
    icon: faInstagram,
    label: "Instagram",
  },
  {
    href: "#",
    icon: faTwitter,
    label: "Twitter",
  },
  {
    href: "#",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/8613249728354",
    icon: faWhatsapp,
    label: "WhatsApp",
  },
];

const SocialMediaLinks: FC = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="p-2  rounded-full hover:text-gray-900 transition"
        >
          <FontAwesomeIcon icon={link.icon} size="xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
