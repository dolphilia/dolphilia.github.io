import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const d=JSON.parse('{"title":"Vivliostyle Themes とは","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vivliostyle/themes.md","filePath":"translation/vivliostyle/themes.md","lastUpdated":1676974355000}'),p={name:"translation/vivliostyle/themes.md"},o=l(`<h1 id="vivliostyle-themes-とは" tabindex="-1">Vivliostyle Themes とは <a class="header-anchor" href="#vivliostyle-themes-とは" aria-label="Permalink to &quot;Vivliostyle Themes とは&quot;">​</a></h1><p>Vivliostyle Theme は、Vivliostyle で出版物を作る際に使うスタイルテーマです。Theme の実体は、スタイルファイル、サンプル原稿、package.json です。</p><nav class="table-of-contents"><ul><li><a href="#仕様">仕様</a><ul><li><a href="#theme-名">Theme 名</a></li><li><a href="#theme-に含めるスタイル">Theme に含めるスタイル</a></li><li><a href="#ディレクトリ構造">ディレクトリ構造</a></li><li><a href="#package-json">package.json</a></li><li><a href="#example">example/</a></li><li><a href="#scss">scss/</a></li><li><a href="#css">*.css</a></li><li><a href="#vivliostyle-config-js">vivliostyle.config.js</a></li></ul></li><li><a href="#チュートリアル">チュートリアル</a><ul><li><a href="#はじめに">はじめに</a></li><li><a href="#step-1-雛形の生成">Step 1. 雛形の生成</a></li><li><a href="#step-2-サンプル原稿の用意">Step 2. サンプル原稿の用意</a></li><li><a href="#step-3-カウンタの表示">Step 3. カウンタの表示</a></li><li><a href="#step-4-目次の表示">Step 4. 目次の表示</a></li><li><a href="#step-5-原稿ごとのスタイルの設定">Step 5. 原稿ごとのスタイルの設定</a></li><li><a href="#step-6-完成">Step 6. 完成！</a></li></ul></li></ul></nav><h2 id="仕様" tabindex="-1">仕様 <a class="header-anchor" href="#仕様" aria-label="Permalink to &quot;仕様&quot;">​</a></h2><p>Theme を npm package として公開する場合は以下の仕様に従ってください。<a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a> を使うと、この仕様に従った Theme を簡単に作成することができます。</p><h3 id="theme-名" tabindex="-1">Theme 名 <a class="header-anchor" href="#theme-名" aria-label="Permalink to &quot;Theme 名&quot;">​</a></h3><p>Theme の名前は自由に決められます。ただし、以下の点を考慮することを推奨します。</p><ul><li>用途が明確な場合は、用途を表す端的な用語を含める</li><li>変更可能なスタイルに関する用語を避ける <ul><li>出版物のサイズや組み方向などは、将来的には Vivliostyle Pub などでユーザが簡単に変更できるようになる予定です。したがって、これらの変更可能なスタイルに関する用語を使うことは避けてください。</li><li>避けるべき名前の例：vivliostyle-theme-a4book、vivliostyle-theme-tategaki など</li></ul></li></ul><h3 id="theme-に含めるスタイル" tabindex="-1">Theme に含めるスタイル <a class="header-anchor" href="#theme-に含めるスタイル" aria-label="Permalink to &quot;Theme に含めるスタイル&quot;">​</a></h3><p>Theme は、出版物の特定の部分のみ（図表のみ、脚注のみなど）のスタイルを含んだものではなく、出版物全体のスタイルを含めるものとします。</p><p>以下に、Theme に含めることが望ましい代表的なスタイルを示します。<a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a> で作成した Theme の雛形はこれらのスタイルを含んでいます。</p><ul><li>ページ（余白、柱など）</li><li>見出し</li><li>段落</li><li>数式</li><li>図とキャプション</li><li>表とキャプション</li><li>ソースコード</li><li>脚注</li><li>ルビ</li></ul><h3 id="ディレクトリ構造" tabindex="-1">ディレクトリ構造 <a class="header-anchor" href="#ディレクトリ構造" aria-label="Permalink to &quot;ディレクトリ構造&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vivliostyle-theme-mybook/</span></span>
<span class="line"><span style="color:#e1e4e8;">├── LICENSE</span></span>
<span class="line"><span style="color:#e1e4e8;">├── README.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── package.json           # required</span></span>
<span class="line"><span style="color:#e1e4e8;">├── example/               # required</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── default.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├── scss/                  # required</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── theme_common.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   ├── theme_print.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── theme_screen.scss</span></span>
<span class="line"><span style="color:#e1e4e8;">├── theme_common.css       # required</span></span>
<span class="line"><span style="color:#e1e4e8;">├── theme_print.css        # required</span></span>
<span class="line"><span style="color:#e1e4e8;">├── theme_screen.css       # required</span></span>
<span class="line"><span style="color:#e1e4e8;">└── vivliostyle.config.js  # required</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vivliostyle-theme-mybook/</span></span>
<span class="line"><span style="color:#24292e;">├── LICENSE</span></span>
<span class="line"><span style="color:#24292e;">├── README.md</span></span>
<span class="line"><span style="color:#24292e;">├── package.json           # required</span></span>
<span class="line"><span style="color:#24292e;">├── example/               # required</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   └── default.md</span></span>
<span class="line"><span style="color:#24292e;">├── scss/                  # required</span></span>
<span class="line"><span style="color:#24292e;">│   ├── ...</span></span>
<span class="line"><span style="color:#24292e;">│   ├── theme_common.scss</span></span>
<span class="line"><span style="color:#24292e;">│   ├── theme_print.scss</span></span>
<span class="line"><span style="color:#24292e;">│   └── theme_screen.scss</span></span>
<span class="line"><span style="color:#24292e;">├── theme_common.css       # required</span></span>
<span class="line"><span style="color:#24292e;">├── theme_print.css        # required</span></span>
<span class="line"><span style="color:#24292e;">├── theme_screen.css       # required</span></span>
<span class="line"><span style="color:#24292e;">└── vivliostyle.config.js  # required</span></span></code></pre></div><p><a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a> で Theme の雛形を作成すると、上のようなファイルが自動生成されます。次の節からは代表的なファイルの詳細を見ていきます。</p><h3 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vivliostyle-theme-mybook&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;John Doe &lt;john@example.com&gt;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;keywords&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 以下で説明</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;vivliostyle&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;vivliostyle-theme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;*.css&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;*.css.map&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;example&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;vivliostyle.config.js&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;vivliostyle&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 以下で説明</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;theme&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./theme_print.css&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// required</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Mybook&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;author&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;John Doe&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// required</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;category&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;novel&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;topics&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;paperback&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vivliostyle-theme-mybook&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;author&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;John Doe &lt;john@example.com&gt;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;keywords&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 以下で説明</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;vivliostyle&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;vivliostyle-theme&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;*.css&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;*.css.map&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;example&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;vivliostyle.config.js&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;vivliostyle&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 以下で説明</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;theme&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;style&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./theme_print.css&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// required</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Mybook&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;author&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;John Doe&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// required</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;category&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;novel&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;topics&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;paperback&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a href="https://github.com/vivliostyle/themes/tree/master/packages/vivliostyle-theme-scripts" target="_blank" rel="noreferrer">vivliostyle-theme-scripts</a> を使うと、作成した Theme の package.json が仕様に従っているかをチェックできます。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle-theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">validate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle-theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">validate</span></span></code></pre></div><h4 id="keywords-プロパティ" tabindex="-1"><code>keywords</code> プロパティ <a class="header-anchor" href="#keywords-プロパティ" aria-label="Permalink to &quot;\`keywords\` プロパティ&quot;">​</a></h4><p>任意。</p><p>このプロパティの値に <code>&quot;vivliostyle-theme&quot;</code> を含めておくと、[Create Book][] を使って出版物を作る際、利用可能な Theme の一覧にあなたの Theme が表示されます。ただし、そのためには Theme を npm package として公開している必要があります。</p><p>Theme は Vivliostyle に関連する npm package であるため、<code>&quot;vivliostyle&quot;</code> も含めておくとよいでしょう。</p><h4 id="vivliostyle-theme-プロパティ" tabindex="-1"><code>vivliostyle.theme</code> プロパティ <a class="header-anchor" href="#vivliostyle-theme-プロパティ" aria-label="Permalink to &quot;\`vivliostyle.theme\` プロパティ&quot;">​</a></h4><h5 id="style-プロパティ" tabindex="-1"><code>style</code> プロパティ <a class="header-anchor" href="#style-プロパティ" aria-label="Permalink to &quot;\`style\` プロパティ&quot;">​</a></h5><p>必須。Theme で使うメインの CSS を指定します。</p><p>package.json のトップレベルに <code>style</code> や <code>main</code> を指定することもできます。<code>vivliostyle.theme.style</code> と同じ意味を持ちますが、優先順位は <code>vivliostyle.theme.style</code> &gt; <code>style</code> &gt; <code>main</code> です。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;style&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;theme_print.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;style&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;theme_print.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;theme_print.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;theme_print.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="author-プロパティ" tabindex="-1"><code>author</code> プロパティ <a class="header-anchor" href="#author-プロパティ" aria-label="Permalink to &quot;\`author\` プロパティ&quot;">​</a></h5><p>必須。</p><h5 id="category-プロパティ" tabindex="-1"><code>category</code> プロパティ <a class="header-anchor" href="#category-プロパティ" aria-label="Permalink to &quot;\`category\` プロパティ&quot;">​</a></h5><p>任意。このプロパティは、あなたの Theme を初めて使おうとするユーザが Theme の主な用途を知るためのヒントになります。Theme にもっともあてはまるものを以下のリストから選んでください。</p><ul><li><code>&quot;novel&quot;</code></li><li><code>&quot;magazine&quot;</code></li><li><code>&quot;journal&quot;</code></li><li><code>&quot;report&quot;</code></li><li><code>&quot;misc&quot;</code></li></ul><p>なお、このリストは今後更新される場合があります。</p><h5 id="topics-プロパティ" tabindex="-1"><code>topics</code> プロパティ <a class="header-anchor" href="#topics-プロパティ" aria-label="Permalink to &quot;\`topics\` プロパティ&quot;">​</a></h5><p>任意。Theme の用途を <code>category</code> プロパティよりも具体的に説明したい場合、ここにリストアップして記述しておくとよいでしょう。</p><h3 id="example" tabindex="-1">example/ <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example/&quot;">​</a></h3><p>example/ ディレクトリには、Theme の端的なサンプルとなるような Markdown ファイルを 1 つ以上含めてください。ファイル名は任意です。</p><p>Markdown ファイルでは <a href="https://vivliostyle.github.io/vfm/#/vfm" target="_blank" rel="noreferrer">VFM (Vivliostyle Flavored Markdown)</a>が利用できます。</p><h3 id="scss" tabindex="-1">scss/ <a class="header-anchor" href="#scss" aria-label="Permalink to &quot;scss/&quot;">​</a></h3><p>Theme のスタイルを定義したスタイルシートを含めてください。組版用のスタイル定義は複雑になることが多いうえ、Theme を使うユーザがスタイルシートを編集して独自にカスタマイズすることもあります。そのため、変数や mixin が使える SCSS の使用を推奨しています。</p><p>Theme には複数のスタイルシートを含めることができます。詳細は <a href="https://github.com/vivliostyle/vivliostyle-cli/issues/143#issuecomment-791990973" target="_blank" rel="noreferrer">issue (vivliostyle/vivliostyle-cli #143)</a> を参照してください。たとえば、以下に示す用途を想定した 3 種類のスタイルシートを用意することができます。</p><ul><li>theme_print.scss: PDF として出力する場合や、Vivliostyle Viewer で閲覧する場合のスタイルを定義</li><li>theme_screen.scss: HTML などの webpub 形式で出力する場合のスタイルを定義</li><li>theme_common.scss: 上の 2 つに共通するスタイルを定義</li></ul><h3 id="css" tabindex="-1">*.css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;\\*.css&quot;">​</a></h3><p>scss/ ディレクトリのスタイルシートから生成された CSS ファイル群です。</p><h3 id="vivliostyle-config-js" tabindex="-1">vivliostyle.config.js <a class="header-anchor" href="#vivliostyle-config-js" aria-label="Permalink to &quot;vivliostyle.config.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  language: </span><span style="color:#9ECBFF;">&#39;ja&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: </span><span style="color:#9ECBFF;">&#39;theme_print.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: [</span><span style="color:#9ECBFF;">&#39;example/default.md&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  output: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;book.pdf&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;./book&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      format: </span><span style="color:#9ECBFF;">&#39;webpub&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  language: </span><span style="color:#032F62;">&#39;ja&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  theme: </span><span style="color:#032F62;">&#39;theme_print.css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  entry: [</span><span style="color:#032F62;">&#39;example/default.md&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  output: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;book.pdf&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;./book&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      format: </span><span style="color:#032F62;">&#39;webpub&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>example/ 内の Markdown ファイルから出版物を生成するための設定ファイルです。開発者が Theme を開発する際に使うほか、Theme を使うユーザがサンプル出版物を生成する際にも使います。</p><h2 id="チュートリアル" tabindex="-1">チュートリアル <a class="header-anchor" href="#チュートリアル" aria-label="Permalink to &quot;チュートリアル&quot;">​</a></h2><h3 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h3><p>このチュートリアルでわかることは以下の通りです。</p><ul><li>オリジナルの Theme の作り方</li><li><a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a> の使い方</li><li>組版用の CSS の書き方 <ul><li>カウンタ</li><li>見出し</li><li>目次</li><li>など……</li></ul></li></ul><p>CSS やサンプル原稿などの具体的な部分は Theme ごとに変わりますが、作成手順はどの Theme も同じです。なお、このチュートリアルで作成する Theme の完成品は <a href="https://github.com/yamasy1549/vivliostyle-theme-my-doujin" target="_blank" rel="noreferrer">yamasy1549/vivliostyle-theme-my-doujin</a> にあります。</p><h4 id="バージョン情報" tabindex="-1">バージョン情報 <a class="header-anchor" href="#バージョン情報" aria-label="Permalink to &quot;バージョン情報&quot;">​</a></h4><ul><li><a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a>: 0.4.0</li><li><a href="https://github.com/vivliostyle/vivliostyle-cli" target="_blank" rel="noreferrer">@vivliostyle/cli</a>: 4.3.2</li><li><a href="https://github.com/vivliostyle/vfm/" target="_blank" rel="noreferrer">@vivliostyle/vfm</a>: 1.0.2</li></ul><h4 id="チュートリアルの設定" tabindex="-1">チュートリアルの設定 <a class="header-anchor" href="#チュートリアルの設定" aria-label="Permalink to &quot;チュートリアルの設定&quot;">​</a></h4><p>今回作るのは、複数人の書き手による小説合同誌のための Theme です。執筆者は複数人おり、1 人が 1 章分（1 つの Markdown 原稿ファイル）を担当することになっています。合同誌制作にあたって、執筆者たちから次のような要望を受けています。</p><ul><li>全体を通した<strong>ページ番号</strong>、<strong>章番号</strong>がほしい</li><li><strong>目次</strong>がほしい</li><li>見た目は統一するが、章（原稿ファイル）ごとに<strong>テーマカラー</strong>を変えたい</li></ul><p>このチュートリアルは、<a href="https://vivliostyle.org/ja/make-books-with-vivliostyle/#vivliostyle-%E3%81%A7%E6%9C%AC%E3%82%92%E4%BD%9C%E3%82%8D%E3%81%86-vol52021%E5%B9%B47%E6%9C%8811%E6%97%A5" target="_blank" rel="noreferrer">Vivliostyle で本を作ろう Vol.5</a> の<a href="https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol5/content/yamasy/index.html" target="_blank" rel="noreferrer">Vivliostyle Theme のつくりかた</a>をもとにしています。</p><h3 id="step-1-雛形の生成" tabindex="-1">Step 1. 雛形の生成 <a class="header-anchor" href="#step-1-雛形の生成" aria-label="Permalink to &quot;Step 1. 雛形の生成&quot;">​</a></h3><p><a href="https://github.com/vivliostyle/themes/tree/master/packages/create-vivliostyle-theme" target="_blank" rel="noreferrer">create-vivliostyle-theme</a> というツールを使って、<code>npm</code> または <code>yarn</code> で Theme の原型を作成します（このチュートリアルでは <code>yarn</code> を使います）。create-vivliostyle-theme は、オリジナルの Theme を作るのに便利な雛形を生成できるツールです。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle-theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-doujin</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> description awesome theme</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> author name John Doe</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> author email john@example.com</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> license AGPL-3.0</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> choose category novel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Success!</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Created</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle-theme-my-doujin.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">1.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle-theme-my-doujin</span></span>
<span class="line"><span style="color:#B392F0;">2.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">edit</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scss/</span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.scss</span></span>
<span class="line"><span style="color:#B392F0;">3.</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> ($ </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">publish</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">✨</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">Done</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">46.57</span><span style="color:#9ECBFF;">s.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle-theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-doujin</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> description awesome theme</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> author name John Doe</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> author email john@example.com</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> license AGPL-3.0</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> choose category novel</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Success!</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Created</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle-theme-my-doujin.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">1.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle-theme-my-doujin</span></span>
<span class="line"><span style="color:#6F42C1;">2.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">edit</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scss/</span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.scss</span></span>
<span class="line"><span style="color:#6F42C1;">3.</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> ($ </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">publish</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">✨</span><span style="color:#24292E;">  </span><span style="color:#032F62;">Done</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">46.57</span><span style="color:#032F62;">s.</span></span></code></pre></div><h4 id="雛形に含まれるファイル" tabindex="-1">雛形に含まれるファイル <a class="header-anchor" href="#雛形に含まれるファイル" aria-label="Permalink to &quot;雛形に含まれるファイル&quot;">​</a></h4><p>これが Theme の原型です。雛形には、出版物に必須の基本的なスタイルとサンプル原稿が含まれています。🖋 マークがついたファイルをこれから編集していきます。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle-theme-my-doujin</span></span>
<span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tree</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-I</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_modules</span></span>
<span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">LICENSE</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">README.md</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">example/</span><span style="color:#E1E4E8;">                 </span><span style="color:#9ECBFF;">サンプル原稿</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default.md</span><span style="color:#E1E4E8;">           </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Markdownを書く</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span><span style="color:#E1E4E8;">             </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Themeの情報を書く</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scss/</span><span style="color:#E1E4E8;">                    </span><span style="color:#9ECBFF;">デフォルトで3つのスタイルファイル</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">...</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme_common.scss</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Themeの共通部分</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme_print.scss</span><span style="color:#E1E4E8;">     </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">出版物</span><span style="color:#E1E4E8;"> (PDFなど) 印刷用スタイル</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">   </span><span style="color:#9ECBFF;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme_screen.scss</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">出版物</span><span style="color:#E1E4E8;"> (HTMLなど) 閲覧用スタイル</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">.css</span></span>
<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vivliostyle.config.js</span><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">🖋</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Themeプレビュー用設定ファイル</span></span>
<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn.lock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle-theme-my-doujin</span></span>
<span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tree</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-I</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_modules</span></span>
<span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">LICENSE</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">README.md</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">example/</span><span style="color:#24292E;">                 </span><span style="color:#032F62;">サンプル原稿</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default.md</span><span style="color:#24292E;">           </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Markdownを書く</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span><span style="color:#24292E;">             </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Themeの情報を書く</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scss/</span><span style="color:#24292E;">                    </span><span style="color:#032F62;">デフォルトで3つのスタイルファイル</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">...</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme_common.scss</span><span style="color:#24292E;">    </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Themeの共通部分</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme_print.scss</span><span style="color:#24292E;">     </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">出版物</span><span style="color:#24292E;"> (PDFなど) 印刷用スタイル</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">   </span><span style="color:#032F62;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme_screen.scss</span><span style="color:#24292E;">    </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">出版物</span><span style="color:#24292E;"> (HTMLなど) 閲覧用スタイル</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.css</span></span>
<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vivliostyle.config.js</span><span style="color:#24292E;">    </span><span style="color:#032F62;">🖋</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Themeプレビュー用設定ファイル</span></span>
<span class="line"><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn.lock</span></span></code></pre></div><p>example/ にはその Theme の適用例となるサンプル原稿を置きます。サンプル原稿は、ユーザが <a href="https://github.com/vivliostyle/create-book" target="_blank" rel="noreferrer">Create Book</a> を使って出版物を作る際、デフォルトの原稿として採用されます。</p><p>scss/ にはスタイルを置きます。Vivliostyle Theme では SCSS を推奨しています。デフォルトで 3 つの SCSS ファイルが作成されており、それぞれの役割は以下のとおりです。もちろん、SCSS ファイルを増やしてもかまいません。</p><ul><li>theme_print.scss：PDF 形式の出版物を印刷するときに適用するスタイル。トンボのスタイルなどはここで定義するとよいでしょう。</li><li>theme_screen.scss：HTML 形式の出版物を閲覧するときに適用するスタイル。コンテンツが画面幅いっぱいに表示されるのを防ぐために表示幅を制限したり、文字サイズを調整したりするとよいでしょう。</li><li>theme_common.scss：theme_print.scss や theme_screen.scss で共通して使うスタイル。</li></ul><h4 id="雛形のプレビュー" tabindex="-1">雛形のプレビュー <a class="header-anchor" href="#雛形のプレビュー" aria-label="Permalink to &quot;雛形のプレビュー&quot;">​</a></h4><p>Theme を作り始める前に、まずは雛形のスタイルを確認してみましょう。以下のコマンドを実行すると、Vivliostyle Viewer (Chromium) が起動してプレビューが表示されます。Chromium がインストールされていない場合はインストールが始まります。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>雛形には、組版に使う基本的なスタイルがすでに定義されています。以下がそのプレビュー画面です。デフォルトでは scss/theme_print.scss が適用されています。このスタイルファイルには、トンボや左上の theme_print という文字を表示するようなスタイルが定義されています。雛形で定義されているスタイルは自由に書き換えてかまいません。</p><h3 id="step-2-サンプル原稿の用意" tabindex="-1">Step 2. サンプル原稿の用意 <a class="header-anchor" href="#step-2-サンプル原稿の用意" aria-label="Permalink to &quot;Step 2. サンプル原稿の用意&quot;">​</a></h3><p>それではオリジナルの Theme を作り始めましょう。まずはサンプル原稿を用意します。</p><h4 id="サンプル原稿" tabindex="-1">サンプル原稿 <a class="header-anchor" href="#サンプル原稿" aria-label="Permalink to &quot;サンプル原稿&quot;">​</a></h4><p>この Theme のコンセプトは複数人の書き手による小説合同誌なので、それらしいサンプルを用意してみました。原稿は <a href="https://github.com/vivliostyle/vfm" target="_blank" rel="noreferrer">VFM</a> を使って書くことができます。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch01.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># 吾輩は猫である。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;p class=&quot;author&quot;&gt;夏目 漱石&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{吾輩|わがはい}は猫である。名前はまだ無い。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">どこで生れたかとんと{見当|けんとう}がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番{獰悪|どうあく}な種族であったそうだ。この書生というのは時々我々を{捕|つかま}えて{煮|に}て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の{掌|てのひら}に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの{見始|みはじめ}であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで{薬缶|やかん}だ。その{後|ご}猫にもだいぶ{逢|あ}ったがこんな{片輪|かたわ}には一度も{出会|でく}わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと{煙|けむり}を吹く。どうも{咽|む}せぽくて実に弱った。これが人間の飲む{煙草|たばこ}というものである事はようやくこの頃知った。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch01.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># 吾輩は猫である。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;p class=&quot;author&quot;&gt;夏目 漱石&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{吾輩|わがはい}は猫である。名前はまだ無い。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">どこで生れたかとんと{見当|けんとう}がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番{獰悪|どうあく}な種族であったそうだ。この書生というのは時々我々を{捕|つかま}えて{煮|に}て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の{掌|てのひら}に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの{見始|みはじめ}であろう。この時妙なものだと思った感じが今でも残っている。第一毛をもって装飾されべきはずの顔がつるつるしてまるで{薬缶|やかん}だ。その{後|ご}猫にもだいぶ{逢|あ}ったがこんな{片輪|かたわ}には一度も{出会|でく}わした事がない。のみならず顔の真中があまりに突起している。そうしてその穴の中から時々ぷうぷうと{煙|けむり}を吹く。どうも{咽|む}せぽくて実に弱った。これが人間の飲む{煙草|たばこ}というものである事はようやくこの頃知った。</span></span></code></pre></div><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch02.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># 羅生門</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;p class=&quot;author&quot;&gt;芥川 龍之介&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ある日の暮方の事である。一人の{下人|げにん}が、{羅生門|らしょうもん}の下で雨やみを待っていた。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">広い門の下には、この男のほかに誰もいない。ただ、所々{丹塗|にぬり}の{剥|は}げた、大きな{円柱|まるばしら}に、{蟋蟀|きりぎりす}が一匹とまっている。羅生門が、{朱雀大路|すざくおおじ}にある以上は、この男のほかにも、雨やみをする{市女笠|いちめがさ}や{揉烏帽子|もみえぼし}が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch02.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># 羅生門</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;p class=&quot;author&quot;&gt;芥川 龍之介&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">ある日の暮方の事である。一人の{下人|げにん}が、{羅生門|らしょうもん}の下で雨やみを待っていた。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">広い門の下には、この男のほかに誰もいない。ただ、所々{丹塗|にぬり}の{剥|は}げた、大きな{円柱|まるばしら}に、{蟋蟀|きりぎりす}が一匹とまっている。羅生門が、{朱雀大路|すざくおおじ}にある以上は、この男のほかにも、雨やみをする{市女笠|いちめがさ}や{揉烏帽子|もみえぼし}が、もう二三人はありそうなものである。それが、この男のほかには誰もいない。</span></span></code></pre></div><h4 id="プレビュー" tabindex="-1">プレビュー <a class="header-anchor" href="#プレビュー" aria-label="Permalink to &quot;プレビュー&quot;">​</a></h4><p>サンプル原稿を追加したら、vivliostyle.config.js の <code>entry</code> にこれらを登録して、スタイルを適用した原稿をリアルタイムでプレビューできるようにします。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vivliostyle.config.js</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  language: </span><span style="color:#9ECBFF;">&#39;ja&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  theme: </span><span style="color:#9ECBFF;">&#39;theme_print.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  entry: [</span><span style="color:#9ECBFF;">&#39;example/ch01.md&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;example/ch02.md&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vivliostyle.config.js</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  language: </span><span style="color:#032F62;">&#39;ja&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  theme: </span><span style="color:#032F62;">&#39;theme_print.css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  entry: [</span><span style="color:#032F62;">&#39;example/ch01.md&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;example/ch02.md&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line highlighted"><span style="color:#24292E;">};</span></span></code></pre></div><p>それでは、今作ったサンプル原稿に雛形のスタイル (theme_print.scss) を適用したものを Vivliostyle Viewer でプレビューしてみましょう。原稿ファイル、スタイルファイル、vivliostyle.config.js に変更があると、Vivliostyle Viewer は自動で画面をリロードしてその結果を反映します。Theme を作る際は、こまめに Vivliostyle Viewer を見ながらスタイルファイルを編集していくことになります。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># すでにプレビューが起動している場合は必要ない</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># すでにプレビューが起動している場合は必要ない</span></span></code></pre></div><h3 id="step-3-カウンタの表示" tabindex="-1">Step 3. カウンタの表示 <a class="header-anchor" href="#step-3-カウンタの表示" aria-label="Permalink to &quot;Step 3. カウンタの表示&quot;">​</a></h3><p>次に、ページ番号と章番号を表示してみましょう。SCSS ファイルを作って、そこに新たなスタイルを定義していくことにします。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scss/_my_style.scss</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scss/_my_style.scss</span></span></code></pre></div><p>今作成した SCSS ファイルをメインのスタイルファイル (scss/theme_common.scss) でインポートします。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/theme_common.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_variables&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_code&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_footnotes&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_frontmatter&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_hard_new_line&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_image&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_math_equation&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_raw_html&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_ruby&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_vfm_sectionization&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;_my_style&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* and more... 🖋 */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/theme_common.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_variables&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_code&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_footnotes&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_frontmatter&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_hard_new_line&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_image&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_math_equation&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_raw_html&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_ruby&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_vfm_sectionization&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;_my_style&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* and more... 🖋 */</span></span></code></pre></div><h4 id="ページ番号" tabindex="-1">ページ番号 <a class="header-anchor" href="#ページ番号" aria-label="Permalink to &quot;ページ番号&quot;">​</a></h4><p>まずはページ番号です。Vivliostyle は <code>page</code> というカウンタ変数を持っているため、通常は自分でページ番号用の変数を定義する必要はありません。このカウンタ変数は自動的に一番最初のページでリセットされ、各ページでインクリメントされるようになっています。ページ番号を表示するには、次のようなスタイルを定義します。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/theme_common.scss 内で定義済み</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 左ページの場合は左上に表示</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">page</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 右ページの場合は右上に表示</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">page</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/theme_common.scss 内で定義済み</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 左ページの場合は左上に表示</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">page</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 右ページの場合は右上に表示</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">page</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>しかし、カウンタの挙動を変えたい場合（たとえば、目次ではページ番号をインクリメントしたくない場合など）は自分でカウンタ変数を定義する必要があります。このチュートリアルでは目次のページ番号をインクリメントしたくないので、以下のように自分で定義したカウンタ変数 <code>p</code> を使うことにします。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 一番最初のページでリセット</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:first</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">counter-reset</span><span style="color:#E1E4E8;">: p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 各ページでインクリメント</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">counter-increment</span><span style="color:#E1E4E8;">: p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 左ページの場合は左上に表示</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 右ページの場合は右上に表示</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 一番最初のページでリセット</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:first</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">counter-reset</span><span style="color:#24292E;">: p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 各ページでインクリメント</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">counter-increment</span><span style="color:#24292E;">: p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 左ページの場合は左上に表示</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 右ページの場合は右上に表示</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">p</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="章番号" tabindex="-1">章番号 <a class="header-anchor" href="#章番号" aria-label="Permalink to &quot;章番号&quot;">​</a></h4><p>次に章番号を表示します。<code>@page :nth(1) {}</code> を使って、vivliostyle.config.js の <code>entry</code> に指定した各原稿ファイルの一番最初のページで、カウンタ変数の <code>chapter</code> をインクリメントします。</p><p><code>@page :first {}</code> は出版物全体を通して最初のページを指します。一方で <code>@page :nth(1) {}</code> は、vivliostyle.config.js の <code>entry</code> で指定した原稿ファイルそれぞれの最初のページを指します（これは Vivliostyle 独自の挙動です）。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章番号</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:nth</span><span style="color:#E1E4E8;">(1) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">counter-increment</span><span style="color:#E1E4E8;">: chapter p;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章タイトル</span></span>
<span class="line"><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> &gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;第 &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">chapter</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">&#39; 章&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章番号</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:nth</span><span style="color:#24292E;">(1) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">counter-increment</span><span style="color:#24292E;">: chapter p;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章タイトル</span></span>
<span class="line"><span style="color:#22863A;">section</span><span style="color:#24292E;"> &gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;第 &#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">chapter</span><span style="color:#24292E;">) </span><span style="color:#032F62;">&#39; 章&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="プレビュー-1" tabindex="-1">プレビュー <a class="header-anchor" href="#プレビュー-1" aria-label="Permalink to &quot;プレビュー&quot;">​</a></h4><p>これまでの変更をふまえて、プレビューは以下のようになります。オートリロードされない場合はもう一度 <code>yarn dev</code> を試してみてください。</p><h3 id="step-4-目次の表示" tabindex="-1">Step 4. 目次の表示 <a class="header-anchor" href="#step-4-目次の表示" aria-label="Permalink to &quot;Step 4. 目次の表示&quot;">​</a></h3><p>ここまででページ番号と章番号を表示できました。次は目次です。</p><h4 id="目次の自動生成" tabindex="-1">目次の自動生成 <a class="header-anchor" href="#目次の自動生成" aria-label="Permalink to &quot;目次の自動生成&quot;">​</a></h4><p>Vivliostyle には <code>&lt;h1&gt;</code> 見出しをもとに目次を自動生成する機能があります。<code>&lt;h1&gt;</code> 以外の見出しが必要な場合は自分で目次を作ることもできますが、今回はこの機能を使ってみましょう。</p><p>vivliostyle.config.js に以下の記述を加えます。すると、一番最初のページに目次が表示されるようになります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vivliostyle.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  entry: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    { rel: </span><span style="color:#9ECBFF;">&#39;contents&#39;</span><span style="color:#E1E4E8;">, theme: </span><span style="color:#9ECBFF;">&#39;theme_toc.css&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;example/ch01.md&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;example/ch02.md&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  toc: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  tocTitle: </span><span style="color:#9ECBFF;">&#39;目次&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vivliostyle.config.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  entry: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">    { rel: </span><span style="color:#032F62;">&#39;contents&#39;</span><span style="color:#24292E;">, theme: </span><span style="color:#032F62;">&#39;theme_toc.css&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;example/ch01.md&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;example/ch02.md&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  toc: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  tocTitle: </span><span style="color:#032F62;">&#39;目次&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h4 id="プレビュー-2" tabindex="-1">プレビュー <a class="header-anchor" href="#プレビュー-2" aria-label="Permalink to &quot;プレビュー&quot;">​</a></h4><p>続いて scss/theme_toc.scss という目次専用のスタイルファイルを作ります。ひとまず theme_print.scss と同様のスタイルを定義して、ページ番号をインクリメントしないようにしておきます。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">touch</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">scss/theme_toc.scss</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">touch</span><span style="color:#24292E;"> </span><span style="color:#032F62;">scss/theme_toc.scss</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;theme_common&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">marks</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">crop</span><span style="color:#E1E4E8;"> cross;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">bleed</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3</span><span style="color:#F97583;">mm</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;theme_print&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#6A737D;">// ページ番号をインクリメントしない</span></span>
<span class="line highlighted"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:nth</span><span style="color:#E1E4E8;">(1) {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">counter-increment</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;theme_common&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#005CC5;">marks</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">crop</span><span style="color:#24292E;"> cross;</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#005CC5;">bleed</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3</span><span style="color:#D73A49;">mm</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-left</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;theme_print&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#24292E;">  }</span></span>
<span class="line highlighted"><span style="color:#24292E;">}</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#6A737D;">// ページ番号をインクリメントしない</span></span>
<span class="line highlighted"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:nth</span><span style="color:#24292E;">(1) {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#005CC5;">counter-increment</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#24292E;">}</span></span></code></pre></div><p>以下のような見た目になりました。</p><p>もうすこしシュッとした見た目にしてみましょう。まず、不要な部分を隠します。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;theme_common&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不要な部分を隠す</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-left</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-right</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#85E89D;">h2</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-indent</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">list-style</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">none</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;theme_common&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 不要な部分を隠す</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-left</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-right</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">h1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">h2</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-indent</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#22863A;">nav</span><span style="color:#24292E;"> </span><span style="color:#22863A;">ol</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">list-style</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">none</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>目次にも対応するページ番号と章番号を表示してみましょう。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">nav</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">ol</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#85E89D;">a</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;第 &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">target-counter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">), </span><span style="color:#FFAB70;">chapter</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">&#39; 章&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">margin-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">target-counter</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">attr</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">href</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">), </span><span style="color:#FFAB70;">p</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">float</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/theme_toc.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">nav</span><span style="color:#24292E;"> </span><span style="color:#22863A;">ol</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#22863A;">a</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;第 &#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target-counter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">attr</span><span style="color:#24292E;">(</span><span style="color:#E36209;">href</span><span style="color:#24292E;"> </span><span style="color:#E36209;">url</span><span style="color:#24292E;">), </span><span style="color:#E36209;">chapter</span><span style="color:#24292E;">) </span><span style="color:#032F62;">&#39; 章&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">margin-right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">rem</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">::after</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">target-counter</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">attr</span><span style="color:#24292E;">(</span><span style="color:#E36209;">href</span><span style="color:#24292E;"> </span><span style="color:#E36209;">url</span><span style="color:#24292E;">), </span><span style="color:#E36209;">p</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">float</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>一気に本らしくなりましたね！</p><h3 id="step-5-原稿ごとのスタイルの設定" tabindex="-1">Step 5. 原稿ごとのスタイルの設定 <a class="header-anchor" href="#step-5-原稿ごとのスタイルの設定" aria-label="Permalink to &quot;Step 5. 原稿ごとのスタイルの設定&quot;">​</a></h3><p>原稿ファイルごとにテーマカラーを設定してみましょう。</p><h4 id="スタイルの改善" tabindex="-1">スタイルの改善 <a class="header-anchor" href="#スタイルの改善" aria-label="Permalink to &quot;スタイルの改善&quot;">​</a></h4><p>まずは、全体的にもっと本らしい見た目にしてみましょう。</p><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 各ページでインクリメント</span></span>
<span class="line"><span style="color:#6A737D;">// ページ上部に章ごとのタイトルを表示</span></span>
<span class="line"><span style="color:#F97583;">@page</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">counter-increment</span><span style="color:#E1E4E8;">: p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  @</span><span style="color:#85E89D;">top-center</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">doc-title</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章タイトル</span></span>
<span class="line"><span style="color:#85E89D;">section</span><span style="color:#E1E4E8;"> &gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border-top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">pt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">black</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">&amp;</span><span style="color:#B392F0;">::before</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;第 &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">chapter</span><span style="color:#E1E4E8;">) </span><span style="color:#9ECBFF;">&#39; 章&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">display</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">block</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">80</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">pt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 著者名</span></span>
<span class="line"><span style="color:#B392F0;">.author</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">font-weight</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">bold</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">text-align</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">border-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#F97583;">pt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">black</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin-bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span><span style="color:#F97583;">pt</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全体</span></span>
<span class="line"><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">rem</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 各ページでインクリメント</span></span>
<span class="line"><span style="color:#6A737D;">// ページ上部に章ごとのタイトルを表示</span></span>
<span class="line"><span style="color:#D73A49;">@page</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">counter-increment</span><span style="color:#24292E;">: p;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  @</span><span style="color:#22863A;">top-center</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">(</span><span style="color:#E36209;">doc-title</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 章タイトル</span></span>
<span class="line"><span style="color:#22863A;">section</span><span style="color:#24292E;"> &gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border-top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">pt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">black</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">&amp;</span><span style="color:#6F42C1;">::before</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;第 &#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">chapter</span><span style="color:#24292E;">) </span><span style="color:#032F62;">&#39; 章&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">display</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">block</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">pt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 著者名</span></span>
<span class="line"><span style="color:#6F42C1;">.author</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">font-weight</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">bold</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">text-align</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">right</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">border-bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">10</span><span style="color:#D73A49;">pt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">black</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin-bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">20</span><span style="color:#D73A49;">pt</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 全体</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">rem</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>章タイトル部分にボーダーラインが表示されました。次の節からは、このボーダーラインの色を原稿ファイルごとに設定していきます。</p><h4 id="テーマカラーの設定" tabindex="-1">テーマカラーの設定 <a class="header-anchor" href="#テーマカラーの設定" aria-label="Permalink to &quot;テーマカラーの設定&quot;">​</a></h4><p>では、原稿ファイルごとにテーマカラーを設定していきます。サンプル原稿を少し編集します。<code>---</code> で囲まれた <a href="https://vivliostyle.github.io/vfm/#/vfm#frontmatter" target="_blank" rel="noreferrer">Frontmatter</a> 部分に class を指定すると、html 要素と body 要素にその名前の class を付与することができます。この機能を使って、原稿ファイルごとに別々のスタイルを適用することができます。</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch01.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## class: natsume</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># 吾輩は猫である。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch01.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## class: natsume</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># 吾輩は猫である。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">...</span></span></code></pre></div><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch02.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## class: akutagawa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;"># 羅生門</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- example/ch02.md --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## class: akutagawa</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;"># 羅生門</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">...</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// テーマカラー</span></span>
<span class="line"><span style="color:#85E89D;">html</span><span style="color:#B392F0;">.natsume</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.author</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#d1307d</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">html</span><span style="color:#B392F0;">.akutagawa</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.author</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#24aae1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scss/_my_style.scss</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// テーマカラー</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.natsume</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">h1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.author</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#d1307d</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.akutagawa</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">h1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.author</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#24aae1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>この方法を使えば、もちろん色だけでなく、原稿ファイルごとに文字のサイズや書体を変えることも可能です。</p><h3 id="step-6-完成" tabindex="-1">Step 6. 完成！ <a class="header-anchor" href="#step-6-完成" aria-label="Permalink to &quot;Step 6. 完成！&quot;">​</a></h3><p>おつかれさまです！　これで Theme が完成しました。</p><h4 id="theme-を公開したい場合" tabindex="-1">Theme を公開したい場合 <a class="header-anchor" href="#theme-を公開したい場合" aria-label="Permalink to &quot;Theme を公開したい場合&quot;">​</a></h4><p>npm package として公開する場合は、仕様に従ってください。</p><p><code>yarn publish</code> して npm package として公開すると、Create Book で出版物を作る際に、以下のように Theme を選択できるようになります。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">book</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">v1.22.10</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">/4] 🔍  Resolving packages...</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">/4] 🚚  Fetching packages...</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">/4] 🔗  Linking dependencies...</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">/4] 🔨  Building fresh packages...</span></span>
<span class="line"><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Installed</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;create-book@0.5.0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">binaries:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">create-book</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> description description</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> author name</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> author email</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> license AGPL-3.0</span></span>
<span class="line"><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> choose theme (</span><span style="color:#B392F0;">Use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">arrow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">keys</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#B392F0;">❯</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">@vivliostyle/theme-bunko</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文庫用のテーマ</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@vivliostyle/theme-slide</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Slide</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@vivliostyle/theme-techbook</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Techbook</span><span style="color:#E1E4E8;"> (技術同人誌) theme</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@vivliostyle/theme-academic</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Academic</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">vivliostyle-theme-dnd-5e-phb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D</span><span style="color:#E1E4E8;">&amp;</span><span style="color:#B392F0;">D</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#9ECBFF;">e</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">PHB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">for</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Vivliostyle</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ここにあなたの</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Theme</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">が表示されます！</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Move</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">and</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">down</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reveal</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">more</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">choices</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">book</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create</span><span style="color:#24292E;"> </span><span style="color:#032F62;">v1.22.10</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">/4] 🔍  Resolving packages...</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">/4] 🚚  Fetching packages...</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">/4] 🔗  Linking dependencies...</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">/4] 🔨  Building fresh packages...</span></span>
<span class="line"><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Installed</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;create-book@0.5.0&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with</span><span style="color:#24292E;"> </span><span style="color:#032F62;">binaries:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">create-book</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> description description</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> author name</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> author email</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> license AGPL-3.0</span></span>
<span class="line"><span style="color:#D73A49;">?</span><span style="color:#24292E;"> choose theme (</span><span style="color:#6F42C1;">Use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">arrow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">keys</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#6F42C1;">❯</span><span style="color:#24292E;"> </span><span style="color:#032F62;">@vivliostyle/theme-bunko</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文庫用のテーマ</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@vivliostyle/theme-slide</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Slide</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@vivliostyle/theme-techbook</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Techbook</span><span style="color:#24292E;"> (技術同人誌) theme</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@vivliostyle/theme-academic</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Academic</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">vivliostyle-theme-dnd-5e-phb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D</span><span style="color:#24292E;">&amp;</span><span style="color:#6F42C1;">D</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#032F62;">e</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PHB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">for</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Vivliostyle</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ここにあなたの</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Theme</span><span style="color:#24292E;"> </span><span style="color:#032F62;">が表示されます！</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Move</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#032F62;">and</span><span style="color:#24292E;"> </span><span style="color:#032F62;">down</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reveal</span><span style="color:#24292E;"> </span><span style="color:#032F62;">more</span><span style="color:#24292E;"> </span><span style="color:#032F62;">choices</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="もっとスタイルを編集したい場合" tabindex="-1">もっとスタイルを編集したい場合 <a class="header-anchor" href="#もっとスタイルを編集したい場合" aria-label="Permalink to &quot;もっとスタイルを編集したい場合&quot;">​</a></h4><ul><li><a href="https://docs.vivliostyle.org/#/ja/supported-css-features" target="_blank" rel="noreferrer">Vivliostyle がサポートする CSS 機能</a><ul><li>スタイルシート内で使える値、セレクタ、@ルール、メディアクエリ、プロパティなどが一覧でまとまっています。</li></ul></li><li>公式ブログ記事 <ul><li>直近で使えるようになった機能などが紹介されています。</li><li>2021 年 11 月現在は以下のブログ記事がおすすめです。 <ul><li><a href="https://vivliostyle.org/ja/blog/2021/10/12/recent-vivliostyle-js-updates/" target="_blank" rel="noreferrer">最近の Vivliostyle.js の進化について</a></li><li><a href="https://vivliostyle.org/ja/blog/2021/04/21/vivliostyle-improved-css-paged-media-support/" target="_blank" rel="noreferrer">Vivliostyle の最新アップデート — CLI 改良と CSS Paged Media サポートの充実</a></li></ul></li></ul></li><li>Vivliostyle Core のテストケース <ul><li>テストケースは Vivliostyle の使用例として良いサンプルになっています。CSS 組版でどのようなことができるかに興味があれば、是非チェックしてみてください。 <ul><li><a href="https://raw.githack.com/vivliostyle/vivliostyle.js/master/packages/core/test/files/" target="_blank" rel="noreferrer">テストケース一覧</a></li><li><a href="https://github.com/vivliostyle/vivliostyle.js/tree/master/packages/core/test/files" target="_blank" rel="noreferrer">テストケースに対応する HTML/CSS のセット一覧</a></li></ul></li></ul></li></ul>`,136),e=[o];function t(c,r,E,y,i,h){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{d as __pageData,m as default};
