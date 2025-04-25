"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCircleExclamation,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

// Navigation links configuration
const navLinks = [
  {
    href: "/",
    icon: faHome,
    label: "Home",
  },
  {
    href: "/about",
    icon: faCircleExclamation,
    label: "About",
  },
  {
    href: "/services",
    icon: faBriefcase,
    label: "Services",
  },
  {
    href: "/contact",
    icon: faEnvelope,
    label: "Contact",
  },
];

const Header = () => {
  // State to track whether the hamburger menu is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Toggle function for the menu
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed", "w-full");
    } else {
      document.body.classList.remove("fixed", "w-full");
    }
  }, [isOpen]);

  return (
    <header className=" bg-header-bg  ">
      <div className="mx-auto max-w-6xl  flex p-3 h-20 justify-between items-center">
        {/* Logo Section */}
        <div className="rounded-full ml-5 flex items-center gap-2">
          <Image
            className="rounded-xl"
            style={{ width: "50px", height: "auto" }}
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
          />
          {/* <span className="text-text-primary text-2xl">AM Traders</span> */}
        </div>

        {/* Navigation and Hamburger Menu */}
        <div className="flex items-center gap-3">
          {/* Hamburger Menu Button (Visible on mobile) */}
          <button className="order-1 md:hidden relative z-20 w-[30px] h-[20px]">
            <label
              className="flex  label flex-col gap-1  w-[30px]  h-[20px] "
              htmlFor="burger"
            >
              <input
                className="hidden peer"
                type="checkbox"
                id="burger"
                checked={isOpen}
                onChange={toggleMenu}
              />
              <span className="absolute top-0 block h-[4px] w-full origin-left transition-all bg-white peer-checked:rotate-45 peer-checked:left-[4.5px]"></span>
              <span className="absolute top-[50%] block h-[4px] w-full  bg-white  peer-checked:bg-transparent"></span>
              <span className="absolute top-[100%]  block h-[4px]  w-full origin-left transition-all bg-white  peer-checked:-rotate-45 peer-checked:left-[4.5px] peer-checked:top-[21px]"></span>
            </label>
          </button>

          {/* Navigation Links */}
          <nav
            onMouseLeave={() => {
              setIsOpen(false);
            }}
            className={`md:flex-row   md:relative md:right-2  gap-3 font-bold flex flex-col ${
              isOpen
                ? "fixed z-10 text-text-primary  h-[100vh] top-0 rounded-sm pt-[60px] transition-all  right-0 w-[200px]  gap-4 flex backdrop-blur-xs bg-black/35  md:h-auto md:w-auto md:top-0 md:bg-transparent md:backdrop-blur-none md:pt-0 "
                : "fixed -right-[200px] transition-all"
            }`}
          >
            {navLinks.map(({ href, icon, label }) => (
              <div
                key={href}
                className=" border-b-1 text-white border-gray-400 p-2 md:border-none"
              >
                <Link
                  onClick={toggleMenu}
                  href={href}
                  className="link flex items-center gap-2 p-2 hover:scale-105 "
                >
                  <FontAwesomeIcon icon={icon} className={`text-xl mr-2`} />
                  <span>{label}</span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
