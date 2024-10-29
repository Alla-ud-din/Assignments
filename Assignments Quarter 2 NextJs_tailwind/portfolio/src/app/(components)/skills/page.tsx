'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Javlogo,
  Reactlogo,
  CSSlogo,
  HTMLlogo,
  Nodelogo,
  Tailwindlogo,
  Typescriptlogo,
  VSlogo,
} from "../../../imports/import";
import Logos from "./logos";
import { motion } from "framer-motion";
const logos = [
  {
    title: "JavaScript",
    src: Javlogo,
  },
  {
    title: "React",
    src: Reactlogo,
  },
  {
    title: "CSS",
    src: CSSlogo,
  },
  {
    title: "HTML",
    src: HTMLlogo,
  },
  {
    title: "Node Js",
    src: Nodelogo,
  },
  {
    title: "Tailwind",
    src: Tailwindlogo,
  },
  {
    title: "TypeScript",
    src: Typescriptlogo,
  },
  {
    title: "Visual Studio Code",
    src: VSlogo,
  },
];
export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center  min-h-screen m-12 "
    >
      <div className=" flex flex-col items-center justify-center w-auto">
        <p className="text-gray-400 text-center">
          A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.
        </p>
        <h1 className="text-4xl font-bold p-4 text-center">
          Skills & Experience
        </h1>
        <p className="pb-2">
          The main area of expertise is front end development (client side of
          the web).
        </p>
        <p className="pb-2 text-center">
          HTML, CSS, JS, building small and medium web applications with Vue or
          React, custom plugins, features, animations, and coding interactive
          layouts. I have also full-stack developer experience with one of the
          most popular open source CMS on the web - WordPress
        </p>
        <p className="pb-2 text-center">
          Visit my{" "}
          <Link
            href={"https://linkedin.com"}
            className="underline text-yellow-200"
          >
            {" "}
            Linkedin
          </Link>{" "}
          for more details.
        </p>
      </div>
      <Logos />
    </motion.div>
  );
}
