"use client";
import Navlinks from "./Navlinks";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/_538575df-84ae-49ca-94ae-9375ea2d446f.png"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10  bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 border border-b-[#33353F] border-t-transparent border-x-transparent">
        <Link
          href={"/"}
          className=""
        >
          {/* Logo */}
          <Image src={logo} alt={"logo"} width={65} height={65}/>
        </Link>
        <div className="hidden md:block md:w-auto">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg text-gray-400  flex-row sm:space-x-8 mt-0">
            {navItems.map((items) => {
              return (
                <li className="hover:text-white" key={items.title}>
                  <Navlinks title={items.title} href={items.path} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              // id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(true)}
            >
              <GiHamburgerMenu />
            </button>
          ) : (
            <button
              // id="nav-toggle"
              className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(false)}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? (
        <div className="flex flex-col items-center md:hidden ">
        <ul className="">
          {navItems.map((items) => (
            <li className= "flex justify-center border-b-2 text-gray-400" key={items.title}>
              <Navlinks title={items.title} href={items.path} />
            </li>
          ))}
        </ul>
      </div>
      ) : null}
    </nav>
  );
}
