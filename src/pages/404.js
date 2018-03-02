import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Wrapper = styled.section`
  padding: 3em 1.5em;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 2rem 0;
  text-transform: capitalize;
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
`;

const NotFoundPage = () => (

  <div>

    <Helmet>
      <title>404 - Page Not Found</title>
    </Helmet>

    <Wrapper>
      <Title>Error 404</Title>
      <Text>Sorry, that page can't be found</Text>
    </Wrapper>

  </div>
)

export default NotFoundPage
