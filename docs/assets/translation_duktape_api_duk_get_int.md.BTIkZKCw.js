import{_ as i,c as a,o as t,a3 as s}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_int.md","filePath":"translation/duktape/api/duk_get_int.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_get_int.md"},n=s('<h2 id="duk-get-int" tabindex="-1">duk_get_int() <a class="header-anchor" href="#duk-get-int" aria-label="Permalink to &quot;duk_get_int()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_int_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_get_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx に数値を取得し、まず [DUK_INT_MIN, DUK_INT_MAX] の間で値をクランプし、次にゼロに向かって切り捨てることで C の duk_int_t に変換します。スタック上の値は変更されません。値がNaNであるか、数値でないか、またはインデックスが無効である場合、0を返す。</p><p>変換の例</p><p>Input Output -Infinity DUK_INT_MIN DUK_INT_MIN - 1 DUK_INT_MIN -3.9 -3 3.9 3 DUK_INT_MAX + 1 DUK_INT_MAX +Infinity DUK_INT_MAX NaN 0 &quot;123&quot; 0 (non-number)</p><p>この強制は、NaN を DUK_INT_MIN に強制するような直感的でない（移植性のない）動作をする可能性のある、double から integer への基本的な C のキャストとは異なります。また、ECMAScript の ToInt32() による強制とは異なり、ネイティブな duk_int_t の全範囲が許可されます (32ビットより多くなる可能性があります)。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;int value: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%ld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_int_default</p>',15),h=[n];function l(p,k,d,r,o,_){return t(),a("div",null,h)}const g=i(e,[["render",l]]);export{u as __pageData,g as default};