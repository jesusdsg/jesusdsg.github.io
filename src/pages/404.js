import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import errorImg from '../images/404.svg';
import Footer from '../components/footer';

const NotFoundPage = () => (
      <Layout>
        <div className="m-auto text-center lg:px-64 px-10 h-screen">
          <SEO title="404: Not found" />
          <span className="title-header text-4xl lg:text-7xl text-gray-600 dark:text-gray-200">Oops!</span><br />
          <img src={errorImg} alt="error" className="m-auto h-64 mt-20 mb-10"></img>
          <p className="title-content lg:text-lg text-gray-500 dark:text-gray-200 text-center px-10 lg:px-64">Apparently we don't have what you're looking for around here... the sadness :'(</p>
        </div>
      </Layout>
)

export default NotFoundPage
