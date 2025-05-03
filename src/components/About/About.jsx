import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className='about-sections'>
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto temporibus omnis, libero dolor, voluptatem quos dicta quod at nemo eum sit nostrum magnam pariatur modi perferendis eaque, laborum impedit dolorum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis temporibus consectetur ullam, fugiat corrupti sequi debitis, rerum illo fugit incidunt adipisci ab quaerat. Vitae accusamus dicta blanditiis natus sunt?</p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
