import { LINKS } from "@/constant";
import { JSX } from "react";

interface WhatsappProps {
  children?: JSX.Element | JSX.Element[];
}

const Whatsapp = ({ children }: WhatsappProps) => {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer" 
      className="hover:font-bold"
    >
      +86 13249728354
      {children}
    </a>
  );
};

export default Whatsapp;
