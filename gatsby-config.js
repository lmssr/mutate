 module.exports = {
  siteMetadata: {
    title: "mutate.",
    description: "Un blog qui parle de code, de sport et de Lifestyle",
    url: "https://mutate.com",
    image: "/sand.jpg",
    twitterUsername: "@Luc_Mosser",
    author: "Luc Mosser",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            oprions: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options:{
        fonts: [
          `roboto mono`,
          `alice\:400, 400i, 700, 700i`,
          `seoulhangang\:400, 400i, 700, 700i`
        ],
        display: 'swap',
      },
    },
  ],
}
