"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
export default function Logos() {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="p-14 grid grid-cols-2 md:grid-cols-4 gap-24 items-center justify-center " ref={ref}>
      {logos.map((logo , index) => (
        <motion.div
          key={logo.title}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <Image src={logo.src} alt={logo.title} width={80} height={80} />
          <p className="pt-2">{logo.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
