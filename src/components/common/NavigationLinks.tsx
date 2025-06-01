import { ROUTES } from "@/route";

const navigationLinks = [
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: ROUTES.CONTACT},
];
const NavigationLinks = () => {
  return (
    <ul className="space-y-3 text-sm">
      {navigationLinks.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="hover:text-white transition">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
