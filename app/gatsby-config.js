const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  pathPrefix: '/app',
  siteMetadata: {
    title: `Riordan Alfredo`,
    author: {
      name: `Riordan Dervin Alfredo`,
      summary: `Riordan Alfredo is a software engineering educator,  developer, and learning analytics researcher. He is passionate about education and technology, such as human-centred design, learning analytics, AI-literacy, and learning design. Moreover, he has hobbies that are not limited to playing golf and games (D&D, WoW, and Dota2).`,
    },
    social: {
      instagram: `riordanalfredo`,
      twitter: `riordanalfredo`,
      linkedin: `riordan-alfredo`,
    },
    description: `PhD student & Teaching Associate @ Monash University | BSE(Hons), GradDipMgt(Learning)`,
    siteUrl: `https://rioalfredo.com`,
    defaultImage: '/images/web-meta.png',
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID, // Google Analytics / GA
    //       'AW-CONVERSION_ID', // Google Ads / Adwords / AW
    //       'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
    //     ],
    //     // This object gets passed directly to the gtag config command
    //     // This config will be shared across all trackingIds
    //     gtagConfig: {
    //       optimize_id: 'OPT_CONTAINER_ID',
    //       anonymize_ip: true,
    //       cookie_expires: 0,
    //     },
    //     // This object is used for configuration specific to this plugin
    //     pluginConfig: {
    //       // Puts tracking script in the head instead of the body
    //       head: false,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //       // Avoids sending pageview hits from custom paths
    //       exclude: ['/about-me'],
    //       // Defaults to https://www.googletagmanager.com
    //       // origin: 'https://www.googletagmanager.com',
    //       // Delays processing pageview events on route update (in milliseconds)
    //       delayOnRouteUpdate: 0,
    //     },
    //   },
    // },
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
              maxWidth: 880,
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
        name: `Riordan Alfredo`,
        short_name: `Personal Blog`,
        start_url: `/`,
        background_color: `#1e1e1e`,
        theme_color: `#c39d63`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
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
    // `gatsby-plugin-offline`,
    // 'gatsby-plugin-dark-mode', // Removed!
    `gatsby-plugin-postcss`,
  ],
}
