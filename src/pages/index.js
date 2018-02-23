import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'

const Index = ({data}) =>  {

  const Wrapper = styled.div`
    padding: 2em 1.5em;
    margin: 0 auto;
    max-width: ${props => props.theme.sizes.maxWidth};
  `;

  const Header = styled.div`
    h1 {
      font-size: 1.5em;
      text-transform: capitalize;
      font-weight: 600;
      text-align: center;
      margin: 2rem 0 4rem;
      line-height: 1.25;
    }
    span {
      margin: 0 0 0 .25em;
    }
    a {
      transition: all .2s;
      color: ${props => props.theme.colors.base};
      &:hover {
        color: ${props => props.theme.colors.highlight};
      }
    }
  `;

  const Title = styled.h2`
    font-size: 3em;
    font-weight: 600;
    text-align: center;
    margin: 0 0 1em 0;
  `;

  const List = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 0 auto;
    &:after {
      content: "";
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        flex: 0 0 49%;
      }
      @media screen and (min-width: ${props => props.theme.responsive.medium}) {
        flex: 0 0 32%;
      }
    }
  `;

  const Card = styled.li`
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 2px;
    margin: 0 0 1em 0;
    width: 100%;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      flex: 0 0 49%;
    }
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      flex: 0 0 32%;
    }
  `;

  const PostLink = styled(Link)`
    display: flex;
    flex-flow: column;
    height: 100%;
    flex: 0 1 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;

    div {
      flex-grow: 1;
      width: 100%;
      height: 100%;
    }

    h3 {
      font-weight: 600;
      text-transform: capitalize;
      text-align: center;
      margin: 1em 0;
    }
  `;

  const posts = data.allContentfulPost.edges;

  return (
    <div>

      <Wrapper>

        <Header>
          <h1>A blog made with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a>, <a href="https://www.contentful.com/" target="_blank">Contentful</a> and <a href="https://www.netlify.com/" target="_blank">Netlify</a> <span>🎉</span></h1>
        </Header>

        {posts && (
          <List>
             {posts.map(({ node: post, index }) => (
                <Card key={post.id}>
                  <PostLink to={`/posts/${post.slug}/`}>
                    <Img sizes={post.heroImage.sizes} backgroundColor={'#EEEEEE'} />
                    <h3>{post.title}</h3>
                  </PostLink>
                </Card>
             ))}
          </List>
        )}

      </Wrapper>

    </div>
  )
}

export const query = graphql`
  query indexQuery {
    allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          title
          id
          slug
          heroImage {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
            }
          }
          publishDate
        }
      }
    }
  }
`

export default Index
