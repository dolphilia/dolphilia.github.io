import{_ as a,o as s,c as o,Q as t}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_xcopy_top.md","filePath":"translation/duktape/api/duk_xcopy_top.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/api/duk_xcopy_top.md"},e=t('<h2 id="duk-xcopy-top" tabindex="-1">duk_xcopy_top() <a class="header-anchor" href="#duk-xcopy-top" aria-label="Permalink to &quot;duk_xcopy_top()&quot;">​</a></h2><p>1.0.0 stack slice</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_xcopy_top</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">to_ctx</span><span style="color:#E1E4E8;">, duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">from_ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">count</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_xcopy_top</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">to_ctx</span><span style="color:#24292E;">, duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">from_ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">count</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val1 | ... | valN | -&gt; | ... | val1 | ... | valN | (on source stack, from_ctx) | ... | -&gt; | ... | val1 | ... | valN | (on target stack, to_ctx)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_xmove_top() と同様ですが、コピーされる要素はコピー元スタックからポップアップされません。コピー元とコピー先の両方のスタックは、同じ Duktape ヒープに存在しなければなりません。</p><p>Lua の lua_xmove() と比較して、スタックからの順序とスタックへの順序が逆になっています。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_xcopy_top</span><span style="color:#E1E4E8;">(new_ctx, ctx, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_xcopy_top</span><span style="color:#24292E;">(new_ctx, ctx, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_xmove_top</p>',13),n=[e];function l(c,r,d,i,_,u){return s(),o("div",null,n)}const k=a(p,[["render",l]]);export{h as __pageData,k as default};