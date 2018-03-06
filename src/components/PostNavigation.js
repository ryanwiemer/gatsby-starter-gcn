import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: .2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`;

const PostNavigation = (props) => {
  return (
    <Navigation>
      {props.children}
    </Navigation>
  )
}

export default PostNavigation
