import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props
    let title
    let description
    let image
    let postURL
    if (postSEO) {
      title = postNode.title
      description =
        postNode.metaDescription === null
          ? postNode.body.childMarkdownRemark.excerpt
          : postNode.metaDescription
      image = postNode.heroImage.sizes.src
      postURL = config.siteUrl + '/' + postPath
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = config.siteLogo
    }

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: config.siteUrl,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: config.siteUrl,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        }
      )
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="image" content={image} />
        <meta name="description" content={description} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:title" content={title} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:url" content={postSEO ? postURL : config.siteUrl} />
        {postSEO ? <meta property="og:image" content={image} /> : null}
        <meta property="og:description" content={description} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ''}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    )
  }
}

export default SEO
