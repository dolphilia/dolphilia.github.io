import{_ as a,c as e,o,a3 as n}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"電子ブックやPDFの生成","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/ebook.md","filePath":"translation/honkit/ebook.md","lastUpdated":1676126774000}'),s={name:"translation/honkit/ebook.md"},t=n(`<h1 id="電子ブックやpdfの生成" tabindex="-1">電子ブックやPDFの生成 <a class="header-anchor" href="#電子ブックやpdfの生成" aria-label="Permalink to &quot;電子ブックやPDFの生成&quot;">​</a></h1><p>HonKitはウェブサイトを生成するだけでなく、電子書籍（ePub・Mobi・PDF）としてコンテンツを出力することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># Generate a PDF file</span></span>
<span class="line"><span>$ honkit pdf ./ ./mybook.pdf</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Generate an ePub file</span></span>
<span class="line"><span>$ honkit epub ./ ./mybook.epub</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Generate a Mobi file</span></span>
<span class="line"><span>$ honkit mobi ./ ./mybook.mobi</span></span></code></pre></div><h3 id="ebook-convertのインストール" tabindex="-1">ebook-convertのインストール <a class="header-anchor" href="#ebook-convertのインストール" aria-label="Permalink to &quot;ebook-convertのインストール&quot;">​</a></h3><p>電子書籍(epub, mobi, pdf)を生成するには<code>ebook-convert</code>が必要です。</p><h5 id="os-x" tabindex="-1">OS X <a class="header-anchor" href="#os-x" aria-label="Permalink to &quot;OS X&quot;">​</a></h5><p><a href="https://calibre-ebook.com/download" target="_blank" rel="noreferrer">キャリバーアプリケーション</a>をダウンロードします。<code>calibre.app</code>をアプリケーションフォルダに移動した後、電子書籍変換ツールへのシンボリックリンクを作成します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ sudo ln -s /Applications/calibre.app/Contents/MacOS/ebook-convert /usr/local/bin</span></span></code></pre></div><p><code>usr/bin</code> は、$PATH にある任意のディレクトリに置き換えることができます。</p><h3 id="カバー" tabindex="-1">カバー <a class="header-anchor" href="#カバー" aria-label="Permalink to &quot;カバー&quot;">​</a></h3><p>カバーはすべての電子書籍のフォーマットに使用されています。</p><p>表紙を付けるには、本のルートディレクトリに <strong><code>cover.jpg</code></strong> ファイルを配置します。**cover_small.jpg\`**を追加すると、より小さいバージョンの表紙を指定することができます。表紙は <strong>JPEG</strong> ファイルである必要があります。</p><p>良い表紙は、以下のガイドラインを尊重する必要があります。</p><ul><li>サイズは <code>cover.jpg</code> が1800x2360ピクセル、 <code>cover_small.jpg</code> が200x262ピクセルです。</li><li>ボーダーなし</li><li>書籍のタイトルがはっきりと見える</li><li>重要なテキストは小さなバージョンで表示されるようにします。</li></ul>`,14),p=[t];function i(l,c,r,d,b,h){return o(),e("div",null,p)}const _=a(s,[["render",i]]);export{u as __pageData,_ as default};