"use client";

import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(name)}
      className={`relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300
        ${
          isSelected
            ? "text-white"
            : "text-[#ADB7BE] hover:text-white"
        }
      `}
    >
      {/* Active background */}
      {isSelected && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 -z-10 shadow-[0_0_20px_rgba(168,85,247,0.35)]" />
      )}

      {/* Subtle hover background */}
      {!isSelected && (
        <span className="absolute inset-0 rounded-xl bg-white/5 opacity-0 hover:opacity-100 transition -z-10" />
      )}

      {name.toUpperCase()}
    </button>
  );
};

export default ProjectTag;
