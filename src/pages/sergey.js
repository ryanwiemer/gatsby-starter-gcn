import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import Layout from '../components/Layout'
import Header from '../components/Header'


const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: ${props => props.theme.colors.text};
  }
`

const homePage = ({ data }) => {
  return (
    <Layout>
			<Header>
				<PageTitle>Автосервис на Нарвской</PageTitle>
			</Header>
      <Container>
      </Container>
    </Layout>
  )
}



export default homePage
