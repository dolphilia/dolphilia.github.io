import{_ as s,o as a,c as n,R as o}from"./chunks/framework.320df067.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_push_error_object_va.md","filePath":"translation/duktape/api/duk_push_error_object_va.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_push_error_object_va.md"},e=o(`<h2 id="duk-push-error-object-va" tabindex="-1">duk_push_error_object_va() <a class="header-anchor" href="#duk-push-error-object-va" aria-label="Permalink to &quot;duk_push_error_object_va()&quot;">​</a></h2><p>1.1.0 vararg stack object error</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_push_error_object_va</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_errcode_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">err_code</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">fmt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> va_list </span><span style="color:#A6ACCD;font-style:italic;">ap</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | err |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_push_error_object() の Vararg 変形です。</p><p>この API 呼び出しは、呼び出し側のコードの va_end() マクロが (例えばエラースローのために) 到達しないかもしれないので、完全に移植性があるわけではありません。いくつかの実装は、例えば va_start() によって割り当てられたメモリを解放するために va_end() に依存しています; <a href="https://stackoverflow.com/questions/11645282/do-i-need-to-va-end-when-an-exception-is-thrown" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/11645282/do-i-need-to-va-end-when-an-exception-is-thrown</a> を参照してください。しかし、そのような実装はまれであり、これは通常実用的な懸念ではありません。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_type_error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">fmt</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    va_list ap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#F07178;"> err_idx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">va_start</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ap</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> fmt</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    err_idx </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">duk_push_error_object_va</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> DUK_ERR_TYPE_ERROR</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> fmt</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> ap</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">va_end</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ap</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> err_idx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_push_error_object</p>`,13),p=[e];function t(r,c,i,F,y,_){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};