import { LINKS, whatspp } from "@/constant";
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
      {whatspp}
      {children}
    </a>
  );
};

export default Whatsapp;
