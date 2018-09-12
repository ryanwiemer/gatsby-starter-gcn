const path = require(`path`)
const _ = require ('lodash')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
              tags
            }
          }
        }
      }
    `).then(result => {


      const posts = result.data.allContentfulPost.edges // Array of posts from Contentful
      const postsPerPage = 1 // Number of posts shown per page
      const numPages = Math.ceil(posts.length / postsPerPage)


      const indexTemplate = path.resolve(`./src/templates/index.js`) // Template used for index
      const tagTemplate = path.resolve(`./src/templates/tag.js`) // Template used for tag

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/` : `/${i + 1}`,
          component: indexTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, index) => {
        const prev = index === 0 ? null : posts[index - 1].node
        const next = index === posts.length - 1 ? null : posts[index + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })









      // Create each tag
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach((edge, index) => {
          if (_.get(edge, "node.tags")) {
            tags = tags.concat(edge.node.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag.toLowerCase())}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })


      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadPages])
}
