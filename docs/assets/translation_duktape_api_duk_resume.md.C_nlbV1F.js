import{_ as a,c as s,o as e,a3 as t}from"./chunks/framework.DflgEAq4.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_resume.md","filePath":"translation/duktape/api/duk_resume.md","lastUpdated":1676126774000}'),i={name:"translation/duktape/api/duk_resume.md"},n=t('<h2 id="duk-resume" tabindex="-1">duk_resume() <a class="header-anchor" href="#duk-resume" aria-label="Permalink to &quot;duk_resume()&quot;">​</a></h2><p>1.6.0 thread</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_resume</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> duk_thread_state </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | state(N) | -&gt; | ... | (number of popped stack entries may vary)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_suspend() で一時停止した Duktape の実行を再開します。state 引数は NULL であってはならない。Value スタックと state は、 duk_suspend() によって残された状態でなければならない； そうでない場合、メモリ不安全な動作が起こります。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* See example for duk_suspend(). */</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_suspend</p>',12),d=[n];function h(r,l,p,o,k,u){return e(),s("div",null,d)}const m=a(i,[["render",h]]);export{_ as __pageData,m as default};