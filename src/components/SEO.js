import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

class SEO extends Component {
  render() {
    const { postNode, pagePath, postSEO, pageSEO, customTitle } = this.props
    let title
    let description
    let image
    let imgWidth
    let imgHeight
    let pageUrl

    // Set Default OpenGraph Parameters for Fallback
    title = config.siteTitle
    description = config.siteDescription
    image = config.siteUrl + config.shareImage
    imgWidth = config.shareImageWidth
    imgHeight = config.shareImageHeight
    pageUrl = config.siteUrl

    if (customTitle) {
      title = postNode.title
      pageUrl = config.siteUrl + '/' + pagePath + '/'
    }

    // Replace with Page Parameters if post or page
    if (postSEO || pageSEO) {
      title = postNode.title
      description =
        postNode.metaDescription === null
          ? postNode.body.childMarkdownRemark.excerpt
          : postNode.metaDescription.internal.content

      pageUrl = config.siteUrl + '/' + pagePath + '/'
    }
    // Use Hero Image for OpenGraph
    if (postSEO) {
      image = 'https:' + postNode.heroImage.ogimg.src
      imgWidth = postNode.heroImage.ogimg.width
      imgHeight = postNode.heroImage.ogimg.height
    }

    // Default Website Schema
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: config.siteUrl,
        name: config.siteTitle,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      },
    ]

    // Blog Post Schema
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
                '@id': config.siteUrl,
                name: config.siteTitle,
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': pageUrl,
                name: title,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: pageUrl,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
            width: imgWidth,
            height: imgHeight,
          },
          author: {
            '@type': 'Person',
            name: config.author,
            url: config.authorUrl,
          },
          publisher: {
            '@type': 'Organization',
            name: config.publisher,
            url: config.siteUrl,
          },
          datePublished: postNode.publishDateISO,
          mainEntityOfPage: pageUrl,
        }
      )
    }

    // Page SEO Schema
    if (pageSEO) {
      schemaOrgJSONLD.push({
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        url: pageUrl,
        name: title,
      })
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

        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content={imgWidth} />
        <meta property="og:image:height" content={imgHeight} />
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
