import{_ as a,o as s,c as n,U as e}from"./chunks/framework.a0f12ab5.js";const y=JSON.parse('{"title":"AsciiDoc","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/syntax/asciidoc.md","filePath":"translation/honkit/syntax/asciidoc.md","lastUpdated":1676129847000}'),o={name:"translation/honkit/syntax/asciidoc.md"},c=e(`<h1 id="asciidoc" tabindex="-1">AsciiDoc <a class="header-anchor" href="#asciidoc" aria-label="Permalink to &quot;AsciiDoc&quot;">​</a></h1><p>バージョン <code>2.0.0</code> 以降、HonKit は入力フォーマットとして AsciiDoc も受け入れることができるようになりました。</p><p>フォーマットの詳細については、<a href="http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/" target="_blank" rel="noreferrer">AsciiDoc Syntax Quick Reference</a>を参照してください。</p><p>マークダウンと同じように、HonKitは構造を抽出するためにいくつかの特別なファイルを使用しています。<code>README.adoc</code>・<code>SUMMARY.adoc</code>・<code>LANGS.adoc</code>・<code>GLOSSARY.adoc</code>です。</p><h3 id="readme-adoc" tabindex="-1">README.adoc <a class="header-anchor" href="#readme-adoc" aria-label="Permalink to &quot;README.adoc&quot;">​</a></h3><p>本のメインとなる「はじめに」の部分です。このファイルは <strong>必須</strong> です。</p><h3 id="summary-adoc" tabindex="-1">SUMMARY.adoc <a class="header-anchor" href="#summary-adoc" aria-label="Permalink to &quot;SUMMARY.adoc&quot;">​</a></h3><p>このファイルはチャプターとサブチャプターのリストを定義します。Markdownと同じように、<code>SUMMARY.adoc</code>のフォーマットは単にリンクのリストで、リンクの名前は章の名前として使われ、ターゲットはその章のファイルへのパスとなります。</p><p>サブチャプターは、親チャプターにネストしたリストを追加するだけで定義できます。</p><div class="language-asciidoc"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">= Summary</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">. link:chapter-1/README.adoc[Chapter 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">.. link:chapter-1/ARTICLE1.adoc[Article 1]</span></span>
<span class="line"><span style="color:#A6ACCD;">.. link:chapter-1/ARTICLE2.adoc[Article 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">... link:chapter-1/ARTICLE-1-2-1.adoc[Article 1.2.1]</span></span>
<span class="line"><span style="color:#A6ACCD;">. link:chapter-2/README.adoc[Chapter 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">. link:chapter-3/README.adoc[Chapter 3]</span></span>
<span class="line"><span style="color:#A6ACCD;">. link:chapter-4/README.adoc[Chapter 4]</span></span>
<span class="line"><span style="color:#A6ACCD;">.. Unfinished article</span></span>
<span class="line"><span style="color:#A6ACCD;">. Unfinished Chapter</span></span></code></pre></div><h3 id="langs-adoc" tabindex="-1">LANGS.adoc <a class="header-anchor" href="#langs-adoc" aria-label="Permalink to &quot;LANGS.adoc&quot;">​</a></h3><p>多言語では、このファイルを使って、さまざまなサポート言語と翻訳を定義します。</p><p>このファイルは <code>SUMMARY.adoc</code> と同じシンタックスに従っています。</p><div class="language-asciidoc"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">= Languages</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">. link:en/[English]</span></span>
<span class="line"><span style="color:#A6ACCD;">. link:fr/[French]</span></span></code></pre></div><h3 id="glossary-adoc" tabindex="-1">GLOSSARY.adoc <a class="header-anchor" href="#glossary-adoc" aria-label="Permalink to &quot;GLOSSARY.adoc&quot;">​</a></h3><p>このファイルは、用語の定義に使用されます。用語集の項を参照。</p><div class="language-asciidoc"><button title="Copy Code" class="copy"></button><span class="lang">asciidoc</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">= Glossary</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">== Magic</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Sufficiently advanced technology, beyond the understanding of the</span></span>
<span class="line"><span style="color:#A6ACCD;">observer producing a sense of wonder.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">== PHP</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">A popular web programming language, used by many large websites such</span></span>
<span class="line"><span style="color:#A6ACCD;">as Facebook. Rasmus Lerdorf originally created PHP in 1994 to power</span></span>
<span class="line"><span style="color:#A6ACCD;">his personal homepage (PHP originally stood for &quot;Personal Home Page&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">but now stands for &quot;PHP: Hypertext Preprocessor&quot;).</span></span></code></pre></div>`,17),l=[c];function p(t,i,r,d,A,C){return s(),n("div",null,l)}const u=a(o,[["render",p]]);export{y as __pageData,u as default};
