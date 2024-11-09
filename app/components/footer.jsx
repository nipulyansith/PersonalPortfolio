import React from 'react'

const footer = () => {
  return (
    <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent'>
        <div className='container p-12 flex justify-between items-center'>
            <span><img src="images/nipullogo.png" alt="logo" className='w-20' /></span>
            <p className='text-slate-600'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default footer