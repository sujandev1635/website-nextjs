
"use client"
import { useState } from "react";
import {FaBars, FaTimesCircle} from "react-icons/fa"
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-black text-white fixed top-0 right-o z-10'>
      <div className='justify-between px-4 mx-auto md:flex md:items-center md:px-8 lg:max-w-6xl'>
        <div className='flex  justify-between items-center py-3 md:py-6'>
          <Link href="/">
          <h2 className='text-3xl text-[var(--primary-color)] font-bold uppercase md:text-2xl'>sujandev.xyz</h2>
          </Link>
          <div className='md:hidden'>
           
            <button onClick={() => setNavbar(!navbar)} className='p-2 rounded-md outline-none text-2xl text-[var(--primary-color)]'>
              {navbar ? <FaTimesCircle/> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
        <ul className="h-screen justify-end items-center md:h-auto md:flex">
          <li className=' text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link href="https://www.booking.com/country/gb.en.html?aid=306395;label=gb-QdNTD6OaxhDEReLjY0m_twS553184233116:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-21933000:lp1001441:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gclid=CjwKCAjwvdajBhBEEiwAeMh1U0STQqzIkhsjXpflh6BLd2kUAI02WL2DBOI0GfHwnPeXsc32kVVwaRoCdQsQAvD_BwE" target="_blank" onClick={() => setNavbar(!navbar)} >Hotel Uk </Link>
          </li>
          <li className=' text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link href="https://shop.app/" target="_blank" onClick={() => setNavbar(!navbar)} > Shop</Link>
          </li>
          <li className=' text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link href="https://thesimpletravel.com/the-top-15-famous-restaurants-in-dhaka/" target="_blank" onClick={() => setNavbar(!navbar)} >Restaurant </Link>
          </li>
          <li className=' text-left p-3 md:mb-4 uppercase font-bold text-2xl md:text-[18px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
            <Link href="/contact" target="_blank" onClick={() => setNavbar(!navbar)} >Contact </Link>
          </li>
          

        </ul>

      </div>
    </nav>
  )
}

export default Navbar