import React, { Component } from 'react'
import styled from 'styled-components'
import Card from './Card'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 32%;
  }
`

class CardList extends Component {
  render() {
    const { posts } = this.props
    return (
      <div>
        <List>
          {posts
            .filter(
              ({ node }) =>
                !this.props.results ||
                this.props.results.length === 0 ||
                this.props.results.filter(hit => hit.id === node.id).length > 0
            )
            .map(({ node: post }, index) => (
              <Card
                key={post.id}
                slug={post.slug}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
        </List>
      </div>
    )
  }
}

export default CardList
