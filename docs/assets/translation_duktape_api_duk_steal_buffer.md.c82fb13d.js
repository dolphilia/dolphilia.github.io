import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92ce8a2a.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_steal_buffer.md","filePath":"translation/duktape/api/duk_steal_buffer.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/api/duk_steal_buffer.md"},e=l(`<h2 id="duk-steal-buffer" tabindex="-1">duk_steal_buffer() <a class="header-anchor" href="#duk-steal-buffer" aria-label="Permalink to &quot;duk_steal_buffer()&quot;">​</a></h2><p>1.3.0 stack buffer</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">duk_steal_buffer</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">out_size</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">duk_steal_buffer</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">out_size</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx にあるダイナミックバッファの現在のアロケーションを盗用します。具体的には、Duktape は以前の割り当てを忘れ、バッファをゼロサイズ (および NULL データポインタ) にリセットします。以前の割り当てへのポインタが返され、以前の割り当ての長さは、非NULLの場合、out_sizeに書き込まれます。ダイナミックバッファ自体はバリュースタック上に残り、再利用することができます。呼び出し元は、duk_free() を使用して前の割り当てを解放する責任があります。Duktapeは、ガベージコレクションやDuktapeヒープが破壊されたときでさえ、以前の割り当てを解放しません。</p><p>このAPIコールは、動的バッファがバッファ操作アルゴリズムにおいて安全な一時的バッファと して使用される場合に便利です（エラーが発生した場合に備えて、自動的にメモリ管 理されます）。このようなアルゴリズムの最後に、呼び出し元はバッファを盗んで、ダイナミック・バッファ自体が解放されても、Duktapeガベージ・コレクションによって解放されないようにしたい場合があります。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> sz;</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">ptr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">ptr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_push_dynamic_buffer</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">256</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* initial size */</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (;;) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Error prone algorithm, resizes and appends to buffer.  If an error</span></span>
<span class="line"><span style="color:#6A737D;">     * occurs, the dynamic buffer is automatically freed.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_resize_buffer</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, new_size);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Algorithm is done, we want to own the buffer.  The duk_steal_buffer()</span></span>
<span class="line"><span style="color:#6A737D;"> * API call returns the final data pointer (in case it has been changed</span></span>
<span class="line"><span style="color:#6A737D;"> * by resizes etc).</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">ptr </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_steal_buffer</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">sz</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* At this point the dynamic buffer is still on the value stack.</span></span>
<span class="line"><span style="color:#6A737D;"> * Its size is zero and the current allocation is empty.  Here we</span></span>
<span class="line"><span style="color:#6A737D;"> * just pop it as unneeded.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Eventually, when done with the buffer, you must free it yourself,</span></span>
<span class="line"><span style="color:#6A737D;"> * otherwise memory will be leaked.  Duktape won&#39;t free the allocation</span></span>
<span class="line"><span style="color:#6A737D;"> * automatically, even at Duktape heap destruction.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">duk_free</span><span style="color:#E1E4E8;">(ctx, ptr);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> sz;</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">ptr;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">ptr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_push_dynamic_buffer</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">256</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* initial size */</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (;;) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Error prone algorithm, resizes and appends to buffer.  If an error</span></span>
<span class="line"><span style="color:#6A737D;">     * occurs, the dynamic buffer is automatically freed.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_resize_buffer</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, new_size);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Algorithm is done, we want to own the buffer.  The duk_steal_buffer()</span></span>
<span class="line"><span style="color:#6A737D;"> * API call returns the final data pointer (in case it has been changed</span></span>
<span class="line"><span style="color:#6A737D;"> * by resizes etc).</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#24292E;">ptr </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_steal_buffer</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">sz</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* At this point the dynamic buffer is still on the value stack.</span></span>
<span class="line"><span style="color:#6A737D;"> * Its size is zero and the current allocation is empty.  Here we</span></span>
<span class="line"><span style="color:#6A737D;"> * just pop it as unneeded.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* ... */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Eventually, when done with the buffer, you must free it yourself,</span></span>
<span class="line"><span style="color:#6A737D;"> * otherwise memory will be leaked.  Duktape won&#39;t free the allocation</span></span>
<span class="line"><span style="color:#6A737D;"> * automatically, even at Duktape heap destruction.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">duk_free</span><span style="color:#24292E;">(ctx, ptr);</span></span></code></pre></div>`,11),o=[e];function t(c,r,i,y,d,u){return a(),n("div",null,o)}const _=s(p,[["render",t]]);export{f as __pageData,_ as default};
