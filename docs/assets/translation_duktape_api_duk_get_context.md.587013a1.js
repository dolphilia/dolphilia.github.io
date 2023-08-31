import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_context.md","filePath":"translation/duktape/api/duk_get_context.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_get_context.md"},p=e(`<h2 id="duk-get-context" tabindex="-1">duk_get_context() <a class="header-anchor" href="#duk-get-context" aria-label="Permalink to &quot;duk_get_context()&quot;">​</a></h2><p>1.0.0 stack borrowed</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">duk_context </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">duk_get_context</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">duk_context </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">duk_get_context</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idxにあるDuktapeスレッドのコンテキスト・ポインタを取得します。idxの値がDuktapeスレッドでない場合、またはインデックスが無効な場合、 NULLを返します。</p><p>返されたコンテキスト・ポインタは、ガベージコレクションの観点から Duktapeスレッドに到達可能な間だけ有効です。</p><p>無効な値やインデックスに対してエラーを投げたい場合は、 duk_require_context() を使ってください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">duk_context </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">new_ctx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create a new thread and get a context pointer. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">duk_push_thread</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">new_ctx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_get_context</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* You can use new_ctx as long as the related thread is reachable</span></span>
<span class="line"><span style="color:#6A737D;"> * from a garbage collection point of view.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(new_ctx, </span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* This duk_pop() makes the new thread unreachable (assuming there</span></span>
<span class="line"><span style="color:#6A737D;"> * is no other reference to it), so new_ctx is no longer valid</span></span>
<span class="line"><span style="color:#6A737D;"> * afterwards.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Using new_ctx here may cause a crash. */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">duk_context </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">new_ctx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create a new thread and get a context pointer. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">duk_push_thread</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">new_ctx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_get_context</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* You can use new_ctx as long as the related thread is reachable</span></span>
<span class="line"><span style="color:#6A737D;"> * from a garbage collection point of view.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(new_ctx, </span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* This duk_pop() makes the new thread unreachable (assuming there</span></span>
<span class="line"><span style="color:#6A737D;"> * is no other reference to it), so new_ctx is no longer valid</span></span>
<span class="line"><span style="color:#6A737D;"> * afterwards.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Using new_ctx here may cause a crash. */</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_context_default</p>`,14),o=[p];function t(c,r,i,d,y,_){return a(),n("div",null,o)}const E=s(l,[["render",t]]);export{h as __pageData,E as default};
