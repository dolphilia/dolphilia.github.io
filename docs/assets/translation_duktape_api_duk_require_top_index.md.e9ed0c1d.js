import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_require_top_index.md","filePath":"translation/duktape/api/duk_require_top_index.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_require_top_index.md"},p=e(`<h2 id="duk-require-top-index" tabindex="-1">duk_require_top_index() <a class="header-anchor" href="#duk-require-top-index" aria-label="Permalink to &quot;duk_require_top_index()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_require_top_index</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_require_top_index</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>(バリュースタックに影響なし)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>スタック上の最上位の値の絶対インデックス(&gt;= 0)を取得します。スタックが空の場合、エラーを投げます。。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> idx_top;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* throws error if stack is empty */</span></span>
<span class="line"><span style="color:#E1E4E8;">idx_top </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_require_top_index</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;index of top element: </span><span style="color:#79B8FF;">%ld\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">idx_top</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> idx_top;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* throws error if stack is empty */</span></span>
<span class="line"><span style="color:#24292E;">idx_top </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_require_top_index</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;index of top element: </span><span style="color:#005CC5;">%ld\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">long</span><span style="color:#24292E;">) </span><span style="color:#E36209;">idx_top</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_top_index</p>`,12),t=[p];function l(r,c,i,d,_,u){return a(),n("div",null,t)}const E=s(o,[["render",l]]);export{h as __pageData,E as default};