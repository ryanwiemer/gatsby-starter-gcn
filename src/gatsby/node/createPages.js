const config = require('../../../gatsby-config')
const query = require('../data/query')
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const basePath = config.siteMetadata.basePath || '/'

  // Create a page for each "post"
  const postsQuery = await graphql(query.data.posts)
  const posts = postsQuery.data.allContentfulPost.edges
  posts.forEach((post, i) => {
    const next = i === posts.length - 1 ? null : posts[i + 1].node
    const prev = i === 0 ? null : posts[i - 1].node

    createPage({
      path: `${basePath === '/' ? '' : basePath}/${post.node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        basePath: basePath === '/' ? '' : basePath,
        prev,
        next,
      },
    })
  })

  // Create a page containing all "posts" and paginate.
  paginate({
    createPage,
    component: path.resolve(`./src/templates/posts.js`),
    items: posts,
    itemsPerFirstPage: config.siteMetadata.postsPerFirstPage || 7,
    itemsPerPage: config.siteMetadata.postsPerPage || 6,
    pathPrefix: basePath,
    context: {
      basePath: basePath === '/' ? '' : basePath,
      paginationPath: basePath === '/' ? '' : `/${basePath}`,
    },
  })

  // Create "tag" page and paginate
  const tagsQuery = await graphql(query.data.tags)
  const tags = tagsQuery.data.allContentfulTag.edges

  tags.forEach((tag, i) => {
    const tagPagination =
      basePath === '/'
        ? `/tag/${tag.node.slug}`
        : `/${basePath}/tag/${tag.node.slug}`

    paginate({
      createPage,
      component: path.resolve(`./src/templates/tag.js`),
      items: tag.node.post || [],
      itemsPerPage: config.siteMetadata.postsPerPage || 6,
      pathPrefix: tagPagination,
      context: {
        slug: tag.node.slug,
        basePath: basePath === '/' ? '' : basePath,
        paginationPath: tagPagination,
      },
    })
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
}
