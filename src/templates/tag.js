import React from 'react'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'

const TagTemplate = ({ data }) => {
  const { title, slug } = data.contentfulTag

  const posts = sortBy(data.contentfulTag.post, 'publishDate').reverse()

  return (
    <div>
      <Helmet>
        <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${title} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
      </Helmet>

      <Container>
        <PageTitle small>Tag: &ldquo;{title}&rdquo;</PageTitle>

        <CardList>
          {posts.map(post => (
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
    </div>
  )
}

export const query = graphql`
  query tagQuery($slug: String!) {
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
          sizes(maxWidth: 800) {
            ...GatsbyContentfulSizes_withWebp_noBase64
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
