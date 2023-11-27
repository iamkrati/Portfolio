import React, { useEffect } from 'react'
import './ExpEdu.css'
import papas from '../images/papasiddhi.png'
import cloud from '../images/cloud.png'
import gfg from '../images/download.png'
import AppSquadz from '../images/AppSquadz.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExpEdu = () => {
    useEffect(() => {

        AOS.init();
    }, [])
    return (

        <div >
            <section id="experience" style={{ color: 'white' }}>
                <h2>Experiences</h2>
                <br /><br />
                <div className="e2" data-aos="fade-up" data-aos-duration="3000">
                    <div className="data">
                        <img src={papas} alt="CompanyLogo" />
                    </div>
                    <div className="data">
                        <p>Backend Developer Intern</p>
                        <p>PapaSiddhi</p>
                    </div>
                    <div className="data">
                        <h5>August 2023 - Present</h5>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="roundhr">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="e2" data-aos="fade-up" data-aos-duration="3000">
                    <div className="data">
                        <img src={gfg} alt="CompanyLogo" />
                    </div>
                    <div className="data">
                        <p>Technical Content Intern</p>
                        <p>GeeksForGeeks</p>
                    </div>
                    <div className="data">
                        <h5>May 2023 - August 2023</h5>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="roundhr">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="e1" data-aos="fade-up" data-aos-duration="3000">
                    <div className="data">
                        <img src={AppSquadz} alt="CompanyLogo" />
                    </div>
                    <div className="data">
                        <p>Intern</p>
                        <p>AppSquadz-Noida</p>
                    </div>
                    <div className="data">
                        <h5>June 2022 - August 2022</h5>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="roundhr">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="e2" data-aos="fade-up" data-aos-duration="3000">
                    <div className="data">
                        <img src={gfg} alt="CompanyLogo" />
                    </div>
                    <div className="data">
                        <p>Technical Lead</p>
                        <p>GeeksForGeeks Student Chapter GLAU</p>
                    </div>
                    <div className="data">
                        <h5>October 2022 - June 2023</h5>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="roundhr">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="e2" data-aos="fade-up" data-aos-duration="3000">
                    <div className="data">
                        <img src={cloud} alt="CompanyLogo" />
                    </div>
                    <div className="data">
                        <p>Google Cloud Ready Program</p>
                        <p>Google Cloud-India</p>
                    </div>
                    <div className="data">
                        <h5>May 2022 - July 2022</h5>
                    </div>
                </div>

            </section>
            <section id="education">
                <h2>Education</h2>
            </section>
            <div className="expleft">
                <div className="expbox expbox1" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <span id="graduation">
                        <i className="fa-solid fa-graduation-cap"></i>
                    </span>
                    <br />
                    <h3>Bachelor of Technology</h3>
                    <span>Mathura,India</span><br />
                    <span>2020-2024</span><br />
                    <span>Computer Science and Engineering</span><br />
                    <span>CPI : 8.7</span>
                </div>

                <div className="expbox expbox2" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <span id="school">
                        <i className="fa-solid fa-building-columns"></i>
                    </span>
                    <br />
                    <h3>Intermendiate</h3>
                    <span>BLS International School , Hathras</span><br />
                    <span>2018-2020</span><br />
                    <span>PCM</span><br />
                    <span>Percentage : 90.2%</span>
                </div>
                <div className="expbox expbox3" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <span id="school1">
                        <i className="fa-solid fa-building-columns"></i>
                    </span>
                    <br />
                    <h3>High School</h3>
                    <span>CB Gupta Saraswati Vidyapeeth , Aligarh</span><br />
                    <span>2016-2018</span><br />
                    <span>Percentage : 80.0%</span>
                </div>
            </div>
        </div>
    )
}

export default ExpEdu