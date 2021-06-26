import '../css/about.css';
import * as React from "react"

import {useState} from 'react';

const About = () => {

    const [front1, showBack1] = useState(false);
    const toggleCard1 = () => {
        showBack1(!front1);
    };

    const [front2, showBack2] = useState(false);
    const toggleCard2 = () => {
        showBack2(!front2);
    };

    const [front3, showBack3] = useState(false);
    const toggleCard3 = () => {
        showBack3(!front3);
    };

    return (
        <div id="about">

            <svg className="fill-current text-light-secondary dark:text-dark-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921 154.5"><path className="cls-1" d="M0,926s179,0,414.5,94.25c329.82,132,601.5-17.14,904.5,18.32,367.92,43,545.5-.81,601.5-63.08v105H-.5Z" transform="translate(0.5 -926)"/>
            </svg>

            <div className="grid lg:grid-cols-4 grid-cols-1 px-10 py-10 lg:px-40 lg:py-20 gap-4 bg-light-secondary dark:bg-dark-secondary">
                <div className="text-center row-span-1 lg:row-span-2">
                    <span className="title-header text-4xl lg:text-7xl text-blue-600 dark:text-blue-500">2+</span>
                    <p className="title-header text-lg lg:text-3xl text-blue-500">Years of Experience</p>
                </div>
                <div className="col-span-none lg:col-span-3 ">
                <p className="title-header text-xl lg:text-3xl text-gray-500 dark:text-gray-200 text-center">Software Developer and Graphic designer specialized in web and mobile development.</p>
                </div>


                
                <div className="text-center bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-large px-2 py-10 shadow-sm lg:shadow-none">
                <div className={`front-card duration-700 ${front1 ? 'hidden' : 'visible'}`}>
                        <div className="mb-2 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div className="px-8">
                            <span className="title text-xl text-blue-600">Front End</span>
                            <p className="text-gray-500 dark:text-gray-300 pt-2">Transform mockups and designs to web and mobile.</p>
                        </div>
                    </div>
                    <div className={`back-card px-5 duration-700 ${front1 ? 'visible' : 'hidden'}`}>
                        <p className="text-gray-500 dark:text-gray-300 pt-2">If you have a design or a mockup I can turn it into a static web page with new technologies like Vue, React, Javascript.
                        I like to optimize each site as best I can, guaranteeing you a fairly fluid and fast page.
                        </p>
                    </div>
                    <div className="px-6 lg:px-2">
                        <button onClick={toggleCard1} className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full border-blue-600 hover:shadow-md hover:text-white hover:text-teal-500 mt-4 lg:mt-0 nav-contact duration-500 bg-transparent text-blue-600 hover:bg-blue-700 hover:border-blue-700">View more</button>
                    </div>
                </div>

                <div className="text-center bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-large px-2 py-10 shadow-sm lg:shadow-none">
                    <div className={`front-card duration-700 ${front2 ? 'hidden' : 'visible'}`}>
                        <div className="mb-2 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                        </div>
                        <div className="px-8">
                            <span className="title text-xl text-blue-600">Back End</span>
                            <p className="text-gray-500 dark:text-gray-300 pt-2">Coding methods and databases according to your needs.</p>
                        </div>
                    </div>
                    <div className={`back-card px-5 duration-700 ${front2 ? 'visible' : 'hidden'}`}>
                        <p className="text-gray-500 dark:text-gray-300 pt-2">
                        Do you have a complete project in mind? I can help you with the full stack, database development and procedures for the needs of your application.
                        Currently I develop in C # and PHP and SQL databases.
                        </p>
                    </div>
                    <div className="px-6 lg:px-2">
                        <button onClick={toggleCard2} className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full border-blue-600 hover:shadow-md hover:text-white hover:text-teal-500 mt-4 lg:mt-0 nav-contact duration-500 bg-transparent text-blue-600 hover:bg-blue-700 hover:border-blue-700">View more</button>
                    </div>
                </div>


                <div className="text-center bg-light-primary dark:bg-dark-primary border border-light-border dark:border-dark-border rounded-large px-2 py-10 shadow-sm lg:shadow-none">
                    <div className={`front-card duration-700 ${front3 ? 'hidden' : 'visible'}`}>
                        <div className="mb-2 text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="px-8">
                            <span className="title text-xl text-blue-600">UI Design</span>
                            <p className="text-gray-500 dark:text-gray-300 pt-2">Design mockups, screens and prototypes for your projects.</p>
                        </div>
                    </div>
                    <div className={`back-card px-5 duration-700 ${front3 ? 'visible' : 'hidden'}`}>
                        <p className="text-gray-500 dark:text-gray-300 pt-2">
                        I have knowledge in interface design and user experience with this I can generate mockups according to your ideas, following the rules and design trends.
                        Also real-time prototyping.
                        </p>
                    </div>
                    <div className="px-6 lg:px-2">
                        <button onClick={toggleCard3} className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full border-blue-600 hover:shadow-md hover:text-white hover:text-teal-500 mt-4 lg:mt-0 nav-contact duration-500 bg-transparent text-blue-600 hover:bg-blue-700 hover:border-blue-700">View more</button>
                    </div>
                </div>
                
                

            </div>
        </div>
    )
}

export default About;