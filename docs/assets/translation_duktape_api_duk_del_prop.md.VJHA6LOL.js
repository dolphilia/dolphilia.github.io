import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_del_prop.md","filePath":"translation/duktape/api/duk_del_prop.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_del_prop.md"},p=t(`<h2 id="duk-del-prop" tabindex="-1">duk_del_prop() <a class="header-anchor" href="#duk-del-prop" aria-label="Permalink to &quot;duk_del_prop()&quot;">​</a></h2><p>1.0.0 property</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_bool_t</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_del_prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(duk_context </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_idx_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> obj_idx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | obj | ... | key | -&gt; | ... | obj | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>obj_idx にある値のプロパティ key を削除します。 key はスタックから削除されます。リターンコードとエラースローの動作。</p><p>property が存在し、かつ設定可能な場合（削除可能）、property を削除し、1 を返す。 property が存在し、設定可能でない場合、エラーを投げます。（strict mode semantics）。 property が存在しない場合、1 を返す（0 ではない）。 obj_idx の値がオブジェクト互換でない場合、エラーを投げます。。 obj_idx が無効な場合、エラーを投げます。。 プロパティの削除は、ECMAScript の式 res = delete obj[key] と等価です。正確な意味は、Property Accessors, The delete operator and [[Delete]] (P, Throw) を参照してください。戻り値とエラースローの動作は、ECMAScriptのdelete演算子の動作を反映しています。対象値とキーは共に強制されます。</p><p>ターゲット値は、自動的にオブジェクトに強制されます。しかし、このオブジェクトは一時的なものであり、そのプロパティを削除することはあまり有益ではありません。 key引数は内部的にToPropertyKey()強制を使って強制され、結果は文字列かSymbolになります。配列と数値インデックスには、明示的な文字列強制を避ける内部高速パスがあるので、該当する場合は数値キーを使用します。 ターゲットが deleteProperty トラップを実装する Proxy オブジェクトの場合、トラップが呼び出され、API 呼び出しの戻り値はトラップの戻り値に一致します。</p><p>このAPIコールは、ターゲットプロパティが存在しない場合、1を返します。これはあまり直感的ではありませんが、ECMAScript のセマンティクスに従っています: delete obj.nonexistent も true と評価されます。 もしキーが固定文字列であれば、1 つの API 呼び出しを回避して、 duk_del_prop_string() 変数を使用することができます。同様に、もしキーが配列のインデックスであれば、 duk_del_prop_index() 変数を使うことができます。</p><p>プロパティアクセスのベースとなる値は通常オブジェクトですが、技術的には任意の値でありえます。普通の文字列やバッファの値には仮想的なインデックスプロパティがあり、例えば &quot;foo&quot;[2] にアクセスすることができます。また、ほとんどのプリミティブな値は何らかのプロトタイプオブジェクトを継承しているので、例えば (12345).toString(16) のようにメソッドを呼び出すことができます。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">duk_bool_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> rc;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myProperty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> duk_del_prop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete obj.myProperty -&gt; rc=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_del_prop_index duk_del_prop_string duk_del_prop_lstring duk_del_prop_literal duk_del_prop_heapptr</p>`,16),l=[p];function n(h,r,d,k,o,_){return a(),i("div",null,l)}const u=s(e,[["render",n]]);export{E as __pageData,u as default};