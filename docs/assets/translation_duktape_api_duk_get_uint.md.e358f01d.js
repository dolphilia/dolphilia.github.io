import{_ as a,o as s,c as t,R as n}from"./chunks/framework.320df067.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_uint.md","filePath":"translation/duktape/api/duk_get_uint.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_get_uint.md"},o=n('<h2 id="duk-get-uint" tabindex="-1">duk_get_uint() <a class="header-anchor" href="#duk-get-uint" aria-label="Permalink to &quot;duk_get_uint()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_uint_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_uint</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx で数値を取得し、まず [0, DUK_UINT_MAX] の間で値をクランプし、次に 0 に向かって切り捨てることで C の duk_uint_t に変換します。スタック上の値は変更されない。値がNaNであるか、数値でないか、またはインデックスが無効である場合、0を返す。</p><p>変換の例</p><p>Input Output -Infinity 0 -1 0 -3.9 0 3.9 3 DUK_UINT_MAX + 1 DUK_UINT_MAX +Infinity DUK_UINT_MAX NaN 0 &quot;123&quot; 0 (non-number)</p><p>この強制は、例えばNaN値に対して直感的でない（そして移植性のない）動作をする可能性のある、doubleから符号なし整数への基本的なCキャストとは異なります。また、ECMAScript の ToUint32() による強制とは異なり、ネイティブな duk_uint_t の全範囲が許可されます (32ビットより多くなる可能性があります)。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">unsigned int value: %lu</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_uint</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">));</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_uint_default</p>',15),l=[o];function p(r,c,i,u,d,_){return s(),t("div",null,l)}const h=a(e,[["render",p]]);export{y as __pageData,h as default};