import React from "react";
import Education from "./Education";
import TechnicalSkill from "./TechnicalSkill";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { Links } from "../constants/Detail";
import { CgProfile } from "react-icons/cg";

const About = () => {
  return (
    <section
      id="about"
      className="h-auto mb-8 w-full flex flex-col justify-center items-center bg-white"
    >
      <h1 className="text-5xl font-serif font-bold mx-auto mt-2">About Me</h1>

      {/* Increase the size of the icon */}
      <CgProfile size={200} className="text-black mt-8" />
      <p className="p-8 md:w-[50%]">
        I am a BCA graduate (2024) with a strong interest in web development,
        AI, and cybersecurity. I have hands-on experience with HTML, CSS, and
        Python and love exploring new technologies. When I'm not coding, you'll
        find me reading books or playing games.
      </p>

      {/* Uncomment if needed */}
      {/* <TechnicalSkill /> */}
      {/* <Education /> */}

      <div className="flex mb-8 space-x-4">
        <a href={Links.linkdin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} className="text-black hover:text-blue-700" />
        </a>
        <a href={Links.github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} className="text-black hover:text-gray-700" />
        </a>
        <a href={Links.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter size={25} className="text-black hover:text-blue-500" />
        </a>
        <a href={Links.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare
            size={25}
            className="text-black hover:text-pink-500"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
