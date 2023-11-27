import React ,{useEffect, useState} from 'react'
import './About.css'
import Kratiimg from '../images/IMG_4220.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="Hii">
      <section className="about" >
            <div id="me">
                <div id="information">
                    <h2>Hey folks,<span> I'm A Developer</span></h2>
                    <p>Building a successfull product is a challenge, I am highly energetic in building
                        a successfull product.
                    </p>
                    <br/>
                    <div id="import">
                        <button type="button" className="btn btn-outline-warning"><a target="_blank"
                                href="https://drive.google.com/file/d/1gROKtBXsji5PiaSsDg1X_T0B0CcFR9y-/view">My
                                Resume</a></button>
                        <button type="button" className="btn btn-outline-warning"><a target="_blank"
                                href="mailto: gkrati04@gmail.com">Hire me</a></button>
                    </div>
                    <br/>

                    <br/>
                </div>
                <img data-aos="zoom-in" data-aos-duration="2000" src={Kratiimg} alt="User-Image"/>
            </div>
        </section>
        <div className="left" style={{ color: 'black'}}>
            <div className="box box1" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <span id="internship">
                    <i className="fa-solid fa-id-card-clip"></i>
                </span>
                <br/>
                <h3>5</h3>
                <p>Internship</p>
            </div>

            <div className="box box2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <span id="certifications">
                    <i className="fa-solid fa-award"></i>
                </span>
                <br/>
                <h3>10</h3>
                <p>Certifications</p>
            </div>
            <div className="box box3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <span id="projects">
                    <i className="fa-brands fa-app-store"></i>
                </span>
                <br/>
                <h3>5</h3>
                <p>Projects</p>
            </div>
            <div className="box box4" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <span id="organizations">
                    <i className="fa-solid fa-graduation-cap"></i>
                </span>
                <br/>
                <h3>3</h3>
                <p>Organizations</p>
            </div>
        </div>
    </div>
  )
}

export default About