import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.DflgEAq4.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_compact.md","filePath":"translation/duktape/api/duk_compact.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_compact.md"},n=t(`<h2 id="duk-compact" tabindex="-1">duk_compact() <a class="header-anchor" href="#duk-compact" aria-label="Permalink to &quot;duk_compact()&quot;">​</a></h2><p>1.0.0 property object memory</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_compact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> obj_idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>(バリュースタックに影響なし。)</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>オブジェクトの内部メモリ割り当てをリサイズし、メモリ使用量を最小にします。obj_idx の値がオブジェクトでない場合は、何もしない。コンパクションは通常安全であるが、内部エラー（メモリ不足エラーなど）により失敗することがあります。コンパクションは、オブジェクトの「自身のプロパティ」にのみ影響し、継承されたプロパティには影響しません。</p><p>コンパクションは最終的な操作ではなく、オブジェクトのセマンティクスに影響を与えることはありません。オブジェクトに新しいプロパティを追加することは可能ですが（オブジェクトが拡張可能であることが前提）、オブジェクトのサイズ変更が発生します。既存のプロパティ値は、オブジェクトの内部メモリ割り当てに影響を与えることなく変更することができます（プロパティが書き込み可能であると仮定して）。オブジェクトは複数回コンパクト化できます。例えば、以前にコンパクト化したオブジェクトに新しいプロパティを追加する場合、プロパティ追加後のメモリフットプリントを最小にするために、オブジェクトを再度コンパクト化することができます。</p><p>オブジェクトをコンパクトにすると、オブジェクトごとにわずかな量のメモリを節約することができます。一般的には、(1) メモリフットプリントが非常に重要な場合、(2) オブジェクトに新しいプロパティが追加される可能性が低い場合、(3) オブジェクトが比較的長寿命の場合、そして (4) 大きな違いを生むほど多くのオブジェクトに圧縮を適用できる場合に有効です。</p><p>Object.seal()、Object.freeze()、Object.preventExtensions()が呼ばれた場合、オブジェクトは自動的に圧縮されます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           /* [ ... obj ] */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                          /* [ ... obj 42 ] */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_put_prop_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;meaningOfLife&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* [ ... obj ] */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_compact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                           /* [ ... obj ] */</span></span></code></pre></div>`,13),h=[n];function p(k,l,d,r,o,c){return i(),a("div",null,h)}const _=s(e,[["render",p]]);export{u as __pageData,_ as default};