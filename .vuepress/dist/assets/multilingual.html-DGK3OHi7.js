import{_ as e,c as d,a as n,b as p,d as t,e as l,r as o,o as i}from"./app-cTIHVEz2.js";const c={},r={href:"https://v2.vuepress.vuejs.org/zh/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"};function u(k,s){const a=o("ExternalLinkIcon");return i(),d("div",null,[s[3]||(s[3]=n("h2",{id:"介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#介绍"},[n("span",null,"介绍")])],-1)),s[4]||(s[4]=n("p",null,"这些选项用于配置与语言相关的文本。",-1)),s[5]||(s[5]=n("p",null,"如果你的站点是以英语以外的其他语言提供服务的，你应该为每个语言设置这些选项来提供翻译。",-1)),n("blockquote",null,[n("p",null,[s[1]||(s[1]=t("多语言配置请参考 ")),n("a",r,[s[0]||(s[0]=t("官方文档")),l(a)]),s[2]||(s[2]=t("。"))])]),s[6]||(s[6]=p(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>categoriesText</td><td><code>string</code></td><td>Categories</td><td>分类</td></tr><tr><td>tagsText</td><td><code>string</code></td><td>Tags</td><td>标签</td></tr><tr><td>catalogTitle</td><td><code>string</code></td><td>ON THIS PAGE</td><td>文章右侧目录的标题</td></tr><tr><td>selectLanguageName</td><td><code>string</code></td><td>\${lang}</td><td>Locale 的语言名称</td></tr><tr><td>editLinkText</td><td><code>string</code></td><td>Edit this page</td><td>编辑此页 链接的文字</td></tr><tr><td>lastUpdatedText</td><td><code>string</code></td><td>Last Updated</td><td>最近更新时间戳 标签的文字</td></tr><tr><td>tip</td><td><code>string</code></td><td>TIP</td><td>自定义提示容器的标题</td></tr><tr><td>info</td><td><code>string</code></td><td>INFO</td><td>自定义信息容器的标题</td></tr><tr><td>warning</td><td><code>string</code></td><td>WARNING</td><td>自定义警告容器的标题</td></tr><tr><td>danger</td><td><code>string</code></td><td>DANGER</td><td>自定义危险容器的标题</td></tr><tr><td>details</td><td><code>string</code></td><td>DETAILS</td><td>自定义详情容器的标题</td></tr><tr><td>notFound</td><td><code>string</code></td><td>Oops! Page does not exist.</td><td>404 页面文案</td></tr><tr><td>backToHome</td><td><code>string</code></td><td>Back To Home</td><td>404 页面返回首页文案</td></tr><tr><td>inputPasswordText</td><td><code>string</code></td><td>Please enter the password</td><td>密码输入提示</td></tr><tr><td>unlockSucessText</td><td><code>string</code></td><td>Success, enjoy it!</td><td>密码输入正确提示</td></tr><tr><td>unlockFailuerText</td><td><code>string</code></td><td>Failed, please enter again!</td><td>密码输入错误提示</td></tr></tbody></table><h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例"><span>案例</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      tip<span class="token operator">:</span> <span class="token string">&#39;提示&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      info<span class="token operator">:</span> <span class="token string">&#39;信息&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      danger<span class="token operator">:</span> <span class="token string">&#39;危险&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      warning<span class="token operator">:</span> <span class="token string">&#39;警告&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      details<span class="token operator">:</span> <span class="token string">&#39;详情&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      tagsText<span class="token operator">:</span> <span class="token string">&#39;标签&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      backToHome<span class="token operator">:</span> <span class="token string">&#39;返回首页&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      categoriesText<span class="token operator">:</span> <span class="token string">&#39;分类&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      catalogTitle<span class="token operator">:</span> <span class="token string">&#39;页面导航&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      editLinkText<span class="token operator">:</span> <span class="token string">&#39;编辑当前页面&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      lastUpdatedText<span class="token operator">:</span> <span class="token string">&#39;最后更新时间&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      notFound<span class="token operator">:</span> <span class="token string">&#39;哇哦，没有发现这个页面！&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      inputPasswordText<span class="token operator">:</span> <span class="token string">&#39;请输入密码&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      unlockSucessText<span class="token operator">:</span> <span class="token string">&#39;密码正确，玩得开心！&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      unlockFailuerText<span class="token operator">:</span> <span class="token string">&#39;密码错误，请重新输入！&#39;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4))])}const m=e(c,[["render",u],["__file","multilingual.html.vue"]]),v=JSON.parse('{"path":"/docs/theme/multilingual.html","title":"语言配置","lang":"en-US","frontmatter":{"title":"语言配置","date":"2022-06-07T22:30:37.000Z"},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"案例","slug":"案例","link":"#案例","children":[]}],"git":{"createdTime":1741713118000,"updatedTime":1741713118000,"contributors":[{"name":"soyisou","email":"ljm878665865@gmail.com","commits":1}]},"filePathRelative":"docs/theme/multilingual.md"}');export{m as comp,v as data};
