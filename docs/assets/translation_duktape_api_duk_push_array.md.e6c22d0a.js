import{_ as a,o as s,c as n,R as p}from"./chunks/framework.320df067.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_push_array.md","filePath":"translation/duktape/api/duk_push_array.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_push_array.md"},o=p(`<h2 id="duk-push-array" tabindex="-1">duk_push_array() <a class="header-anchor" href="#duk-push-array" aria-label="Permalink to &quot;duk_push_array()&quot;">​</a></h2><p>1.0.0 stack object</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_push_array</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | arr |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>空の配列をスタックにプッシュします。押された配列の非負のインデックス（スタックの底からの相対値）を返します。</p><p>生成されたオブジェクトの内部プロトタイプは Array.prototype です。これを変更するには、 duk_set_prototype() を使用します。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> arr_idx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">arr_idx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_push_array</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_put_prop_index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr_idx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">duk_put_prop_index</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arr_idx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* array is now: [ &quot;foo&quot;, &quot;bar&quot; ], and array.length is 2 (automatically</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * updated for ECMAScript arrays).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* pop array */</span></span></code></pre></div>`,11),t=[o];function e(r,c,i,y,D,F){return s(),n("div",null,t)}const _=a(l,[["render",e]]);export{u as __pageData,_ as default};