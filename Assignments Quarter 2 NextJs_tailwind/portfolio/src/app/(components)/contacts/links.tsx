"use client";
import React from "react";
import Image from "next/image";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";

export default function Links() {
  return (
    <div className="socials flex flex-row gap-2 justify-center">
      <div
        className="cursor-pointer"
        onClick={() =>
          window.open("https://github.com/", "_blank")
        }
      >
        <Image src={GithubIcon} alt="Github" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() =>
          window.open("https://linkedin.com/", "_blank")
        }
      >
        <Image src={LinkedinIcon} alt="Linkedin" />
      </div>
    </div>
  );
}


// To add my own acounts links 
// replace link with 
// https://github.com/your-username
// https://linkedin.com/in/your-username