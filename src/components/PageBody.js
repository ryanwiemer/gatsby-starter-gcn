import React from 'react'
import styled from 'styled-components'
require('../styles/prism-brandonkal.css')

const Body = styled.article`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  /* Set Font Size for Root of Page Body: */
  font: 112.5%/1.78 BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  a[href] {
    transition: 0.2s;
    color: inherit;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  /* Add typography code below */
  img {
    max-width: 100%;
    margin: 0 0 1em;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    margin: 1em 0 1em; /* Note Margin Changed Here but it must be removed at top */
    padding: 0;
    font-weight: 700;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.51572em;
  }

  h3 {
    font-size: 1.31951em;
  }

  h4 {
    font-size: 1em;
  }

  h5 {
    font-size: 0.87055em;
  }

  h6 {
    font-size: 0.81225em;
  }

  /* Remove Top Margin when post starts with a header */
  & > :first-child {
    margin-top: 0;
  }

  table {
    font-size: 1em;
    line-height: 1.78em;
    border-collapse: collapse;
    width: 100%;
    margin: 0 0 1.78em;
    padding: 0;
  }

  blockquote {
    margin: 0 1.78em 1.78em 0;
    padding: 0 0 0 1.78em;
    border-left: 0.4em solid #4a4a4a;
  }

  hr {
    background: ${props => props.theme.colors.secondary};
    border: none;
    height: 6px;
    margin: 0 0 calc(1.78em - 6px);
    padding: 0;
  }

  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }

  thead {
    text-align: left;
  }

  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    padding: 0.89em 1.18667em calc(0.89em - 1px);
  }

  th:last-child,
  td:last-child {
    padding-right: 0;
  }

  hgroup,
  dl,
  dd,
  p,
  figure,
  fieldset,
  form,
  noscript,
  iframe,
  address {
    margin: 0 0 1.78em;
    padding: 0;
  }

  ul,
  ol {
    list-style-position: outside;
    list-style-image: none;
    margin: 0 0 1.78em 1.78em;
    padding: 0;

    /* Add code to make this work */
    list-style: disc outside none;
  }

  ol {
    /* Add code to make this work */
    list-style-type: decimal;
  }

  b,
  strong,
  dt,
  th {
    font-weight: 700;
  }

  li,
  li > p {
    margin-bottom: calc(1.78em / 2);
  }

  ol li,
  ul li,
  th:first-child,
  td:first-child {
    padding-left: 0;
  }

  li > ol,
  li > ul {
    margin-left: 1.78em;
    margin-bottom: calc(1.78em / 2);
    margin-top: calc(1.78em / 2);
  }

  blockquote :last-child,
  li :last-child,
  p :last-child {
    margin-bottom: 0;
  }

  code {
    font-size: 0.88em;
  }

  abbr,
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }

  .footnotes {
    margin-top: 3rem;
    font-size: 1rem;
    line-height: 1;
  }
  .footnote-backref {
    text-decoration: none;
    transition: none;
    color: black;
    &:hover {
      color: black;
    }
  }

  sup {
    top: -0.5em;
    color: ${props => props.theme.colors.highlight};
  }

  /* Code Selection */
  code::selection {
    background: ${props => props.theme.colors.codeSelection};
  }
  code span::selection {
    background: ${props => props.theme.colors.codeSelection};
  }
  code::-moz-selection {
    background: ${props => props.theme.colors.codeSelection};
  }
  code span::-moz-selection {
    background: ${props => props.theme.colors.codeSelection};
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
