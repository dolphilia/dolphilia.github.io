import{_ as a,o as s,c as e,R as t}from"./chunks/framework.320df067.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_is_primitive.md","filePath":"translation/duktape/api/duk_is_primitive.md","lastUpdated":1676126774000}'),i={name:"translation/duktape/api/duk_is_primitive.md"},n=t(`<h2 id="duk-is-primitive" tabindex="-1">duk_is_primitive() <a class="header-anchor" href="#duk-is-primitive" aria-label="Permalink to &quot;duk_is_primitive()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_bool_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_is_primitive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>Returns 1 if value at idx is a primitive type, as defined in ToPrimitive, otherwise returns 0. idx が無効な場合も 0 を返す。</p><p>Any standard type other than an object is a primitive type. The custom plain pointer type is also considered a primitive type. However, the custom plain buffer type (which behaves like an Uint8Array object in most situations) and lightfunc type (which behaves like a Function object in most situations) are not considered a primitive type. This matches the behavior of duk_to_primitive() which (usually) coerces e.g. a plain buffer to the string [object Uint8Array].</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">duk_is_primitive</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* ... */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,11),o=[n];function l(p,r,c,d,h,u){return s(),e("div",null,o)}const m=a(i,[["render",l]]);export{y as __pageData,m as default};