import{_ as a,c as s,o as t,Q as n}from"./chunks/framework.44f152d8.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_dup_top.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/api/duk_dup_top.md"},l=n(`<h2 id="duk-dup-top" tabindex="-1">duk_dup_top() <a class="header-anchor" href="#duk-dup-top" aria-label="Permalink to &quot;duk_dup_top()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_dup_top</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | -&gt; | ... | val | val |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>スタックトップにある値の複製をスタックにプッシュします。バリュースタックが空の場合、エラーを投げます。。</p><p>duk_dup(ctx, -1) を呼び出すのと同等です。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">duk_push_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* -&gt; [ ... 123 ] */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_push_int</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">234</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">  /* -&gt; [ ... 123 234 ] */</span></span>
<span class="line"><span style="color:#82AAFF;">duk_dup_top</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">);</span><span style="color:#676E95;font-style:italic;">        /* -&gt; [ ... 123 234 234 ] */</span></span>
<span class="line"></span></code></pre></div>`,11),p=[l];function e(c,r,i,d,u,_){return t(),s("div",null,p)}const D=a(o,[["render",e]]);export{y as __pageData,D as default};