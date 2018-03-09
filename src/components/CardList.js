import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &:after {
    content: " ";
    flex: auto;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 49%;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      flex: 0 0 32%;
    }
  }
`;

const CardList = (props) => {
  return (
    <List>
      {props.children}
    </List>
  )
}

export default CardList
