import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'

const LoadButton = styled.div`
  margin: 0 auto;
  display: inline-flex;
  cursor: pointer;
  background: ${props => props.theme.colors.base};
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    background: ${props => props.theme.colors.highlight};
  }

  svg {
    margin: 0 0 0 0.5rem;
    fill: white;
    border: 1px solid white;
    border-radius: 50%;
  }
`

class TagTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: config.postsPerPage,
    }
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + config.postsPerPage }
    })
  }

  render() {
    const { title, slug } = this.props.data.contentfulTag
    const posts = sortBy(
      this.props.data.contentfulTag.post,
      'publishDate'
    ).reverse()
    const numberOfPosts = posts.length

    return (
      <Layout>
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>

        <Container>
          <PageTitle small>
            {numberOfPosts} Posts Tagged: &ldquo;
            {title}
            &rdquo;
          </PageTitle>

          <CardList>
            {posts.slice(0, this.state.visible).map(post => (
              <Card
                key={post.id}
                slug={post.slug}
                image={post.heroImage}
                title={post.title}
                date={post.publishDate}
                excerpt={post.body}
              />
            ))}
          </CardList>
          {this.state.visible < numberOfPosts && (
            <div style={{ textAlign: 'center' }}>
              <LoadButton onClick={this.loadMore}>
                Load More Posts...
              </LoadButton>
            </div>
          )}
        </Container>
      </Layout>
    )
  }
}
export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 80)
          }
        }
      }
    }
  }
`

export default TagTemplate
