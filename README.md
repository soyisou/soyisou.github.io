---
home: true
modules:
  - BannerBrand
  - Features
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg'
  title: AcJava
  description: '铭轩的个人博客'
  tagline: 计算机硕士 · 3年软开实战经验 · 技术博主 · NAS发烧友。专注于NAS私有云搭建与内网穿透技术，曾亲手构建多个家庭与企业级NAS系统，拥有丰富的实战经验。
  buttons:
    - { text: Guide, link: '/docs/guide/introduce' }
    - { text: 主题配置, link: '/docs/theme/series', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/soyisou/soyisou.github.io' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/recoluan' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
footer:
  startYear: 2024
features:
- title: 过去
  details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
- title: 当下
  details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
- title: 未来
  details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 快速开始

::: tip
前往 [这里](/docs/guide/gui-builder.html) 体验全新可视化搭建脚手架。
:::

**npx**

```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```