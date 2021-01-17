module.exports = {
  pathPrefix: `/gatsby-typescript-starter-minimalist`,
  siteMetadata: {
    title: `NM Style`,
    description: `Het kapsalon in regio Oudenaarde (Welden) voor alle leden van het gezin`,
    author: `Robin Wijnant`,
    navItems: [
      { title: "Home", href: "/" },
      { title: "Nieuws", href: "/nieuws" },
      { title: "Prijslijst", href: "/prijslijst" },
      { title: "Producten", href: "/producten" },
      { title: "Reviews", href: "/reviews" },
      { title: "Over", href: "/over" },
      { title: "Contact", href: "/contact" },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `NM Style - Beheer`,
        htmlFavicon: `src/assets/logo.jpg`,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NM Style`,
        /* eslint-disable @typescript-eslint/camelcase */
        short_name: `NM Style`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        /* eslint-enable @typescript-eslint/camelcase */
        display: `minimal-ui`,
        icon: `src/assets/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Cairo`,
              variants: [`400`, `500`, `600`, `700`],
            },
          ],
        },
      },
    },
  ],
};
