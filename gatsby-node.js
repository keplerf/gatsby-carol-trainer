exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultPost = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (resultPost.errors) {
    resultPost.error("There was an error fetching posts", resultPost.errors)
  }

  const { allWpPost } = resultPost.data
  const { allWpPage } = resultPost.data

  // Define the template to use
  const template = require.resolve(`./src/templates/WpPost.js`)
  const templatePage = require.resolve(`./src/templates/WpPage.js`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      actions.createPage({
        path: `personal-trainer-article${post.uri}`,
        component: template,
        context: post,
      })
    })
  }
  if (allWpPage.nodes.length) {
    allWpPage.nodes.map(post => {
      actions.createPage({
        path: post.uri,
        component: templatePage,
        context: post,
      })
    })
  }
}
