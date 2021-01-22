const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  pathPrefix: '/app',
  siteMetadata: {
    title: `RIORDAN ALFREDO`,
    author: {
      name: `Riordan Dervin Alfredo`,
      summary: `Riordan D. Alfredo (Rio) is a full-stack software engineer and software educator 🦥. He is passionate about sharing ideas in business, software, and learning. He loves to bring the best out of people to achieve their dreams & goals. Hobbies including astrology, psychology, playing games (D&D, WoW, and Dota).`,
    },
    social: {
      instagram: `riordanalfredo`,
      twitter: `riordanalfredo`,
      linkedin: `riordan-alfredo`,
    },
    description: `Full-stack software engineer (React-Django), software educator, and avid reader.`,
    siteUrl: `https://riordanalfredo.github.io/personal-blog`,
    defaultImage: 'images/bg.jpeg',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Riordan`,
        short_name: `rio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    //For firebase later
    // {
    //   resolve: 'gatsby-plugin-firebase',
    //   options: {
    //     credentials: {
    //       apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    //       authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    //       projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    //       storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    //       messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    //       appId: process.env.GATSBY_FIREBASE_APP_ID,
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    'gatsby-plugin-dark-mode',
    `gatsby-plugin-postcss`,
  ],
}
