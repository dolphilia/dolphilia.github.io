import{_ as s,c as a,o as n,Q as o}from"./chunks/framework.44f152d8.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_buffer_to_string.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_buffer_to_string.md"},p=o(`<h2 id="duk-buffer-to-string" tabindex="-1">duk_buffer_to_string() <a class="header-anchor" href="#duk-buffer-to-string" aria-label="Permalink to &quot;duk_buffer_to_string()&quot;">​</a></h2><p>2.0.0 string stack buffer</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">duk_buffer_to_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... | -&gt; | ... | buffer_to_string(val) | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx のバッファ値 (プレーンバッファまたは任意のバッファオブジェクト) を、内部バイト表現がバッファから 1:1 で取得される文字列に置き換えます (バッファデータが duk_push_lstring() でプッシュされた場合と同じです)。読み取り専用でNUL終端の文字列データへの非NULLポインタを返します。(1) 引数がバッファ値でない場合、(2) 引数がバッファオブジェクトで、そのバッキングバッファが見かけのバッファサイズをカバーしていない場合、(3) インデックスが無効な場合、TypeError がスローされます。</p><p>バッファデータはそのまま文字列の生成に使用されるため、本APIコールでは、バッファデータのサニタイズ処理を行わない限り、Symbol値の生成は可能です。</p><p>カスタムの型強制については、型変換とテストに記載されています。</p><p>Duktape 2.0以降、バッファ値に対するduk_to_string()の強制は、通常&quot;[object Uint8Array]&quot; のようになりますが、これは通常意図されたものではありません。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_push_fixed_buffer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x61</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x62</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x63</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x64</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;">  /* 61 62 63 64 */</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coerced string: %s</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_buffer_to_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,13),t=[p];function e(r,c,D,y,C,F){return n(),a("div",null,t)}const d=s(l,[["render",e]]);export{A as __pageData,d as default};