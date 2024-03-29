const path = require('path')

const title = `Chemistry Blog`

module.exports = {
  siteMetadata: {
    title,
    titleTemplate: `%s | ${title}`,
    author: `Sidney Elmer`,
    description: `A blog about chemistry, as you may imagine`,
    image: path.join(__dirname, 'src', 'images', 'seo.png'),
    twitterUsername: `sidneypaulymer`
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, 'src', 'images'),
        name: `images`
      }
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET,
        objectTypes: ['posts','settings'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY,
        },
        localMedia: true
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-163100169-1",
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
