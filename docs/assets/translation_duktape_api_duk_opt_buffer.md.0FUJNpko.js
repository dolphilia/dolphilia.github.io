import{_ as s,o as i,c as a,R as t}from"./chunks/framework.c2IVng1e.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_opt_buffer.md","filePath":"translation/duktape/api/duk_opt_buffer.md","lastUpdated":1676126774000}'),h={name:"translation/duktape/api/duk_opt_buffer.md"},k=t(`<h2 id="duk-opt-buffer" tabindex="-1">duk_opt_buffer() <a class="header-anchor" href="#duk-opt-buffer" aria-label="Permalink to &quot;duk_opt_buffer()&quot;">​</a></h2><p>2.1.0 stack buffer</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_opt_buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_size_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">out_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">def_ptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_size_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> def_len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idxにある(プレーン)バッファ値のデータポインタを，値を変更したり強制したりすることなく取得します。値が0以外のサイズの有効なバッファである場合、非NULLポインタを返します。サイズが0のバッファの場合、NULLまたは非NULLポインタを返すことがあります。out_size が非NULLの場合、バッファのサイズは *out_size に書き込まれます。値が未定義またはインデックスが無効な場合，def_ptr のデフォルト値が返され， def_len のデフォルト長が *out_size に書き込まれる (out_size が nonNULL の場合)．その他の場合(NULLおよび型が一致しない場合)は，エラーを投げます。。</p><p>duk_opt_xxx() と duk_get_xxx_default() に与えられたデフォルトポインタ値は、Duktape によって追跡されない。例えば、 duk_opt_string() は、デフォルト文字列引数のコピーを作らない。呼び出し側は、デフォルト・ポインタがその意図された用途に有効であり続けることを保証する責任があります。例えば、 duk_opt_string(ctx, 3, &quot;localhost&quot;) は、文字列定数が常に有効であるため、問題なく動作しますが、引数が libc で割り当てられた文字列の場合、呼び出し側は duk_opt_string() から返されたポインタが libc で割り当てられた文字列の寿命以上に使用されないようにしなければなりません。 サイズゼロのバッファと非バッファを、戻り値だけから区別する信頼できる方法はありません。非バッファの場合、サイズ0のNULLが返されます。サイズ0のバッファの場合、同じ値が返されるかもしれません（NULLでないポインタが返される可能性もありますが）。duk_is_buffer() や duk_is_buffer_data() 、あるいはバッファやバッファ・オブジェクトの型チェックを行う際に使用してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptr;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_size_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sz;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> buf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">256</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Use a buffer given at index 2, or default to &#39;buf&#39;. */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_opt_buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buf));</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;buf=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">, size=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%lu\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ptr, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">unsigned</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">sz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_opt_buffer_data</p>`,13),n=[k];function p(e,l,d,r,o,E){return i(),a("div",null,n)}const _=s(h,[["render",p]]);export{g as __pageData,_ as default};