import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const d=JSON.parse('{"title":"GLFWドキュメンテーション（日本語訳）","description":"","frontmatter":{},"headers":[],"relativePath":"translation/GLFW/index.md","filePath":"translation/GLFW/index.md","lastUpdated":1676126774000}'),p={name:"translation/GLFW/index.md"},o=l(`<h1 id="glfwドキュメンテーション-日本語訳" tabindex="-1">GLFWドキュメンテーション（日本語訳） <a class="header-anchor" href="#glfwドキュメンテーション-日本語訳" aria-label="Permalink to &quot;GLFWドキュメンテーション（日本語訳）&quot;">​</a></h1><p><a href="https://www.glfw.org" target="_blank" rel="noreferrer">原文</a></p><p><a href="https://www.glfw.org/docs/latest/" target="_blank" rel="noreferrer">HTMLドキュメント</a>にはチュートリアル・トピック別のガイド・APIリファレンスが含まれています。</p><p><a href="https://www.glfw.org/faq.html" target="_blank" rel="noreferrer">FAQ</a>はGLFWの設計・実装・使用に関する多くの一般的な質問に答えています。</p><h2 id="ライセンス" tabindex="-1">ライセンス <a class="header-anchor" href="#ライセンス" aria-label="Permalink to &quot;ライセンス&quot;">​</a></h2><p>GLFWは<a href="https://www.glfw.org/license.html" target="_blank" rel="noreferrer">zlib/libpng</a>ライセンスに基づき改変・配布・クローズドソースソフトウェアでの利用を許可しています。</p><h2 id="コード例" tabindex="-1">コード例 <a class="header-anchor" href="#コード例" aria-label="Permalink to &quot;コード例&quot;">​</a></h2><p>以下は、GLFWでウィンドウとOpenGLコンテキストをセットアップする短い例です。ここで使われている以外にも多くの関数があります。GLFWの簡単な紹介はHTMLドキュメントの<a href="https://www.glfw.org/docs/latest/quick.html" target="_blank" rel="noreferrer">Getting started</a>を参照してください。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;GLFW/glfw3.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    GLFWwindow</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> window;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ライブラリの初期化 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">glfwInit</span><span style="color:#E1E4E8;">())</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ウィンドウモードのウィンドウとそのOpenGLコンテキストの作成 */</span></span>
<span class="line"><span style="color:#E1E4E8;">    window </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">glfwCreateWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">640</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">480</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;Hello World&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">NULL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">window)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">glfwTerminate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ウィンドウのコンテキストをカレントにする */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">glfwMakeContextCurrent</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ユーザーがウィンドウを閉じるまでループする */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">while</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">glfwWindowShouldClose</span><span style="color:#E1E4E8;">(window))</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        /* レンダリングはこちら */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">glClear</span><span style="color:#E1E4E8;">(GL_COLOR_BUFFER_BIT);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /* フロントバッファとバックバッファの入れ替え */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">glfwSwapBuffers</span><span style="color:#E1E4E8;">(window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /* イベントのポーリングと処理 */</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">glfwPollEvents</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">glfwTerminate</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;GLFW/glfw3.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    GLFWwindow</span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> window;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ライブラリの初期化 */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">glfwInit</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ウィンドウモードのウィンドウとそのOpenGLコンテキストの作成 */</span></span>
<span class="line"><span style="color:#24292E;">    window </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">glfwCreateWindow</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">640</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">480</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;Hello World&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">NULL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">window)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">glfwTerminate</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ウィンドウのコンテキストをカレントにする */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">glfwMakeContextCurrent</span><span style="color:#24292E;">(window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ユーザーがウィンドウを閉じるまでループする */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">while</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">glfwWindowShouldClose</span><span style="color:#24292E;">(window))</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#6A737D;">        /* レンダリングはこちら */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">glClear</span><span style="color:#24292E;">(GL_COLOR_BUFFER_BIT);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /* フロントバッファとバックバッファの入れ替え */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">glfwSwapBuffers</span><span style="color:#24292E;">(window);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">        /* イベントのポーリングと処理 */</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">glfwPollEvents</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">glfwTerminate</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,9),e=[o];function t(c,r,E,y,i,w){return n(),a("div",null,e)}const f=s(p,[["render",t]]);export{d as __pageData,f as default};
