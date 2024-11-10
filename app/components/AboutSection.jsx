"use client"

import React from 'react'
import Image from 'next/image'
import { useTransition,useState } from 'react'
import TabButton from './TabButton'
import { motion } from 'framer-motion';

const AboutSection = () => {

    const[tab,setTab] = useState('skills');
    const[isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    const TAB_DATA = [
       { 
        title: "skills",
        id: "skills",
        content:(
            <ul>
                <li className='text-lg mb-3'>Node.Js</li>
                <li className='text-lg mb-3'>Express.Js</li>
                <li className='text-lg mb-3'>PostgreSQL</li>
                <li className='text-lg mb-3'>React</li>
                <li className='text-lg mb-3'>React Native</li>
            </ul>
        )
       },{ 
        title: "education",
        id: "education",
        content:(
            <ul>
                <li className='text-lg mb-3'><span className='font-semibold'>University of Colombo School of Computing </span>(2022 - Present)</li>
                <li className='text-lg mb-3'><span className='font-semibold'>Ananda College </span> - Colombo 10 (2018 - 2020)</li>
                <li className='text-lg mb-3'><span className='font-semibold'>Mahanama College </span> - Colombo 03 (2007 - 2018)</li>  
            </ul>
        )
       },
       { 
        title: "certification",
        id: "certification",
        content:(
            <ul>
            <li className='text-lg mb-3'><span className='font-semibold'>Postman API Fundamentals Student Expert </span>, Postman</li>
            <li className='text-lg mb-3'><span className='font-semibold'>Java Object-Oriented Programming </span>, LinkedIn Learning</li>
            <li className='text-lg mb-3'><span className='font-semibold'>OOPs in Java </span>, Great Learning Academy</li>  
        </ul>
        )
       }

    ]

  return (
    <motion.section
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-white mt-2"
    id="about"
>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-24 sm:py-16 xl:px-16'>
        <Image src='/images/nipulai3.jpg' alt='about' className='rounded-lg' width={600} height={500} />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4 mt-6'>About Me</h2>
            <p className='text-base md:text-md'>
            Nipul Yansith is a dedicated Information Systems undergraduate at the University of 
            Colombo School of Computing, with a keen interest in creating efficient and impactful 
            software applications. His technical expertise spans across Next.js, React Native, 
            Express, and Node, along with hands-on experience in various full-stack projects. 
            Nipul has developed solutions like ParkEase, an urban parking management system, 
            and GoviSaviya, a platform connecting farmers directly with buyers, highlighting 
            his commitment to solving real-world problems through technology.

            </p>  <br /> <p className='text-base md:text-md'>
  Beyond coding, Nipul is deeply passionate about continuous learning and exploring new technologies. 
  He approaches every project with a problem-solving mindset, striving to create impactful digital solutions. 
  Whether taking on leadership roles or collaborating as part of a team, Nipul is dedicated to driving innovation 
  and making meaningful contributions through his work.
</p>


            <div className='flex flex-row justify-start mt-8'>
                <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}>Certifications</TabButton>      
            </div>

            <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
    </div>
</motion.section>
  )


}

export default AboutSection;