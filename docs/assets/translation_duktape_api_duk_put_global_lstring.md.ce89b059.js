import{_ as s,o as a,c as l,Q as o}from"./chunks/framework.43c433ff.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_put_global_lstring.md","filePath":"translation/duktape/api/duk_put_global_lstring.md","lastUpdated":1676126774000}'),n={name:"translation/duktape/api/duk_put_global_lstring.md"},t=o(`<h2 id="duk-put-global-lstring" tabindex="-1">duk_put_global_lstring() <a class="header-anchor" href="#duk-put-global-lstring" aria-label="Permalink to &quot;duk_put_global_lstring()&quot;">​</a></h2><p>2.0.0 string property</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_bool_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_put_global_lstring</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">key</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">key_len</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_bool_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_put_global_lstring</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">key</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">key_len</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | -&gt; | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_put_global_string() と同様ですが、キーは長さを明示した文字列として与えられます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;1.2.3&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">duk_put_global_lstring</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;internal&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\x00</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;nul&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">12</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;1.2.3&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">(</span><span style="color:#D73A49;">void</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">duk_put_global_lstring</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;internal&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\x00</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;nul&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">12</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_put_global_string duk_put_global_literal duk_put_global_heapptr</p>`,12),p=[t];function e(r,c,i,u,d,_){return a(),l("div",null,p)}const h=s(n,[["render",e]]);export{E as __pageData,h as default};