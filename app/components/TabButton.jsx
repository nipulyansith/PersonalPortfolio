import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

const TabButton = ({ active, selectTab, children }) => {
  // Define the styles for the active state (with underline) and inactive state
  const buttonClasses = active
    ? 'text-white border-b-2 border-purple-500'  // Active state: visible purple border
    : 'text-[#ADB7BE] border-b-2 border-transparent';  // Inactive state: transparent border

  return (
    <motion.button 
      onClick={selectTab} // Trigger the change when clicked
      whileTap={{ scale: 0.95 }} // Slightly scale down when clicked
      transition={{ duration: 0.3 }} // Smooth transition for the tap effect
    >
      <p className={`mr-3 font-semibold hover:text-white pb-2 ${buttonClasses}`}>
        {children}
      </p>
    </motion.button>
  );
}

export default TabButton;
