import React from 'react'
import Logo from '../assets/phone.png'
// importing css
import '../styles/main.css'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineGithub} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-left'>
        <img src={Logo} alt="image" id='logo'/>
        <h1>Chat with Brender</h1>
        </div>

        <div className='nav-right'>
            <IoIosCall className='icons'/>
            <AiOutlineGithub className='icons'/>
        </div>
        
    </div>
  )
}

export default Navbar
