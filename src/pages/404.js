import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Box = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4em 1em;

  @media only screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 2em 1em;
  }

  & section {
    max-width: 600px;
    display: inline-block;
    background: #fff;
    box-shadow: 0 0 0 0, 0 6px 10px rgba(34, 34, 34, 0.2);
    margin: 0 auto 1rem;
    border: 2px solid ${props => props.theme.colors.secondary};
    border-top: 25px solid ${props => props.theme.colors.secondary};
    border-radius: 2px;
    position: relative;
    text-align: center;

    h2 {
      padding: 4rem 3rem;
      font-size: 3em;
      color: rgb(62, 62, 62);

      @media only screen and (max-width: ${props =>
          props.theme.responsive.small}) {
        font-size: 2.25em;
        padding: 4rem 1rem;
      }
    }

    & hr {
      background: ${props => props.theme.colors.secondary};
      border: none;
      height: 4px;
    }

    & span {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      position: absolute;
      top: -19px;
      z-index: 99;
      &:nth-child(1) {
        left: 5px;
        background: #ed695e;
      }
      &:nth-child(2) {
        left: 25px;
        background: #f6bf4f;
      }
      &:nth-child(3) {
        left: 45px;
        background: #62c553;
      }
    }
  }
  & p {
    margin: 1em;
  }
`

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Box>
      <section>
        <h2>
          Sorry, that page can't be found.
          <span /> <span /> <span />
        </h2>
        <hr />
        <p>
          Please return <Link to="/">home</Link> or use the menu to navigate to
          a different page.
        </p>
      </section>
    </Box>
  </div>
)

export default NotFoundPage
