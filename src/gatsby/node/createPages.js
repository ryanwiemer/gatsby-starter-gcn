const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create a page for each "post"
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const prev = i === 0 ? null : posts[i - 1].node
    createPage({
      path: `/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    })
  })

  // Create a page containing all "posts" and paginate. This is usually the index page
  paginate({
    createPage,
    component: path.resolve(`./src/templates/posts.js`),
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerHomepage,
    itemsPerPage: config.siteMetadata.postsPerPage,
    pathPrefix: '/',
    context: {
      paginationPrefix: '/',
    },
  })

  // Create a page for each "page"
  const pagesQuery = await graphql(query.data.pages)
  const pages = pagesQuery.data.allContentfulPage.edges
  pages.forEach((page, i) => {
    createPage({
      path: `/${page.node.slug}/`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.node.slug,
      },
    })
  })

  // Create "tag" page and paginate
  const tagsQuery = await graphql(query.data.tags)
  const tags = tagsQuery.data.allContentfulTag.edges
  tags.forEach((tag, i) => {
    paginate({
      createPage,
      component: path.resolve(`./src/templates/tag.js`),
      items: tag.node.post || [],
      itemsPerPage: config.siteMetadata.postsPerPage,
      pathPrefix: `tag/${tag.node.slug}`,
      context: {
        slug: tag.node.slug,
        paginationPrefix: `tag/${tag.node.slug}`,
      },
    })
  })
}
