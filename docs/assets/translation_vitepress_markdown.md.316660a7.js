import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.43c433ff.js";const g=JSON.parse('{"title":"Markdown Extensions","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/markdown.md","filePath":"translation/vitepress/markdown.md","lastUpdated":1676784496000}'),p={name:"translation/vitepress/markdown.md"},e=l(`<h1 id="markdown-extensions" tabindex="-1">Markdown Extensions <a class="header-anchor" href="#markdown-extensions" aria-label="Permalink to &quot;Markdown Extensions&quot;">​</a></h1><p>VitePressには、Markdown Extensionsが組み込まれています。</p><h2 id="ヘッダーアンカー" tabindex="-1">ヘッダーアンカー <a class="header-anchor" href="#ヘッダーアンカー" aria-label="Permalink to &quot;ヘッダーアンカー&quot;">​</a></h2><p>ヘッダーには自動的にアンカーリンクが適用されます。アンカーのレンダリングは <code>markdown.anchor</code> オプションで設定することができる。</p><h2 id="リンク" tabindex="-1">リンク <a class="header-anchor" href="#リンク" aria-label="Permalink to &quot;リンク&quot;">​</a></h2><p>内部リンク、外部リンクともに特別な扱いを受けています。</p><h3 id="内部リンク" tabindex="-1">内部リンク <a class="header-anchor" href="#内部リンク" aria-label="Permalink to &quot;内部リンク&quot;">​</a></h3><p>SPAのナビゲーションとして、内部リンクはルーターリンクに変換されます。また、各サブディレクトリに含まれる <code>index.md</code> は自動的に <code>index.html</code> に変換され、対応する URL は <code>/</code> となります。</p><p>例えば、次のようなディレクトリ構成があったとします。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ foo</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ two.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ bar</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ three.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   └─ four.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">├─ foo</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ two.md</span></span>
<span class="line"><span style="color:#24292e;">└─ bar</span></span>
<span class="line"><span style="color:#24292e;">   ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">   ├─ three.md</span></span>
<span class="line"><span style="color:#24292e;">   └─ four.md</span></span></code></pre></div><p>And providing you are in <code>foo/one.md</code>:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">Home</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/</span><span style="color:#E1E4E8;">) &lt;!-- ユーザーをルートの index.md に送ります。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/foo/</span><span style="color:#E1E4E8;">) &lt;!-- foo ディレクトリの index.html にユーザーを送る。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo heading</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">./#heading</span><span style="color:#E1E4E8;">) &lt;!-- foo インデックスファイル内の見出しにユーザーを固定します。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three</span><span style="color:#E1E4E8;">) &lt;!-- 拡張子を省略することができます。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three.md</span><span style="color:#E1E4E8;">) &lt;!-- .mdを追加することができます。 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - four</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/four.html</span><span style="color:#E1E4E8;">) &lt;!-- または、.html を追加してください。 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">Home</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/</span><span style="color:#24292E;">) &lt;!-- ユーザーをルートの index.md に送ります。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/foo/</span><span style="color:#24292E;">) &lt;!-- foo ディレクトリの index.html にユーザーを送る。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo heading</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">./#heading</span><span style="color:#24292E;">) &lt;!-- foo インデックスファイル内の見出しにユーザーを固定します。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three</span><span style="color:#24292E;">) &lt;!-- 拡張子を省略することができます。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three.md</span><span style="color:#24292E;">) &lt;!-- .mdを追加することができます。 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - four</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/four.html</span><span style="color:#24292E;">) &lt;!-- または、.html を追加してください。 --&gt;</span></span></code></pre></div><h3 id="ページサフィックス" tabindex="-1">ページサフィックス <a class="header-anchor" href="#ページサフィックス" aria-label="Permalink to &quot;ページサフィックス&quot;">​</a></h3><p>ページと内部リンクは、デフォルトで <code>.html</code> という接尾辞で生成されます。</p><h3 id="外部リンク" tabindex="-1">外部リンク <a class="header-anchor" href="#外部リンク" aria-label="Permalink to &quot;外部リンク&quot;">​</a></h3><p>外部リンクは、自動的に <code>target=&quot;_blank&quot; rel=&quot;noreferrer&quot;</code> を取得します。</p><ul><li><a href="https://vuejs.org" target="_blank" rel="noreferrer">vuejs.org</a></li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress on GitHub</a></li></ul><h2 id="フロントマター" tabindex="-1">フロントマター <a class="header-anchor" href="#フロントマター" aria-label="Permalink to &quot;フロントマター&quot;">​</a></h2><p><a href="https://jekyllrb.com/docs/front-matter/" target="_blank" rel="noreferrer">YAML frontmatter</a>は、そのままサポートされます。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Blogging Like a Hacker</span></span>
<span class="line"><span style="color:#85E89D;">lang</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">en-US</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Blogging Like a Hacker</span></span>
<span class="line"><span style="color:#22863A;">lang</span><span style="color:#24292E;">: </span><span style="color:#032F62;">en-US</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>このデータは、すべてのカスタムコンポーネントとテーマコンポーネントとともに、ページの残りの部分から利用できるようになります。</p><p>詳しくは、Frontmatterをご覧ください。</p><h2 id="githubスタイルのテーブル" tabindex="-1">GitHubスタイルのテーブル <a class="header-anchor" href="#githubスタイルのテーブル" aria-label="Permalink to &quot;GitHubスタイルのテーブル&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#e1e4e8;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| zebra stripes |   are neat    |    $1 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#24292e;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#24292e;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#24292e;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#24292e;">| zebra stripes |   are neat    |    $1 |</span></span></code></pre></div><p><strong>Output</strong></p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji" tabindex="-1">Emoji 🎉 <a class="header-anchor" href="#emoji" aria-label="Permalink to &quot;Emoji :tada:&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">:tada: :100:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">:tada: :100:</span></span></code></pre></div><p><strong>Output</strong></p><p>🎉 💯</p><p><a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">全絵文字の一覧</a>があります。</p><h2 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[[toc]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[[toc]]</span></span></code></pre></div><p><strong>Output</strong></p><nav class="table-of-contents"><ul><li><a href="#ヘッダーアンカー">ヘッダーアンカー</a></li><li><a href="#リンク">リンク</a><ul><li><a href="#内部リンク">内部リンク</a></li><li><a href="#ページサフィックス">ページサフィックス</a></li><li><a href="#外部リンク">外部リンク</a></li></ul></li><li><a href="#フロントマター">フロントマター</a></li><li><a href="#githubスタイルのテーブル">GitHubスタイルのテーブル</a></li><li><a href="#emoji">Emoji 🎉</a></li><li><a href="#table-of-contents">Table of Contents</a></li><li><a href="#カスタムコンテナ">カスタムコンテナ</a><ul><li><a href="#デフォルトのタイトル">デフォルトのタイトル</a></li><li><a href="#カスタムタイトル">カスタムタイトル</a></li><li><a href="#raw">raw</a></li></ul></li><li><a href="#コードブロックのシンタックスハイライト">コードブロックのシンタックスハイライト</a></li><li><a href="#コードブロックのラインハイライト">コードブロックのラインハイライト</a></li><li><a href="#コードブロックにフォーカス">コードブロックにフォーカス</a></li><li><a href="#コードブロックのカラー差分">コードブロックのカラー差分</a></li><li><a href="#errors-and-warnings-in-code-blocks">Errors and Warnings in Code Blocks</a></li><li><a href="#ライン番号">ライン番号</a></li><li><a href="#import-code-snippets">Import Code Snippets</a></li><li><a href="#コードグループ">コードグループ</a></li><li><a href="#markdownファイルのインクルージョン">Markdownファイルのインクルージョン</a></li><li><a href="#アドバンスト・コンフィグレーション">アドバンスト・コンフィグレーション</a></li></ul></nav><p>TOCのレンダリングは <code>markdown.toc</code> オプションで設定することができます。</p><h2 id="カスタムコンテナ" tabindex="-1">カスタムコンテナ <a class="header-anchor" href="#カスタムコンテナ" aria-label="Permalink to &quot;カスタムコンテナ&quot;">​</a></h2><p>カスタムコンテナは、タイプ、タイトル、コンテンツによって定義することができます。</p><h3 id="デフォルトのタイトル" tabindex="-1">デフォルトのタイトル <a class="header-anchor" href="#デフォルトのタイトル" aria-label="Permalink to &quot;デフォルトのタイトル&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: info</span></span>
<span class="line"><span style="color:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: info</span></span>
<span class="line"><span style="color:#24292E;">This is an info box.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: tip</span></span>
<span class="line"><span style="color:#24292E;">This is a tip.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: warning</span></span>
<span class="line"><span style="color:#24292E;">This is a warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: danger</span></span>
<span class="line"><span style="color:#24292E;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details</span></span>
<span class="line"><span style="color:#24292E;">This is a details block.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h3 id="カスタムタイトル" tabindex="-1">カスタムタイトル <a class="header-anchor" href="#カスタムタイトル" aria-label="Permalink to &quot;カスタムタイトル&quot;">​</a></h3><p>コンテナの &quot;type &quot;の直後にテキストを追加することで、カスタムタイトルを設定することができます。</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: danger STOP</span></span>
<span class="line"><span style="color:#E1E4E8;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello, VitePress!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: danger STOP</span></span>
<span class="line"><span style="color:#24292E;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello, VitePress!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello, VitePress!&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello, VitePress!&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></details><h3 id="raw" tabindex="-1"><code>raw</code> <a class="header-anchor" href="#raw" aria-label="Permalink to &quot;\`raw\`&quot;">​</a></h3><p>これは、VitePressのスタイルとルータの競合を防ぐために使用できる特別なコンテナです。これは、特にコンポーネントライブラリのドキュメントを作成するときに便利です。また、<a href="https://whyframe.dev/docs/integrations/vitepress" target="_blank" rel="noreferrer">whyframe</a> をチェックすると、より良い分離ができるかもしれません。</p><p><strong>Syntax</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: raw</span></span>
<span class="line"><span style="color:#E1E4E8;">Wraps in a &lt;div class=&quot;vp-raw&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: raw</span></span>
<span class="line"><span style="color:#24292E;">Wraps in a &lt;div class=&quot;vp-raw&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><code>vp-raw</code> クラスは、エレメントにも直接使用することができます。スタイル分離は現在オプトインです。</p><details class="details custom-block"><summary>Details</summary><ul><li><p>Install required deps with your preferred package manager:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">postcss-prefix-selector</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss</span><span style="color:#24292E;"> </span><span style="color:#032F62;">postcss-prefix-selector</span></span></code></pre></div></li><li><p>Create a file named <code>docs/.postcssrc.cjs</code> and add this to it:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;postcss-prefix-selector&#39;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      prefix: </span><span style="color:#9ECBFF;">&#39;:not(:where(.vp-raw *))&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      includeFiles: [</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">vp-doc</span><span style="color:#85E89D;font-weight:bold;">\\.</span><span style="color:#DBEDFF;">css</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">transform</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">prefix</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">_selector</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">selector</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">pseudo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _selector.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">(:</span><span style="color:#79B8FF;">\\S</span><span style="color:#F97583;">*</span><span style="color:#DBEDFF;">)</span><span style="color:#F97583;">$</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> selector </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> prefix </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> pseudo</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  plugins: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;postcss-prefix-selector&#39;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      prefix: </span><span style="color:#032F62;">&#39;:not(:where(.vp-raw *))&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      includeFiles: [</span><span style="color:#032F62;">/vp-doc</span><span style="color:#22863A;font-weight:bold;">\\.</span><span style="color:#032F62;">css/</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">transform</span><span style="color:#24292E;">(</span><span style="color:#E36209;">prefix</span><span style="color:#24292E;">, </span><span style="color:#E36209;">_selector</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">selector</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">pseudo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _selector.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">/(:</span><span style="color:#005CC5;">\\S</span><span style="color:#D73A49;">*</span><span style="color:#032F62;">)</span><span style="color:#D73A49;">$</span><span style="color:#032F62;">/</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> selector </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> prefix </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> pseudo</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul></details><h2 id="コードブロックのシンタックスハイライト" tabindex="-1">コードブロックのシンタックスハイライト <a class="header-anchor" href="#コードブロックのシンタックスハイライト" aria-label="Permalink to &quot;コードブロックのシンタックスハイライト&quot;">​</a></h2><p>VitePressは<a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a>を使用して、Markdownコードブロック内の言語シンタックスをカラーテキストでハイライトしています。Shikiは様々なプログラミング言語をサポートしています。必要なことは、コードブロックの最初のバックティックに有効な言語エイリアスを追加することだけです。</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;MyComponent&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;MyComponent&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`html</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`html</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md" target="_blank" rel="noreferrer">有効言語一覧</a>は、Shikiのリポジトリで公開されています。</p><p>また、アプリの設定でシンタックスハイライトのテーマをカスタマイズすることができます。詳しくは <code>markdown</code> オプションを参照してください。</p><h2 id="コードブロックのラインハイライト" tabindex="-1">コードブロックのラインハイライト <a class="header-anchor" href="#コードブロックのラインハイライト" aria-label="Permalink to &quot;コードブロックのラインハイライト&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>1行だけでなく、複数の1行、範囲、またはその両方を指定することも可能です。</p><ul><li>行の範囲：例えば <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>Multiple single lines: for example <code>{4,7,9}</code></li><li>Line ranges and single lines: for example <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default { // Highlighted</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: \`Highlighted!</span></span>
<span class="line"><span style="color:#e1e4e8;">      This line isn&#39;t highlighted,</span></span>
<span class="line"><span style="color:#e1e4e8;">      but this and the next 2 are.\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">      motd: &#39;VitePress is awesome&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      lorem: &#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#24292e;">export default { // Highlighted</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: \`Highlighted!</span></span>
<span class="line"><span style="color:#24292e;">      This line isn&#39;t highlighted,</span></span>
<span class="line"><span style="color:#24292e;">      but this and the next 2 are.\`,</span></span>
<span class="line"><span style="color:#24292e;">      motd: &#39;VitePress is awesome&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      lorem: &#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">\`Highlighted!</span></span>
<span class="line"><span style="color:#9ECBFF;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#9ECBFF;">      but this and the next 2 are.\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      motd: </span><span style="color:#9ECBFF;">&#39;VitePress is awesome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      lorem: </span><span style="color:#9ECBFF;">&#39;ipsum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">\`Highlighted!</span></span>
<span class="line"><span style="color:#032F62;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#032F62;">      but this and the next 2 are.\`</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      motd: </span><span style="color:#032F62;">&#39;VitePress is awesome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      lorem: </span><span style="color:#032F62;">&#39;ipsum&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>また、<code>// [!code hl]</code> というコメントを使うことで、その行に直接ハイライトを入れることも可能です。</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Highlighted!&#39; // [!code  hl]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Highlighted!&#39; // [!code  hl]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Highlighted!&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Highlighted!&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="コードブロックにフォーカス" tabindex="-1">コードブロックにフォーカス <a class="header-anchor" href="#コードブロックにフォーカス" aria-label="Permalink to &quot;コードブロックにフォーカス&quot;">​</a></h2><p>行に <code>// [!code focus]</code> というコメントを付けると、その行にフォーカスが当たり、他の部分がぼやけます。</p><p>さらに、<code>// [!code focus:&lt;lines&gt;]</code> を使って、フォーカスする行数を定義することができます。</p><p><strong>Input</strong></p><p>なお、<code>!code</code>の後に必要なスペースは1つだけですが、ここでは処理落ちを防ぐために2つにしています。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Focused!&#39; // [!code  focus]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Focused!&#39; // [!code  focus]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-focused-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Focused!&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-focused-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line has-focus"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Focused!&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="コードブロックのカラー差分" tabindex="-1">コードブロックのカラー差分 <a class="header-anchor" href="#コードブロックのカラー差分" aria-label="Permalink to &quot;コードブロックのカラー差分&quot;">​</a></h2><p>行に <code>// [!code --]</code> または <code>// [!code ++]</code> コメントを追加すると、コードブロックの色を維持したまま、その行の diff を作成することができます。</p><p><strong>Input</strong></p><p>なお、<code>!code</code>の後に必要なスペースは1つだけですが、ここでは処理落ちを防ぐために2つにしています。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Removed&#39; // [!code  --]</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Added&#39; // [!code  ++]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Removed&#39; // [!code  --]</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Added&#39; // [!code  ++]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line diff remove"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Removed&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Added&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line diff remove"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Removed&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Added&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="errors-and-warnings-in-code-blocks" tabindex="-1">Errors and Warnings in Code Blocks <a class="header-anchor" href="#errors-and-warnings-in-code-blocks" aria-label="Permalink to &quot;Errors and Warnings in Code Blocks&quot;">​</a></h2><p>行に <code>// [!コード警告]</code> または <code>// [!コードエラー]</code> のコメントを追加すると、それに応じて色がつきます。</p><p><strong>Input</strong></p><p>なお、<code>!code</code>の後に必要なスペースは1つだけですが、ここでは処理落ちを防ぐために2つにしています。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Error&#39;, // [!code  error]</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Warning&#39; // [!code  warning]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Error&#39;, // [!code  error]</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Warning&#39; // [!code  warning]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted error"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Error&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted warning"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Warning&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted error"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Error&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted warning"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Warning&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="ライン番号" tabindex="-1">ライン番号 <a class="header-anchor" href="#ライン番号" aria-label="Permalink to &quot;ライン番号&quot;">​</a></h2><p>設定により、各コードブロックの行番号を有効にすることができます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    lineNumbers: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>詳しくは <code>markdown</code> オプションを参照してください。</p><p>フェンスで囲まれたコードブロックに <code>:line-numbers</code> / <code>:no-line-numbers</code> マークを追加することで、設定で設定した値をオーバーライドすることができます。</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`ts {1}</span></span>
<span class="line"><span style="color:#6A737D;">// line-numbers is disabled by default</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`ts:line-numbers {1}</span></span>
<span class="line"><span style="color:#6A737D;">// line-numbers is enabled</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 3&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`ts {1}</span></span>
<span class="line"><span style="color:#6A737D;">// line-numbers is disabled by default</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`ts:line-numbers {1}</span></span>
<span class="line"><span style="color:#6A737D;">// line-numbers is enabled</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 3&#39;</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#6A737D;">// line-numbers is disabled by default</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 3&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#6A737D;">// line-numbers is disabled by default</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 3&#39;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#6A737D;">// line-numbers is enabled</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">line3</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;This is line 3&#39;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#6A737D;">// line-numbers is enabled</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 2&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">line3</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;This is line 3&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="import-code-snippets" tabindex="-1">Import Code Snippets <a class="header-anchor" href="#import-code-snippets" aria-label="Permalink to &quot;Import Code Snippets&quot;">​</a></h2><p>以下の構文で、既存のファイルからコードスニペットをインポートすることができます。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath</span></span></code></pre></div><p>また、<a href="#line-highlighting-in-code-blocks">ラインハイライト</a>にも対応しています。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre></div><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.js{2}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.js{2}</span></span></code></pre></div><p><strong>Code file</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>値は、ソースルートに対応します。デフォルトでは、<code>srcDir</code>が設定されていない限り、VitePressプロジェクトのルートになります。</p></div><p>また、<a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noreferrer">VS Code region</a>を使って、コードファイルの対応する部分のみを含めることができます。ファイルパスに続く <code>#</code> の後に、カスタムリージョン名を指定することができます。</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</span></span></code></pre></div><p><strong>Code file</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> foo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> foo</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>また、次のように中括弧（<code>{}</code>）の中に言語を指定することもできます。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line highlighting: --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line numbers: --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line highlighting: --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line numbers: --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}</span></span></code></pre></div><p>これは、ファイルの拡張子からソース言語が推測できない場合に便利です。</p><h2 id="コードグループ" tabindex="-1">コードグループ <a class="header-anchor" href="#コードグループ" aria-label="Permalink to &quot;コードグループ&quot;">​</a></h2><p>このように、複数のコードブロックをグループ化することができます。</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: code-group</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`js [config.js]</span></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">\`\`\`ts [config.ts]</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-QFhZO" id="tab-1kS9uy6" checked="checked"><label for="tab-1kS9uy6">config.js</label><input type="radio" name="group-QFhZO" id="tab-8108D8o"><label for="tab-8108D8o">config.ts</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@type</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@type</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">{import(&#39;vitepress&#39;).UserConfig}</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config</span></span></code></pre></div></div></div><h2 id="markdownファイルのインクルージョン" tabindex="-1">Markdownファイルのインクルージョン <a class="header-anchor" href="#markdownファイルのインクルージョン" aria-label="Permalink to &quot;Markdownファイルのインクルージョン&quot;">​</a></h2><p>マークダウン・ファイルを別のマークダウン・ファイルにインクルードすることができます。</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre></div><p><strong>Part file</strong> (<code>parts/basics.md</code>)</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Can be created using </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Can be created using </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;">.</span></span></code></pre></div><p><strong>Equivalent code</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Can be created using </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Can be created using </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;">.</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>ただし、ファイルが存在しない場合はエラーを出しません。したがって、この機能を使用する場合は、コンテンツが期待通りにレンダリングされることを確認してください。</p></div><h2 id="アドバンスト・コンフィグレーション" tabindex="-1">アドバンスト・コンフィグレーション <a class="header-anchor" href="#アドバンスト・コンフィグレーション" aria-label="Permalink to &quot;アドバンスト・コンフィグレーション&quot;">​</a></h2><p>VitePressはMarkdownレンダラとして<a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a>を使用しています。上記の拡張機能の多くは、カスタムプラグインによって実装されています。さらに、 <code>.vitepress/config.js</code> の <code>markdown</code> オプションを使用すると、 <code>markdown-it</code> インスタンスをカスタマイズすることができます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">anchor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown-it-anchor&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// options for markdown-it-anchor</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#usage</span></span>
<span class="line"><span style="color:#E1E4E8;">    anchor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      permalink: anchor.permalink.</span><span style="color:#B392F0;">headerLink</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// options for @mdit-vue/plugin-toc</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options</span></span>
<span class="line"><span style="color:#E1E4E8;">    toc: { level: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// use more markdown-it plugins!</span></span>
<span class="line"><span style="color:#E1E4E8;">      md.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown-it-xxx&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">anchor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown-it-anchor&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// options for markdown-it-anchor</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#usage</span></span>
<span class="line"><span style="color:#24292E;">    anchor: {</span></span>
<span class="line"><span style="color:#24292E;">      permalink: anchor.permalink.</span><span style="color:#6F42C1;">headerLink</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// options for @mdit-vue/plugin-toc</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options</span></span>
<span class="line"><span style="color:#24292E;">    toc: { level: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">md</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// use more markdown-it plugins!</span></span>
<span class="line"><span style="color:#24292E;">      md.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown-it-xxx&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>設定可能なプロパティの一覧はConfigsをご覧ください。アプリの設定(Config)</p>`,162),o=[e];function t(c,r,i,y,E,d){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
