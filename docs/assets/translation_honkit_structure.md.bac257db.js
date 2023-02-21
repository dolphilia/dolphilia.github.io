import{_ as s,c as a,o as n,a as e}from"./app.b419af8d.js";const g=JSON.parse('{"title":"ディレクトリ構造","description":"","frontmatter":{},"headers":[{"level":3,"title":"静止画ファイル・画像","slug":"静止画ファイル・画像","link":"#静止画ファイル・画像","children":[]},{"level":3,"title":"ファイル＆フォルダの無視","slug":"ignore","link":"#ignore","children":[]},{"level":3,"title":"サブディレクトリを使ったプロジェクト統合","slug":"subdirectory","link":"#subdirectory","children":[]}],"relativePath":"translation/honkit/structure.md","lastUpdated":1676126774000}'),o={name:"translation/honkit/structure.md"},t=e(`<h1 id="ディレクトリ構造" tabindex="-1">ディレクトリ構造 <a class="header-anchor" href="#ディレクトリ構造" aria-hidden="true">#</a></h1><p>HonKitはシンプルなディレクトリ構造を使用しています。<a href="./pages">SUMMARY</a>にリストされたすべてのMarkdown/AsciidocファイルはHTMLに変換されます。多言語の書籍は若干<a href="./languages">異なる構造</a>になっています。</p><p>基本的なHonKitは通常、次のようなものです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── book.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── SUMMARY.md</span></span>
<span class="line"><span style="color:#A6ACCD;">├── chapter-1/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">|   └── something.md</span></span>
<span class="line"><span style="color:#A6ACCD;">└── chapter-2/</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── something.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>それぞれの役割の概要を説明します。</p><table><thead><tr><th>ファイル</th><th>説明</th></tr></thead><tbody><tr><td><code>book.json</code></td><td><a href="./config">設定</a>データを格納する(<strong>任意</strong>)</td></tr><tr><td><code>README.md</code></td><td>本の序文 / 紹介文 (<strong>必須</strong>)</td></tr><tr><td><code>SUMMARY.md</code></td><td>目次（<a href="./pages">ページ</a>を参照） (<strong>任意</strong>)</td></tr><tr><td><code>GLOSSARY.md</code></td><td>用語集 / 注釈を付ける用語のリスト（<a href="./lexicon">用語集</a>を参照） (<strong>任意</strong>)</td></tr></tbody></table><h3 id="静止画ファイル・画像" tabindex="-1">静止画ファイル・画像 <a class="header-anchor" href="#静止画ファイル・画像" aria-hidden="true">#</a></h3><p>静的ファイルとは<code>SUMMARY.md</code>にリストされていないファイルのことです。<a href="#ignore">無視</a>されない限り、すべての静的ファイルは出力にコピーされます。</p><h3 id="ignore" tabindex="-1">ファイル＆フォルダの無視 <a class="header-anchor" href="#ignore" aria-hidden="true">#</a></h3><p>HonKitは<code>.gitignore</code>・<code>.bookignore</code>・<code>.ignore</code> ファイルを読み込んでスキップするファイルやフォルダのリストを取得します。 これらのファイル内のフォーマットは<code>.gitignore</code>と同じ規則に従います。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># これはコメントです</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># test.md ファイルを無視します</span></span>
<span class="line"><span style="color:#A6ACCD;">test.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># binディレクトリにあるものはすべて無視する。</span></span>
<span class="line"><span style="color:#A6ACCD;">bin/*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="subdirectory" tabindex="-1">サブディレクトリを使ったプロジェクト統合 <a class="header-anchor" href="#subdirectory" aria-hidden="true">#</a></h3><p>ソフトウェアプロジェクトでは、プロジェクトのドキュメント用のブックを保存するためにサブディレクトリ（<code>docs/</code>など）を使用することができます。また、<a href="./config"><code>root</code> オプション</a>でHonKitがブックのファイルを見つけることができるフォルダを設定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── book.json</span></span>
<span class="line"><span style="color:#A6ACCD;">└── docs/</span></span>
<span class="line"><span style="color:#A6ACCD;">    ├── README.md</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── SUMMARY.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>book.json</code>に含めます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;root&quot;: &quot;./docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),l=[t];function p(c,r,i,d,A,C){return n(),a("div",null,l)}const y=s(o,[["render",p]]);export{g as __pageData,y as default};
