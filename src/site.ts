// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  title: 'Vue Designer',
  description: 'Vue Designer PrimeVue Tailwind CSS - Quick start template',
  logo: 'i-vscode-icons:file-type-coffeelint',
  author: 'Pinegrow',
  url: 'https://pg-vue-primevue-tailwindcss.netlify.app',
  github: 'https://github.com/pinegrow/pg-vue-primevue-tailwindcss',
  ogImageUrl: 'og-image.jpg', // absolute url (or) from public folder
  generator: 'https://vuedesigner.com',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Quick Start',
        icon: 'i-mdi-home',
        to: '/quick-start',
      },
    ],
    secondary: [
      {
        title: 'Subscribe',
        icon: 'i-mdi-home',
        to: '/subscribe',
      },
    ],
  },
}
