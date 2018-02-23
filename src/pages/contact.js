import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import config from '../utils/siteConfig'
import ContactForm from '../components/contactform'

const Wrapper = styled.div`
  padding: 3em 1.5em;
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: 600;
  text-align: center;
  margin: 0 0 1em 0;
`;

const Preface = styled.p`
  margin: 0 auto 2em;
  line-height: 1.6;
  max-width: 650px;
  a  {
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
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
        <Preface>⚠️ This is a very basic example of a stateful form powered with Netlify form hanlding. Be sure to read the <a href="https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/" target="_blank"> related post</a> on Netlify's blog.</Preface>
        <ContactForm/>
      </Wrapper>

    </div>
  )
}

export default Contact
