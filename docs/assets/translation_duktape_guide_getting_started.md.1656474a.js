import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.44f152d8.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/getting_started.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/guide/getting_started.md"},o=l(`<h2 id="getting_started" tabindex="-1">スタートアップ <a class="header-anchor" href="#getting_started" aria-label="Permalink to &quot;スタートアップ {#getting_started}&quot;">​</a></h2><h3 id="ダウンロード" tabindex="-1">ダウンロード <a class="header-anchor" href="#ダウンロード" aria-label="Permalink to &quot;ダウンロード&quot;">​</a></h3><p><a href="https://duktape.org/download.html" target="_blank" rel="noreferrer">ダウンロード</a>ページからソース配布物をダウンロードします。</p><h3 id="テスト用コマンドラインツール" tabindex="-1">テスト用コマンドラインツール <a class="header-anchor" href="#テスト用コマンドラインツール" aria-label="Permalink to &quot;テスト用コマンドラインツール&quot;">​</a></h3><p>配布物を解凍します。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xvfJ</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">duktape-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">.tar.xz</span></span>
<span class="line"></span></code></pre></div><p>提供されたMakefileを使用して、コマンドラインツールをコンパイルしてください。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/duktape-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Makefile.cmdline</span></span>
<span class="line"></span></code></pre></div><p>Makefileはgccがインストールされていることが前提になっています。そうでない場合は、Makefileをあなたのコンパイラに合わせて編集すればよいのです（Makefileは非常にシンプルです）。</p><blockquote><p>Duktapeは移植性の問題を避けるため、ファイルやコンソールのI/Oに対する組み込みのバインディングを提供していません（例えば、I/O APIが全くないプラットフォームもあります）。コマンドライン・ユーティリティは、extras/print-alert を使って print() と alert() のバインディングを提供し、簡単に遊べるようにしています。配布物には、以下のような便利な(オプションの)バインディングを提供する「extras」があります。</p><ul><li>print() や alert()</li><li>コンソールオブジェクト、例：console.log()</li></ul><p><strong>このガイドの例では、説明のために print() バインディングを想定しています。</strong></p></blockquote><blockquote><p>コマンドラインツールは、デフォルトでプラットフォーム依存を回避しています。Makefile を編集することで、linenoise による行編集のサポートを追加することができます。</p><ul><li>DDUK_CMDLINE_FANCY を追加する。</li><li>linenoise.hのヘッダに-Ipath/to/linenoiseを追加する。</li><li>ソースリストに path/to/linenoise.c を追加する。</li><li>LinenoiseはPOSIX環境でのみ動作し、Cコンパイラが必要です(C++ではありません)</li></ul></blockquote><p>ECMAScriptのコードをインタラクティブに実行できるようになりました。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./duk</span></span>
<span class="line"><span style="color:#89DDFF;">((</span><span style="color:#A6ACCD;">o) Duktape </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> (v</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">duk&gt; print(&#39;Hello world!&#39;)</span></span>
<span class="line"><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">world!</span></span>
<span class="line"><span style="color:#FFCB6B;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">undefined</span></span>
<span class="line"></span></code></pre></div><p>また、ECMAScriptのコードをファイルから実行することができるので、機能やアルゴリズムで遊ぶのに便利です。例として、fib.js を作成します。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// fib.js</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">n</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#82AAFF;">fib</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">print</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>コマンドラインからスクリプトをテストします。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./duk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fib.js</span></span>
<span class="line"><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">13</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">21</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">34</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">55</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">89</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">144</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">233</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">377</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">610</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">987</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1597</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2584</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4181</span></span>
<span class="line"></span></code></pre></div><h3 id="duktapeをプログラムに組み込む" tabindex="-1">Duktapeをプログラムに組み込む <a class="header-anchor" href="#duktapeをプログラムに組み込む" aria-label="Permalink to &quot;Duktapeをプログラムに組み込む&quot;">​</a></h3><p>コマンドラインツールは、Duktapeを組み込んだプログラムの一例です。Duktapeをあなたのプログラムに組み込むのは非常に簡単です。</p><ul><li>duktape-N.N.N/tools/configure.pyを実行して、ビルドのためにDuktapeを設定する。その結果、duktape.c, duktape.h, duk_config.h を含むディレクトリができます。</li><li>duktape.c, duktape.h, duk_config.hをビルドに追加し、プログラムの他の場所からDuktape APIを呼び出してください。</li></ul><p>Duktapeの配布物（duktape-N.N.N.tar.xz）のsrc/ディレクトリには、Duktapeのデフォルト設定のための事前設定済みのヘッダーファイルとソースファイルが含まれており、通常はそのまま使用することができます。必要であれば、設定ツールを使って、Duktapeを低メモリ・ターゲット用に最適化したり、機能を有効化／無効化したりといったDuktapeのオプションをカスタマイズすることができます。詳細と例については、コンパイルと<a href="http://wiki.duktape.org/Configuring.html" target="_blank" rel="noreferrer">Configuring Duktape for build</a>（ビルドのためのDuktapeのコンパイルと設定）を参照してください。</p><p>配布物には、このプロセスを説明する非常に簡単なサンプル・プログラム hello.c が含まれています。あらかじめ設定されたDuktapeのヘッダーとテストプログラムは、Duktapeコンテキストを作成し、それを使っていくつかのECMAScriptコードを実行します。 ソース・ファイルを使って、テスト・プログラムを例えば以下のようにコンパイルします。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/duktape-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-std=c99</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Isrc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src/duktape.c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">examples/hello/hello.c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lm</span></span>
<span class="line"></span></code></pre></div><p>Duktapeの設定をカスタマイズするには、configure.pyを使います。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp/duktape-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">versio</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ここではECMAScript 6のProxyオブジェクトのサポートを無効にしています。</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">python2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tools/configure.py</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--output-directory</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">duktape-src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-UDUK_USE_ES6_PROXY</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-std=c99</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-o</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Iduktape-src</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">duktape-src/duktape.c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">examples/hello/hello.c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lm</span></span>
<span class="line"></span></code></pre></div><p>テストプログラムは、Duktapeコンテキストを作成し、それを使っていくつかのECMAScriptコードを実行します。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./hello</span></span>
<span class="line"><span style="color:#FFCB6B;">Hello</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">world!</span></span>
<span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">+</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"></span></code></pre></div><p>Duktapeはエンベデッドエンジンなので、プログラムの基本的な制御フローを変更する必要はありません。基本的なやり方は</p><ul><li>プログラムの初期化時などに、Duktapeコンテキストを作成します（スクリプトが必要な場合は、オンデマンドでも構いません）。通常、初期化時にスクリプトをロードしますが、これはオンデマンドで行うこともできます。</li><li>コードの中でスクリプトを使用したい箇所を特定し、そこにスクリプト関数の呼び出しを挿入します。</li><li>スクリプト関数の呼び出しを行うには、まずDuktape APIを使って呼び出しの引数をDuktapeコンテキストのバリュー・スタックにプッシュします。その後、別のDuktape APIコールを使って実際の呼び出しを開始します。</li><li>スクリプトの実行が終了すると、制御がプログラムに戻り（APIコールが戻り）、Duktapeコンテキストのバリュー・スタックに戻り値が残されています。C言語コードは、Duktape APIを使ってこの戻り値にアクセスすることができます。</li></ul><p>より広い意味で、Duktapeをネイティブ・コードで使用する方法には、いくつかのアプローチがあります。</p><ul><li>メイン・アプリケーションはC/C++コードで実行し、基本機能の拡張のためにDuktapeを呼び出す（例：プラグインやコンフィギュレーションなど）。</li><li>メイン・アプリケーションはECMAScriptコードで実行し、I/Oやパフォーマンス重視の操作などでは、シンプルなC/C++ネイティブ・バインディングを呼び出す。ネイティブバインディングはしばしばステートレスに保たれ、ステートロジックがスクリプトコードから見えないようにします。</li><li>ECMAScript コードでメインアプリケーションを実行し、パフォーマンス重視の操作にはより複雑でステートフルな C/C++ ネイティブバインディングを使用します。例えば、グラフィックエンジンはネイティブオブジェクトとして実装することができます。</li></ul><p>詳しい例は、以下のWiki記事を参照してください。</p><ul><li>はじめに: ラインプロセッシング</li><li>はじめに: プライマリティテスト</li></ul>`,33),e=[o];function t(c,r,C,y,D,i){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};