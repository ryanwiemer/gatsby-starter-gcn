import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.text};
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" description="Page Not Found" />
    <Container>
      <PageTitle>Page Not Found</PageTitle>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
  </Layout>
)

export default NotFoundPage
