import React from 'react'
import styled, { css } from 'styled-components'

const sharedStyles = css`
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`

const PageTitle = styled.h1`
  ${sharedStyles};
  font-size: 2.35em;
  margin: 0 0 3rem 0;
`
export default PageTitle

export const PageTitleSmall = styled.h2`
  ${sharedStyles};
  font-size: 2em;
  margin: 1rem 0 2rem 0;
`

// const PageTitle = props => {
//   return <Title small={props.small}>{props.children}</Title>
// }
//
// export default PageTitle
