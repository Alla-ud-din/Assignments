'use client'
import Links from "./links";
import { motion } from "framer-motion";


export default function Contacts() {
  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-600 body-font px-5 pt-24 min-h-screen mx-auto "
      >
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
            Let&apos;s Connect
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
        </div>
        <div className="flex flex-wrap -m-2 justify-center lg:w-1/2 md:w-2/3 mx-auto">
          <form className="w-2/3">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="jacob@google.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
              >
                {" "}
                Send message{" "}
              </button>
            </div>
          </form>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-400 text-center ">
            <a className="text-indigo-500">allauddin.aliahmad9@gmail.com</a>
            <p className="leading-normal my-4 text-gray-400">
              Saddar.
              <br />
              Rawalpindi Cantt, Rawalpindi
            </p>
            {/* <div className="socials flex flex-row gap-2 justify-center ">
              <Link href="https://github.com/">
                <Image src={GithubIcon} alt={"Github"} />
              </Link>
              <Link href="https://linkedin.com/">
                <Image src={LinkedinIcon} alt={"Linkedin"} />
              </Link>
            </div> */}
            <Links />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
