import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.43c433ff.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_lstring_default.md","filePath":"translation/duktape/api/duk_get_lstring_default.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_get_lstring_default.md"},p=l(`<h2 id="duk-get-lstring-default" tabindex="-1">duk_get_lstring_default() <a class="header-anchor" href="#duk-get-lstring-default" aria-label="Permalink to &quot;duk_get_lstring_default()&quot;">​</a></h2><p>2.1.0 string stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#B392F0;">duk_get_lstring_default</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">out_len</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">def_ptr</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">def_len</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#6F42C1;">duk_get_lstring_default</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">out_len</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">def_ptr</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">def_len</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_get_lstring() と同様ですが、値が文字列でないかインデックスが無効な場合に返される、 明示的なデフォルト値があります。</p><p>duk_opt_xxx() と duk_get_xxx_default() に与えられたデフォルトポインタの値は、Duktape によって追跡されません、例えば、 duk_opt_string() は、デフォルト文字列引数のコピーを作成しません。呼び出し側は、デフォルト・ポインタがその意図された用途に有効であり続けることを保証する責任があります。例えば、 duk_opt_string(ctx, 3, &quot;localhost&quot;) は、文字列定数が常に有効であるため、問題なく動作しますが、引数が libc に割り当てられた文字列である場合、呼び出し側は、 duk_opt_string() が返すポインタが libc に割り当てられた文字列の寿命を越えて使用されないようにしなければなりません。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">str;</span></span>
<span class="line"><span style="color:#79B8FF;">duk_size_t</span><span style="color:#E1E4E8;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">str </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_get_lstring_default</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;foo&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\x00</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">str;</span></span>
<span class="line"><span style="color:#005CC5;">duk_size_t</span><span style="color:#24292E;"> len;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">str </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_get_lstring_default</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">len</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;foo&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\x00</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bar&quot;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_string_default</p>`,13),t=[p];function e(r,c,y,E,d,i){return a(),n("div",null,t)}const h=s(o,[["render",e]]);export{u as __pageData,h as default};