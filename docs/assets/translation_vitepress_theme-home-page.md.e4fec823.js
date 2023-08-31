import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"Home Page","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-home-page.md","filePath":"translation/vitepress/theme-home-page.md","lastUpdated":1676126774000}'),p={name:"translation/vitepress/theme-home-page.md"},o=l(`<h1 id="home-page" tabindex="-1">Home Page <a class="header-anchor" href="#home-page" aria-label="Permalink to &quot;Home Page&quot;">​</a></h1><p>VitePressのデフォルトテーマには、本サイトのトップページでも使用しているホームページレイアウトがあります。フロントマターで layout: home を指定すれば、どのページでも使用することができます。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>しかし、このオプションだけでは、あまり効果がありません。ヒーローやフィーチャーなど、他のオプションを追加設定することで、ホームページにいくつかの異なるテンプレート化された「セクション」を追加することができます。</p><h2 id="heroセクション" tabindex="-1">Heroセクション <a class="header-anchor" href="#heroセクション" aria-label="Permalink to &quot;Heroセクション&quot;">​</a></h2><p>Heroセクションは、トップページの最上部に表示されます。ここでは、Heroセクションの設定方法について説明します。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">hero</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tagline</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">src</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/logo.png</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">alt</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">actions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">brand</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Get Started</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">theme</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">alt</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">text</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">View on GitHub</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">hero</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">VitePress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tagline</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">image</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">src</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/logo.png</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">alt</span><span style="color:#24292E;">: </span><span style="color:#032F62;">VitePress</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">actions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">brand</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Get Started</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">theme</span><span style="color:#24292E;">: </span><span style="color:#032F62;">alt</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">text</span><span style="color:#24292E;">: </span><span style="color:#032F62;">View on GitHub</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">link</span><span style="color:#24292E;">: </span><span style="color:#032F62;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Hero</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// text\`の先頭に表示される文字列。ブランドカラーを持ち、製品名などの短い文字列が想定される。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ヒーローセクションのメインテキストです。これは \`h1\` タグとして定義されます。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`text\`の下に表示されるタグライン。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">tagline</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ホームヒーローセクションに表示するアクションボタン。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">actions</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HeroAction</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HeroAction</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ボタンのカラーテーマ。デフォルトは \`brand\` です。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">theme</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;brand&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;alt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ボタンのラベルです。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">text</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ボタンのリンク先</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">link</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Hero</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// text\`の先頭に表示される文字列。ブランドカラーを持ち、製品名などの短い文字列が想定される。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ヒーローセクションのメインテキストです。これは \`h1\` タグとして定義されます。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`text\`の下に表示されるタグライン。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">tagline</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ホームヒーローセクションに表示するアクションボタン。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">actions</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HeroAction</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HeroAction</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ボタンのカラーテーマ。デフォルトは \`brand\` です。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">theme</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;brand&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;alt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ボタンのラベルです。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">text</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ボタンのリンク先</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">link</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="ネームカラーのカスタマイズ" tabindex="-1">ネームカラーのカスタマイズ <a class="header-anchor" href="#ネームカラーのカスタマイズ" aria-label="Permalink to &quot;ネームカラーのカスタマイズ&quot;">​</a></h3><p>VitePressは、ブランドカラー（--vp-c-brand）を名前に使用します。しかし、この色は --vp-home-hero-name-color 変数をオーバーライドすることでカスタマイズすることができます。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">blue</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">blue</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>また、--vp-home-hero-name-background を組み合わせて、名前の色をグラデーションにすることで、さらにカスタマイズすることができます。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-home-hero-name-background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-webkit-linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">120</span><span style="color:#F97583;">deg</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#bd34fe</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#41d1ff</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-home-hero-name-background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-webkit-linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">120</span><span style="color:#D73A49;">deg</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#bd34fe</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#41d1ff</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="機能セクション" tabindex="-1">機能セクション <a class="header-anchor" href="#機能セクション" aria-label="Permalink to &quot;機能セクション&quot;">​</a></h2><p>機能セクションでは、Heroセクションの直後に表示したい機能をいくつでもリストアップすることができます。これを設定するには、featuresオプションをfrontmatterに渡します。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">features</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">⚡️</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Vite, The DX that can&#39;t be beat</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🖖</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Power of Vue meets Markdown</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">🛠️</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Simple and minimal, always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">details</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">features</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">⚡️</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Vite, The DX that can&#39;t be beat</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🖖</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Power of Vue meets Markdown</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">🛠️</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Simple and minimal, always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">details</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Feature</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 各機能のボックスにアイコンを表示します。現在、絵文字のみ対応しています。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">icon</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 特集のタイトルです。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 特集の詳細です。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">details</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 機能コンポーネントをクリックしたときのリンク。リンクは、内部または外部のどちらでも可能です。例：\`guide/them-home-page\` や \`htttps://example.com\` など。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">link</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 機能コンポーネントの中に表示されるリンクテキスト。\`link\` オプションと一緒に使用するのがベスト。例：\`詳細\`、\`ページを見る\`など。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">linkText</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Feature</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 各機能のボックスにアイコンを表示します。現在、絵文字のみ対応しています。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">icon</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 特集のタイトルです。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 特集の詳細です。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">details</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 機能コンポーネントをクリックしたときのリンク。リンクは、内部または外部のどちらでも可能です。例：\`guide/them-home-page\` や \`htttps://example.com\` など。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">link</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 機能コンポーネントの中に表示されるリンクテキスト。\`link\` オプションと一緒に使用するのがベスト。例：\`詳細\`、\`ページを見る\`など。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">linkText</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
