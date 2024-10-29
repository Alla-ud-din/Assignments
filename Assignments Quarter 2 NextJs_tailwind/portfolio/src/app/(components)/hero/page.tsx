"use client";
import Link from "next/link";
import Image from "next/image";
import Animation from "@/app/(components)/hero/animation";
import heroimg from "../../../assets/dp.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-12 m-12 pt-6 md:pt-32 min-h-screen"
      >
        <div
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5 }}
          className="col-span-8 text-center sm:text-left"
        >
          <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-pink-600 text-transparent bg-clip-text">
            Hello, I&apos;m <br />
            <Animation />
          </h1>
          <p className="text-gray-400 my-6 sm:text-lg lg:text-xl">
            I specialize in resolving design challenges, building intelligent
            user interfaces, and developing rich web applications for seamless
            digital experiences. My passion lies in crafting visually striking
            solutions and translating visions into captivating realities. With
            expertise in user-centric design and strategic development, I strive
            to exceed expectations and leave a lasting impact on the digital
            landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
            <Link
              href="/contacts"
              className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-11 py-3 rounded-full "
            >
              Hire Me
            </Link>
            <Link
              href="./AllaUdDin_(Resume)_.pdf"
              className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-3  text-white rounded-full"
            >
              <span className=" bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3">
                Download CV
              </span>
            </Link>
          </div>
        </div>
        <div
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.5 }}
          className="justify-center rounded-full bg-[#181818] w-52 h-52 sm:w-80 sm:h-80 sm:pt-9 pt-3 mx-auto sm:grid sm:col-span-4"
        >
          <Image
            src={heroimg}
            alt={"hero image"}
            width={300}
            height={300}
            className=""
          />
        </div>
      </motion.div>
    </section>
  );
}
