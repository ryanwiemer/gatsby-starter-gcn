import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Body from '../components/body'

const PageTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    body,
  } = data.contentfulPage;

  const Title = styled.h2`
    font-size: 3em;
    font-weight: 600;
    text-align: center;
    margin: 0 0 2rem 0;
  `;

  const Page = styled.section`
    margin: 0 auto;
    max-width: 650px;
    padding: 3em 1.5em 2em;
  `;

  return(
    <div>

    <Helmet>
      <title>{`${title} - ${config.siteTitle}`}</title>
      <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
      <meta property="og:url" content={`${config.siteUrl + config.pathPrefix}${slug}/`} />
    </Helmet>

    <Page>
      <Title>{title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }} />
    </Page>

  </div>
  )
}

export const query = graphql`
  query pageQuery($slug: String!) {
    contentfulPage(slug: {eq: $slug}) {
      title
      id
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PageTemplate
