import React from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { globalStyles } from '../styles/globalStyles.js'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <>
        <div className="siteContent">
          <Menu />
          {children}
        </div>
        <Footer />
      </>
      <Global styles={globalStyles} />
    </div>
  )
}

export default Template
