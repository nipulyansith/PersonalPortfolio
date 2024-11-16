"use client"

import React from 'react'

const AchievementsSection = () => {

  return (
    <section className='relative py-24'>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent opacity-30 rounded-full h-80 w-80 z-0 blur-lg top-20 left-1/2 transform -translate-x-1/2'>
      </div>
      <div className='relative z-10 text-center'>
        <h2 className='text-4xl font-bold text-white mb-6 tracking-wide'>
          Achievements
        </h2>
        <p className='text-[#ADB7BE] text-lg mb-12'>
          Here are some of my most significant certifications, academic achievements, and extra-curricular accomplishments.
        </p>

        {/* Certifications, Academic Achievements, and Extra-Curricular Activities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <div className="bg-[#2C2F3F] p-6 rounded-lg shadow-xl backdrop-blur-md backdrop-brightness-125 bg-opacity-40 transform transition duration-300 hover:scale-105 hover:bg-[#3A405A]">
            <h3 className='text-xl font-semibold  mb-4 text-purple-500 tracking-wide'>
              Certifications
            </h3>
            <ul className='text-[#E1E8F0] space-y-3'>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Postman API Fundamentals Student Expert, Postman 2024
              </li>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Java Object-Oriented Programming, LinkedIn Learning 2024
              </li>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> OOPs in Java, Great Learning Academy 2024
              </li>
            </ul>
          </div>

          {/* Academic Achievements */}
          <div className="bg-[#2C2F3F] p-6 rounded-lg shadow-xl backdrop-blur-md backdrop-brightness-125 bg-opacity-40 transform transition duration-300 hover:scale-105 hover:bg-[#3A405A]">
            <h3 className='text-xl font-semibold  mb-4 text-purple-500 tracking-wide'>
              Academic Achievements
            </h3>
            <ul className='text-[#E1E8F0] space-y-3'>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Dean&apos;s List - BSc. (Hons) in Information Systems - For academic performance 2024
              </li>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> National ICT Awards NBQSA - Finalists 2024
              </li>
            </ul>
          </div>

          {/* Extra-Curricular Activities */}
          <div className="bg-[#2C2F3F] p-6 rounded-lg shadow-xl backdrop-blur-md backdrop-brightness-125 bg-opacity-40 transform transition duration-300 hover:scale-105 hover:bg-[#3A405A]">
            <h3 className='text-xl font-semibold  mb-4 text-purple-500 tracking-wide'>
              Extra-Curricular Activities
            </h3>
            <ul className='text-[#E1E8F0] space-y-3'>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Secretary, Rekha - Music Circle UCSC 2024 - Present
              </li>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Junior Treasurer, Students&apos; Union UCSC 2023 - 2024
              </li>
              <li className="flex items-center text-lg">
                <span className="text-purple-500 text-lg font-medium mr-2">✔</span> Incoming Global Volunteer Team Leader, AIESEC in Colombo Central 2022
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection
