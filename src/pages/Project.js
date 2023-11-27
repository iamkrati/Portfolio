import React,{useEffect,useState} from 'react'
import './Project.css'
import LinkedGEMS from '../images/LinkedGEMS.png'
import Leetcode from '../images/LeetcodeF.png'
import Expense from '../images/Expense.png'
import ecommerce from '../images/ECommerce.png'
import portfolio from '../images/Portfolio.png'

const Project = () => {

    return (

        <div >
            <h3 style={{
                textAlign: 'center',
                marginTop: '30px',
                background: '-webkit-linear-gradient(rgb(0 125 252), #361d1d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: "'Righteous', cursive",
            }}>Recent Work</h3>
            <div id="container">

                <div className="product-details">

                    <h1>LinkedGEMS</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>

                    <p className="information">
                        <ul>
                            <li>The objective of this project is to create a platform that connects students with their
                                respective alumnus who are placed at renowned MNCs. It provides the students with an insight of
                                the placement related questions and feedbacks shared by the alumnus and their experiences at
                                interviews. </li>

                        </ul>
                    </p>

                </div>



                <div className="product-image">

                    <img src={LinkedGEMS} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Tech Stack : </strong> HTML | CSS | BootStrap | JavaScript | PHP | MySQL</li>
                            <div className="link">
                                <a href="https://github.com/iamkrati/LinkedGEMS/tree/master" target="_blank"><i
                                    className="fa-brands fa-github"></i>View Project</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="container">

                <div className="product-details">

                    <h1>Expense Tracker</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>

                    <p className="information">
                        <ul>
                            <li>Build an Expense Tracker Application. It uses functional components with hooks and the context API.
                            </li>
                            <li>We can Add new transactions and reflect them in total , delete items from DOM and persist it MongoDB Database.</li>
                        </ul>
                    </p>

                </div>



                <div className="product-image">

                    <img src={Expense} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Tech Stack : </strong> HTML | CSS | JavaScript | React | MongoDB | Expess JS | Node JS</li>
                            <div className="link">
                                <a href="https://expense-tracker-ugzs.onrender.com/" target="_blank"><i
                                    className="fa-brands fa-github"></i>View Project</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="container">

                <div className="product-details">

                    <h1>LeetCode Filter</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>

                    <p className="information">
                        <ul>
                            <li>Developed a LeetCode Filter to solve a questions on LeetCode.</li>
                            <li>The configuration includes various user activities on a webpage, such as user’s dashboard ,
                                choose a
                                topic and question
                                difficulty level.</li>
                            <li>Added Chrome Extention Feature which is very effective.
                            </li>
                        </ul>
                    </p>

                </div>
                <div className="product-image">

                    <img src={Leetcode} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Tech Stack : </strong> HTML | CSS | JavaScript | React | MongoDB | Expess JS | Node JS </li>
                            <div className="link">
                                <a href="https://github.com/iamkrati/LeetCode-Filter" target="_blank"><i
                                    className="fa-brands fa-github"></i>View Project</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="container">

                <div className="product-details">

                    <h1>E-Commerce Website</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>

                    <p className="information">
                        <ul>
                            <li>Developed a website with higher security using the passport module.</li>
                            <li>Here we can add/delete products and there is also a review section.
                            </li>
                            <li>There are two sections of Retailer and Customer.
                            </li>
                        </ul>
                    </p>

                </div>

                <div className="product-image">

                    <img src={ecommerce} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Tech Stack : </strong> HTML | CSS | BootStrap | JavaScript | LeetCode API</li>
                            <div className="link">
                                <a href="https://ecomm-omnq.onrender.com/" target="_blank"><i
                                    className="fa-brands fa-github"></i>View Project</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="container">

                <div className="product-details">

                    <h1>MyPortfolio</h1>
                    <span className="hint-star star">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </span>

                    <p className="information">
                        <ul>
                            <li>Developed a interactive web application.</li>
                            <li>Added chat support using a TIDIO live chat and also Leetcode Stat's.</li>
                            <li>It contains all the information related to my education,experience,skills and my all social
                                media
                                links.
                            </li>
                        </ul>
                    </p>

                </div>

                <div className="product-image">

                    <img src={portfolio} alt="" />


                    <div className="info">
                        <h2> Description</h2>
                        <ul>
                            <li><strong>Tech Stack : </strong> HTML | CSS | BootStrap | JavaScript | LeetCode API</li>
                            <div className="link">
                                <a href="https://iamkrati.github.io/Krati-sPortfolio/index.html" target="_blank"><i
                                    className="fa-brands fa-github"></i>View Project</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project