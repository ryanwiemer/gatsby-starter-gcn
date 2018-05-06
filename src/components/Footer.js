import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: auto;
  }
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <a
          href="https://www.contentful.com/"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
            style={{ width: '100px' }}
            alt="Powered by Contentful"
          />
        </a>
      </Item>
      <Item>
        <a
          href="https://github.com/ryanwiemer/gatsby-starter-gcn"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-starter-gcn
        </a>{' '}
        by{' '}
        <a
          href="https://github.com/ryanwiemer"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ryanwiemer
        </a>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
