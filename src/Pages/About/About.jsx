import React, { useEffect } from 'react'
import './About.sass'
import Image from '../../Assets/images/image.jpg'
import { BsGithub } from 'react-icons/bs'


function About() {
   
    

    return (
        <div className="A-Container">
            <div className="A-1" >
                <h1>About Us </h1>
            </div>
            <div className="A-2">
                <div className="A-2-1" >
                    <p>GDSC MMDU (Google Developer Student Clubs Maharishi Markandeshwar Deemed to be University) is a community of students who are passionate about technology and innovation. The club is a part of the Google Developer Student Clubs program, which is a global initiative by Google to provide students with the opportunity to learn and develop their technical skills.
                    </p>
                    <p>GDSC MMDU aims to provide a platform for students to learn, share, and collaborate on various projects and activities related to technology. The club hosts various events such as hackathons, coding competitions, tech talks, and workshops, which help students to explore new technologies and gain practical experience.</p>
                </div>
                <div className="A-2-2">
                    <img src={Image} alt="" />
                </div>
            </div>
            {/* <div className="A-3">
                <div className="A-3-1" />
                <div className="A-3-2">
                    <h2>Levi Ackermann</h2>
                     <p>Scout Captain</p>
                     <ul>
                        <li><BsGithub/></li>
                        <li></li>
                        <li></li>
                     </ul>
                </div>
            </div> */}
        </div>
    )
}

export default About