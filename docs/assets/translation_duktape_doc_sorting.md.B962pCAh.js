import{_ as o,c as e,o as r,a3 as t}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"ソート","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/sorting.md","filePath":"translation/duktape/doc/sorting.md","lastUpdated":1682143322000}'),a={name:"translation/duktape/doc/sorting.md"},i=t('<h1 id="ソート" tabindex="-1">ソート <a class="header-anchor" href="#ソート" aria-label="Permalink to &quot;ソート&quot;">​</a></h1><p>本ドキュメントは、実装に使用したソートアルゴリズムについてまとめたものである。</p><p>ソートアルゴリズムは以下のような場合に必要となる。</p><ul><li><p><code>Array.prototype.sort()</code> のために必要です。</p></li><li><p><code>JSON.stringify()</code> で、配列のインデックス付きキーをソートする場合。 replacer`` が指定されている場合</p></li></ul><p>以下をを参照してください。</p><ul><li><a href="http://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms" target="_blank" rel="noreferrer">http://en.wikipedia.org/wiki/Sorting_algorithm#Comparison_of_algorithms</a></li></ul><h2 id="array-prototype-sort" tabindex="-1">Array.prototype.sort() <a class="header-anchor" href="#array-prototype-sort" aria-label="Permalink to &quot;Array.prototype.sort()&quot;">​</a></h2><p>望ましい資質がある。</p><ul><li>コードフットプリントが小さい</li><li>制限付きC再帰</li><li>インプレースソート(大規模な一時領域確保が不要)</li><li>O(n log n)の平均性能(弱い)</li><li>O(n log n) ワーストケース性能 (強め)</li><li>安定性 (等しい比較要素を並べ替えない)</li></ul><p>C 言語の再帰は、小さな定数に対して再帰の深さが O(log n) である場合、実質的に境界が設定されます。 例えば、2^32個の要素と小さな定数の場合、再帰呼び出しは100回以下となり、ほとんどの環境では十分な性能となる。</p><p><code>Array.prototype.sort()</code> には、さらにいくつかの懸念事項があります。</p><ul><li>値の比較は比較的高価で、強制演算や比較関数の呼び出しを伴います。 値の比較には比較的コストがかかり、強制演算や比較関数の呼び出しが発生します。強制演算の結果がキャッシュされない限り、要素は通常複数回強制演算されます。</li><li>未定義<code>や存在しない配列要素は特別に扱われる必要があります．この特別な動作は </code>SortCompare()`` の指定アルゴリズムにカプセル化されています。</li><li>配列部分を持つオブジェクトの場合、要素の交換は安価です。</li><li>配列部分を持たないオブジェクトの場合、要素の交換は非常に高価です。 <code>[[Get]]</code>, <code>[[Put]]</code>, <code>[[Delete]]</code> の呼び出しが必要で、セッター/ゲッターを呼び出す可能性があります。</li></ul><p>現在使用されているアルゴリズムは、ランダムなピボット選択を伴うクイックソートです。クイックソートは平均ケースでは O(n log n) ですが、ワーストケースでは O(n^2) であり、安定したソートではありません。 再帰の深さは最悪の場合で O(n) です。 現在のところ、配列部分に対する高速なパスは存在しません。</p><p>ランダムピボットは、より複雑な（そして大きなコードフットプリント）ピボット選択アルゴリズムに頼ることなく、最悪の場合 O(n^2) の動作の可能性を最小化するために使用されます。 乱数生成器は暗号強度ではないので、最悪の場合 O(n^2) の動作を引き起こす悪意のある入力を細工することが可能です。</p><p>現在のソリューションはプレースホルダであり、ソートアルゴリズムを完全に変更する必要があるかもしれません。 O(log n)の再帰深度を得ることは重要である。なぜなら、それがなければ、不運な原因でソートが失敗してしまうからであり、いくつかの組み込み環境ではスタックの増加を制限することが重要である。O(n log n)の最悪の場合の挙動を得ることは良いことですが、重要ではありません。</p><h2 id="duk-enum-sort-array-indices" tabindex="-1">DUK_ENUM_SORT_ARRAY_INDICES <a class="header-anchor" href="#duk-enum-sort-array-indices" aria-label="Permalink to &quot;DUK_ENUM_SORT_ARRAY_INDICES&quot;">​</a></h2><p>このソートの必要性は <code>JSON.stringify()</code> において、 <code>replacer</code> 引数が Array である場合に発生します。 この場合、replacerは配列のインデックスの昇順で列挙されなければなりません。</p><ul><li>E5.1 セクション 15.12.3, 最初のアルゴリズム, ステップ 4.b.ii: <ul><li>replacerのプロパティのうち、配列インデックスのプロパティ名を持つ各値vについて。プロパティはその名前の配列インデックスの昇順で列挙される。</li></ul></li></ul><p>これは，疎な配列，つまり配列部分を持たない配列に対しても成り立つ必要があります．このような配列は、必ずしも配列インデックスのキーが正しい昇順になるとは限らないので、列挙のためにソートする必要があります。 列挙 API のフラグ <code>DUK_ENUM_SORT_ARRAY_INDICES</code> は、必要な動作を提供します。このソートの必要性から予想されるデータサイズは比較的小さく、要素はほとんど常に既に順番通りであることが予想されます。</p><p>現在使用されているアルゴリズムは挿入ソートであり、インプレースでうまく動作し、すでに（ほぼ）順番になっているケースを効率的に処理することができます。</p>',20),l=[i];function p(n,d,c,s,_,u){return r(),e("div",null,l)}const m=o(a,[["render",p]]);export{g as __pageData,m as default};