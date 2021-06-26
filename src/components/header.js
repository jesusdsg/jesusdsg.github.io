import * as React from "react"
import {useState} from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../css/header.css';
import Logo from '../images/logo.png';



const Header = ({ siteTitle }) => {

  const [darkMode, setDarkMode] = useState(false);

  return (

    <header className={`sticky top-0 z-50 mb-10 ${darkMode ? 'dark' : ''}`}>

      <nav className="flex items-center justify-between flex-wrap bg-white border-b lg:pl-28  lg:pr-28 pl-5 pr-5 dark:text-white dark:bg-gray-800">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img alt="logo" src={Logo} id="logo" className="w-16 -mb-1 pb-2" />
        </div>
    
      <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
      <input className="hidden" type="checkbox" id="menu-toggle" />


      <div id="menu" className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center hidden">
      <div className="text-sm lg:flex-grow sm:flex-grow">
        <a href="#responsive-header" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-white dark:hover:text-blue-500">
          About
        </a>
        <a href="#responsive-header" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-white dark:hover:text-blue-500">
          Projects
        </a>
       </div>
       <a href="#responsive-header" id="theme-btn" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-white dark:hover:text-blue-500">
        <button id="theme-btn" className="outline-none" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <svg className="w-8 h-8 md:w-10 md:h-10 theme-icon outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          ) : (
            <svg className="w-8 h-8 md:w-10 md:h-10 theme-icon outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          )}
        </button>
        </a>
      
      <div>
        <a href="#" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full text-blue-600 border-blue-600 hover:text-white hover:text-teal-500 hover:bg-blue-600 hover:shadow-md mt-4 lg:mt-0 nav-contact duration-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700 dark:hover:border-blue-700">Hire Me</a>
      </div>
    </div>
  </nav>
  </header>
  
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
