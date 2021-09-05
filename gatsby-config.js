module.exports = {
  siteMetadata: {
    siteUrl: "https://richkevan.com",
    title: "Rich Kevan Porfolio",
    menuLinks:[
      {
        name:'HOME',
        link:'/',
        icon:'campground'
      },
      {
        name:'PROJECTS',
        link:'/projects',
        icon:'shovel'
      },
      {
        name:'CONTACT',
        link:'/contact',
        icon:'fire-smoke'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-hotjar`,
    options: {
      includeInDevelopment: false, // optional parameter to include script in development
      id: 2569943,
      sv: 6,
    },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        // Your custom domain, defaults to `cdn.usefathom.com`
        trackingUrl: 'cdn.usefathom.com',
        // Unique site id
        siteId: 'XXMTEHMX'
      }
    }
  ],
};
