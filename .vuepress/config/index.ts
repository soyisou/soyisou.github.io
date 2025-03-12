import * as zhConfig from "./zh";
import * as enConfig from "./en";
import { RecoThemeData } from "vuepress-theme-reco/lib/types";

export const themeConfig: RecoThemeData = {
  logo: "/logo.png",
  author: "铭轩",
  authorAvatar: "/head.png",
  docsRepo: "https://github.com/soyisou/soyisou.github.io",
  docsBranch: "main",
  docsDir: '/docs',
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
    "/docs/plugins/": ["page", "comments", "vue-previews", "bulletin-popover"],
  },
  navbar: [
    { text: "首页", link: "/", icon: "IconHome" },
    { text: "搜一搜", link: "https://soyisou.cn", icon: "IconHome" },
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
    // { text: "案例", link: "/docs/others/examples", icon: "IconFire" },
    { text: "留言板", link: "/docs/message-board", icon: "IconChat" },
  ],
  algolia: {
    appId: "38R2J3MTQC",
    apiKey: "583d3caf699630b08a9bc2d12d599701",
    indexName: "v2-vuepress-reco-recoluan",
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
};
