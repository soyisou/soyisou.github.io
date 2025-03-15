import{_ as a,c as l,b as t,a as n,d as i,e as p,r,o as c}from"./app-CHYapVbF.js";const d={},o={href:"https://gofrp.org/zh-cn/docs/setup/systemd/",target:"_blank",rel:"noopener noreferrer"};function m(u,s){const e=r("ExternalLinkIcon");return c(),l("div",null,[s[1]||(s[1]=t(`<p>此示例演示如何在 Linux 系统下使用 systemd 来管理 frps 服务，包括启动、停止、配置后台运行和设置开机自启动。在 Linux 系统下，使用 systemd 可以方便地控制 frps 服务端的启动、停止、配置后台运行以及开机自启动。</p><p>以下是具体的操作步骤：</p><h2 id="_1-安装-systemd" tabindex="-1"><a class="header-anchor" href="#_1-安装-systemd"><span>1. 安装 systemd</span></a></h2><p>如果您的 Linux 服务器上尚未安装 systemd，可以使用包管理器如 yum（适用于 CentOS/RHEL）或 apt（适用于 Debian/Ubuntu）来安装它：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用 yum 安装 systemd（CentOS/RHEL）</span></span>
<span class="line">yum <span class="token function">install</span> systemd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 apt 安装 systemd（Debian/Ubuntu）</span></span>
<span class="line"><span class="token function">apt</span> <span class="token function">install</span> systemd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-创建-frps-service-文件" tabindex="-1"><a class="header-anchor" href="#_2-创建-frps-service-文件"><span>2. 创建 frps.service 文件</span></a></h2><p>使用文本编辑器 (如 vim) 在 /etc/systemd/system 目录下创建一个 frps.service 文件，用于配置 frps 服务。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/systemd/system/frps.service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>写入内容</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 服务名称，可自定义</span></span>
<span class="line">Description <span class="token operator">=</span> frp server</span>
<span class="line">After <span class="token operator">=</span> network.target syslog.target</span>
<span class="line">Wants <span class="token operator">=</span> network.target</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Service<span class="token punctuation">]</span></span>
<span class="line">Type <span class="token operator">=</span> simple</span>
<span class="line"><span class="token comment"># 启动frps的命令，需修改为您的frps的安装路径</span></span>
<span class="line">ExecStart <span class="token operator">=</span> /path/to/frps <span class="token parameter variable">-c</span> /path/to/frps.toml</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">[</span>Install<span class="token punctuation">]</span></span>
<span class="line">WantedBy <span class="token operator">=</span> multi-user.target</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用-systemd-命令管理-frps-服务" tabindex="-1"><a class="header-anchor" href="#_3-使用-systemd-命令管理-frps-服务"><span>3. 使用 systemd 命令管理 frps 服务</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 启动frp</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start frps</span>
<span class="line"><span class="token comment"># 停止frp</span></span>
<span class="line"><span class="token function">sudo</span> systemctl stop frps</span>
<span class="line"><span class="token comment"># 重启frp</span></span>
<span class="line"><span class="token function">sudo</span> systemctl restart frps</span>
<span class="line"><span class="token comment"># 查看frp状态</span></span>
<span class="line"><span class="token function">sudo</span> systemctl status frps</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-设置-frps-开机自启动" tabindex="-1"><a class="header-anchor" href="#_4-设置-frps-开机自启动"><span>4. 设置 frps 开机自启动</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 设置开机自启</span></span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> frps</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过遵循上述步骤，您可以轻松地使用 systemd 来管理 frps 服务，实现启动、停止、自动运行和开机自启动。确保替换路径和配置文件名称以匹配您的实际安装。</p>`,15)),n("p",null,[n("a",o,[s[0]||(s[0]=i("原文链接")),p(e)])])])}const f=a(d,[["render",m],["__file","systemd.html.vue"]]),h=JSON.parse('{"path":"/blogs/frp/gofrp/systemd.html","title":"Frp 使用 systemd","lang":"en-US","frontmatter":{"title":"Frp 使用 systemd","date":"2025/3/15","tags":["gofrp"],"categories":["frp","gofrp"]},"headers":[{"level":2,"title":"1. 安装 systemd","slug":"_1-安装-systemd","link":"#_1-安装-systemd","children":[]},{"level":2,"title":"2. 创建 frps.service 文件","slug":"_2-创建-frps-service-文件","link":"#_2-创建-frps-service-文件","children":[]},{"level":2,"title":"3. 使用 systemd 命令管理 frps 服务","slug":"_3-使用-systemd-命令管理-frps-服务","link":"#_3-使用-systemd-命令管理-frps-服务","children":[]},{"level":2,"title":"4. 设置 frps 开机自启动","slug":"_4-设置-frps-开机自启动","link":"#_4-设置-frps-开机自启动","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"filePathRelative":"blogs/frp/gofrp/systemd.md"}');export{f as comp,h as data};
