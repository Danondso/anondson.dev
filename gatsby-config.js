module.exports = {
  siteMetadata: {
    title: 'Personal site for Dublin Anondson; anondson.dev',
    description: 'The third or 4th iteration of my personal site, this time it\'s written in Gatsby!',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // removing plugin-manifest because it straight up doesn't play nice with the favicon path
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'gatsby-starter-default',
    //     icon: 'src/images/favicon.png',
    //     short_name: 'starter',
    //     start_url: '/',
    //     display: 'minimal-ui', // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
