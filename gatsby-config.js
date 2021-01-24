module.exports = {
  pathPrefix: `/gatsby-typescript-starter-minimalist`,
  siteMetadata: {
    title: `NM Style`,
    description: `Het kapsalon in regio Oudenaarde (Welden) voor alle leden van het gezin`,
    author: `Robin Wijnant`,
    siteUrl: "https://nm-style.be",
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
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Cairo`,
              variants: [`300`, `400`, `500`, `600`],
            },
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlTitle: `NM Style - Beheer`,
        htmlFavicon: `src/assets/logo-square.png`,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
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
        icon: `src/assets/logo-square.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-2CKM4CRT42"],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          { userAgent: "*", allow: "/", disallow: ["/admin", "/admin/*"] },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://connect.facebook.net/nl_BE/sdk.js",
        async: "",
        defer: "",
        crossorigin: "anonymous",
      },
    },
  ],
};
