module.exports = {
  siteMetadata: {
    title: `Carol Personal Trainer - Vancouver BC Canada`,
    description: `Fitness and Workout - Vancouver BC Canada`,
    author: `Kepler Fontenele`,
    siteUrl: `https://caroltrainer.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        // display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: process.env.WPGRAPHQL_URL || `http://localhost:8888/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
        type: {
          __all: {
            limit: process.env.NODE_ENV === `development` ? 50 : null,
          },
        },
      },
    },
  ],
}
