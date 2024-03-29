//for icons; install a library by "npm install react-icons " and visit 'https://react-icons.github.io/react-icons/' for icons
import React from 'react'

import CV from '../../assets/cv.pdf'
import ME from '../../assets/mi.jpg'

import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

import './home.css'

const Home = () => {
    return (
        <div>

            <header>
                <div className="container header__container">
                    <h5>Hello, I'm</h5>
                    <h1>Sanish Khadgi</h1>


                    <div className="cta">
                        <a href={CV} download className='btn'>Download CV</a>
                        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                    
                    </div>

                    <div className="header__socials">
                        <a href="https://www.linkedin.com/in/%E0%A4%B6%E0%A4%A8%E0%A4%BF-%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A5%80-964704213/" target="_blank"><BsLinkedin /></a>
                        <a href="https://github.com/" target="_blank"><FaGithub git ini/></a>
                        <a href="https://www.facebook.com/shahi.sani.165/" target="_blank"><FaFacebookSquare /></a>
                    </div>

                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Home
