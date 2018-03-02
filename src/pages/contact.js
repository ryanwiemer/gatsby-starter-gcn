import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import config from '../utils/siteConfig'
import ContactForm from '../components/contactform'

const Wrapper = styled.section`
  padding: 3em 1.5em;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1em 0;
`;

const Contact = ({data}) => {

  return(
    <div>

      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`Contact - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/contact/`} />
      </Helmet>

      <Wrapper>
        <Title>Contact</Title>
        <ContactForm/>
      </Wrapper>

    </div>
  )
}

export default Contact
