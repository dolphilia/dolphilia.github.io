import{_ as a,o as s,c as n,R as l}from"./chunks/framework.320df067.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_get_current_magic.md","filePath":"translation/duktape/api/duk_get_current_magic.md","lastUpdated":1676126774000}'),t={name:"translation/duktape/api/duk_get_current_magic.md"},o=l(`<h2 id="duk-get-current-magic" tabindex="-1">duk_get_current_magic() <a class="header-anchor" href="#duk-get-current-magic" aria-label="Permalink to &quot;duk_get_current_magic()&quot;">​</a></h2><p>1.0.0 magic function</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_int_t</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_current_magic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>(バリュースタックに影響なし)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>実行中のDuktape/C関数に関連する16ビット符号付き「マジック」値を取得します。現在起動しているものがない場合は、0が返されます。</p><p>magic関数は、同じDuktape/C関数を少し異なる動作で使用することを可能にします； 動作フラグや他のパラメータをmagicフィールドに渡すことができます。これは、動作に関連するフラグやプロパティを通常のプロパティとして関数オブジェクトに持たせるよりも低コストです。</p><p>符号なし16ビット値が必要な場合は、単純にビット単位のANDで結果を得ます。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> my_flags </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">((</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_current_magic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xffffU</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">duk_int_t</span><span style="color:#A6ACCD;"> my_flags </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_get_current_magic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">my_flags </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x01</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flag set</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flag not set</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_magic duk_set_magic</p>`,15),e=[o];function p(c,r,i,D,y,F){return s(),n("div",null,e)}const _=a(t,[["render",p]]);export{C as __pageData,_ as default};