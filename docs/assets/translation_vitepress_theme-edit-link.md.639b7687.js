import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.92ce8a2a.js";const u=JSON.parse('{"title":"Edit Link","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-edit-link.md","filePath":"translation/vitepress/theme-edit-link.md","lastUpdated":1676126774000}'),e={name:"translation/vitepress/theme-edit-link.md"},t=p(`<h1 id="edit-link" tabindex="-1">Edit Link <a class="header-anchor" href="#edit-link" aria-label="Permalink to &quot;Edit Link&quot;">​</a></h1><p>Edit Link は、GitHub や GitLab などの Git 管理サービス上でページを編集するためのリンクを表示します。有効にするには、設定に themeConfig.editLink オプションを追加します。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    editLink: {</span></span>
<span class="line"><span style="color:#24292E;">      pattern: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>patternオプションはリンクのURL構造を定義し、:pathはページパスに置換されることになります。</p><p>デフォルトでは、これはdocページの下部に &quot;Edit this page &quot;というリンクテキストを追加します。このテキストは、textオプションを定義することによってカスタマイズすることができます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&#39;Edit this page on GitHub&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    editLink: {</span></span>
<span class="line"><span style="color:#24292E;">      pattern: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&#39;Edit this page on GitHub&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,6),l=[t];function o(i,c,r,E,d,y){return n(),a("div",null,l)}const m=s(e,[["render",o]]);export{u as __pageData,m as default};
