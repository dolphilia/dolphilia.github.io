import{_ as a,o as s,c as e,Q as t}from"./chunks/framework.43c433ff.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_push_bare_object.md","filePath":"translation/duktape/api/duk_push_bare_object.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_push_bare_object.md"},n=t(`<h2 id="duk-push-bare-object" tabindex="-1">duk_push_bare_object() <a class="header-anchor" href="#duk-push-bare-object" aria-label="Permalink to &quot;duk_push_bare_object()&quot;">​</a></h2><p>2.0.0 stack object</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_push_bare_object</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_push_bare_object</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | obj |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_push_object() と似ていますが、プッシュされたオブジェクトは他のオブジェクトを継承していません、つまり、その内部プロトタイプはヌルです。この呼び出しは、Object.create(null) と同じです。プッシュされたオブジェクトの非負のインデックス（スタックの底からの相対値）を返します。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> obj_idx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">obj_idx </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_push_bare_object</span><span style="color:#E1E4E8;">(ctx);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> obj_idx;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">obj_idx </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_push_bare_object</span><span style="color:#24292E;">(ctx);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_push_object duk_push_bare_array</p>`,12),p=[n];function l(c,r,d,i,_,u){return s(),e("div",null,p)}const k=a(o,[["render",l]]);export{b as __pageData,k as default};