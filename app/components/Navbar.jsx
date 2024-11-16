"use client"

import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'  // Import Image component from next/image
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import MenuOverlay from './MenuOverlay'

const navlinks = [
  { title: 'About', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Contact', href: 'contact' }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 py-2 pr-8 z-50'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={"/"} className=''>
          <Image
            src="/images/nipullogo.png"  // Use the relative path from the public folder
            alt="logo"
            width={80}  // Define explicit width for the image
            height={80}  // Define explicit height for the image
            className='w-20'
          />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>

        <div className="hidden sm:block sm:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
            {navlinks.map((link, index) => (
              <NavLink key={index} href={`#${link.href}`} title={link.title} />
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navlinks} />}
    </nav>
  )
}

export default Navbar;
