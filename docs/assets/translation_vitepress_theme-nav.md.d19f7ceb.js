import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const F=JSON.parse('{"title":"Nav","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-nav.md","filePath":"translation/vitepress/theme-nav.md","lastUpdated":1676126774000}'),p={name:"translation/vitepress/theme-nav.md"},o=l(`<h1 id="nav" tabindex="-1">Nav <a class="header-anchor" href="#nav" aria-label="Permalink to &quot;Nav&quot;">​</a></h1><p>Navは、ページの上部に表示されるナビゲーションバーです。サイトタイトル、グローバルメニューリンクなどが含まれます。</p><h2 id="サイトタイトルとロゴ" tabindex="-1">サイトタイトルとロゴ <a class="header-anchor" href="#サイトタイトルとロゴ" aria-label="Permalink to &quot;サイトタイトルとロゴ&quot;">​</a></h2><p>デフォルトでは、config.titleの値を参照したサイトのタイトルがナビに表示されます。ナビに表示される内容を変更したい場合は、themeConfig.siteTitleオプションでカスタムテキストを定義することができます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#9ECBFF;">&#39;My Custom Title&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    siteTitle: </span><span style="color:#032F62;">&#39;My Custom Title&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>サイトのロゴがある場合、その画像へのパスを渡すことで表示することができます。ロゴは直接public内に配置し、その絶対パスを定義する必要があります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/my-logo.svg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/my-logo.svg&#39;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>ロゴを追加すると、サイトタイトルと一緒に表示されます。ロゴだけで十分で、サイトタイトルのテキストを隠したい場合は、siteTitleオプションにfalseを設定してください。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/my-logo.svg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/my-logo.svg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    siteTitle: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>また、alt属性を追加したり、ダーク/ライトモードに応じてカスタマイズしたい場合は、ロゴとしてオブジェクトを渡すことができます。詳しくは themeConfig.logo を参照してください。</p><h2 id="ナビゲーションリンク" tabindex="-1">ナビゲーションリンク <a class="header-anchor" href="#ナビゲーションリンク" aria-label="Permalink to &quot;ナビゲーションリンク&quot;">​</a></h2><p>themeConfig.navのオプションで、ナビにリンクを追加することができます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Configs&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/configs&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Changelog&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Configs&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/configs&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Changelog&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>textはnavに表示される実際のテキスト、linkはテキストがクリックされたときに移動するリンクです。リンクのパスは、.mdの接頭辞を除いた実際のファイルを指定し、常に/で始まるようにします。</p><p>ナビリンクはドロップダウンメニューにすることもできます。これを行うには、リンクオプションにitemsキーを設定します。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-1&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-2&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item C&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-3&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-1&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-2&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item C&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-3&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>なお、ドロップダウンメニューのタイトル（上の例ではDropdown Menu）は、ドロップダウンダイアログを開くためのボタンとなるため、リンクプロパティを持つことはできません。</p><p>さらにネストした項目を渡すことで、ドロップダウン・メニューの項目に「セクション」を追加することもできます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// セクションのタイトルです。</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;Section A Title&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section A Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section B Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Dropdown Menu&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// また、タイトルを省略することも可能です。</span></span>
<span class="line"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section A Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Section B Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// セクションのタイトルです。</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;Section A Title&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section A Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section B Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Dropdown Menu&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// また、タイトルを省略することも可能です。</span></span>
<span class="line"><span style="color:#24292E;">            items: [</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section A Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Section B Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="リンクの-アクティブ-状態をカスタマイズする" tabindex="-1">リンクの &quot;アクティブ &quot;状態をカスタマイズする <a class="header-anchor" href="#リンクの-アクティブ-状態をカスタマイズする" aria-label="Permalink to &quot;リンクの &quot;アクティブ &quot;状態をカスタマイズする&quot;">​</a></h3><p>ナビメニューのアイテムは、現在のページがマッチするパスの下にあるときにハイライトされます。マッチするパスをカスタマイズしたい場合は、activeMatchプロパティと正規表現を文字列で定義してください。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// This link gets active state when the user is</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// on \`/config/\` path.</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;/guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        activeMatch: </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// This link gets active state when the user is</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// on \`/config/\` path.</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        link: </span><span style="color:#032F62;">&#39;/guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        activeMatch: </span><span style="color:#032F62;">&#39;/config/&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>警告: activeMatch は正規表現文字列であることが期待されていますが、文字列として定義する必要があります。実際の RegExp オブジェクトはビルド時にシリアライズできないため、ここでは使用できません。</p></blockquote><h2 id="ソーシャルリンク" tabindex="-1">ソーシャルリンク <a class="header-anchor" href="#ソーシャルリンク" aria-label="Permalink to &quot;ソーシャルリンク&quot;">​</a></h2><p>ソーシャルリンクを参照する。</p>`,25),e=[o];function t(c,E,r,i,y,d){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{F as __pageData,g as default};
