import{_ as e,c as l,b as s,a,d as p,e as o,f as c,r as i,o as r}from"./app-CHYapVbF.js";const u={},k={class:"custom-container tip"};function d(v,n){const t=i("RouteLink");return r(),l("div",null,[n[3]||(n[3]=s(`<h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型"><span>类型</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span></span>
<span class="line">  text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">NavbarItem</span> <span class="token keyword">extends</span> <span class="token class-name">NavbarItemBasic</span> <span class="token punctuation">{</span></span>
<span class="line">  children<span class="token operator">?</span><span class="token operator">:</span> NavbarItemBasic<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Navbar</span> <span class="token operator">=</span> NavbarItem<span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2)),a("div",k,[n[2]||(n[2]=s('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p>',2)),a("p",null,[n[1]||(n[1]=p("设置图标请参考 ")),o(t,{to:"/docs/guide/icon.html"},{default:c(()=>n[0]||(n[0]=[p("指南 -> 图标")])),_:1})])]),n[4]||(n[4]=s(`<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;指南&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/guide/introduce&#39;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&#39;IconCompass&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token string">&#39;参考&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    icon<span class="token operator">:</span> <span class="token string">&#39;IconDocument&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;配置&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;主题配置&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/frontmatter&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;Markdown 扩展&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/custom-container&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;高级&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/theme/custom-catalog-title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;插件&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;page&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/page&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;comments&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/comments&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;vue-previews&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/vue-previews&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;bulletin-popover&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/plugins/bulletin-popover&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    text<span class="token operator">:</span> <span class="token string">&#39;版本&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    icon<span class="token operator">:</span> <span class="token string">&#39;IconSubVolume&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;2.x(alpha)&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        text<span class="token operator">:</span> <span class="token string">&#39;1.x&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        link<span class="token operator">:</span> <span class="token string">&#39;https://vuepress-theme-reco.recoluan.com/views/1.x/&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;留言板&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/docs/message-board&#39;</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">&#39;IconChat&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2))])}const b=e(u,[["render",d],["__file","navbar.html.vue"]]),g=JSON.parse('{"path":"/docs/theme/navbar.html","title":"导航栏","lang":"en-US","frontmatter":{"title":"导航栏","date":"2023-02-12T00:00:00.000Z"},"headers":[{"level":2,"title":"类型","slug":"类型","link":"#类型","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1741713118000,"updatedTime":1741713118000,"contributors":[{"name":"soyisou","email":"ljm878665865@gmail.com","commits":1}]},"filePathRelative":"docs/theme/navbar.md"}');export{b as comp,g as data};
