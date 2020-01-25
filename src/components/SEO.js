import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, image, slug }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitter
          }
        }
      }
    `
  )

  const defaultImage = `${site.siteMetadata.url}/${site.siteMetadata.image}`
  const defaultUrl = site.siteMetadata.url
  const metaDescription = description || site.siteMetadata.description
  const metaImage = image || defaultImage
  const metaUrl = slug ? `${defaultUrl}/${slug}` : defaultUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    >
      <Helmet>
        {/* General tags */}
        <meta name="image" content={image} />
        <meta name="description" content={metaDescription} />

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:description" content={metaDescription} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={site.siteMetadata.twitter ? site.siteMetadata.twitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>
    </Helmet>
  )
}

export default SEO
