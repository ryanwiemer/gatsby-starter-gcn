import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

const Box = styled.div`
  margin: 0 auto;
  padding: 3em 1.5em 2em;
  text-align: center;
`

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  margin: 0 0 1em 0;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  margin: 0 0 3rem 0;
  line-height: 1.2;
`

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Box>
      <Title>Error 404</Title>
      <Text>Sorry, that page can't be found</Text>
    </Box>
  </Layout>
)

export default NotFoundPage
