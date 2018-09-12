import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'
import kebabCase from 'lodash/kebabCase'

const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const posts = data.allContentfulPost.edges

  return (
    <Layout>
      <Helmet>
        <title>{`Tag: ${tag} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${tag} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/tag/${kebabCase(tag.toLowerCase())}/`} />
      </Helmet>

      <Container>
        <PageTitle small>
          Tag: &ldquo;
          {tag}
          &rdquo;
        </PageTitle>

        <CardList>
          {posts.map(({ node: post }) => (
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
      </Container>
    </Layout>
  )
}

export const query = graphql`
query ($tag: String) {
  allContentfulPost(
    sort: { fields: [publishDate], order: DESC }
    filter: { tags: { in: [$tag] } }
  ) {
    totalCount
    edges {
      node {
        title
        id
        slug
        tags
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
}
`

export default TagTemplate
