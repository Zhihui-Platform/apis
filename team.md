---
layout: page
---

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from "vitepress/theme";


const members = [
  {
    "avatar": "https://avatars.githubusercontent.com/u/54303040?v=4",
    "name": "Wu Chengyu",
    "title": "Maintainer",
    "links": [
      {
        "icon": "github",
        "link": "https://github.com/7086cmd/"
      },
      {
        "icon": "twitter",
        "link": "https://twitter.com/7086cmd"
      }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      团队使用亲身经历体验，致力于打造简单、优雅、易用、高效、一体化的智会平台，为学校的智能提供智而会的解决方案。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members" />
</VPTeamPage>
