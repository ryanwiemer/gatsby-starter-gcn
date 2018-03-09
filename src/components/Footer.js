import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.secondary};
    padding: 1em 0;
    margin: 0 1.5em;
  }

  li {
    display: inline-block;
    padding: .25em 0;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      width: auto;
    }
  }

  a {
    font-weight: 600;
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const Wordmark = styled.img`
  max-width: 100px;
`

const Footer = () => (
  <Wrapper>
    <ul>
      <li><a href="https://www.contentful.com/" rel="nofollow" target="_blank"><Wordmark src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg" alt="Powered by Contentful" /></a></li>
      <li><a href="https://github.com/ryanwiemer/gatsby-starter-gcn" target="_blank">gatsby-starter-gcn</a> by <a href="https://github.com/ryanwiemer" target="_blank">@ryanwiemer</a></li>
    </ul>
  </Wrapper>
)

export default Footer
