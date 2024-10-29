"use client"
import { TypeAnimation } from "react-type-animation";
import React from 'react'

export default function Animation() {
  return (
    <div>
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      "AllaUdDin",
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      "Web Developer",
      1000,
      "UI/UX Designer",
      1000,
      // "We produce food for Chinchillas",
      // 1000,
    ]}
    wrapper="span"
    speed={50}
    style={{ fontSize: "1.5em", display: "inline-block" }}
    repeat={Infinity}
    className="my-6 text-white"
  />
  </div>
  )
}

