import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {isFirstPage ? (
          <CardList>
            <Card
              featured
              height={'200px'}
              key={featuredPost.id}
              slug={featuredPost.slug}
              image={featuredPost.heroImage}
              title={featuredPost.title}
              date={featuredPost.publishDate}
              excerpt={featuredPost.body}
            />
            {posts.slice(1).map(({ node: post }) => (
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
        ) : (
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
        )}
        <Pagination context={pageContext} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
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
  }
`

export default Index
