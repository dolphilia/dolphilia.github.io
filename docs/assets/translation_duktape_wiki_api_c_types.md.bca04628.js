import{_ as s,o as t,c as n,Q as a}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"API Cタイプ","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/wiki/api_c_types.md","filePath":"translation/duktape/wiki/api_c_types.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/wiki/api_c_types.md"},p=a(`<h1 id="api-cタイプ" tabindex="-1">API Cタイプ <a class="header-anchor" href="#api-cタイプ" aria-label="Permalink to &quot;API Cタイプ&quot;">​</a></h1><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><p>Duktape APIは、エキゾチックなプラットフォームへの移植性を確保するために、duk_int_tのようなtypedefでラップされたCの型をほぼ独占的に使用しています。この記事では、いくつかの背景を説明し、型を要約し、呼び出し側のコードが移植性を最大化するためにどのように型を使用すべきかを説明します。</p><h2 id="duktape-apiを使用するコードのためのガイドライン" tabindex="-1">Duktape APIを使用するコードのためのガイドライン <a class="header-anchor" href="#duktape-apiを使用するコードのためのガイドライン" aria-label="Permalink to &quot;Duktape APIを使用するコードのためのガイドライン&quot;">​</a></h2><p>移植性を最大化するために、変数を宣言する際にはduk_idx_tやduk_ret_t（後述）のようなDuktape型を使ってください。あるいは、（intやlongのような）普通の型を使うこともできますが、コードの移植性は低くなり、警告を避けるためにキャストを使用する必要があるかもしれません。long は、プラットフォームによっては 16 ビット幅しかない int よりも優れたデフォルトの整数型であることに注意してください。</p><p>printf()フォーマットでは、Duktape型をワイドな整数型にキャストし、標準的なフォーマット指定子を使用して、型と指定子が常に一致するようにします。整数の場合、longとunsigned longは、C99/C++11を必要とせず、通常Duktapeの型指定で使用される全ての整数値を保持できるため、通常良い選択となります。例えば</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Result: </span><span style="color:#79B8FF;">%ld\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;">) </span><span style="color:#B392F0;">duk_get_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Result: </span><span style="color:#005CC5;">%ld\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">long</span><span style="color:#24292E;">) </span><span style="color:#6F42C1;">duk_get_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">));</span></span></code></pre></div><p>ANSI Cフォーマット文字列をサポートするDuktape APIコールは、プラットフォーム のvsnprintf()関数にフォーマット文字列とコール引数を渡すだけです。移植性を最大化するために、書式指定子は慎重に選択し、型が一致するように引数をキャストしてください。例えば</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_int_t</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_sprintf</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;My integer: </span><span style="color:#79B8FF;">%ld</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_int_t</span><span style="color:#24292E;"> val </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_sprintf</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;My integer: </span><span style="color:#005CC5;">%ld</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">long</span><span style="color:#24292E;">) </span><span style="color:#E36209;">val</span><span style="color:#24292E;">);</span></span></code></pre></div><p>いくつかの標準的な書式指定子。</p><table><thead><tr><th>Type</th><th>Specifier</th></tr></thead><tbody><tr><td>long</td><td>%ld</td></tr><tr><td>unsigned long</td><td>%lu</td></tr><tr><td>double</td><td>%f or %lf for printf(), %lf for scanf()</td></tr><tr><td>size_t</td><td>%zu in C99, C99以前のコンパイラには、様々なカスタム指定子があります。</td></tr><tr><td>intmax_t</td><td>%jd in C99</td></tr><tr><td>uintmax_t</td><td>%ju in C99</td></tr></tbody></table><p>printf()とscanf()で使用されるフォーマット指定子は異なる場合がありま す。scanf()では、標準の型と標準のフォーマット・コードを使用し、必要に応じて Duktapeの型にキャストしてください。この場合も、longとunsigned longはデフォルトの良い選択です。例えば</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">long</span><span style="color:#E1E4E8;"> val;</span></span>
<span class="line"><span style="color:#B392F0;">sscanf</span><span style="color:#E1E4E8;">(my_str, </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">%ld</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, (</span><span style="color:#79B8FF;">duk_int_t</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">long</span><span style="color:#24292E;"> val;</span></span>
<span class="line"><span style="color:#6F42C1;">sscanf</span><span style="color:#24292E;">(my_str, </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">%ld</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#E36209;">val</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, (</span><span style="color:#005CC5;">duk_int_t</span><span style="color:#24292E;">) </span><span style="color:#E36209;">val</span><span style="color:#24292E;">);</span></span></code></pre></div><p>16ビットより大きな定数にはL（またはUL）サフィックスをつけると移植性が高くなります。int型と同様、サフィックスをつけない整数型定数は16ビット幅しか保証されません。Lサフィックスをつけると、最低でも32ビット幅の定数が保証されます。例</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">1234567</span><span style="color:#F97583;">L</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">1234567</span><span style="color:#D73A49;">L</span><span style="color:#24292E;">);</span></span></code></pre></div><p>Duktape 1.xのAPIコールでファイルシステムのパスを引数に取る場合、単にそのパスをfopen()に渡します（Duktape 2.xではファイル入出力APIコールを一切提供していません）。エンコーディングを指定したり、広い文字セットをサポートする方法はありません。これを行うには、プラットフォーム固有のヘルパーを自分で実装する必要があります。</p><h2 id="duktape-apiで使用されているラップ型" tabindex="-1">Duktape APIで使用されているラップ型 <a class="header-anchor" href="#duktape-apiで使用されているラップ型" aria-label="Permalink to &quot;Duktape APIで使用されているラップ型&quot;">​</a></h2><p>ほとんどの場合、これらの型ラッパーについて心配する必要はありません。これは、型のビット数などに関する一般的な仮定が成り立たないエキゾチックな環境を想定しています。</p><p>APIドキュメントでは、Duktapeでラップされたtypedef名（duk_idx_tなど）が使用されています。コンパイラが使用する具象型は、プラットフォームとコンパイラに依存します。APIドキュメントでプロトタイプにカーソルを合わせると、C99/C++11の型が利用可能で、プラットフォームのintが少なくとも32ビット幅（最近ではほとんどそうなっています）の場合に、どの具象型が使われるかがツール・チップに表示されます。</p><p>次の表は、いくつかの中心的な型定義と、様々な環境（例）で選択される具象型とをまとめたものである。また、この表は、移植性のあるフォーマット/スキャンのために printf() と scanf() のキャストに使用すべきプレーンタイプを示唆しています。</p><table><thead><tr><th>Duktape type</th><th>C99/C++11 32-bit int</th><th>Legacy 32-bit int</th><th>Legacy 16-bit int</th><th>printf</th><th>scanf</th><th>Notes</th></tr></thead><tbody><tr><td>duk_int_t</td><td>int</td><td>int</td><td>long</td><td>%ld<br>long</td><td>%ld<br>long</td><td>オールラウンドな整数型、範囲は [DUK_INT_MIN, DUK_INT_MAX] です。</td></tr><tr><td>duk_uint_t</td><td>unsigned int</td><td>unsigned int</td><td>unsigned long</td><td>%lu<br>unsigned long</td><td>%lu<br>unsigned long</td><td>オールラウンドな符号なし整数型、範囲は [0, DUK_UINT_MAX] です。</td></tr><tr><td>duk_int32_t</td><td>int32_t</td><td>int</td><td>long</td><td>%ld<br>long</td><td>%ld<br>long</td><td>ToInt32() の強制適用のための正確な型</td></tr><tr><td>duk_uint32_t</td><td>uint32_t</td><td>unsigned int</td><td>unsigned long</td><td>%lu<br>unsigned long</td><td>%lu<br>unsigned long</td><td>ToUint32()強制のための正確な型</td></tr><tr><td>duk_uint16_t</td><td>uint16_t</td><td>unsigned short</td><td>unsigned short</td><td>%u<br>unsigned int</td><td>%u<br>unsigned int</td><td>ToUint16()強制のための正確な型</td></tr><tr><td>duk_idx_t</td><td>int</td><td>int</td><td>long</td><td>%ld<br>long</td><td>%ld<br>long</td><td>値スタックインデックス</td></tr><tr><td>duk_uarridx_t</td><td>unsigned int</td><td>unsigned int</td><td>unsigned long</td><td>%lu<br>unsigned long</td><td>%lu<br>unsigned long</td><td>ECMAScriptの配列インデックス</td></tr><tr><td>duk_codepoint_t</td><td>int</td><td>int</td><td>long</td><td>%ld<br>long</td><td>%ld<br>long</td><td>ユニコードコードポイント</td></tr><tr><td>duk_errcode_t</td><td>int</td><td>int</td><td>long</td><td>%ld<br>long</td><td>%ld<br>long</td><td>Duktape APIで使用される整数エラーコード（ユーザーコードの範囲は[1,16777215]）。</td></tr><tr><td>duk_bool_t</td><td>int</td><td>int</td><td>int</td><td>%d<br>int</td><td>%d<br>int</td><td>ブール値の返り値</td></tr><tr><td>duk_ret_t</td><td>int</td><td>int</td><td>int</td><td>%d<br>int</td><td>%d<br>int</td><td>Duktape/C関数の戻り値</td></tr><tr><td>duk_size_t</td><td>size_t</td><td>size_t</td><td>size_t</td><td>%lu<br>unsigned long</td><td>%lu<br>unsigned long</td><td>現在1:1マッピング、将来の使用のためにラップされる。範囲は [0, DUK_SIZE_MAX] です。C99 フォーマット指定子は %zu です。</td></tr><tr><td>duk_double_t</td><td>double</td><td>double</td><td>double</td><td>%f or %lf<br>double</td><td>%lf<br>double</td><td>現在は1:1マッピング、将来はカスタムソフトウェア浮動小数点ライブラリなどのためにラップされます。</td></tr></tbody></table><h2 id="c-c-の型付け問題の背景" tabindex="-1">C/C++の型付け問題の背景 <a class="header-anchor" href="#c-c-の型付け問題の背景" aria-label="Permalink to &quot;C/C++の型付け問題の背景&quot;">​</a></h2><p>このセクションでは、C言語の型付けに関する背景と根拠を説明します。</p><p>ポータブルな C/C++ のタイピングは、以下のような複雑な問題を含んでいます。</p><ul><li>C99、C++11、および古い環境に対するポータブルな型検出。</li><li>利用可能な型のビットサイズと範囲、最適な型の選択（例えば、最小または正確なビットサイズが保証された最も高速または最小の型）。</li><li>INT_MINのような型範囲用の定数。</li><li>printf()やscanf()のフォーマット文字列で型が使用される場合のフォーマット指定子。</li></ul><p>(Duktapeは、2の補数演算が可能なプラットフォームでのみ動作します)。</p><h3 id="ビットサイズが標準ではない-高速な32ビット型が保証されていない" tabindex="-1">ビットサイズが標準ではない（高速な32ビット型が保証されていない） <a class="header-anchor" href="#ビットサイズが標準ではない-高速な32ビット型が保証されていない" aria-label="Permalink to &quot;ビットサイズが標準ではない（高速な32ビット型が保証されていない）&quot;">​</a></h3><p>intのような一般的な型のビットサイズは、実装によって異なる。C99/C++11では、int32_t（正確な符号付き32ビット型）やint_fast32_t（少なくとも符号付き32ビット範囲を持つ高速整数型）といった標準的な整数の型定義が提供されています。これらの型定義は古いコンパイラでは利用できないので，プラットフォームに依存した型検出が必要です．</p><p>Duktapeは、アーキテクチャにとって便利で、なおかつ32ビット幅が保証された 整数型を必要としています。このような型は、配列のインデックスやUnicodeポイントなどを表現するのに必要です。しかし、そのような標準的な型はなく、少なくとも以下のようなバリエーションが見受けられます。</p><ul><li>16 ビット int と 32 ビット long</li><li>32ビットintと32ビットlong</li><li>32ビットintと64ビットlong（64ビットlongはプロセッサにとって非効率的です</li><li>64ビットintとlong</li></ul><p>見ての通り、全てのケースにおいてCの組み込み型は適切ではないので、型検出が必要です。Duktapeはこれらの目的のためにduk_int_t型（CPUに都合の良い、少なくとも32ビット幅）を検出し、定義しています。通常、Duktapeがint型が32ビット幅以上であることを確実に検出できる場合、それはint型にマッピングされます。そうでない場合、C99型が利用可能であればint_fast32_tが使われます。C99型が利用できない場合、Duktapeはプラットフォーム特有の検出を行い、適切な型を決定します。duk_uint_t は同じですが、符号なしです。API の他のほとんどの型（duk_idx_t など）は duk_(u)int_t にマップされていますが、これは将来必要に応じて変更される可能性があります。</p><p>他の特殊な型も必要です。例えば、N ビット幅の整数も、いくつかのケースで適切なオーバーフロー動作を保証するために必要です。</p><h3 id="format-specifiers" tabindex="-1">Format specifiers <a class="header-anchor" href="#format-specifiers" aria-label="Permalink to &quot;Format specifiers&quot;">​</a></h3><p>C/C++の型はprintf()やscanf()でよく使われ、それぞれの型は書式指定子を持つ。書式指定子のセットは部分的にしか標準化されていませんが(例えば、ビットサイズに関係なく、intには%dが使われます)、カスタムコードが使われることもあります。</p><p>型ラッパーを使用する場合、正しいフォーマットコードは型検知に依存する。例えば、duk_int_t は少なくとも 32 ビット幅を持つ便利な整数型にマップされます。あるプラットフォームでは、基礎となる型はint（書式指定子 %d）かもしれませんし、別のプラットフォームではlong（書式指定子 %ld）かもしれません。呼び出し側のコードは、プリプロセッサの定義から適切な書式を取得するか、固定書式指定子を使用して引数をキャストしない限り、このような値を文字列書式で安全に使用することができません。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_int_t</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 型と形式が一致するように値をキャストします。  適切なキャスト先を選択することは問題であり、呼び出し側は「安全策」をとらなければならない。  C99の型に頼らずとも、符号付き整数の場合は通常 &quot;long &quot;がよいでしょう。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;value is: </span><span style="color:#79B8FF;">%ld\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#F97583;">long</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* C99 型を想定した場合（移植性が制限される）、maxint_t はすべての符号付き整数を表すことが保証されており、標準的な書式指定子 &quot;%jd&quot; を持つ。  符号なし値に対しては、umaxint_t と &quot;%ju&quot; である。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;value is: </span><span style="color:#79B8FF;">%jd\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#79B8FF;">maxint_t</span><span style="color:#E1E4E8;">) </span><span style="color:#FFAB70;">val</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_int_t</span><span style="color:#24292E;"> val </span><span style="color:#D73A49;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* 型と形式が一致するように値をキャストします。  適切なキャスト先を選択することは問題であり、呼び出し側は「安全策」をとらなければならない。  C99の型に頼らずとも、符号付き整数の場合は通常 &quot;long &quot;がよいでしょう。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;value is: </span><span style="color:#005CC5;">%ld\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#D73A49;">long</span><span style="color:#24292E;">) </span><span style="color:#E36209;">val</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* C99 型を想定した場合（移植性が制限される）、maxint_t はすべての符号付き整数を表すことが保証されており、標準的な書式指定子 &quot;%jd&quot; を持つ。  符号なし値に対しては、umaxint_t と &quot;%ju&quot; である。</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;value is: </span><span style="color:#005CC5;">%jd\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, (</span><span style="color:#005CC5;">maxint_t</span><span style="color:#24292E;">) </span><span style="color:#E36209;">val</span><span style="color:#24292E;">);</span></span></code></pre></div><p>C99では、inttypes.hにC99型のプリプロセッサ定義があります。例えば、int_fast32_tのprintf()10進フォーマット指定子は、PRIdFAST32です。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int_fast32_t</span><span style="color:#E1E4E8;"> val </span><span style="color:#F97583;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;value is: &quot;</span><span style="color:#E1E4E8;"> PRIdFAST32 </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, val);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int_fast32_t</span><span style="color:#24292E;"> val </span><span style="color:#D73A49;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;value is: &quot;</span><span style="color:#24292E;"> PRIdFAST32 </span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, val);</span></span></code></pre></div><p>Duktapeは現在、フォーマット指定子定義のためのラッパーを提供していません。</p><p>printf()とscanf()の書式指定子は異なるかもしれません。その理由の1つは、printf()ではfloat引数が自動的にdoubleに昇格されますが、 scanf()では別個の型として扱われるからです。<a href="http://stackoverflow.com/questions/210590/why-does-scanf-need-lf-for-doubles-when-printf-is-okay-with-just-f" target="_blank" rel="noreferrer">http://stackoverflow.com/questions/210590/why-does-scanf-need-lf-for-doubles-when-printf-is-okay-with-just-f</a> を参照してください。</p><p>printf()におけるdoubleのための正しい書式指定子は%fです(float値は自動的にdoubleに昇格します)が、%lfも受け入れられます。Duktapeの例では、わかりやすくするために後者が使われています。<a href="http://stackoverflow.com/questions/4264127/correct-format-specifier-for-double-in-printf" target="_blank" rel="noreferrer">http://stackoverflow.com/questions/4264127/correct-format-specifier-for-double-in-printf</a> を参照してください。</p>`,41),o=[p];function e(d,r,c,i,u,y){return t(),n("div",null,o)}const h=s(l,[["render",e]]);export{_ as __pageData,h as default};