import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  &:after {
    content: "";
    display: block;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      margin-left: 49%;
      display: block;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      margin-left: 32%;
      display: block;
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
