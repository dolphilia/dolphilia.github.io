import{_ as a,o as t,c as s,R as n}from"./chunks/framework.320df067.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_int.md","filePath":"translation/duktape/api/duk_get_int.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_get_int.md"},o=n('<h2 id="duk-get-int" tabindex="-1">duk_get_int() <a class="header-anchor" href="#duk-get-int" aria-label="Permalink to &quot;duk_get_int()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_int_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx に数値を取得し、まず [DUK_INT_MIN, DUK_INT_MAX] の間で値をクランプし、次にゼロに向かって切り捨てることで C の duk_int_t に変換します。スタック上の値は変更されません。値がNaNであるか、数値でないか、またはインデックスが無効である場合、0を返す。</p><p>変換の例</p><p>Input Output -Infinity DUK_INT_MIN DUK_INT_MIN - 1 DUK_INT_MIN -3.9 -3 3.9 3 DUK_INT_MAX + 1 DUK_INT_MAX +Infinity DUK_INT_MAX NaN 0 &quot;123&quot; 0 (non-number)</p><p>この強制は、NaN を DUK_INT_MIN に強制するような直感的でない（移植性のない）動作をする可能性のある、double から integer への基本的な C のキャストとは異なります。また、ECMAScript の ToInt32() による強制とは異なり、ネイティブな duk_int_t の全範囲が許可されます (32ビットより多くなる可能性があります)。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">int value: %ld</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">));</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_int_default</p>',15),l=[o];function p(r,c,i,_,d,u){return t(),s("div",null,l)}const y=a(e,[["render",p]]);export{h as __pageData,y as default};