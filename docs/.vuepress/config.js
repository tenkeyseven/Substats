module.exports = {
  title: 'Substats Docs',
  description: 'Serverless Function to Count How Many People are Subscribed to You in Your Favorite Services',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
  ],
  themeConfig: {
    logo: '/img/substats.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Builder', link: '/builder.md' },
      { text: 'Contribute', link: '/dev.md' },
      { text: 'GitHub', link: 'https://github.com/spencerwooo/Substats' },
    ],
    sidebar: [['/', 'Home'], '/query.md', '/api.md'],
    sidebarDepth: 3,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
  },
}
