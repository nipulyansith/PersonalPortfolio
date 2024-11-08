import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {

    const buttonStyles = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7BE] hover:border-white";

  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-2 hover:border-white`}
            onClick={()=>onClick(name)}>
        {name}
    </button>
  )
}

export default ProjectTag