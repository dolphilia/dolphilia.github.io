import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"Duktapeの概要 日本語訳","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/index.md","filePath":"translation/duktape/index.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/index.md"},n=t(`<h1 id="top" tabindex="-1">Duktapeの概要 日本語訳 <a class="header-anchor" href="#top" aria-label="Permalink to &quot;Duktapeの概要 日本語訳 {#top}&quot;">​</a></h1><p><a href="https://duktape.org/index.html" target="_blank" rel="noreferrer">原文</a></p><p>Duktapeは移植性とコンパクトなフットプリントに重点を置いた、組み込み可能なJavascriptエンジンです。</p><p>DuktapeはC/C++プロジェクトに簡単に統合できます。ビルドにduktape.c、duktape.h、duk_config.hを追加し、Duktape APIを使ってCコードからECMAScriptの関数を呼び出したり、逆にECMAScriptからCコードに関数を呼び出したりすることができます。</p><h2 id="feature" tabindex="-1">特徴 <a class="header-anchor" href="#feature" aria-label="Permalink to &quot;特徴 {#feature}&quot;">​</a></h2><ul><li>組み込み可能、ポータブル、コンパクト：160kB フラッシュと 64kB RAM のプラットフォームで実行可能。</li><li><a href="http://www.ecma-international.org/ecma-262/5.1/" target="_blank" rel="noreferrer">ECMAScript E5/E5.1</a>、一部のセマンティクスは ES2015+ から更新されています。</li><li><a href="http://www.ecma-international.org/ecma-262/6.0/index.html" target="_blank" rel="noreferrer">ECMAScript 2015 (E6)</a> と <a href="http://www.ecma-international.org/ecma-262/7.0/index.html" target="_blank" rel="noreferrer">ECMAScript 2016 (E7)</a> を部分的にサポート、<a href="http://wiki.duktape.org/PostEs5Features.html" target="_blank" rel="noreferrer">Post-ES5 feature status</a> と <a href="https://kangax.github.io/compat-table" target="_blank" rel="noreferrer">kangax/compat-table</a> を参照してください。</li><li>ES2015 <a href="https://www.khronos.org/registry/typedarray/specs/latest/" target="_blank" rel="noreferrer">TypedArray</a>および<a href="https://nodejs.org/docs/v6.9.1/api/buffer.html" target="_blank" rel="noreferrer">Node.js Buffer</a>バインディング</li><li><a href="http://cbor.io/" target="_blank" rel="noreferrer">CBOR</a>バインディング</li><li>WHATWG Encoding Living Standardに基づく<a href="https://encoding.spec.whatwg.org/#api" target="_blank" rel="noreferrer">エンコーディングAPI</a>バインディング</li><li><a href="https://www.w3.org/TR/hr-time/#dom-performance-now" target="_blank" rel="noreferrer">performance.now()</a></li><li>ビルトインデバッガ</li><li>ビルトイン正規表現エンジン</li><li>内蔵のUnicodeサポート</li><li>最小限の、再ターゲット可能なプラットフォーム依存性</li><li>参照カウントとマーク＆スイープ・ガベージコレクションの組み合わせとファイナリゼーション</li><li>コルーチン</li><li>ECMAScript ES2015 Proxy オブジェクトのサブセットを使用したプロパティの仮想化</li><li>コンパイルされた関数をキャッシュするためのバイトコードダンプ/ロード</li><li>配布可能なものには、オプションでロギングフレームワーク、CommonJSベースのモジュールロード実装などがあります。</li><li>リベラルライセンス(MIT)</li></ul><h2 id="footprint" tabindex="-1">コードとRAMのフットプリント <a class="header-anchor" href="#footprint" aria-label="Permalink to &quot;コードとRAMのフットプリント {#footprint}&quot;">​</a></h2><p>Hello worldの<a href="https://github.com/svaarala/duktape/blob/master/util/index_page_sizes.sh" target="_blank" rel="noreferrer">例</a>:</p><table tabindex="0"><thead><tr><th>Config</th><th>Code footprint (kB)</th><th>Startup RAM (kB)</th></tr></thead><tbody><tr><td>thumb default</td><td>148</td><td>78</td></tr><tr><td>thumb lowmem</td><td>96</td><td>27</td></tr><tr><td>thumb full lowmem</td><td>119</td><td>1.5</td></tr><tr><td>x86 default</td><td>187</td><td>78</td></tr><tr><td>x86 lowmem</td><td>124</td><td>27</td></tr><tr><td>x86 full lowmem</td><td>148</td><td>1.5</td></tr></tbody></table><p>コードのフットプリントを最小にするための<a href="https://github.com/svaarala/duktape/blob/master/doc/low-memory.rst#optimizing-code-footprint" target="_blank" rel="noreferrer">GCCオプション</a>を参照してください。完全な<a href="https://github.com/svaarala/duktape/blob/master/doc/low-memory.rst" target="_blank" rel="noreferrer">ローメモリ</a>では、ポインタ圧縮とROMベースの文字列/オブジェクトを使用します。ROMベースの文字列/オブジェクトは、他のローメモリオプションなしで使うこともできます。</p><h2 id="status" tabindex="-1">現在の状況 <a class="header-anchor" href="#status" aria-label="Permalink to &quot;現在の状況 {#status}&quot;">​</a></h2><ul><li>安定版</li></ul><h2 id="support" tabindex="-1">サポート <a class="header-anchor" href="#support" aria-label="Permalink to &quot;サポート {#support}&quot;">​</a></h2><ul><li>Duktape Wiki: <a href="http://wiki.duktape.org/" target="_blank" rel="noreferrer">wiki.duktape.org</a></li><li>ユーザーコミュニティのQ&amp;A: Stack Overflowの<a href="http://stackoverflow.com/questions/tagged/duktape" target="_blank" rel="noreferrer">duktape</a>タグ</li><li>バグや機能の要望: <a href="https://github.com/svaarala/duktape/issues" target="_blank" rel="noreferrer">GitHubのissues</a></li><li>一般的な議論: IRC #duktape on chat.freenode.net (<a href="https://webchat.freenode.net/" target="_blank" rel="noreferrer">webchat</a>)</li></ul><h2 id="example" tabindex="-1">Duktapeを使用したいくつかのプロジェクト <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Duktapeを使用したいくつかのプロジェクト {#example}&quot;">​</a></h2><p><a href="http://wiki.duktape.org/ProjectsUsingDuktape.html" target="_blank" rel="noreferrer">Duktapeを使用しているプロジェクト</a>を参照してください。</p><p>もしあなたのプロジェクトでDuktapeを使っているなら、リストに追加するためにメールを送るか、GitHubのissuesを開いてください。</p><h2 id="similar" tabindex="-1">類似エンジン <a class="header-anchor" href="#similar" aria-label="Permalink to &quot;類似エンジン {#similar}&quot;">​</a></h2><p>少なくともDuktapeと同様のユースケースをターゲットにしたJavascriptエンジンは複数存在します。</p><ul><li><a href="https://github.com/espruino/Espruino" target="_blank" rel="noreferrer">Espruino</a> (MPL v2.0)</li><li><a href="http://jerryscript.net/" target="_blank" rel="noreferrer">JerryScript</a> (Apache License v2.0)</li><li><a href="http://mujs.com/" target="_blank" rel="noreferrer">MuJS</a> (Affero GPL)</li><li><a href="https://code.google.com/p/quad-wheel/" target="_blank" rel="noreferrer">quad-wheel</a> (MIT License)</li><li><a href="https://bellard.org/quickjs/" target="_blank" rel="noreferrer">QuickJS</a> (MIT License)</li><li><a href="https://github.com/gfwilliams/tiny-js" target="_blank" rel="noreferrer">tiny-js</a> (MIT license)</li><li><a href="https://github.com/cesanta/v7" target="_blank" rel="noreferrer">v7</a> (GPL v2.0)</li></ul><p><a href="https://en.wikipedia.org/wiki/List_of_ECMAScript_engines" target="_blank" rel="noreferrer">ECMAScriptエンジンの一覧</a>も参照してください。</p><h2 id="reserve" tabindex="-1">1. ビルドに追加する <a class="header-anchor" href="#reserve" aria-label="Permalink to &quot;1. ビルドに追加する {#reserve}&quot;">​</a></h2><p>(詳しい紹介は<a href="https://duktape.org/guide.html#gettingstarted" target="_blank" rel="noreferrer">Getting started</a>をご覧ください)</p><p>Duktape Cのソースとヘッダをビルドに追加します。どのようなビルドシステムでも使用できます。配布物には、参考までにMakefileの例が含まれています。最も単純なケースでは</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ gcc -std=c99 -otest test.c duktape.c -lm</span></span>
<span class="line"><span>$ ./test</span></span>
<span class="line"><span>1+2=3</span></span></code></pre></div><p><a href="http://wiki.duktape.org/Configuring.html" target="_blank" rel="noreferrer">Duktapeの設定をカスタマイズ</a>するには、ここでECMAScript 6 Proxyオブジェクトのサポートを無効にしてください。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ python2 duktape-2.6.0/tools/configure.py --output-directory src-duktape \\</span></span>
<span class="line"><span>      -UDUK_USE_ES6_PROXY</span></span>
<span class="line"><span>$ ls src-duktape/</span></span>
<span class="line"><span>duk_config.h  duk_source_meta.json  duktape.c  duktape.h</span></span>
<span class="line"><span>$ gcc -std=c99 -otest -Isrc-duktape \\</span></span>
<span class="line"><span>      test.c src-duktape/duktape.c -lm</span></span>
<span class="line"><span>$ ./test</span></span>
<span class="line"><span>1+2=3</span></span></code></pre></div><h2 id="initialize" tabindex="-1">2 コンテキストを初期化する <a class="header-anchor" href="#initialize" aria-label="Permalink to &quot;2 コンテキストを初期化する {#initialize}&quot;">​</a></h2><p>プログラムのどこかでDuktapeを初期化し、使用する。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* test.c */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;duktape.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_create_heap_default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  duk_eval_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1+2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1+2=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  duk_destroy_heap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="binding" tabindex="-1">3. C関数バインディングの追加 <a class="header-anchor" href="#binding" aria-label="Permalink to &quot;3. C関数バインディングの追加 {#binding}&quot;">​</a></h2><p>ECMAScript のコードから C の関数を呼び出すには、まず C の関数を宣言します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 組み込みエンジンであるDuktapeは、</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * デフォルトではI/Oバインディングを提供しません。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 以下は引数が１つの単純なprint()関数です。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> duk_ret_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> native_print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_to_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* no return value (= undefined) */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Adder: 引数の値を加算する。 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> duk_ret_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> native_adder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_get_top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* #args */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_to_number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  duk_push_number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, res);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* one return value */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>作成した関数をグローバルオブジェクトに登録するなどしてください。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_c_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, native_print, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /*nargs*/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_put_global_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;print&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_c_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, native_adder, DUK_VARARGS);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_put_global_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;adder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>そして、ECMAScriptのコードから関数を呼び出すことができます。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_eval_string_noresult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;print(&#39;2+3=&#39; + adder(2, 3));&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><hr><p>Duktape is (C) by its <a href="https://github.com/svaarala/duktape/blob/master/AUTHORS.rst" target="_blank" rel="noreferrer">authors</a> and licensed under the <a href="https://github.com/svaarala/duktape/blob/master/LICENSE.txt" target="_blank" rel="noreferrer">MIT license</a>.</p>`,39),l=[n];function p(r,h,k,d,o,g){return i(),a("div",null,l)}const u=s(e,[["render",p]]);export{E as __pageData,u as default};