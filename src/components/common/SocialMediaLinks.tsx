import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faFacebookF,
  faInstagram,
  // faTwitter,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { LINKS } from "@/constant";



const socialLinks = [
  // {
  //   href: "#",
  //   icon: faFacebookF,
  //   label: "Facebook",
  // },
  {
    href: LINKS.instagram,
    icon: faInstagram,
    label: "Instagram",
  },
  // {
  //   href: "#",
  //   icon: faTwitter,
  //   label: "Twitter",
  // },
  {
    href: LINKS.linkidn,
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: LINKS.whatsapp,
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
