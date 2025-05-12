---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.ariadnelabs.org/wp-content/uploads/2022/05/uptodate-photo-e1653496340996-1568x1824.jpg',
    name: 'Dr. Tadiwos Hailu',
    title: 'Project Manager',
    links: [
      { icon: 'mailgun', link: 'mailto:drtadi2000@gmail.com', ariaLabel: "Email" }
    ]
  },
  {
    avatar: 'https://www.github.com/wuletawwonte.png',
    name: 'Wuletaw Wonte',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/wuletawwonte' },
      { icon: 'mailgun', link: 'mailto:wuletawwonte@gmail.com', ariaLabel: "Email" }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
