import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.C5O6QHj3.js";const m=JSON.parse('{"title":"AsciiDoc","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/syntax/asciidoc.md","filePath":"translation/honkit/syntax/asciidoc.md","lastUpdated":1676129847000}'),p={name:"translation/honkit/syntax/asciidoc.md"},c=e(`<h1 id="asciidoc" tabindex="-1">AsciiDoc <a class="header-anchor" href="#asciidoc" aria-label="Permalink to &quot;AsciiDoc&quot;">​</a></h1><p>バージョン <code>2.0.0</code> 以降、HonKit は入力フォーマットとして AsciiDoc も受け入れることができるようになりました。</p><p>フォーマットの詳細については、<a href="http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/" target="_blank" rel="noreferrer">AsciiDoc Syntax Quick Reference</a>を参照してください。</p><p>マークダウンと同じように、HonKitは構造を抽出するためにいくつかの特別なファイルを使用しています。<code>README.adoc</code>・<code>SUMMARY.adoc</code>・<code>LANGS.adoc</code>・<code>GLOSSARY.adoc</code>です。</p><h3 id="readme-adoc" tabindex="-1">README.adoc <a class="header-anchor" href="#readme-adoc" aria-label="Permalink to &quot;README.adoc&quot;">​</a></h3><p>本のメインとなる「はじめに」の部分です。このファイルは <strong>必須</strong> です。</p><h3 id="summary-adoc" tabindex="-1">SUMMARY.adoc <a class="header-anchor" href="#summary-adoc" aria-label="Permalink to &quot;SUMMARY.adoc&quot;">​</a></h3><p>このファイルはチャプターとサブチャプターのリストを定義します。Markdownと同じように、<code>SUMMARY.adoc</code>のフォーマットは単にリンクのリストで、リンクの名前は章の名前として使われ、ターゲットはその章のファイルへのパスとなります。</p><p>サブチャプターは、親チャプターにネストしたリストを追加するだけで定義できます。</p><div class="language-asciidoc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>= Summary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>. link:chapter-1/README.adoc[Chapter 1]</span></span>
<span class="line"><span>.. link:chapter-1/ARTICLE1.adoc[Article 1]</span></span>
<span class="line"><span>.. link:chapter-1/ARTICLE2.adoc[Article 2]</span></span>
<span class="line"><span>... link:chapter-1/ARTICLE-1-2-1.adoc[Article 1.2.1]</span></span>
<span class="line"><span>. link:chapter-2/README.adoc[Chapter 2]</span></span>
<span class="line"><span>. link:chapter-3/README.adoc[Chapter 3]</span></span>
<span class="line"><span>. link:chapter-4/README.adoc[Chapter 4]</span></span>
<span class="line"><span>.. Unfinished article</span></span>
<span class="line"><span>. Unfinished Chapter</span></span></code></pre></div><h3 id="langs-adoc" tabindex="-1">LANGS.adoc <a class="header-anchor" href="#langs-adoc" aria-label="Permalink to &quot;LANGS.adoc&quot;">​</a></h3><p>多言語では、このファイルを使って、さまざまなサポート言語と翻訳を定義します。</p><p>このファイルは <code>SUMMARY.adoc</code> と同じシンタックスに従っています。</p><div class="language-asciidoc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>= Languages</span></span>
<span class="line"><span></span></span>
<span class="line"><span>. link:en/[English]</span></span>
<span class="line"><span>. link:fr/[French]</span></span></code></pre></div><h3 id="glossary-adoc" tabindex="-1">GLOSSARY.adoc <a class="header-anchor" href="#glossary-adoc" aria-label="Permalink to &quot;GLOSSARY.adoc&quot;">​</a></h3><p>このファイルは、用語の定義に使用されます。用語集の項を参照。</p><div class="language-asciidoc vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>= Glossary</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== Magic</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Sufficiently advanced technology, beyond the understanding of the</span></span>
<span class="line"><span>observer producing a sense of wonder.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>== PHP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>A popular web programming language, used by many large websites such</span></span>
<span class="line"><span>as Facebook. Rasmus Lerdorf originally created PHP in 1994 to power</span></span>
<span class="line"><span>his personal homepage (PHP originally stood for &quot;Personal Home Page&quot;</span></span>
<span class="line"><span>but now stands for &quot;PHP: Hypertext Preprocessor&quot;).</span></span></code></pre></div>`,17),o=[c];function i(t,l,d,r,h,u){return n(),s("div",null,o)}const k=a(p,[["render",i]]);export{m as __pageData,k as default};
