import{_ as a,o as s,c as t,R as n}from"./chunks/framework.320df067.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_is_syntax_error.md","filePath":"translation/duktape/api/duk_is_syntax_error.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_is_syntax_error.md"},o=n(`<h2 id="duk-is-syntax-error" tabindex="-1">duk_is_syntax_error() <a class="header-anchor" href="#duk-is-syntax-error" aria-label="Permalink to &quot;duk_is_syntax_error()&quot;">​</a></h2><p>1.4.0 stack error</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_bool_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_is_syntax_error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx にある値が SyntaxError を継承している場合は 1 を、そうでない場合は 0 を返します。 idx が無効な場合も 0 を返す。 これは、duk_get_error_code() == DUK_ERR_SYNTAX_ERROR を使用するための便利なコールです。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">duk_is_syntax_error</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* ... */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,10),l=[o];function r(p,c,i,d,_,y){return s(),t("div",null,l)}const D=a(e,[["render",r]]);export{h as __pageData,D as default};