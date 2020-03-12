import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h1`
  font-size: ${props => (props.small ? '2em' : '3.5em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: left;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
	color: ${props => props.theme.colors.textWhite};
	font-family: ${props => props.theme.fonts.body};
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.textWhite};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageTitle = props => {
  return <Title small={props.small}>{props.children}</Title>
}

export default PageTitle
