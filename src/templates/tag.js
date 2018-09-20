import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'

class TagTemplate extends React.Component {

  render() {
    const { title, slug } = this.props.data.contentfulTag
    const posts = sortBy(
      this.props.data.contentfulTag.post,
      'publishDate'
    ).reverse()
    const numberOfPosts = posts.length

    const skip = this.props.pageContext.skip
    const limit = this.props.pageContext.limit
    const currentPage = this.props.pageContext.currentPage

    console.log(this.props.pageContext)

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
            {posts.slice(skip, limit * currentPage).map(post => (
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
