import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from 'lodash.find'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostNavigation from '../components/PostNavigation'
import PostDate from '../components/PostDate'

const PrevLink = styled(Link)`
  margin-right: auto;
  order: 1;
`;

const NextLink = styled(Link)`
  margin-left: auto;
  order: 2;
`;

const PostTemplate = ({data}) => {

  const {
    title,
    id,
    slug,
    heroImage,
    description,
    body,
    author,
    publishDate,
    tags,
  } = data.contentfulPost;


  const postIndex = find(
    data.allContentfulPost.edges,
    ({ node: post }) => post.id === id
  );

  return(
    <div>

      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
        <meta property="og:title" content={`${title} - ${config.siteTitle}`} />
        <meta property="og:url" content={`${config.siteUrl}/${slug}/`} />
        <meta property="og:image" content={heroImage.sizes.src} />
      </Helmet>

      <Hero
        title={title}
        image={heroImage.sizes}
        height={'50vh'}
      />

      <Container>

        {tags && (<TagList tags={tags} />)}

        <PostDate date={publishDate}/>

        <PageBody body={body} />

        <PostNavigation>
          {postIndex.previous && (<PrevLink to={`/${postIndex.previous.slug}/`}>Prev Post</PrevLink>)}
          {postIndex.next && (<NextLink to={`/${postIndex.next.slug}/`}>Next Post</NextLink>)}
        </PostNavigation>

      </Container>

    </div>
  )
}

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: {eq: $slug}) {
      title
      id
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulPost(limit: 1000, sort: { fields: [publishDate], order: DESC })  {
      edges {
        node {
          id
        }
        previous {
          slug
          title
        }
        next {
          slug
          title
        }
      }
    }
  }
`

export default PostTemplate


/*

<PostNavigation previousLink={} >
  {postIndex.previous && (<PreviousLink to={`/${postIndex.previous.slug}/`}>Prev Post</PreviousLink>)}
  {postIndex.next && (<NextLink to={`/${postIndex.next.slug}/`}>Next Post</NextLink>)}
</PostNavigation>

*/
