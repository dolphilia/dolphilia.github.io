import{_ as a,o as s,c as o,Q as e}from"./chunks/framework.43c433ff.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_cbor_decode.md","filePath":"translation/duktape/api/duk_cbor_decode.md","lastUpdated":1676126774000}'),n={name:"translation/duktape/api/duk_cbor_decode.md"},l=e('<h2 id="duk-cbor-decode" tabindex="-1">duk_cbor_decode() <a class="header-anchor" href="#duk-cbor-decode" aria-label="Permalink to &quot;duk_cbor_decode()&quot;">​</a></h2><p>2.5.0 experimental codec cbor</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_cbor_decode</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_uint_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">decode_flags</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_cbor_decode</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_uint_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">decode_flags</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | cbor_val | ... | -&gt; | ... | val | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>CBORでエンコードされた値（任意のバッファタイプで与えられる）をインプレース操作でデコードします。結果の値は任意のECMAScriptの値になります。現在、フラグは定義されていませんので、フラグに0を渡してください。</p><p>CBOR から ECMAScript の値へのマッピングは実験的なもので、デコード結果は時間の経過とともに変化する可能性があります。例えば、ECMAScript 値のエンコードとデコードのラウンドトリッピングを改善するために、カスタム CBOR タグが追加されるでしょう。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_cbor_decode</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_cbor_decode</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_cbor_encode</p>',13),t=[l];function p(c,r,d,i,_,u){return s(),o("div",null,t)}const E=a(n,[["render",p]]);export{y as __pageData,E as default};