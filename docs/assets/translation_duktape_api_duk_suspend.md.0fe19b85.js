import{_ as s,o as a,c as n,R as l}from"./chunks/framework.320df067.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_suspend.md","filePath":"translation/duktape/api/duk_suspend.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/api/duk_suspend.md"},e=l(`<h2 id="duk-suspend" tabindex="-1">duk_suspend() <a class="header-anchor" href="#duk-suspend" aria-label="Permalink to &quot;duk_suspend()&quot;">​</a></h2><p>1.6.0 thread</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_suspend</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> duk_thread_state </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">state</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | -&gt; | ... | state(N) | (number of pushed stack entries may vary)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>別のネイティブ・スレッドが同じDuktapeヒープ上で操作できるように、現在のコール・スタックを一時停止します。必要な内部状態は、バリュースタックや提供された状態割り当てに格納されます。状態ポインタはNULLであってはならず、さもなければメモリ不安全な動作が発生します。実行は、後で duk_resume() を使って再開されなければなりません。後で実行が再開されない場合、いくつかの内部帳簿が矛盾した状態で残されます。Duktapeの実行が中断されている間、（duk_suspend()を呼び出した）現在のネイティブ・スレッドのネイティブ・コール・スタックは巻き戻されてはいけません。</p><p>このAPIコールは、直接または間接的に、以下の場所から使用してはならない。</p><p>ファイナライザー・コール Duktape.errCreate()エラー補強コール Duktapeは、一度に特定のDuktapeヒープにアクセスするネイティブ・スレッドだけを確保するためのロッキングを提供しません。アプリケーション・コードでそのようなメカニズムを提供する必要があります。 スレッディングを参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Example of a blocking connect which suspends Duktape execution while the</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * connect blocks.  The example assumes an external locking mechanism for</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * ensuring only one native thread accesses the Duktape heap at a time.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * When my_blocking_connect() is entered, the currently executing native</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * thread is assumed to have already obtained the lock.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">duk_ret_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">my_blocking_connect</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    duk_thread_state st</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">char</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> port</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> success</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    host </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">duk_require_string</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    port </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">duk_require_int</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* Suspend the Duktape thread.  Once duk_suspend() returns you must</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * not call into the Duktape API before doing a duk_resume().</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">duk_suspend</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">st</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">my_release_lock</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* Blocks until connect attempt is finished.  Another native thread</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * may call into Duktape while we&#39;re blocked provided that application</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * guarantees only thread does so at a time.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    success </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">blocking_connect</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> port</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    /* When we want to resume execution we must ensure no other thread is</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * active for the Duktape heap.  We then call duk_resume() and proceed</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * normally.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">my_acquire_lock</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">duk_resume</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">st</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#F07178;">success</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">duk_type_error</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">failed to connect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_resume</p>`,14),o=[e];function t(c,r,i,y,F,D){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};