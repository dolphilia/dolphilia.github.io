import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"フロントマター","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/frontmatter.md","filePath":"translation/vitepress/frontmatter.md","lastUpdated":1676126774000}'),p={name:"translation/vitepress/frontmatter.md"},e=l(`<h1 id="フロントマター" tabindex="-1">フロントマター <a class="header-anchor" href="#フロントマター" aria-label="Permalink to &quot;フロントマター&quot;">​</a></h1><p>YAML frontmatterブロックを含むすべてのMarkdownファイルはgray-matterによって処理されます。frontmatterはMarkdownファイルの先頭になければならず、三重破線の間に有効なYAMLを設定する形式である必要があります。例</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="color:#85E89D;">editLink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Docs with VitePress</span></span>
<span class="line"><span style="color:#22863A;">editLink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>三重の破線の間には、定義済みの変数を設定したり、独自のカスタム変数を作成したりすることができます。これらの変数は、特別な変数 $frontmatter を介して使用することができます。</p><p>以下は、あなたのMarkdownファイルでどのように使用するかの例です。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Docs with VitePress</span></span>
<span class="line"><span style="color:#85E89D;">editLink</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Guide content</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Docs with VitePress</span></span>
<span class="line"><span style="color:#22863A;">editLink</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># {{ $frontmatter.title }}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Guide content</span></span></code></pre></div><h2 id="フロントマター・オルタナティブ・フォーマット" tabindex="-1">フロントマター・オルタナティブ・フォーマット <a class="header-anchor" href="#フロントマター・オルタナティブ・フォーマット" aria-label="Permalink to &quot;フロントマター・オルタナティブ・フォーマット&quot;">​</a></h2><p>VitePressは、中括弧で始まり、中括弧で終わるJSONフロントマターシンタックスもサポートしています。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Blogging Like a Hacker&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;editLink&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Blogging Like a Hacker&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;editLink&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">---</span></span></code></pre></div>`,9),t=[e];function o(c,r,i,E,d,y){return a(),n("div",null,t)}const g=s(p,[["render",o]]);export{h as __pageData,g as default};
