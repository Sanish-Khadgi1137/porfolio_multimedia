// install react icon see 24:34 day 2 or https://react-icons.github.io/react-icons
import React from 'react'

import './footer.css'
// use smalle letter after "react-icons/" eg "..cons/fa"
import { FaLinkedinIn } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
      <div>

          <footer>
              <ul className='permalinks'>

                  <li><a href="#">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#project">Project</a></li>
                  <li><a href="#contact">Contact</a></li>

              </ul>

              <div className="footer__socials">
                  <a href="https://www.linkedin.com/in/%E0%A4%B6%E0%A4%A8%E0%A4%BF-%E0%A4%B6%E0%A4%BE%E0%A4%B9%E0%A5%80-964704213/" target="_blank"><FaLinkedinIn /></a>
                  <a href="https://www.facebook.com/shahi.sani.165/" target='_blank'><FaFacebookF /></a>
                  <a href="https://www.instagram.com/sanisshahi/" target='_blank'><FiInstagram /></a>
                  <a href="https://twitter.com/NA/" target='_blank'><IoLogoTwitter /></a>
              </div>

              <div className="footer__copyright">
                  <small>Copyright &copy; SANISH KHADGI 2024 | All rights reserved</small>
              </div>

          </footer>
    </div>
  )
}

export default Footer