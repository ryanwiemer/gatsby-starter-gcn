import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import ContactForm from '../components/ContactForm'

const Contact = ({data}) => {

  return(
    <div>

      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`Contact - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/contact/`} />
      </Helmet>

      <Container>
        <PageTitle>Contact</PageTitle>
        <ContactForm/>
      </Container>

    </div>
  )
}

export default Contact
