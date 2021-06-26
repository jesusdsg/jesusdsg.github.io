import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

const Contact = () => {
    return (
        <div id="contact" className="bg-light-primary dark:bg-dark-secondary text-center">
            <div className="lg:px-40 sm:px-10 py-11 text-center">
                <p className="text-gray-500 dark:text-gray-300">Let's work together</p>
                <span className="title text-3xl project-title text-blue-600">Get in Touch</span><br />
                <p className="text-gray-500 dark:text-gray-300 text-xl w-full lg:py-4 lg:px-64 px-10">Right now I am working as a freelancer for projects if you would like us to build yours, do not hesitate to send me an email, I will respond as soon as possible.</p>
                <a href="mailto:devjesg@gmail.com" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full border-blue-600 hover:shadow-md hover:text-white hover:text-teal-500 mt-4 lg:mt-0 nav-contact duration-500 bg-transparent text-blue-600 hover:bg-blue-700 hover:border-blue-700">Hire Me</a>
            </div>
        </div>
    )
}

export default Contact;