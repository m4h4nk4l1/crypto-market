import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from "../assets/logo.svg"
function Logo() {
  return (
    <Link to="/" className='absolute top-[1.5rem] left-[1.5rem] dark:text-black [text-decoration:none] text-lg text-cyan flex items-center'>
      <img src={logoSvg} alt="CrytpoBucks" />
      <span className='hover:text-white'>Crypto-Market</span>
    </Link>
  )
}
export default Logo