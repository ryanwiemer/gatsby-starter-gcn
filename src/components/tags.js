import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
  margin: 0 0 2em 0;
`

const Label = styled.span`
  font-weight: 600;
  margin: 0 .5em 0 0;
  display: inline-block;
`

const Item = styled.li`
  display: inline-block;
  background: ${props => props.theme.colors.secondary};
  padding: .5em;
  border-radius: 2px;
  text-transform: capitalize;
  margin: 0 .5em 0 0;
  }
`

const Tags = (props) => {
  return (
    <Wrapper>
      {props.items.map((tags, index ) => (
        <Item key={index}>
          {tags}
        </Item>
      ))}
    </Wrapper>
  )
}

export default Tags
