import React,{useEffect} from 'react'
import Algo from '../images/ALGO.png'
import CSS from '../images/CSS.png'
import HTML from  '../images/HTML.png'
import JAVA from '../images/JAVA.png'
import JS from '../images/JS.png'
import react from '../images/REACT.png'
import bootstrap from '../images/BOOTSTRAP.png'
import nodejs from '../images/nodejs.png'
import expressjs from '../images/express.png'
import mysql from '../images/MYSQL.png'
import mongo from '../images/mongodb.png'
import C from '../images/C.png'

import './Skills.css'
const Skills = () => {

  return (
    <div>
        <h3 style={{
                textAlign: 'center',
                marginTop: '30px',
                background: '-webkit-linear-gradient(rgb(0 125 252), #361d1d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Righteous', cursive",
            }}>
                My Skills</h3>
        <div class="skills">
            <div class="leftsection">
                <div id="leftpart1">
                    <i class="fa-solid fa-paintbrush" style={{ color: 'black', 'font-size': '40px'}} ></i>
                    <div class="iconnext" style={{color:'black'}}>
                        <h4>
                            Design+Development
                        </h4>
                        <p>Modern designs - optimized for performance, search engines, and converting users to
                            customers.
                        </p>
                    </div>
                </div>
                <div id="leftpart2">
                    <i class="fa-brands fa-battle-net" style={{color: 'black' , 'font-size': '50px'}}></i>
                    <div class="iconnext" style={{color: 'black'}}>
                        <h4>
                            Technology
                        </h4>
                        <p>Combined all the latest technologies to a progressive website.</p>
                    </div>
                </div>
                <div id="leftpart3">
                    <i class="fa-solid fa-tablet" style={{color: 'black' , 'font-size': '50px'}}></i>
                    <div class="iconnext" style={{color: 'black'}}>
                        <h4>
                            Always Responsive
                        </h4>
                        <p>A responsive design makes your website accessible to all users, regardless of their device.
                        </p>
                    </div>
                </div>
            </div>
            <div class="skillsname">
                <img src={Algo}/>
                <img src={JAVA}/>
                <img src={C}/>
                <img src={HTML}/>
                <img src={CSS}/>
                <img src={JS}/>
                <img src={bootstrap}/>
                <img src={react}/>
                <img src={nodejs}/>
                <img src={expressjs}/>
                <img src={mongo}/>
                <img src={mysql}/>
            </div>
        </div>
    </div>
  )
}

export default Skills