import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 3em 1.5em;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
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

  a {
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

`;

const NotFoundPage = () => (
  <Wrapper>
    <Title>Error 404</Title>
    <Text>Sorry, that page can't be found. Please return <Link to="/">home</Link>.</Text>
  </Wrapper>
)

export default NotFoundPage
