import{_ as s,o as a,c as p,Q as n}from"./chunks/framework.43c433ff.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_del_prop_index.md","filePath":"translation/duktape/api/duk_del_prop_index.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_del_prop_index.md"},l=n(`<h2 id="duk-del-prop-index" tabindex="-1">duk_del_prop_index() <a class="header-anchor" href="#duk-del-prop-index" aria-label="Permalink to &quot;duk_del_prop_index()&quot;">​</a></h2><p>1.0.0 property</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_bool_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_del_prop_index</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">obj_idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_uarridx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">arr_idx</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_bool_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_del_prop_index</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">obj_idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_uarridx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">arr_idx</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | obj | ... | -&gt; | ... | obj | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_del_prop() と同様ですが、プロパティ名は符号なし整数 arr_idx として与えられます。これは特に配列の要素を削除するのに便利です (しかし、それに限定されるものではありません)。</p><p>概念的には、プロパティ削除のために数値は文字列に強制されます。例えば、123はプロパティ名 &quot;123 &quot;と同等です。Duktapeは可能な限り、明示的な強制を避けています。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_bool_t</span><span style="color:#E1E4E8;"> rc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">rc </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_del_prop_index</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;delete obj[123] -&gt; rc=</span><span style="color:#79B8FF;">%d\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">rc</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_bool_t</span><span style="color:#24292E;"> rc;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">rc </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_del_prop_index</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;delete obj[123] -&gt; rc=</span><span style="color:#005CC5;">%d\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">) </span><span style="color:#E36209;">rc</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_del_prop duk_del_prop_string duk_del_prop_lstring duk_del_prop_literal duk_del_prop_heapptr</p>`,13),e=[l];function t(r,c,d,i,_,y){return a(),p("div",null,e)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};