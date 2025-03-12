import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from './config/index';
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
export default defineUserConfig({
  title: "AcJava",
  description: "AcJava让Java更简单",
  // locales: {
  //   // 键名是该语言所属的子路径
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     lang: 'zh-CN',
  //     title: 'AcJava',
  //     description: 'AcJava让Java学习更简单！',
  //   },
  //   '/en/': {
  //     lang: 'en-US',
  //     title: 'AcJava',
  //     description: 'AcJava makes learning Java easier!',
  //   },
  // },
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  // debug: true,
});
