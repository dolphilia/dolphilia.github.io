import{_ as a,o as s,c as o,Q as p}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_swap.md","filePath":"translation/duktape/api/duk_swap.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_swap.md"},n=p('<h2 id="duk-swap" tabindex="-1">duk_swap() <a class="header-anchor" href="#duk-swap" aria-label="Permalink to &quot;duk_swap()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_swap</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx2</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_swap</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx2</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val1 | ... | val2 | ... | -&gt; | ... | val2 | ... | val1 | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>インデックス idx1 と idx2 の値を入れ替えます。インデックスが同じであれば、この呼び出しは失敗です。どちらかのインデックスが無効な場合、エラーを投げます。。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_swap</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_swap</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_swap_top</p>',12),e=[n];function t(c,r,d,i,h,y){return s(),o("div",null,e)}const E=a(l,[["render",t]]);export{_ as __pageData,E as default};