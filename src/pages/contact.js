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

const Text = styled.p`
  margin: 0 auto 2em;
  line-height: 1.6;
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
        <Text>⚠️ This is a very basic example of a stateful form powered with Netlify form hanlding. Be sure to read the <a href="https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/" target="_blank"> related post</a> on Netlify's blog.</Text>
        <ContactForm/>
      </Wrapper>

    </div>
  )
}

export default Contact
