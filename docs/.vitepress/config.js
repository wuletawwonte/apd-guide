import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'APD User Guide',
  description: 'Academic Performance Dashboard — user manual for all roles.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/1-introduction/overview-of-apd' },
      { text: 'Our Team', link: '/team' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Overview of APD', link: '/1-introduction/overview-of-apd' },
          { text: 'Your college’s address & sign-in', link: '/1-introduction/your-academy-and-address' },
          { text: 'Roles and responsibilities', link: '/1-introduction/roles-in-apd' },
          { text: 'What the application includes', link: '/1-introduction/application-capabilities' },
          { text: 'Key features (summary)', link: '/1-introduction/key-features' },
          { text: 'Technical note (IT / support)', link: '/1-introduction/technical-note-for-support' },
        ],
      },
      {
        text: 'Students',
        collapsed: false,
        items: [
          { text: 'Getting started', link: '/2-students/getting-started' },
          { text: 'Account setup', link: '/2-students/setup-account' },
          { text: 'Login instructions', link: '/2-students/login-instructions' },
          { text: 'Quantitative survey', link: '/2-students/quantitative-survey-guide' },
          { text: 'Telegram integration', link: '/2-students/telegram-integration' },
        ],
      },
      {
        text: 'Staff & instructors',
        collapsed: false,
        items: [
          { text: 'Instructor guide', link: '/3-instructors/instructor-guide' },
          { text: 'Day-to-day tasks', link: '/3-instructors/day-to-day' },
          { text: 'Account setup', link: '/3-instructors/setup-account' },
          { text: 'Login instructions', link: '/3-instructors/login-instructions' },
        ],
      },
      {
        text: 'Department heads',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/4-department-heads/overview' },
          { text: 'Courses, activities & weeks', link: '/4-department-heads/courses-activities-and-weeks' },
          { text: 'Students & enrollments', link: '/4-department-heads/students-and-enrollments' },
        ],
      },
      {
        text: 'College administrators',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/5-academy-admins/overview' },
          { text: 'Departments, users & settings', link: '/5-academy-admins/departments-users-and-settings' },
        ],
      },
      {
        text: 'Education quality lead',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/6-quality-lead/overview' },
          { text: 'Surveys, checkpoints & statements', link: '/6-quality-lead/surveys-checkpoints-and-statements' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/wuletawwonte/apd-guide' }],

    footer: {
      message: 'APD — Academic Performance Dashboard',
      copyright: 'Copyright © 2019–present Wuletaw Wonte',
    },

    externalLinkIcon: true,
    search: {
      provider: 'local',
    },
  },
})
