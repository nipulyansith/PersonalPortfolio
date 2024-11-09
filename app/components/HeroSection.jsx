"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';


    


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
      className="col-span-7 place-self-center text-center sm:text-left"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-[white] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Hello, I'm {""}
        </div>

        <TypeAnimation
          sequence={[
            'Nipul',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'A Software Engineer',
            1000,
            'A Mobile Developer',
            1000,
            'A Full Stack Developer',
            1000,
          ]}
          wrapper="span"
          speed={40}
          style={{ fontSize: '1em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        I’m an Information Systems (Hons) undergraduate at the University of
        Colombo School of Computing with a passion for developing innovative
        software solutions. Skilled in Next.js, React Native, Express, Node, and
        more, I’ve worked on projects like ParkEase and GoviSaviya. I'm seeking
        opportunities to further apply my skills in a software engineering role
        and contribute to impactful digital transformation projects.
      </p>
      <div>
        <button className="w-full sm:w-fit px-6 py-3 font-medium rounded-full mr-4 text-white bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 bg-white hover:bg-slate-200">
          Hire Me
        </button>

        <button className="w-full sm:w-fit px-1 py-1 rounded-full bg-transparent hover:bg-slate-800 border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            Download CV
          </span>
        </button>
      </div>
    </motion.div>
    <motion.div
      className="col-span-5 place-self-center mt-4 lg:mt-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="rounded-full w-[250px] h-[300px] lg:w-[500px] lg:h-[500px] relative">
        <Image
          src="/images/nipul.png"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-s-2xl"
          width={380}
          height={350}
        />
      </div>
    </motion.div>
        </div>
    </section>
  )
}

export default HeroSection