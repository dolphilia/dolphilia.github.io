import{_ as s,c as i,o as a,a3 as l}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"Lua/C API 拡張","description":"","frontmatter":{},"headers":[],"relativePath":"translation/luajit/lua_c_api.md","filePath":"translation/luajit/lua_c_api.md","lastUpdated":1710622935000}'),t={name:"translation/luajit/lua_c_api.md"},n=l(`<h1 id="lua-c-api-拡張" tabindex="-1">Lua/C API 拡張 <a class="header-anchor" href="#lua-c-api-拡張" aria-label="Permalink to &quot;Lua/C API 拡張&quot;">​</a></h1><p>LuaJITは、標準のLua/C APIにいくつかの拡張を加えています。Cコード用の必要なヘッダーをインクルードするには、コンパイラの検索パスにLuaJITのインクルードディレクトリが含まれている必要があります(-Ipath)：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;luajit.h&quot;</span></span></code></pre></div><p>またはC++コードの場合：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lua.hpp&quot;</span></span></code></pre></div><h2 id="luajit-setmode-l-idx-mode-—-vm-の制御" tabindex="-1">luaJIT_setmode(L, idx, mode) — VM の制御 <a class="header-anchor" href="#luajit-setmode-l-idx-mode-—-vm-の制御" aria-label="Permalink to &quot;luaJIT_setmode(L, idx, mode) — VM の制御&quot;">​</a></h2><p>これはCコードからVMを制御するためのC API拡張です。LuaJIT_setmodeの完全なプロトタイプは以下の通りです：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LUA_API </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> luaJIT_setmode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lua_State </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>返されるステータスは成功（1）または失敗（0）です。第二引数は0またはスタックインデックス（他のLua/C API関数と同様）です。</p><p>第三引数はモードを指定し、フラグと&#39;or&#39;されます。フラグは機能をオフにするLUAJIT_MODE_OFF、機能をオンにするLUAJIT_MODE_ON、またはキャッシュされたコードをフラッシュするLUAJIT_MODE_FLUSHにすることができます。</p><p>以下のモードが定義されています：</p><h4 id="luajit-setmode-l-0-luajit-mode-engine-flag" tabindex="-1">luaJIT_setmode(L, 0, LUAJIT_MODE_ENGINE|flag) <a class="header-anchor" href="#luajit-setmode-l-0-luajit-mode-engine-flag" aria-label="Permalink to &quot;luaJIT_setmode(L, 0, LUAJIT_MODE_ENGINE|flag)&quot;">​</a></h4><p>JITコンパイラ全体をオンまたはオフにするか、コンパイルされたコードのキャッシュ全体をフラッシュします。</p><h4 id="luajit-setmode-l-idx-luajit-mode-func-flag" tabindex="-1">luaJIT_setmode(L, idx, LUAJIT_MODE_FUNC|flag) <a class="header-anchor" href="#luajit-setmode-l-idx-luajit-mode-func-flag" aria-label="Permalink to &quot;luaJIT_setmode(L, idx, LUAJIT_MODE_FUNC|flag)&quot;">​</a></h4><h4 id="luajit-setmode-l-idx-luajit-mode-allfunc-flag" tabindex="-1">luaJIT_setmode(L, idx, LUAJIT_MODE_ALLFUNC|flag) <a class="header-anchor" href="#luajit-setmode-l-idx-luajit-mode-allfunc-flag" aria-label="Permalink to &quot;luaJIT_setmode(L, idx, LUAJIT_MODE_ALLFUNC|flag)&quot;">​</a></h4><h4 id="luajit-setmode-l-idx-luajit-mode-allsubfunc-flag" tabindex="-1">luaJIT_setmode(L, idx, LUAJIT_MODE_ALLSUBFUNC|flag) <a class="header-anchor" href="#luajit-setmode-l-idx-luajit-mode-allsubfunc-flag" aria-label="Permalink to &quot;luaJIT_setmode(L, idx, LUAJIT_MODE_ALLSUBFUNC|flag)&quot;">​</a></h4><p>これは、スタックインデックスidxの関数、または呼び出し関数の親(idx = 0)のモードを設定します。関数のJITコンパイルを有効にするか、無効にして既にコンパイルされたコードをフラッシュするか、既にコンパイルされたコードをフラッシュするかを行います。これはLUAJIT_MODE_ALLFUNCを用いた関数の全てのサブ関数、またはLUAJIT_MODE_ALLSUBFUNCを用いたサブ関数のみに再帰的に適用されます。</p><h4 id="luajit-setmode-l-trace-luajit-mode-trace-luajit-mode-flush" tabindex="-1">luaJIT_setmode(L, trace, LUAJIT_MODE_TRACE|LUAJIT_MODE_FLUSH) <a class="header-anchor" href="#luajit-setmode-l-trace-luajit-mode-trace-luajit-mode-flush" aria-label="Permalink to &quot;luaJIT_setmode(L, trace, LUAJIT_MODE_TRACE|LUAJIT_MODE_FLUSH)&quot;">​</a></h4><p>指定されたルートトレースとそのすべてのサイドトレースをキャッシュからフラッシュします。他にリンクしているトレースが存在する限り、トレースのコードは保持されます。</p><h4 id="luajit-setmode-l-idx-luajit-mode-wrapcfunc-flag" tabindex="-1">luaJIT_setmode(L, idx, LUAJIT_MODE_WRAPCFUNC|flag) <a class="header-anchor" href="#luajit-setmode-l-idx-luajit-mode-wrapcfunc-flag" aria-label="Permalink to &quot;luaJIT_setmode(L, idx, LUAJIT_MODE_WRAPCFUNC|flag)&quot;">​</a></h4><p>このモードはC関数への呼び出しに対するラッパー関数を定義します。LUAJIT_MODE_ONで呼び出された場合、idxでのスタックインデックスは、ラッパー関数へのポインターを保持するlightuserdataオブジェクトでなければなりません。これ以降、すべてのC関数はラッパー関数を介して呼び出されます。LUAJIT_MODE_OFFで呼び出された場合、このモードはオフになり、すべてのC関数は直接呼び出されます。</p><p>ラッパー関数は、デバッグ目的や外部の例外をキャッチして変換するために使用できます。ただし、C++例外の相互運用性に関するセクションを先に読んでください。推奨される使用方法は、このC++コードの抜粋で見ることができます：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;exception&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lua.hpp&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// C++の例外をキャッチしてLuaエラーメッセージに変換します。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 必要に応じて独自の例外クラスに合わせてカスタマイズしてください。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wrap_exceptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lua_State</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lua_CFunction</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ラップされた関数を呼び出し、結果を返す。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">s) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 例外をキャッチして変換する。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    lua_pushstring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, s);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::exception</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    lua_pushstring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">what</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (...) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    lua_pushliteral</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;caught (...)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lua_error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Luaエラーとして再スローする。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myinit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lua_State</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">L</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ラッパー関数を定義して有効にする。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lua_pushlightuserdata</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)wrap_exceptions);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  luaJIT_setmode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, LUAJIT_MODE_WRAPCFUNC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">LUAJIT_MODE_ON);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lua_pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(L, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>グローバルラッパー関数は1つだけ定義できることに注意してください。そのため、複数のC++モジュールからこのメカニズムを使用する場合は注意が必要です。また、このメカニズムにはオーバーヘッドがあることにも注意してください。</p>`,24),h=[n];function e(p,k,d,E,r,g){return a(),i("div",null,h)}const c=s(t,[["render",e]]);export{u as __pageData,c as default};