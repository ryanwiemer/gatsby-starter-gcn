import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

  h1, h2, h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.25em;
  }

  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ul {
    margin: 0 0 2em 0;

    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {margin: 0;}
    }

  }

  ol {
    margin: 0 0 2em 0;

    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {margin: 0;}
    }

  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 .5em;
  }

  pre {
    font-family: monospace;
    background: #EEEEEE;
    padding: 1em;
    border-radius: 2px;
    line-height: 1.25;
    margin: 0 0 2em 0;
  }
`

const Body = (props) => {
  return (
    <Wrapper dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}/>
  )
}

export default Body
