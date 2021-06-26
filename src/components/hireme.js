import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

const HireMe = () => {
    return (
        <div className="p-10 bg-white dark:bg-gray-800 lg:h-72 sm:h-full">
            <div className="flex flex-wrap">
                <div className="lg:w-1/2 md:w-full sm:w-full sm:text-center pb-8 m-auto">
                    <StaticImage src="../images/curriculum.svg" className="w-72 m-auto" alt="hire" />
                </div>
                <div className="lg:w-1/2 md:w-full sm:w-full text-gray-500 dark:text-gray-300 m-auto text-center">
                    <div className="text-4xl font-bold">
                        <div className="leading-tight lg:pr-10 lg:text-left">Do you have something in mind?</div>
                    </div>
                    <p className="text-2xl w-full lg:py-4 lg:pr-20 lg:text-left">Contact me and let me know your ideas, let's quote and make your ideal website together.</p>
                    <div className="lg:text-left sm:text-center">
                        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-yellow-500 border-yellow-500 hover:text-white hover:text-teal-500 hover:bg-yellow-500 hover:shadow-md mt-4 lg:mt-0 nav-contact duration-500">Contact Me</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HireMe;