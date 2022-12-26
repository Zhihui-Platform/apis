import { defineConfig } from "vitepress";

import nav from "./nav"
import sidebar from "./sidebar"

export default defineConfig({
  title: "智会平台 API 指南",
  themeConfig: {
    nav,
    sidebar,
    localeLinks: {
      text: "简体中文",
      items: [
        { text: "English", link: "https://en-zhihui-platform-api.vercel.app" },
      ],
    },
    footer: {
      message: "MIT Licensed.",
      copyright: "Copyright © 2022-present Zhihui Platform Developer Team",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Zhihui-Platform",
      },
    ],
    editLink: {
      pattern: "https://github.com/Zhihui-Platform/apis/edit/main/:path",
      text: "编辑页面内容",
    },
    docFooter: {
      prev: "上一章",
      next: "下一章",
    },
    lastUpdatedText: "本文最后更改日期",
    outlineTitle: "本文目录",
  },
  lastUpdated: true,
  lang: "zh-CN",
  cleanUrls: "without-subfolders",
});
