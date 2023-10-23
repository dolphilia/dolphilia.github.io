import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.92ce8a2a.js";const u=JSON.parse('{"title":"ディレクトリ構造","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/structure.md","filePath":"translation/honkit/structure.md","lastUpdated":1676126774000}'),o={name:"translation/honkit/structure.md"},p=e(`<h1 id="ディレクトリ構造" tabindex="-1">ディレクトリ構造 <a class="header-anchor" href="#ディレクトリ構造" aria-label="Permalink to &quot;ディレクトリ構造&quot;">​</a></h1><p>HonKitはシンプルなディレクトリ構造を使用しています。<a href="./pages.html">SUMMARY</a>にリストされたすべてのMarkdown/AsciidocファイルはHTMLに変換されます。多言語の書籍は若干<a href="./languages.html">異なる構造</a>になっています。</p><p>基本的なHonKitは通常、次のようなものです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├── book.json</span></span>
<span class="line"><span style="color:#e1e4e8;">├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── SUMMARY.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── chapter-1/</span></span>
<span class="line"><span style="color:#e1e4e8;">|   ├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">|   └── something.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└── chapter-2/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── something.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├── book.json</span></span>
<span class="line"><span style="color:#24292e;">├── README.md</span></span>
<span class="line"><span style="color:#24292e;">├── SUMMARY.md</span></span>
<span class="line"><span style="color:#24292e;">├── chapter-1/</span></span>
<span class="line"><span style="color:#24292e;">|   ├── README.md</span></span>
<span class="line"><span style="color:#24292e;">|   └── something.md</span></span>
<span class="line"><span style="color:#24292e;">└── chapter-2/</span></span>
<span class="line"><span style="color:#24292e;">    ├── README.md</span></span>
<span class="line"><span style="color:#24292e;">    └── something.md</span></span></code></pre></div><p>それぞれの役割の概要を説明します。</p><table><thead><tr><th>ファイル</th><th>説明</th></tr></thead><tbody><tr><td><code>book.json</code></td><td><a href="./config.html">設定</a>データを格納する(<strong>任意</strong>)</td></tr><tr><td><code>README.md</code></td><td>本の序文 / 紹介文 (<strong>必須</strong>)</td></tr><tr><td><code>SUMMARY.md</code></td><td>目次（<a href="./pages.html">ページ</a>を参照） (<strong>任意</strong>)</td></tr><tr><td><code>GLOSSARY.md</code></td><td>用語集 / 注釈を付ける用語のリスト（<a href="./lexicon.html">用語集</a>を参照） (<strong>任意</strong>)</td></tr></tbody></table><h3 id="静止画ファイル・画像" tabindex="-1">静止画ファイル・画像 <a class="header-anchor" href="#静止画ファイル・画像" aria-label="Permalink to &quot;静止画ファイル・画像&quot;">​</a></h3><p>静的ファイルとは<code>SUMMARY.md</code>にリストされていないファイルのことです。<a href="#ignore">無視</a>されない限り、すべての静的ファイルは出力にコピーされます。</p><h3 id="ignore" tabindex="-1">ファイル＆フォルダの無視 <a class="header-anchor" href="#ignore" aria-label="Permalink to &quot;ファイル＆フォルダの無視 {#ignore}&quot;">​</a></h3><p>HonKitは<code>.gitignore</code>・<code>.bookignore</code>・<code>.ignore</code> ファイルを読み込んでスキップするファイルやフォルダのリストを取得します。 これらのファイル内のフォーマットは<code>.gitignore</code>と同じ規則に従います。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># これはコメントです</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># test.md ファイルを無視します</span></span>
<span class="line"><span style="color:#e1e4e8;">test.md</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># binディレクトリにあるものはすべて無視する。</span></span>
<span class="line"><span style="color:#e1e4e8;">bin/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># これはコメントです</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># test.md ファイルを無視します</span></span>
<span class="line"><span style="color:#24292e;">test.md</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># binディレクトリにあるものはすべて無視する。</span></span>
<span class="line"><span style="color:#24292e;">bin/*</span></span></code></pre></div><h3 id="subdirectory" tabindex="-1">サブディレクトリを使ったプロジェクト統合 <a class="header-anchor" href="#subdirectory" aria-label="Permalink to &quot;サブディレクトリを使ったプロジェクト統合 {#subdirectory}&quot;">​</a></h3><p>ソフトウェアプロジェクトでは、プロジェクトのドキュメント用のブックを保存するためにサブディレクトリ（<code>docs/</code>など）を使用することができます。また、<a href="./config.html"><code>root</code> オプション</a>でHonKitがブックのファイルを見つけることができるフォルダを設定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├── book.json</span></span>
<span class="line"><span style="color:#e1e4e8;">└── docs/</span></span>
<span class="line"><span style="color:#e1e4e8;">    ├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── SUMMARY.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├── book.json</span></span>
<span class="line"><span style="color:#24292e;">└── docs/</span></span>
<span class="line"><span style="color:#24292e;">    ├── README.md</span></span>
<span class="line"><span style="color:#24292e;">    └── SUMMARY.md</span></span></code></pre></div><p><code>book.json</code>に含めます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;root&quot;: &quot;./docs&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;root&quot;: &quot;./docs&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,16),l=[p];function t(c,r,i,d,h,y){return a(),n("div",null,l)}const m=s(o,[["render",t]]);export{u as __pageData,m as default};
