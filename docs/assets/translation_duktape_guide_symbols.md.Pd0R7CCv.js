import{_ as s,o as a,c as i,R as t}from"./chunks/framework.c2IVng1e.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/symbols.md","filePath":"translation/duktape/guide/symbols.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/guide/symbols.md"},n=t(`<h2 id="symbols" tabindex="-1">シンボル <a class="header-anchor" href="#symbols" aria-label="Permalink to &quot;シンボル {#symbols}&quot;">​</a></h2><p>DuktapeはES2015 Symbolをサポートしており、Duktape 1.xの内部文字列に似たDuktape特有の隠しSymbolも提供しています。隠しSymbolは、通常のECMAScriptコードから隠されるという点でES2015 Symbolと異なります：ECMAScriptコードから作成できず、列挙やJSON-シリアライズもできませんし、オブジェクト・getOwnPropertyName（）からも返らず、オブジェクトgetOwnPropertySymbols（）からも返されません。非表示のSymbolキーを持つプロパティは、非表示のSymbolへの参照を保持している場合にのみ、直接プロパティの読み取り/書き込みでアクセスすることができます。</p><p>現在使用されているフォーマットについては、symbol.rstを参照してください。アプリケーションの隠しシンボルは、0xFFバイトのプレフィックスで始まり、その後にアプリケーションで選択された任意の文字列が続きます。Cのコードがduk_push_string()などで文字列をプッシュし、そのバイト列が内部のシンボル・フォーマットにマッチした場合、その文字列値は自動的にシンボルとして解釈されます。</p><p>Duktapeでは、オブジェクトのファイナライザーの参照を保存するなど、様々な実装固有の目的のために隠れたSymbolも使用します。Duktape 2.2以降、Duktapeの隠しSymbolには異なるバイト・プレフィックスが使用されており、0xFFプレフィックスは完全にアプリケーション用に予約されています。アプリケーション・コードは、Duktapeの隠されたシンボルのキー付きプロパティにアクセスしようとしないでください： そのようなプロパティのセットは、バージョン間で任意に変更される可能性があります。</p><blockquote><p>内部の UTF-8 バイト・シーケンスは、ECMAScript コードから有効な ECMAScript 文字列として作成することができないことに注意してください。例えば、隠されたSymbolは、ff 78 79 7aというバイトシーケンスで表現されますが、ECMAScriptの文字列&quot; \\u00ffxyz&quot; は、メモリ内でc3 bf 78 79 7aというCESU-8バイトとして表現されます。</p></blockquote><p>Symbolの作成はCコードから簡単に行えます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* プロパティの読み取り/書き込みに使用できる、</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 隠されたシンボルを作成します。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * このシンボルは他の文字列やシンボルと同様に、</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * ECMAScript コードに渡すことができます。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DUK_HIDDEN_SYMBOL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;mySymbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p>Duktape 2.2以前は、DUK_HIDDEN_SYMBOL()や他のシンボル・リテラル・マクロは使用できず、内部表現を直接使用することになります。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Terminating a string literal after a hex escape is safest to avoid some</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * ambiguous cases like &quot;\\xffab&quot;.  For more discussion, see:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * https://github.com/svaarala/duktape/blob/master/misc/c_hex_esc.c</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">duk_push_string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\xff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mySymbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>隠しシンボルは、ECMAScript コードからデフォルトのビルトインだけを使って作成することはできません。標準的な ES2015 Symbol は Symbol.for(&#39;foo&#39;) のように Symbol 組み込みで作成することができます。サンドボックス化する場合、アプリケーションの C バインディングが、入力バッファをエンコードせずにそのまま文字列に変換するなどして、隠れた Symbol を作成するメカニズムを誤って提供しないようにしてください。</p><p>現在、Hidden Symbolをキーとするプロパティに対する特別なアクセス制御はありません。ユーザーコードがSymbolにアクセスできれば、プロパティ値の読み書きが可能です。これは将来のメジャーバージョンで変更される可能性が高く、ECMAScript コードは、隠された Symbol 値への参照を保持している場合でも、隠された Symbol キーを持つプロパティにアクセスできないようにします。</p>`,11),e=[n];function l(o,h,k,r,c,d){return a(),i("div",null,e)}const m=s(p,[["render",l]]);export{u as __pageData,m as default};