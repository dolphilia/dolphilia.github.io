import{_ as s,o as a,c as n,R as o}from"./chunks/framework.320df067.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_safe_to_lstring.md","filePath":"translation/duktape/api/duk_safe_to_lstring.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_safe_to_lstring.md"},p=o(`<h2 id="duk-safe-to-lstring" tabindex="-1">duk_safe_to_lstring() <a class="header-anchor" href="#duk-safe-to-lstring" aria-label="Permalink to &quot;duk_safe_to_lstring()&quot;">​</a></h2><p>1.0.0 string stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">duk_safe_to_lstring</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_size_t</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">out_len</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... | -&gt; | ... | ToString(val) | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_to_lstring() と同様であるが、最初の文字列強制に失敗した場合、エラー値を文字列に強制します。それも失敗した場合、固定されたエラー文字列が返されます。</p><p>呼び出し側は、この関数を使って安全に値を文字列に強制することができ、 Cコードでは、printf()で安全に戻り値をプリントアウトするのに便利です。捕捉されないエラーは、メモリ不足とその他の内部エラーだけです。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">char</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">duk_size_t</span><span style="color:#A6ACCD;"> sz</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Coercion causes error. */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_eval_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">({ toString: function () { throw new Error(&#39;toString error&#39;); } })</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_safe_to_lstring</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">sz</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coerced string: %s (length %lu)</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ptr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">sz</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* -&gt; &quot;Error: toString error&quot; */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Coercion causes error, and the error itself cannot be string coerced. */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_eval_string</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">({ toString: function () { var e = new Error(&#39;cannot string coerce me&#39;);</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">                           e.toString = function () { throw new Error(&#39;coercion error&#39;); };</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                     </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">                           throw e; } })</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_safe_to_lstring</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">sz</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">coerced string: %s (length %lu)</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ptr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">unsigned</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">long</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">sz</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* -&gt; &quot;Error&quot; */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_to_lstring</p>`,13),t=[p];function e(r,c,D,y,F,i){return a(),n("div",null,t)}const d=s(l,[["render",e]]);export{A as __pageData,d as default};