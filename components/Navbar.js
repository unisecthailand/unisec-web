import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import Image from "next/image";

import useScrollPosition from "@react-hook/window-scroll";

const Menus = ({ text, link, isOpen, subMenus }) => (
  <div className="relative group">
    <ActiveLink href={link} activeClassName="btn-active">
      <div
        className={`relative cursor-pointer h-full text-center flex flex-col justify-center items-center ${isOpen ? "p-2" : "btn"
          }`}
      >
        {text}
      </div>
    </ActiveLink>
    <div
      className={`absolute top-full right-0 w-full bg-custom-primary z-50 hidden group-hover:block`}
    >
      <ul>
        {subMenus
          ? subMenus.map(({ text, link }) => (
            <Link href={link} key={text}>
              <li
                className={`cursor-pointer px-4 py-2 text-center hover:bg-custom-primary rounded-md ${isOpen ? "p-2" : "btn"
                  }`}
              >
                {text}
              </li>
            </Link>
          ))
          : null}
      </ul>
    </div>
  </div>
);

const Navbar = ({ page, logoStyle, isClient }) => {
  const [isOpen, setOpen] = useState(false);
  const menus = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Activity",
      link: "/activity",
    },
    {
      text: "About us",
      link: "/about",
    },
    {
      text: "Support us",
      link: "/support",
    },
  ];

  const [navbarBg, setNavbarBg] = useState(true);
  const scrollY = useScrollPosition(60);

  useEffect(() => {
    if (scrollY >= 20) {
      setNavbarBg(true);
    } else {
      setNavbarBg(true);
    }
  }, [scrollY]);

  const defaultLogoStyle = {
    left: 48,
    width: 121,
    top: 11,
  };

  const currentLogoStyle =
    page === "home" && isClient ? logoStyle : defaultLogoStyle;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 ${navbarBg ? "bg-custom-primary shadow-2xl" : ""
          } transition duration-300`}
      >
        <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-2 md:col-span-1 xl:col-span-2 flex flex-col justify-center items-start py-2 px-12 h-24 relative">
            <Link href="/">
              {page === "home" ? (
                <Image
                  src="/assets/logo-w.webp"
                  width={484}
                  height={160}
                  className="cursor-pointer absolute"
                  style={{
                    left: `${currentLogoStyle.left}px`,
                    top: `${currentLogoStyle.top}px`,
                    width: `${currentLogoStyle.width}px`,
                    height: "auto",
                    transform: "translateZ(0)", // Hardware acceleration
                    willChange: "transform, width", // Optimize for changes
                    backfaceVisibility: "hidden", // Prevent flicker
                  }}
                  alt="UNISEC-Thailand"
                  priority
                />
              ) : (
                <Image
                  src="/assets/logo-w.webp"
                  width={484}
                  height={160}
                  className="w-auto cursor-pointer"
                  style={{ width: "121px" }}
                  alt="UNISEC-Thailand"
                />
              )}
            </Link>
          </div>
          <div className={`hidden md:grid grid-cols-4 px-4`}>
            {menus.map(({ text, link, children }, i) => (
              <Menus
                key={i}
                text={text}
                link={link}
                isOpen={isOpen}
                subMenus={children}
              />
            ))}
          </div>
          <div className="flex md:hidden flex-col justify-center items-end px-12">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <div
              className={`${isOpen ? "block" : "hidden"
                } absolute top-full right-0 bg-custom-primary-variant bg-opacity-90 w-1/2 p-2 rounded-md shadow-lg`}
            >
              {menus.map(({ text, link, children }, i) => (
                <Menus
                  key={i}
                  text={text}
                  link={link}
                  isOpen={isOpen}
                  subMenus={children}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
