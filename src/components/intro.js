import '../css/intro.css';
import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';

const Intro = () => {
    return (
    <div>
        <div className="h-12"></div>
        <div className="text-center p-5 lg:p-10">
            <span className="title-header text-4xl lg:text-7xl text-blue-600">I'm </span>
            <span className="title-header text-4xl lg:text-7xl text-gray-600 dark:text-gray-200"> a Creative </span>
            <span className="title-header text-4xl lg:text-7xl text-blue-600">Developer</span>
        </div>
        <div className="text-center sm:pl-5 sm:pr-5 md:pl-32 md:pr-32 lg:pr-48 lg:pl-48 xl:pr-80 xl:pl-80">
            <p className="title-content lg:text-lg text-gray-500 dark:text-gray-200 text-center pr-10 pl-10">I love developing custom websites, I feel like everyone has a story to tell. Let's build your optimal, reliable website that adapts to any device.</p>
            <div className="preview w-32 md:w-36 lg:w-40 mt-12 rounded-full border-4 border-blue-500">
                <StaticImage src="../images/me.jpg" alt="Me :)" className=" w-32 md:w-36 lg:w-40 m-auto text-center border-solid rounded-full border-0 border-blue-500 dark:border-gray-600 me" />
            </div>
        </div>
        <div className="h-8"></div>
        <div className="w-full text-center hidden">
            <a><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" className="w-4 map-mark m-auto pt-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg></a>
            <p className="text-gray-400 dark:text-gray-200 pt-2">Barranquilla - Colombia</p>
        </div>
        <div className="boxes opacity-40">
            <ul>
            <li className="rounded-full bg-gray-100 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-50  dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            <li className="rounded-full bg-gray-200 dark:bg-dark-secondary"></li>
            </ul>
        </div>
       
    </div>
    )
}

export default Intro;