import React from 'react'
import CardList from '../components/CardList'
import Container from '../components/Container'
import PageTitle, { PageTitleSmall } from '../components/PageTitle'
import SEO from '../components/SEO'
import Search from '../components/Search'

class IndexPage extends React.Component {
  // Search properties
  constructor(props) {
    super(props)
    this.state = { results: null }
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(text, results) {
    this.setState({ results: results })
  }

  render() {
    const results = this.state.results
    const data = this.props.data
    const posts = data.allContentfulPost.edges
    var searchCount = 'All Posts'
    if (results && results.length > 0) {
      this.searchCount = results.length + ' search results'
    } else {
      this.searchCount = 'All Posts'
    }

    return (
      <div>
        <SEO />
        <Search data={data.siteSearchIndex} onSearch={this.onSearch} />
        <Container>
          <PageTitle>
            <a
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            ,{' '}
            <a
              href="https://www.contentful.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contentful
            </a>{' '}
            and{' '}
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{' '}
            <span>🎉</span>
          </PageTitle>
          <CardList
            posts={posts}
            searchData={data.siteSearchIndex}
            results={results}
          />
          <PageTitleSmall>{this.searchCount}</PageTitleSmall>
        </Container>
      </div>
    )
  }
}

export const query = graphql`
  query indexQuery {
    siteSearchIndex {
      index
    }
    allContentfulPost(
      limit: 1000
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            sizes(maxWidth: 1800) {
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
  }
`

export default IndexPage
