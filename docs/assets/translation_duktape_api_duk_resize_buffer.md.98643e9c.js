import{_ as s,c as a,o as e,Q as n}from"./chunks/framework.44f152d8.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_resize_buffer.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/api/duk_resize_buffer.md"},o=n(`<h2 id="duk-resize-buffer" tabindex="-1">duk_resize_buffer() <a class="header-anchor" href="#duk-resize-buffer" aria-label="Permalink to &quot;duk_resize_buffer()&quot;">​</a></h2><p>1.0.0 stack buffer</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">duk_resize_buffer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">duk_context </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_idx_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">idx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">duk_size_t</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">new_size</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx のダイナミックバッファを new_size バイトにリサイズします。new_size が現在のサイズより大きい場合、新しく割り当てられたバイト（古いサイズより大きい）は自動的にゼロにされます。新しいバッファのデータ領域へのポインタを返す。new_size が 0 の場合、NULL または NULL 以外の値を返す。サイズ変更に失敗した場合、idxの値がダイナミックバッファでない場合、 idxが無効な場合、エラーを投げます。。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ptr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ptr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">duk_resize_buffer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">ctx</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4096</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,10),t=[o];function p(r,c,i,d,_,C){return e(),a("div",null,t)}const y=s(l,[["render",p]]);export{u as __pageData,y as default};