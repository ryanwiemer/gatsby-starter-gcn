import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 1200px;
  padding: 3em 1.5em;
  margin: 4em auto 0;
`;

const Title = styled.h2`
  font-size: 3em;
  font-weight: bold;
  margin: 0 0 .5em 0;
  text-transform: capitalize;
`;

const Text = styled.p`

`;

const NotFoundPage = () => (
  <div>
    <Title className="error__title">Error 404</Title>
    <Text className="error__text">Sorry, that page can't be found. Please return <Link to="/">home</Link>.</Text>
  </div>
)

export default NotFoundPage
