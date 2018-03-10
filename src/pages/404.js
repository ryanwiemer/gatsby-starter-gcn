import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'

const Box = styled.div`
  margin: 0 auto;
  padding: 3em 1.5em 2em;
`;

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

    <Box>
      <PageTitle>Error 404</PageTitle>
      <Text>Sorry, that page can't be found</Text>
    </Box>

  </div>
)

export default NotFoundPage
