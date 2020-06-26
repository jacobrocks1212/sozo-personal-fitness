module.exports = {
  siteMetadata: {
    title: "Sozo Personal Fitness",
    description: "Website for Sozo Personal Fitness",
    author: "Jacob Madsen",
    phone_number: "(803)-941-7108",
    email: "sozofitnessgym@gmail.com",
    address: "230 Columbia Avenue, Chapin 29036",
    mission_statement: "Mission statement",
    trainer_bio_kara:
      "Stacey has been a lover of fitness, working out and playing sports since she was a little girl. She enjoys taking on new physical challenges like mud runs, learning new sports (favorite is beach volleyball), and she was even on the show Wipeout. She believes everyone has a special unique quality and that the comparison trap can easily keep us from seeing all the amazing attributes God has given us. She chooses daily to be thankful for all that she has instead of focusing on everything she lacks, and she wants to share her knowledge of fitness and gratitude with those around her. She has a BS degree from USC in Exercise Science and has been a certified personal trainer since 1999. She also has a sports nutrition certification and is certified in CPR and AED through American Red Cross. Stacey has been married for over 17 years and has two amazing teenage sons. She values living a balanced life enjoying relationships with people, rather than striving for perfection which usually leads to always wanting more.",
    trainer_bio_stacey:
      "Stacey has been a lover of fitness, working out and playing sports since she was a little girl. She enjoys taking on new physical challenges like mud runs, learning new sports (favorite is beach volleyball), and she was even on the show Wipeout. She believes everyone has a special unique quality and that the comparison trap can easily keep us from seeing all the amazing attributes God has given us. She chooses daily to be thankful for all that she has instead of focusing on everything she lacks, and she wants to share her knowledge of fitness and gratitude with those around her. She has a BS degree from USC in Exercise Science and has been a certified personal trainer since 1999. She also has a sports nutrition certification and is certified in CPR and AED through American Red Cross. Stacey has been married for over 17 years and has two amazing teenage sons. She values living a balanced life enjoying relationships with people, rather than striving for perfection which usually leads to always wanting more.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sozo-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
