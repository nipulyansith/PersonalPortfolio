import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      <div
        className="h-52 md:h-72 rounded-t-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Icon is hidden by default, shows on hover */}
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 gap-6">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-purple-500 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover:text-white transition-all duration-300" />
          </Link>

        
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 mt-1">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
