import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const u=JSON.parse('{"title":"コンテキストとAPI","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/plugins/api.md","filePath":"translation/honkit/plugins/api.md","lastUpdated":1676126774000}'),p={name:"translation/honkit/plugins/api.md"},o=l(`<h1 id="コンテキストとapi" tabindex="-1">コンテキストとAPI <a class="header-anchor" href="#コンテキストとapi" aria-label="Permalink to &quot;コンテキストとAPI&quot;">​</a></h1><p>HonKitsはプラグインに様々なAPIとコンテキストを提供します。これらのAPIは使用するHonKitのバージョンによって異なる可能性があるので、プラグインはそれに応じて <code>package.json</code> の <code>engines.gitbook</code> フィールドを指定しなければなりません。</p><h4 id="ブックインスタンス" tabindex="-1">ブックインスタンス <a class="header-anchor" href="#ブックインスタンス" aria-label="Permalink to &quot;ブックインスタンス&quot;">​</a></h4><p><code>Book</code> クラスは、HonKit の中心的な存在であり、すべてのアクセス・リード・メソッドを集約しています。このクラスは [book.js] (<a href="https://github.com/honkit/honkit/blob/master/lib/book.js" target="_blank" rel="noreferrer">https://github.com/honkit/honkit/blob/master/lib/book.js</a>) で定義されている。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// book.jsonから設定を読み込む</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> book.config.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;title&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Default Value&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイル名を絶対パスに変換する。</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> filepath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> book.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;README.md&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// インラインのマークアップ文字列をレンダリングする</span></span>
<span class="line"><span style="color:#E1E4E8;">book.</span><span style="color:#B392F0;">renderInline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;This is **Markdown**&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// マークアップ文字列をレンダリングする（ブロックモード）</span></span>
<span class="line"><span style="color:#E1E4E8;">book.</span><span style="color:#B392F0;">renderBlock</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;* This is **Markdown**&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">str</span><span style="color:#E1E4E8;">) { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// book.jsonから設定を読み込む</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> book.config.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;title&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Default Value&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイル名を絶対パスに変換する。</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> filepath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> book.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;README.md&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// インラインのマークアップ文字列をレンダリングする</span></span>
<span class="line"><span style="color:#24292E;">book.</span><span style="color:#6F42C1;">renderInline</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;This is **Markdown**&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// マークアップ文字列をレンダリングする（ブロックモード）</span></span>
<span class="line"><span style="color:#24292E;">book.</span><span style="color:#6F42C1;">renderBlock</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;* This is **Markdown**&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">str</span><span style="color:#24292E;">) { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> })</span></span></code></pre></div><h4 id="出力インスタンス" tabindex="-1">出力インスタンス <a class="header-anchor" href="#出力インスタンス" aria-label="Permalink to &quot;出力インスタンス&quot;">​</a></h4><p><code>Output</code>クラスは、出力/書き込み処理を表す。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 出力のルートフォルダを返す</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> root </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出力フォルダー内のファイルを解決する</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> filepath </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;myimage.png&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイル名をURLに変換する（htmlファイルへのパスを返す）。</span></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> fileurl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> output.</span><span style="color:#B392F0;">toURL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;mychapter/README.md&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出力フォルダにファイルを書き込む</span></span>
<span class="line"><span style="color:#E1E4E8;">output.</span><span style="color:#B392F0;">writeFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello.txt&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Hello World&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルを出力先フォルダにコピーする</span></span>
<span class="line"><span style="color:#E1E4E8;">output.</span><span style="color:#B392F0;">copyFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;./myfile.jpg&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;cover.jpg&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルが存在することを確認する</span></span>
<span class="line"><span style="color:#E1E4E8;">output.</span><span style="color:#B392F0;">hasFile</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hello.txt&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">exists</span><span style="color:#E1E4E8;">) { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 出力のルートフォルダを返す</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> root </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> output.</span><span style="color:#6F42C1;">root</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出力フォルダー内のファイルを解決する</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> filepath </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> output.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;myimage.png&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイル名をURLに変換する（htmlファイルへのパスを返す）。</span></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> fileurl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> output.</span><span style="color:#6F42C1;">toURL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;mychapter/README.md&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 出力フォルダにファイルを書き込む</span></span>
<span class="line"><span style="color:#24292E;">output.</span><span style="color:#6F42C1;">writeFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello.txt&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Hello World&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルを出力先フォルダにコピーする</span></span>
<span class="line"><span style="color:#24292E;">output.</span><span style="color:#6F42C1;">copyFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;./myfile.jpg&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;cover.jpg&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルが存在することを確認する</span></span>
<span class="line"><span style="color:#24292E;">output.</span><span style="color:#6F42C1;">hasFile</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hello.txt&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">exists</span><span style="color:#24292E;">) { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> });</span></span></code></pre></div><h4 id="ページインスタンス" tabindex="-1">ページインスタンス <a class="header-anchor" href="#ページインスタンス" aria-label="Permalink to &quot;ページインスタンス&quot;">​</a></h4><p>現在解析されているページを表すページインスタンス。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ページのタイトル (SUMMARYより)</span></span>
<span class="line"><span style="color:#E1E4E8;">page.title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ページの内容（ステージに応じたMarkdown/Asciidoc/HTML)</span></span>
<span class="line"><span style="color:#E1E4E8;">page.content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ブックの相対パス</span></span>
<span class="line"><span style="color:#E1E4E8;">page.path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルへの絶対パス</span></span>
<span class="line"><span style="color:#E1E4E8;">page.rawPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// このファイルに使用されたパーサーの種類</span></span>
<span class="line"><span style="color:#E1E4E8;">page.</span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&#39;markdown&#39;</span><span style="color:#E1E4E8;"> or </span><span style="color:#9ECBFF;">&#39;asciidoc&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ページのタイトル (SUMMARYより)</span></span>
<span class="line"><span style="color:#24292E;">page.title</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ページの内容（ステージに応じたMarkdown/Asciidoc/HTML)</span></span>
<span class="line"><span style="color:#24292E;">page.content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ブックの相対パス</span></span>
<span class="line"><span style="color:#24292E;">page.path</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ファイルへの絶対パス</span></span>
<span class="line"><span style="color:#24292E;">page.rawPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// このファイルに使用されたパーサーの種類</span></span>
<span class="line"><span style="color:#24292E;">page.</span><span style="color:#6F42C1;">type</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&#39;markdown&#39;</span><span style="color:#24292E;"> or </span><span style="color:#032F62;">&#39;asciidoc&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><h4 id="ブロックとフィルタのコンテキスト" tabindex="-1">ブロックとフィルタのコンテキスト <a class="header-anchor" href="#ブロックとフィルタのコンテキスト" aria-label="Permalink to &quot;ブロックとフィルタのコンテキスト&quot;">​</a></h4><p>ブロックとフィルターは同じコンテキストにアクセスでき、このコンテキストはテンプレート・エンジンの実行にバインドされます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 現在のテンプレート構文</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;ctx&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// For example, after a {% set message = &quot;hello&quot; %}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;message&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ブックインスタンス</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;book&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">Book</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 出力インスタンス</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;output&quot;</span><span style="color:#E1E4E8;">: &lt;</span><span style="color:#79B8FF;">Output</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 現在のテンプレート構文</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;ctx&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// For example, after a {% set message = &quot;hello&quot; %}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;message&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;hello&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ブックインスタンス</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;book&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Book</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 出力インスタンス</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;output&quot;</span><span style="color:#24292E;">: &lt;</span><span style="color:#005CC5;">Output</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>例えば、フィルタやブロック関数は、<code>this.book</code>のように現在のブックにアクセスできます。</p><h4 id="フックのコンテキスト" tabindex="-1">フックのコンテキスト <a class="header-anchor" href="#フックのコンテキスト" aria-label="Permalink to &quot;フックのコンテキスト&quot;">​</a></h4><p>フックは <code>this.book</code> を使って <code>&lt;Book&gt;</code> インスタンスにのみアクセスすることができます。</p>`,17),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
