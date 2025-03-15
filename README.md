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
  details: 深耕 Java 开发，积累 3 年软开实战经验，探索 NAS、内网穿透等技术，构建多个高效稳定的系统。  
- title: 当下
  details: 分享优质开源项目、Java 源码解析、NAS 私有云搭建以及实用技术，助力开发者少踩坑、多成长。  
- title: 未来
  details: 搭建一个技术分享与交流的平台，汇聚志同道合的开发者，共同探索更高效、更智能的技术方案。  
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