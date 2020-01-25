import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaData {
        site {
          siteMetadata {
            title
            description
            url
            twitter
            image
            menuLinks {
              name
              slug
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
