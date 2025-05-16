import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WebAPD User Guide",
  description: "Academic Performance Dashboard User Guide.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/1-introduction/overview-of-webapd' },
      { text: 'Our Team', link: '/team' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview of WebAPD', link: '/1-introduction/overview-of-webapd' },
          { text: 'Key features', link: '/1-introduction/key-features' }
        ]
      },
      {
        text: 'Students',
        items: [
          { text: 'Getting started', link: '/2-students/getting-started' },
          { text: 'Account setup', link: '/2-students/setup-account' },
          { text: 'Login instructions', link: '/2-students/login-instructions' },
          { text: 'Quantitative survey', link: '/2-students/quantitative-survey-guide' },
          { text: 'Telegram integration', link: '/2-students/telegram-integration' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wuletawwonte/apd-guide' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" preserveAspectRatio="xMidYMid meet" viewBox="47 56.74 117 101.26" class="h-8 w-8 text-blue-800"><g transform="translate(0.000000,161.000000) scale(0.100000,-0.100000)" fill="#1e40af" stroke="none"><path d="M1021 1000 l-32 -52 76 -130 c41 -71 75 -134 75 -139 0 -6 -20 -45 -45 -88 -25 -43 -45 -84 -45 -92 1 -8 60 -115 133 -239 l132 -225 163 -3 c89 -1 162 1 162 6 0 11 -558 982 -575 1000 -10 11 -18 4 -44 -38z m321 -663 l108 -188 -37 3 c-37 3 -38 5 -135 172 -54 93 -98 174 -98 180 0 6 7 22 16 35 16 22 17 23 27 5 6 -11 59 -104 119 -207z"></path><path d="M921 825 l-30 -58 58 -99 58 -100 32 57 32 57 -59 100 -60 100 -31 -57z"></path><path d="M837 678 c-48 -77 -367 -632 -367 -639 0 -5 44 -9 98 -9 l97 0 33 54 c17 30 32 57 32 60 0 3 -16 6 -34 6 l-35 0 91 158 c50 86 93 160 97 164 5 5 173 -273 189 -313 2 -4 -12 -9 -32 -11 l-34 -3 32 -55 32 -55 97 -3 c61 -2 97 1 97 7 0 6 -85 157 -189 336 -183 314 -190 325 -204 303z"></path></g></svg>'
        },
        link: 'https://webapd.top'
      }
    ],

    footer: {
      message: "WebAPD - Academic Performance Dashboard",
      copyright: "Copyright © 2019-present Wuletaw Wonte"
    },

    externalLinkIcon: true,
    search: {
      provider: 'local'
    }
  }
})
