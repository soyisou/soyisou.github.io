import{_ as n,c as a,b as e,o as t}from"./app-cTIHVEz2.js";const o={};function p(i,s){return t(),a("div",null,s[0]||(s[0]=[e(`<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>主题是通过 <code>tailwindcss</code> 来配置 css 的，后期可能会开放更多的配置能力，所以当前功能的 API 在以后可能会改变。</p></div><p>如果你对主题的默认的主色不喜欢，可以通过 <code>themeConfig.primaryColor</code> 来自定义，主题会修改 <code>tailwindcss</code> 的配置：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    primaryColor<span class="token operator">:</span> <span class="token string">&#39;#3aa675&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const l=n(o,[["render",p],["__file","custom-primary-color.html.vue"]]),r=JSON.parse('{"path":"/docs/theme/custom-primary-color.html","title":"自定义主题的基础色","lang":"en-US","frontmatter":{"title":"自定义主题的基础色","date":"2023-01-21T01:00:00.000Z"},"headers":[],"git":{"createdTime":1741713118000,"updatedTime":1741713118000,"contributors":[{"name":"soyisou","email":"ljm878665865@gmail.com","commits":1}]},"filePathRelative":"docs/theme/custom-primary-color.md"}');export{l as comp,r as data};
