import{_ as a,c as s,o as n,Q as l}from"./chunks/framework.44f152d8.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_set_global_object.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_set_global_object.md"},t=l(`<h2 id="duk-set-global-object" tabindex="-1">duk_set_global_object() <a class="header-anchor" href="#duk-set-global-object" aria-label="Permalink to &quot;duk_set_global_object()&quot;">​</a></h2><p>1.0.0 thread stack sandbox</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_set_global_object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | new_global | -&gt; | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>現在のコンテキストのグローバルオブジェクトを、バリュースタックの一番上にあるオブジェクトで置き換えます。値がオブジェクトでない場合は、エラーがスローされます。</p><p>この操作は、他のコンテキストのグローバルオブジェクトには影響しないことに注意してください。たとえ、この時点まで同じグローバル環境を共有していたとしてもです。他のコンテキストに変更を継承するには、duk_push_thread() を呼び出す前に、まずグローバルオブジェクトを置き換えます。</p><p>変更後の詳細な動作については、テストケース test-set-global-object.c を参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Build a global object with a subset of bindings. */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_eval_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">({</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">    print: this.print,</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">    JSON: this.JSON</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">})</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Replace global object. */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_set_global_object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,12),e=[t];function p(c,r,i,d,_,D){return n(),s("div",null,e)}const b=a(o,[["render",p]]);export{y as __pageData,b as default};