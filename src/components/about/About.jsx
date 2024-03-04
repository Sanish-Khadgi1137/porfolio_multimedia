import React from 'react'

import './about.css'

import { FiUsers } from 'react-icons/fi'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

import aboutMe from '../../assets/mi-about.jpg'

const About = () => {
    return (
        <div>

            <section id="about">
                <h5>Get To Know</h5>
                <h2>About Me</h2>
                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            {/* //use curly bracket for source eg "src={aboutMe}" */}
                            <img src={aboutMe} alt="About Image" />
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon" />
                                <h5>Experience</h5>
                                <small>2+ Years Working</small>
                            </article>
                            <article className="about__card">
                                <FiUsers className="about__icon" />
                                <h5>Clients</h5>
                                <small>5+ Worldwide</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon" />
                                <h5>Projects</h5>
                                <small>7+ Completed</small>
                            </article>
                        </div>
                        <p>
                            Hey, I'm <strong>Computer Engineer</strong>, a student...!
                            <br />Enthusiastic | Energetic | Motivated
                        </p>
                        <a href="#contact" className="btn btn-primary">
                            Let's Talk
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About