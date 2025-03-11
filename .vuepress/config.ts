import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "AcJava",
  description: "AcJava让Java更简单",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "铭轩",
    authorAvatar: "/head.png",
    docsRepo: "https://github.com/soyisou/soyisou.github.io",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/guide/": [
        "introduce",
        "getting-started",
        "gui-builder",
        "package-manager",
        "custom-style",
        "style",
        "icon",
        "bundler",
        "builtin-page",
        "folder-specification",
        "register-components",
        "register-layouts",
        "contribute",
      ],
      "/docs/theme/": [
        {
          text: "Frontmatter",
          children: ["frontmatter-home", "frontmatter-page"],
        },
        {
          text: "主题配置",
          children: [
            {
              text: "Locale 配置",
              children: [
                "home",
                "source-dir",
                "git",
                "series",
                "navbar",
                "comments",
                "bulletin-popover",
                "password",
                "appearance",
                "social-links",
                "pages",
                "doc-search",
                "auto-set-category",
                "auto-set-series",
                "custom-primary-color",
              ],
            },
            {
              text: "多语言",
              children: ["multilingual"],
            },
          ],
        },
        {
          text: "Markdown 扩展",
          children: [
            "custom-container",
            "markdown-task",
            "markdown-vue-preview",
            "markdown-file-parse",
          ],
        },
      ],
      "/docs/plugins/": [
        "page",
        "comments",
        "vue-previews",
        "bulletin-popover",
      ],
    },
    navbar: [
      { text: "首页", link: "/", icon: "IconHome" },
      { text: "指南", link: "/docs/guide/introduce", icon: "IconCompass" },
      {
        text: "参考",
        icon: "IconDocument",
        children: [
          {
            text: "配置",
            children: [
              {
                text: "Vuepress 配置",
                link: "https://v2.vuepress.vuejs.org/zh/reference/config.html",
              },
              { text: "Frontmatter", link: "/docs/theme/frontmatter-home" },
              { text: "主题配置", link: "/docs/theme/home" },
              { text: "Markdown 扩展", link: "/docs/theme/custom-container" },
            ],
          },
          {
            text: "插件",
            children: [
              { text: "page", link: "/docs/plugins/page" },
              { text: "comments", link: "/docs/plugins/comments" },
              { text: "vue-previews", link: "/docs/plugins/vue-previews" },
              {
                text: "bulletin-popover",
                link: "/docs/plugins/bulletin-popover",
              },
            ],
          },
        ],
      },
      {
        text: "版本",
        icon: "IconSubVolume",
        children: [
          {
            text: "2.x(rc)",
            link: "https://vuepress-theme-reco.recoluan.com/",
          },
          {
            text: "1.x",
            link: "http://v1.vuepress-reco.recoluan.com/views/1.x/",
          },
        ],
      },
      { text: "博客", link: "/posts", icon: "IconDocumentAttachment" },
      { text: "案例", link: "/docs/others/examples", icon: "IconFire" },
      { text: "留言板", link: "/docs/message-board", icon: "IconChat" },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1037296104</li>
            <li>QQ群2：1061561395</li>
            <li>QQ群3：962687802</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
