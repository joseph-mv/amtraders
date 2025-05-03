import { JSX } from "react";

interface WhatsappProps {
  children?: JSX.Element | JSX.Element[];
}

const Whatsapp = ({ children }: WhatsappProps) => {
  return (
    <a
      href="https://wa.me/8613249728354"
      target="_blank"
      rel="noopener noreferrer" // security best practice
      className="hover:font-bold"
    >
      +86 13249728354
      {children}
    </a>
  );
};

export default Whatsapp;
