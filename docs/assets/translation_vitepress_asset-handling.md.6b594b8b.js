import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"アセットハンドリング","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/asset-handling.md","filePath":"translation/vitepress/asset-handling.md","lastUpdated":1676126774000}'),l={name:"translation/vitepress/asset-handling.md"},e=p(`<h1 id="アセットハンドリング" tabindex="-1">アセットハンドリング <a class="header-anchor" href="#アセットハンドリング" aria-label="Permalink to &quot;アセットハンドリング&quot;">​</a></h1><p>すべてのMarkdownファイルは、Vueコンポーネントにコンパイルされ、Viteで処理されます。相対URLでアセットを参照することができますし、そうすべきです。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">![</span><span style="color:#DBEDFF;text-decoration:underline;">An image</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">./image.png</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">![</span><span style="color:#032F62;text-decoration:underline;">An image</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">./image.png</span><span style="color:#24292E;">)</span></span></code></pre></div><p>マークダウンファイルの静的アセット、テーマの*.vueコンポーネント、スタイルやプレーンな.cssファイルは、絶対パス（プロジェクトルートを基準とする）または相対パス（ファイルシステムを基準とする）を使用して参照できます。後者は、vue-cliやwebpackのfile-loaderを使用したことがある場合に慣れている動作と似ています。</p><p>一般的な画像、メディア、フォントのファイルタイプは、自動的に検出され、アセットとして含まれます。</p><p>参照されるすべてのアセット（絶対パスを使用するものを含む）は、本番ビルドでハッシュ化されたファイル名を持つdistフォルダにコピーされます。参照されないアセットは、コピーされません。vue-cliと同様に、4kb未満の画像アセットがbase64インライン化されます。</p><p>絶対パスを含むすべての静的なパス参照は、作業ディレクトリ構造に基づいている必要があります。</p><h2 id="公開ファイル" tabindex="-1">公開ファイル <a class="header-anchor" href="#公開ファイル" aria-label="Permalink to &quot;公開ファイル&quot;">​</a></h2><p>Markdownやテーマコンポーネントのいずれでも直接参照されない静的資産を提供する必要がある場合があります（例えば、ファビコンやPWAアイコンなど）。プロジェクトルート下のpublicディレクトリ（vitepress build docsを実行している場合はdocsフォルダ）は、ソースコードで参照されない（例：robots.txt）、または全く同じファイル名（ハッシュなし）を保持しなければならない静的資産を提供するための脱出口として使用することができます。</p><p>publicに置かれたアセットは、そのままdistディレクトリのルートにコピーされます。</p><p>publicに配置されたファイルは、ルートの絶対パスで参照することに注意してください。たとえば、public/icon.pngは、ソースコードでは常に/icon.pngとして参照されるべきです。</p><h2 id="ベースurl" tabindex="-1">ベースURL <a class="header-anchor" href="#ベースurl" aria-label="Permalink to &quot;ベースURL&quot;">​</a></h2><p>あなたのサイトを非ルートURLにデプロイする場合、.vitepress/config.js で base オプションを設定する必要があります。たとえば、あなたのサイトを <a href="https://foo.github.io/bar/" target="_blank" rel="noreferrer">https://foo.github.io/bar/</a> にデプロイする予定であれば、base は &#39;/bar/&#39; に設定する必要があります（常にスラッシュで始まり、スラッシュで終わります）。</p><p>すべての静的アセットのパスは、異なるベース設定値に対応するように自動的に処理されます。例えば、マークダウンでpublicの下にあるアセットへの絶対的な参照がある場合、そのアセットへのパスが自動的に処理されます。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">![</span><span style="color:#DBEDFF;text-decoration:underline;">An image</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/image-inside-public.png</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">![</span><span style="color:#032F62;text-decoration:underline;">An image</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/image-inside-public.png</span><span style="color:#24292E;">)</span></span></code></pre></div><p>この場合、ベースコンフィグ値を変更した際に更新する必要はありません。</p><p>しかし、アセットに動的にリンクするテーマコンポーネントをオーサリングする場合、例えば src がテーマ設定値に基づいている画像などでは、そのアセットを更新する必要があります。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">theme.logoPath</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">theme.logoPath</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>この場合、VitePressが提供するwithBaseヘルパーでパスをラップすることが推奨されます。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { withBase, useData } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useData</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;withBase(theme.logoPath)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { withBase, useData } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useData</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;withBase(theme.logoPath)&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,20),o=[e];function t(c,r,i,E,y,d){return a(),n("div",null,o)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};