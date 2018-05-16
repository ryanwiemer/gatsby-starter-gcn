import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Date = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`

const PostDate = props => {
  return (
    <Wrapper>
      <Date>
        <span>Published:</span> {props.date}
      </Date>
    </Wrapper>
  )
}

export default PostDate
