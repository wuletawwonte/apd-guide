import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'APD User Guide',
  description: 'Academic Performance Dashboard — simple, step-by-step help for every role.',
  cleanUrls: true,
  // Same icons as the APD app (apd/app/views/shared/_head_import_tags.html.erb).
  head: [
    ['link', { rel: 'icon', href: '/icon.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/icon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon.png' }],
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start here', link: '/1-introduction/overview-of-apd' },
      {
        text: 'Guides by role',
        items: [
          { text: 'Students', link: '/2-students/getting-started' },
          { text: 'Instructors', link: '/3-instructors/instructor-guide' },
          { text: 'Department heads', link: '/4-department-heads/overview' },
          { text: 'Academy admins', link: '/5-academy-admins/overview' },
          { text: 'Education quality leads', link: '/6-quality-lead/overview' },
          { text: 'Deans', link: '/7-deans/overview' },
          { text: 'Presidents', link: '/8-presidents/overview' },
        ],
      },
      { text: 'FAQ', link: '/1-introduction/faq' },
      { text: 'Our Team', link: '/team' },
    ],

    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'What is APD?', link: '/1-introduction/overview-of-apd' },
          { text: 'Open APD and sign in', link: '/1-introduction/your-academy-and-address' },
          { text: 'Words you will see', link: '/1-introduction/key-concepts' },
          { text: 'Roles in APD', link: '/1-introduction/roles-in-apd' },
          { text: 'Features every staff member uses', link: '/1-introduction/common-features' },
          { text: 'Common problems and questions', link: '/1-introduction/faq' },
        ],
      },
      {
        text: 'Students',
        collapsed: false,
        items: [
          { text: 'Welcome, students', link: '/2-students/getting-started' },
          { text: 'Create your account', link: '/2-students/setup-account' },
          { text: 'Sign in and sign out', link: '/2-students/login-instructions' },
          { text: 'Your home page', link: '/2-students/dashboard' },
          { text: 'Report class sessions', link: '/2-students/report-class-sessions' },
          { text: 'Qualitative survey (course feedback)', link: '/2-students/qualitative-survey' },
          { text: 'Notifications', link: '/2-students/notifications' },
          { text: 'Profile, departments & password', link: '/2-students/profile-and-password' },
          { text: 'Report through Telegram', link: '/2-students/telegram-integration' },
        ],
      },
      {
        text: 'Instructors',
        collapsed: true,
        items: [
          { text: 'Getting started', link: '/3-instructors/instructor-guide' },
          { text: 'Create a staff account', link: '/3-instructors/setup-account' },
          { text: 'Sign in to APD', link: '/3-instructors/login-instructions' },
          { text: 'Your home page', link: '/3-instructors/home-page' },
          { text: 'My activities and feedback', link: '/3-instructors/my-activities' },
          { text: 'Browse your department', link: '/3-instructors/browsing-department' },
          { text: 'Request department head access', link: '/3-instructors/request-department-head-access' },
        ],
      },
      {
        text: 'Department heads',
        collapsed: true,
        items: [
          { text: 'Start here (dashboard & home)', link: '/4-department-heads/overview' },
          { text: 'Department overview (analytics)', link: '/4-department-heads/department-overview' },
          { text: 'Activity types', link: '/4-department-heads/activity-types' },
          { text: 'Curriculum courses', link: '/4-department-heads/curriculum-courses' },
          { text: 'Manage courses', link: '/4-department-heads/courses' },
          { text: 'Manage activities', link: '/4-department-heads/activities' },
          { text: 'Plan and manage activity weeks', link: '/4-department-heads/activity-weeks' },
          { text: 'Students and enrollments', link: '/4-department-heads/students-and-enrollments' },
          { text: 'Instructors', link: '/4-department-heads/instructors' },
          { text: 'Give weekly performance feedback', link: '/4-department-heads/performance-feedback' },
          { text: 'Close and submit a course', link: '/4-department-heads/submit-for-approval' },
          { text: 'Read course analytics', link: '/4-department-heads/course-analytics' },
        ],
      },
      {
        text: 'Academy admins',
        collapsed: true,
        items: [
          { text: 'Overview & dashboard', link: '/5-academy-admins/overview' },
          { text: 'Departments', link: '/5-academy-admins/departments' },
          { text: 'Staff users', link: '/5-academy-admins/staff-users' },
          { text: 'Students', link: '/5-academy-admins/students' },
          { text: 'Announcements', link: '/5-academy-admins/announcements' },
          { text: 'Academy settings', link: '/5-academy-admins/academy-settings' },
          { text: 'Audit log', link: '/5-academy-admins/audit-log' },
          { text: 'Head access requests', link: '/5-academy-admins/head-access-requests' },
        ],
      },
      {
        text: 'Education quality leads',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/6-quality-lead/overview' },
          { text: 'Approve or return courses', link: '/6-quality-lead/course-approvals' },
          { text: 'Survey settings & checkpoints', link: '/6-quality-lead/qualitative-survey-setup' },
          { text: 'Statements & answer options', link: '/6-quality-lead/statements-and-options' },
          { text: 'View departments & curriculum', link: '/6-quality-lead/viewing-departments' },
          { text: 'Head access requests', link: '/6-quality-lead/head-access-requests' },
        ],
      },
      {
        text: 'Deans',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/7-deans/overview' },
          { text: 'The Dean dashboard', link: '/7-deans/dean-dashboard' },
          { text: 'Browse departments & courses', link: '/7-deans/browsing-departments' },
        ],
      },
      {
        text: 'Presidents',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/8-presidents/overview' },
          { text: 'Institution dashboard', link: '/8-presidents/institution-dashboard' },
          { text: 'Look at one academy', link: '/8-presidents/academy-details' },
          { text: 'Reports & weekly email', link: '/8-presidents/reports-and-weekly-email' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/wuletawwonte/apd-guide' }],

    footer: {
      message: 'APD — Academic Performance Dashboard',
      copyright: 'Copyright © 2019–present Wuletaw Wonte',
    },

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    externalLinkIcon: true,
    search: {
      provider: 'local',
    },
  },
})
