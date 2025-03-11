import{_ as s,c as a,b as e,o as p}from"./app-cTIHVEz2.js";const t={};function l(i,n){return p(),a("div",null,n[0]||(n[0]=[e(`<h2 id="使用打包工具" tabindex="-1"><a class="header-anchor" href="#使用打包工具"><span>使用打包工具</span></a></h2><p>一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。你只需要通过 <code>bundler</code> 配置项指定打包工具即可：</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span class="token comment">// import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// bundler: webpackBundler(),</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>因为 <code>reco</code> 主题自改写了打包工具的默认配置，所以如果用户想要自定义打包工具的配置，需要借助 <code>theme.viteBundlerOptions</code> 或 <code>theme.webpackBundlerOptions</code>，原来的 <code>viteBundler({})</code> 和 <code>webpackBundler({})</code> 已无法生效。</p></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> viteBundler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span class="token comment">// import { webpackBundler } from &#39;@vuepress/bundler-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  bundler<span class="token operator">:</span> <span class="token function">viteBundler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// bundler: webpackBundler(),</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    viteBundlerOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      viteOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      vuePluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// webpackBundlerOptions: {</span></span>
<span class="line">    <span class="token comment">//   postcss: {},</span></span>
<span class="line">    <span class="token comment">//   vue: {}</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=s(t,[["render",l],["__file","bundler.html.vue"]]),r=JSON.parse('{"path":"/docs/guide/bundler.html","title":"打包工具","lang":"en-US","frontmatter":{"title":"打包工具","date":"2024-04-20T00:00:00.000Z"},"headers":[{"level":2,"title":"使用打包工具","slug":"使用打包工具","link":"#使用打包工具","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]}],"git":{"createdTime":1741713118000,"updatedTime":1741713118000,"contributors":[{"name":"soyisou","email":"ljm878665865@gmail.com","commits":1}]},"filePathRelative":"docs/guide/bundler.md"}');export{o as comp,r as data};
