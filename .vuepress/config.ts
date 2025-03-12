import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { themeConfig } from './config/index';
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
export default defineUserConfig({
  title: "AcJava",
  description: "AcJava让Java更简单",
  bundler: viteBundler({}),
  theme: recoTheme(themeConfig),
  // debug: true,
});
