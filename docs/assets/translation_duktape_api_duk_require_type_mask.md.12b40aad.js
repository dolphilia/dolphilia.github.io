import{_ as a,o as s,c as e,R as t}from"./chunks/framework.320df067.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_require_type_mask.md","filePath":"translation/duktape/api/duk_require_type_mask.md","lastUpdated":1676126774000}'),n={name:"translation/duktape/api/duk_require_type_mask.md"},l=t(`<h2 id="duk-require-type-mask" tabindex="-1">duk_require_type_mask() <a class="header-anchor" href="#duk-require-type-mask" aria-label="Permalink to &quot;duk_require_type_mask()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_require_type_mask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_uint_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">mask</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_check_type_mask() と同様ですが、val の型がどのマスクビットにも一致しない場合、 TypeError を投げます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">duk_require_type_mask</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> DUK_TYPE_MASK_STRING </span><span style="color:#89DDFF;">|</span></span>
<span class="line"><span style="color:#A6ACCD;">                               DUK_TYPE_MASK_NUMBER</span><span style="color:#89DDFF;">);</span></span></code></pre></div>`,10),o=[l];function p(r,c,i,_,d,u){return s(),e("div",null,o)}const D=a(n,[["render",p]]);export{k as __pageData,D as default};