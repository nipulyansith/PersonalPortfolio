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
    className="text-white"
>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-24 sm:py-16 xl:px-16'>
        <Image src='/images/about2.jpg' alt='about' className='rounded-lg' width={600} height={500} />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4 mt-6'>About Me</h2>
            <p className='text-base md:text-lg'>
                I’m an Information Systems (Hons) undergraduate at the University of Colombo School of Computing with a passion for developing innovative software solutions. Skilled in Next.js, React Native, Express, Node, and more, I’ve worked on projects like ParkEase and GoviSaviya. I'm seeking opportunities to further apply my skills in a software engineering role and contribute to impactful digital transformation projects.
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