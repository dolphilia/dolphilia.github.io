import{_ as a,o as s,c as t,Q as o}from"./chunks/framework.43c433ff.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_to_primitive.md","filePath":"translation/duktape/api/duk_to_primitive.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_to_primitive.md"},n=o('<h2 id="duk-to-primitive" tabindex="-1">duk_to_primitive() <a class="header-anchor" href="#duk-to-primitive" aria-label="Permalink to &quot;duk_to_primitive()&quot;">​</a></h2><p>1.0.0 stack</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_to_primitive</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_int_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">hint</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_to_primitive</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_int_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">hint</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val | ... | -&gt; | ... | ToPrimitive(val) |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>idx のオブジェクトを ECMAScript の ToPrimitive() で強制された値で置き換えます。hint 引数はオブジェクトのプリミティブ型への強制に影響し、文字列 (DUK_HINT_STRING)、数値 (DUK_HINT_NUMBER)、またはその両方 (DUK_HINT_NONE) を優先することを表します。DUK_HINT_NONE は数値を優先しますが、入力値が Date インスタンスの場合は文字列を優先します (正確な強制動作は ECMAScript 仕様に記載されています)。idx が無効な場合は、エラーを投げます。</p><p>カスタム型強制。</p><p>バッファ値 (プレーン): Uint8Array のように扱われ、通常は文字列 [object Uint8Array] に強制されます。 ポインタ値(プレーン): 既存の値を保持します。 ポインタオブジェクト: その下のプレーンなポインタ値に強制されます。 Lightfunc 値 (プレーン): 関数のように扱われ、通常、文字列 [object Function] に強制されます。 カスタムの型強制については、型変換とテストに記載されています。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_to_primitive</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, DUK_HINT_NUMBER);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_to_primitive</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, DUK_HINT_NUMBER);</span></span></code></pre></div>',12),p=[n];function l(i,r,c,d,_,h){return s(),t("div",null,p)}const y=a(e,[["render",l]]);export{E as __pageData,y as default};