require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-Z5FXTSWL4R",
      },
    },
  ],
};
