import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Logo from '../images/logo.png';
import About from '../components/about';
import Intro from './intro';
import Projects from './projects';
import BuyCoffee from './buycoffee';
import Education from './education';
import Contact from './contact';
import Whame from './whame';
import Footer from './footer';
import Resume from '../pdf/resume.pdf';
import '../css/header.css';
import "../css/main.css"
import {useState, useEffect} from 'react';

const Layout = ({ children }) => {

  const [menu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!menu);
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 100);
   });
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery  {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-light-primary dark:bg-dark-primary">
        <header className={`sticky top-0 mb-10 ${darkMode ? 'dark' : ''}`}>
          <nav className={`shadow-md flex items-center justify-between flex-wrap bg-white lg:pl-28  lg:pr-28 pl-5 pr-5 dark:text-gray-200 dark:bg-dark-primary ${scroll ? 'shadow-md' : 'shadow-none'}`}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <img alt="logo" src={Logo} id="logo" className="w-16 m-auto p-2" />
            </div>

            <button className="lg:hidden block" onClick={toggleMenu}><svg className="fill-current text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></button>

            <div id="menuR" className={`w-full flex-grow lg:flex lg:items-center lg:w-auto md:items-center text-center lg:text-right p-2 ${menu ? 'visible' : 'hidden'}`}>
            <div className="text-sm flex-grow lg:pr-4">
            <a href="/#about" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-gray-200 dark:hover:text-blue-500 p-1" onClick={toggleMenu}>
              About
            </a>
            <a href="/#projects" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-gray-200 dark:hover:text-blue-500 p-1" onClick={toggleMenu}>
              Projects
            </a>
            <a href="/#contact" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-gray-200 dark:hover:text-blue-500 p-1" onClick={toggleMenu}>
              Contact
            </a>
          </div>

          <a href="#responsive-header" id="theme-btn" className="text-gray-500 hover:text-blue-600 block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 nav-title dark:text-gray-200 dark:hover:text-blue-500">
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
                <a href={Resume} target="_blank" className="inline-block text-sm px-4 py-2 leading-none border-2 rounded-full border-blue-600 hover:text-white hover:text-teal-500 hover:shadow-md mt-4 lg:mt-0 nav-contact duration-500 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700">Resume</a>
              </div>
            </div>
          </nav>
        </header>

        {/*className="pl-8 pr-8 md:pl-10 md:pr-10 lg:pl-28 lg:pr-28"*/}
        <div>
        <main>
        {children}
        <Intro />
        <About />
        <Education />
        <BuyCoffee />
        <Projects />
        <Contact />
        
        <Whame />
          
        </main>
        {
        
        <Footer />
        /*<footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>*/}
        </div>
      </div>

      </div>

      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
