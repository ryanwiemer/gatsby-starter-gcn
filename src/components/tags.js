import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  margin: 0 0 2em 0;
`

const Label = styled.p`
  font-weight: 600;
  margin: 0 .5em 0 0;
  display: inline-block;
  padding: .5em;
  border-radius: 2px;
  background: ${props => props.theme.colors.secondary};
`

const Item = styled.li`
  display: inline-block;
  text-transform: capitalize;
  margin: 0 .25em 0 0;
  &:after {
    content: ',';
  }
  &:last-child {
    &:after {
      content: '';
    }
  }
`

const Tags = (props) => {
  return (
    <Wrapper>
      <Label>Tags:</Label>
      {props.items.map((tag, index ) => (
        <Item key={index}>
          {tag}
        </Item>
      ))}
    </Wrapper>
  )
}

export default Tags
