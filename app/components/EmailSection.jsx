"use client"

import React, {useState} from 'react'
import GithubIcon from './../../public/images/github.png'
import LinkedInIcon from './../../public/images/linkedin.png'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
    const [email, setEmail] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value
            };
    
            console.log("this is normal data",data)

            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            console.log("this is normal data",response.body);
    
            if (response.ok) {
                alert('Message Sent Successfully');
                setEmail(true);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
        }
    };
    
    

    return (
        <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-40 left-4 transform -translate-x-1/2 -translate-y-1/2'>
            </div>

            <div className='z-10'>
                <h2 className='text-3xl font-semibold my-2'>Get in Touch</h2>
                <p className='text-[#ADB7BE] mb-2'>
                    I'm currently looking for new opportunities,
                    my inbox is always open. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/nipulyansith">
                        <Image src={GithubIcon} alt='Github Icon' className='w-10' />
                    </Link>

                    <Link href="https://www.linkedin.com/in/nipul-yansith-183b8a156/">
                        <Image src={LinkedInIcon} alt='LinkedIn Icon' className='w-10' />
                    </Link>
                </div>
            </div>

            <div>
            <form action="" className='flex flex-col' onSubmit={handleSubmit}>
    <div className='mb-6'>
        <label htmlFor="email" className='text-white block text-sm mb-2'>Your email</label>
        <input
            type="email"
            id="email"
            name="email"  // Add name attribute
            required
            placeholder="jacob@gmail.com"
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
    </div>

    <div className='mb-6'>
        <label htmlFor="subject" className='text-white block text-sm mb-2'>Subject</label>
        <input
            type="text"
            id="subject"
            name="subject"  // Add name attribute
            required
            placeholder="Just saying Hi :)"
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        />
    </div>

    <div className='mb-6'>
        <label htmlFor="message" className='text-white block text-sm mb-2'>Message</label>
        <textarea
            name="message"  // Add name attribute
            id="message"
            cols="30"
            rows="10"
            required
            placeholder="Hey Nipul, I have a question about your work..."
            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        ></textarea>
    </div>

    <button type="submit" className="bg-purple-500 py-2.5 px-5 rounded-lg w-full font-semibold hover:bg-purple-700">
        Send Message
    </button>
    {
        email && <p className='text-green-500 text-sm mt-2'>Email Sent Successfully</p>
    }
</form>

            </div>
        </section>
    )
}

export default EmailSection
