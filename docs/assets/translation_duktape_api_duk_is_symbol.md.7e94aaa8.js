import{_ as s,o as a,c as l,R as o}from"./chunks/framework.320df067.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_is_symbol.md","filePath":"translation/duktape/api/duk_is_symbol.md","lastUpdated":1676126774000}'),t={name:"translation/duktape/api/duk_is_symbol.md"},n=o(`<h2 id="duk-is-symbol" tabindex="-1">duk_is_symbol() <a class="header-anchor" href="#duk-is-symbol" aria-label="Permalink to &quot;duk_is_symbol()&quot;">​</a></h2><p>2.0.0 symbol string stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_bool_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_is_symbol</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idxの値がシンボルであれば1を、そうでなければ0を返す。</p><p>シンボル値はC APIでは文字列として見えるので、 duk_is_symbol() と duk_is_string() の両方が真となります。この動作は、Duktape 1.xの内部文字列に類似しています。duk_is_symbol() を使えば、シンボルを普通の文字列と区別することができます。内部表現については、symbols.rstを参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">duk_is_symbol</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* ... */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),e=[n];function p(c,i,r,d,_,y){return a(),l("div",null,e)}const D=s(t,[["render",p]]);export{h as __pageData,D as default};