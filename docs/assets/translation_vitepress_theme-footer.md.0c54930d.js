import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.92ce8a2a.js";const g=JSON.parse('{"title":"Footer","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-footer.md","filePath":"translation/vitepress/theme-footer.md","lastUpdated":1676126774000}'),l={name:"translation/vitepress/theme-footer.md"},e=p(`<h1 id="footer" tabindex="-1">Footer <a class="header-anchor" href="#footer" aria-label="Permalink to &quot;Footer&quot;">​</a></h1><p>themeConfig.footerが存在する場合、VitePressはページ下部にグローバルフッターを表示します。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;Released under the MIT License.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2019-present Evan You&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    footer: {</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&#39;Released under the MIT License.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      copyright: </span><span style="color:#032F62;">&#39;Copyright © 2019-present Evan You&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Footer</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 著作権の直前に表示されるメッセージ。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">message</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 実際の著作権表示文です。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">copyright</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Footer</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 著作権の直前に表示されるメッセージ。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">message</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 実際の著作権表示文です。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">copyright</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上記の設定は、HTMLの文字列にも対応しています。そのため、例えばフッターテキストに何らかのリンクを設定したい場合、以下のように設定を調整することができます。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;Released under the &lt;a href=&quot;https://github.com/vuejs/vitepress/blob/main/LICENSE&quot;&gt;MIT License&lt;/a&gt;.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2019-present &lt;a href=&quot;https://github.com/yyx990803&quot;&gt;Evan You&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    footer: {</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&#39;Released under the &lt;a href=&quot;https://github.com/vuejs/vitepress/blob/main/LICENSE&quot;&gt;MIT License&lt;/a&gt;.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      copyright: </span><span style="color:#032F62;">&#39;Copyright © 2019-present &lt;a href=&quot;https://github.com/yyx990803&quot;&gt;Evan You&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>なお、SideBarが表示されているときは、フッターは表示されません。</p>`,7),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
