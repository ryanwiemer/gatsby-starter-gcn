import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

class Pagination extends React.Component {
  render() {

    const { numPages, currentPage } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPageNum = currentPage - 1 === 1 ? `` : (currentPage - 1).toString()
    const nextPageNum = (currentPage + 1).toString()
    const prevPageLink = isFirst ? null : `/${prevPageNum}`
    const nextPageLink = isLast ? null : `/${nextPageNum}`

    return (
      <Wrapper>
        {!isFirst && (
          <PreviousLink to={prevPageLink}>Newer Posts</PreviousLink>
        )}
        {!isLast && (
          <NextLink to={nextPageLink}>Older Posts</NextLink>
        )}
      </Wrapper>
    )
  }
}

export default Pagination
