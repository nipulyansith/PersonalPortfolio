import React from 'react';
import Image from 'next/image'; // Import the Image component

const Footer = () => {
  return (
    <footer className='footer text-gray-300 py-8 border-t-2 border-t-gray-700'>

      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
        
        {/* Logo Section */}
        <div className='flex items-center mb-4 md:mb-0'>
          <Image 
            src="/images/nipullogo.png" 
            alt="Nipul Yansith Logo" 
            width={80} // Provide explicit width
            height={80} // Provide explicit height
            className='w-20' // You can adjust or remove this class
          />
        </div>

        {/* Navigation Links */}
        <div className='flex space-x-6 mb-4 md:mb-0'>
          <a href='#about' className='hover:text-white transition duration-300'>About</a>
          <a href='#projects' className='hover:text-white transition duration-300'>Projects</a>
          <a href='#contact' className='hover:text-white transition duration-300'>Contact</a>
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-4'>
          <a href='https://www.linkedin.com/in/nipul' target='_blank' rel='noopener noreferrer' className='hover:text-white transition duration-300'>
            <i className='fab fa-linkedin fa-lg'></i> {/* Font Awesome icon */}
          </a>
          <a href='https://github.com/nipul' target='_blank' rel='noopener noreferrer' className='hover:text-white transition duration-300'>
            <i className='fab fa-github fa-lg'></i> {/* Font Awesome icon */}
          </a>
          <a href='https://twitter.com/nipul' target='_blank' rel='noopener noreferrer' className='hover:text-white transition duration-300'>
            <i className='fab fa-twitter fa-lg'></i> {/* Font Awesome icon */}
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className='container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 text-center'>
        <p className='text-sm text-slate-500'>&copy; {new Date().getFullYear()} Nipul Yansith. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
