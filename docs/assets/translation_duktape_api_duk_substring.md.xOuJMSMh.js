import{_ as s,o as i,c as a,R as t}from"./chunks/framework.c2IVng1e.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_substring.md","filePath":"translation/duktape/api/duk_substring.md","lastUpdated":1676126774000}'),n={name:"translation/duktape/api/duk_substring.md"},h=t(`<h2 id="duk-substring" tabindex="-1">duk_substring() <a class="header-anchor" href="#duk-substring" aria-label="Permalink to &quot;duk_substring()&quot;">​</a></h2><p>1.0.0 string</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> start_char_offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> end_char_offset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | str | ... | -&gt; | ... | substr | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx にある文字列を、文字列自身の部分文字列 [start_char_offset, end_char_offset[ ]で置換します。idxの値が文字列でない場合、またはインデックスが無効な場合は、エラーを投げます。。</p><p>部分文字列操作は、バイトではなく文字で動作し、オフセットは文字オフセットです。この呼び出しのセマンティクスは String.prototype.substring (start, end) に類似しています。オフセット値は文字列長にクランプされ（size_t は符号なしなので負の値をクランプする必要はない）、開始オフセットが終了オフセットより大きい場合、結果は空文字列です。</p><p>バイト単位の部分文字列を得るには、 duk_get_lstring() で文字列データポインタと長さを取得し、 duk_push_lstring() でバイトのスライスをプッシュします。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* String at index -3 is &#39;foobar&#39;.  Substring [2,5[ is &quot;oba&quot;. */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_substring</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;substring: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_get_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div>`,12),e=[h];function k(l,p,r,d,o,g){return i(),a("div",null,e)}const E=s(n,[["render",k]]);export{c as __pageData,E as default};