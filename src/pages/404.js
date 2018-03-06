import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  margin: 0 0 1em 0;
`;

const NotFoundPage = () => (

  <div>

    <Helmet>
      <title>404 - Page Not Found</title>
    </Helmet>

    <Container>
      <PageTitle>Error 404</PageTitle>
      <Text>Sorry, that page can't be found</Text>
    </Container>

  </div>
)

export default NotFoundPage
