import{_ as s,o as a,c as n,R as l}from"./chunks/framework.320df067.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_new.md","filePath":"translation/duktape/api/duk_new.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_new.md"},p=l(`<h2 id="duk-new" tabindex="-1">duk_new() <a class="header-anchor" href="#duk-new" aria-label="Permalink to &quot;duk_new()&quot;">​</a></h2><p>1.0.0 object call</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">nargs</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | constructor | arg1 | ... | argN | -&gt; | ... | retval |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>コンストラクタ関数をnargsの引数で呼び出します（関数自体を除く）。関数とその引数は、単一の戻り値に置き換えられます。コンストラクタの呼び出し中に投げられたエラーは、自動的に捕捉されません。</p><p>このバインディングのターゲット関数は、新しく作成された空のオブジェクトに設定されます。constructor.prototype がオブジェクトの場合は、新しいオブジェクトの内部プロトタイプがその値に設定され、そうでない場合は標準の組み込みオブジェクトプロトタイプが内部プロトタイプとして使用されます。ターゲット関数の戻り値は、コンストラクタ呼び出しの結果が何であるかを決定します。コンストラクタがオブジェクトを返す場合は、新しい空のオブジェクトに置き換えられます。そうでない場合は、新しい空のオブジェクト（コンストラクタによって変更される可能性があります）が返されます。<a href="./">コンストラクタ</a>を参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Assume target function is already on stack at func_idx.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Equivalent to ECMAScript &#39;new func(&quot;foo&quot;, 123)&#39;.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> func_idx </span><span style="color:#89DDFF;">=</span><span style="color:#676E95;font-style:italic;"> /* ... */</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">duk_dup</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> func_idx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_new</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* [ ... func &quot;foo&quot; 123 ] -&gt; [ ... res ] */</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result is object: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_is_object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_pnew</p>`,13),t=[p];function e(c,r,i,D,y,F){return a(),n("div",null,t)}const A=s(o,[["render",e]]);export{u as __pageData,A as default};