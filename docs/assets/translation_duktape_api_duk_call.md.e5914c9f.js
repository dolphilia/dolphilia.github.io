import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.44f152d8.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_call.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/api/duk_call.md"},o=l(`<h2 id="duk-call" tabindex="-1">duk_call() <a class="header-anchor" href="#duk-call" aria-label="Permalink to &quot;duk_call()&quot;">​</a></h2><p>1.0.0 call</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_call</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">nargs</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | func | arg1 | ... | argN | -&gt; | ... | retval |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>ターゲット関数funcをnargsの引数で呼び出す（関数自体を除く）。関数とその引数は、単一の戻り値に置き換えられます。関数呼び出し中に投げられたエラーは、自動的に捕捉されない。</p><p>このバインディングのターゲット関数は、初期状態では未定義に設定されています。ターゲット関数が厳密でない場合、バインディングは、関数が呼び出される前にグローバルオブジェクトに置き換えられます。「関数コードの入力」を参照してください。このバインディングを制御したい場合は、代わりに duk_call_method() または duk_call_prop() を使用することができます。</p><p>このAPIコールは、以下と同等です。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> retval </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">func</span><span style="color:#A6ACCD;">(arg1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...,</span><span style="color:#A6ACCD;"> argN)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>または</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> retval </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> func</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> arg1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...,</span><span style="color:#A6ACCD;"> argN)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Assume target function is already on stack at func_idx; the target</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * function adds arguments and returns the result.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> func_idx </span><span style="color:#89DDFF;">=</span><span style="color:#676E95;font-style:italic;"> /* ... */</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">duk_dup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> func_idx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_call</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* [ ... func 2 3 ] -&gt; [ ... 5 ] */</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2+3=%ld</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_call_method duk_call_prop</p>`,17),t=[o];function e(c,r,i,D,y,F){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{d as __pageData,C as default};