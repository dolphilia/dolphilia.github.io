import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.43c433ff.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_compile_string_filename.md","filePath":"translation/duktape/api/duk_compile_string_filename.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_compile_string_filename.md"},e=o(`<h2 id="duk-compile-string-filename" tabindex="-1">duk_compile_string_filename() <a class="header-anchor" href="#duk-compile-string-filename" aria-label="Permalink to &quot;duk_compile_string_filename()&quot;">​</a></h2><p>1.0.0 string compile</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_compile_string_filename</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_uint_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">flags</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">src</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_compile_string_filename</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_uint_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">flags</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">src</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | filename -&gt; | ... | function |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>duk_compile() と同様であるが、コンパイル入力は C の文字列として与えられます。</p><p>この変種では、入力ソースコードは Duktape によってインターンされないので、 低メモリ環境では有用です。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;myFile.js&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_compile_string_filename</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;print(&#39;program code&#39;);&quot;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;myFile.js&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_compile_string_filename</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;print(&#39;program code&#39;);&quot;</span><span style="color:#24292E;">);</span></span></code></pre></div>`,11),p=[e];function t(c,r,i,d,_,y){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{E as __pageData,h as default};