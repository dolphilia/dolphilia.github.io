import{_ as t,c as d,o as e,a3 as r}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"ポストES5の特徴","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/wiki/post-es5_features.md","filePath":"translation/duktape/wiki/post-es5_features.md","lastUpdated":1676126774000}'),o={name:"translation/duktape/wiki/post-es5_features.md"},a=r('<h1 id="ポストes5の特徴" tabindex="-1">ポストES5の特徴 <a class="header-anchor" href="#ポストes5の特徴" aria-label="Permalink to &quot;ポストES5の特徴&quot;">​</a></h1><p>ES2015（ES6）、ES2016（ES7）以降に実装された機能をまとめています。Node.js Buffer や WHATWG Encoding API などのカスタム機能についても記載しています。</p><p>多くの機能は、DUK_USE_ES6_PROXYやDUK_USE_BUFFEROBJECT_SUPPORTなどの設定オプションで無効化することが可能です。</p><p>Duktapeの状態もkangax/compat-tableで新しいリリースのために更新されています。</p><h2 id="概要" tabindex="-1">概要 <a class="header-anchor" href="#概要" aria-label="Permalink to &quot;概要&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Feature</th><th>Specification</th><th>Status</th><th>Duktape version</th><th>Notes</th></tr></thead><tbody><tr><td>Duktape object</td><td>Duktape</td><td>n/a</td><td>1.0.0</td><td>値の検査やガベージコレクションの強制実行など、Duktape特有の操作を提供するオブジェクトです。</td></tr><tr><td>Proxy object</td><td>ES2015</td><td>Partial</td><td>1.0.0</td><td>部分的にサポート、以下の別のProxyトラップサポート表を参照。</td></tr><tr><td>Object.setPrototypeOf()</td><td>ES2015</td><td>Full</td><td>1.0.0</td><td>Object.setPrototypeOf() は、ECMAScript E5 ではサポートされていないオブジェクトの内部プロトタイプを設定することができます。</td></tr><tr><td>Object.prototype.proto</td><td>ES2015 Annex B</td><td>Partial</td><td>1.0.0</td><td>Object.prototype.proto は、Object.getPrototypeOf() や Object.setPrototypeOf() と同じ機能を提供するセッター/ゲッターですが、これまで標準外の protoプロパティに依存していた既存のコードベースと互換性を持っています。このプロパティは、&quot;ベア・オブジェクト &quot;では使用できません。Duktapeは、オブジェクト・イニシャライザーでのprotoプロパティ名をサポートしていません。</td></tr><tr><td>Additional RegExp syntax</td><td>ES2015 Annex B</td><td>Partial</td><td>1.0.0</td><td>ES5 以外の RegExp フォーム（ES2015 Annex B に記載されているものがほとんど）のサポートは、リリースごとに段階的に追加されています。</td></tr><tr><td>ArrayBuffer</td><td>ES2015</td><td>Partial</td><td>1.3.0</td><td>Duktapeのオリジナル実装は、Khronos仕様に基づくものです。Detached ArrayBufferはまだサポートされていません。</td></tr><tr><td>Typed arrays</td><td>ES2015</td><td>Partial</td><td>1.3.0</td><td>Duktapeのオリジナル実装は、Khronosの仕様に基づいたものでした。</td></tr><tr><td>DataView</td><td>ES2015</td><td>Partial</td><td>1.3.0</td><td>Duktapeのオリジナル実装は、Khronosの仕様に基づいたものでした。</td></tr><tr><td>Node.js Buffer</td><td>Node.js v6.9.1</td><td>Partial</td><td>1.3.0</td><td>当初の実装はNode.js Buffer v0.12.1、現在の目標はNode.js v6.9.1 ですが、まだすべてのメソッドが実装されているわけではありません。Duktapeは最新のNode.js Buffer APIを追跡しています。</td></tr><tr><td>const declaration</td><td>ES2015</td><td>Partial</td><td>1.4.0</td><td>サポートは部分的で、constはイニシャライザが必要なことを除けば、ほとんどvarの別名に過ぎません：const変数は書き込み可能で、ブロックスコープではなく、関数スコープです。</td></tr><tr><td>Computed property names</td><td>ES2015</td><td>Partial</td><td>2.0.0</td><td>オブジェクトリテラル内の計算されたメソッド名はまだサポートされていません。例{ [1+2]: &#39;three&#39; }.</td></tr><tr><td>Octal number literal</td><td>ES2015</td><td>Full</td><td>2.0.0</td><td>例：0o755。0755のようなレガシー8進数リテラルもサポートされています。</td></tr><tr><td>Binary number literal</td><td>ES2015</td><td>Full</td><td>2.0.0</td><td>例：0b10001010。</td></tr><tr><td>Unicode escape</td><td>ES2015</td><td>Partial</td><td>2.0.0</td><td>エスケープ構文は、文字列リテラルと識別子名の両方で使用できます。RegExpではまだサポートされていません（未実装の/uフラグのサポートが必要です）。BMP以外のエスケープはサロゲートペアにデコードされます。例&quot;山のような&quot;.</td></tr><tr><td>Reflect object</td><td>ES2015</td><td>Partial</td><td>2.0.0</td><td>いくつかの基本的な ECMAScript プリミティブへのアクセスを、関数呼び出しとして提供します。例えば、Reflect.construct() は new のように振る舞います。現在のところ、いくつかの制限があります。たとえば、Reflect.construct() では明示的な newTarget はサポートされていません。</td></tr><tr><td>ES2015 enumeration order</td><td>ES2015</td><td>Full</td><td>2.0.0</td><td>Object.getOwnPropertyNames()は、ES2015 [[OwnPropertyKeys]] の列挙順序に従います： (1) 配列インデックスが昇順、 (2) その他のプロパティが挿入順、 (3) シンボルが挿入順です。ES2015やES2016では必須ではありませんが、Duktapeではfor-in、Object.keys()、duk_enum()全般でこれと同じ順序を踏襲しています。V8と同様、このルールは「継承レベル」ごとに順番に適用されます。つまり、継承された非重複プロパティは常に子プロパティの後に続きます。</td></tr><tr><td>Exponentiation operator</td><td>ES2016</td><td>Full</td><td>2.0.0</td><td>例：x ** y, x **= y.</td></tr><tr><td>RegExp getter lenience</td><td>ES2017 draft</td><td>n/a</td><td>2.0.0</td><td>RegExp.prototype.flags およびその他のゲッターは、TypeError をスローせずに RegExp.prototype オブジェクトをこのバインディングとして受け入れます。RegExp.prototype の問題を参照してください。</td></tr><tr><td>Symbol object</td><td>ES2015</td><td>Full</td><td>2.0.0</td><td>Duktape 2.0.0では、シンボルバインディングはデフォルトで無効化されているため、DUK_USE_SYMBOL_BUILTINを使って有効にします。</td></tr><tr><td>Encoding API</td><td>WHATWG</td><td>Full</td><td>2.0.0</td><td>TextEncoder()、TextDecoder()で、UTF-8エンコーディングに対応しています。</td></tr><tr><td>&quot;global&quot; binding</td><td>TC39 proposal</td><td>Full</td><td>2.1.0</td><td>実験的に、グローバルオブジェクトのバインディングを &quot;global&quot; と名付けました。デフォルトでは無効になっており、DUK_USE_GLOBAL_BINDING を使用して有効にします。</td></tr><tr><td>HTML comment syntax</td><td>ES2015</td><td>Full</td><td>2.1.0</td><td>ES2015 Annex B.1.3 で規定されている &lt;!-- と --&gt; を認識した HTML コメント構文。</td></tr><tr><td>new.target</td><td>ES2015</td><td>Full</td><td>2.2.0</td><td>new.target 構文。</td></tr><tr><td>defineGetter, etc</td><td>ES2017</td><td>Full</td><td>2.2.0</td><td>付録B Object.prototype.{__defineGetter,defineSetter} と Object.prototype.{lookupGetter,lookupSetter} は、レガシーコードでも多く使用されています。</td></tr><tr><td>performance</td><td>W3C</td><td>Partial</td><td>2.2.0</td><td>W3C High Resolution Time API performance.now()でサブミリ秒の分解能を実現（プラットフォームが提供する場合）。</td></tr><tr><td>ES2015 Number built-in</td><td>ES2015</td><td>Full</td><td>2.3.0</td><td>ES2015 からの新しい Number 組み込みプロパティ（例：EPSILON、MAX_SAFE_INTEGER、parseInt()、parseFloat()）。</td></tr><tr><td>ES2016 Number built-in</td><td>ES2016</td><td>Full</td><td>2.3.0</td><td>ES2016からの新しいNumber組み込みプロパティは、MIN_SAFE_INTEGERのみです。</td></tr><tr><td>@@hasInstance</td><td>ES2015</td><td>Full</td><td>2.3.0</td><td>instanceofでよく知られたシンボルをサポートするようになった。</td></tr><tr><td>@@toStringTag</td><td>ES2015</td><td>Full</td><td>2.3.0</td><td>Object.prototype.toString() において、@@toStringTag がよく知られたシンボルをサポートする。</td></tr><tr><td>@@toPrimitive</td><td>ES2015</td><td>Full</td><td>2.3.0</td><td>ToPrimitive()で既知のシンボルをサポートしました。</td></tr><tr><td>@@isConcatSpreadable</td><td>ES2015</td><td>Full</td><td>2.3.0</td><td>Array.prototype.concat で、@@isConcatSpreadable がよく知られたシンボルとしてサポートされている。</td></tr></tbody></table><h2 id="プロキシハンドラ-トラップ" tabindex="-1">プロキシハンドラ(トラップ) <a class="header-anchor" href="#プロキシハンドラ-トラップ" aria-label="Permalink to &quot;プロキシハンドラ(トラップ)&quot;">​</a></h2><p>ECMAScript ES2015のProxyオブジェクトは、基盤となるプレーンなオブジェクトにアクセスするためのプロパティの仮想化ときめ細かいアクセス制御を可能にします。Duktapeは、ES2015のProxyオブジェクトの厳密なサブセットを実装しています。トラップの実装状況</p><table tabindex="0"><thead><tr><th>Trap</th><th>Implemented in version</th><th>Notes</th></tr></thead><tbody><tr><td>getPrototypeOf</td><td>no</td><td></td></tr><tr><td>setPrototypeOf</td><td>no</td><td></td></tr><tr><td>isExtensible</td><td>no</td><td></td></tr><tr><td>preventExtension</td><td>no</td><td></td></tr><tr><td>getOwnPropertyDescriptor</td><td>no</td><td></td></tr><tr><td>defineProperty</td><td>no</td><td></td></tr><tr><td>has</td><td>1.0.0</td><td>Object.hasOwnProperty()は現時点ではトラップを起動せず、objのkeyが起動します。</td></tr><tr><td>get</td><td>1.0.0</td><td></td></tr><tr><td>set</td><td>1.0.0</td><td></td></tr><tr><td>deleteProperty</td><td>1.0.0</td><td></td></tr><tr><td>enumerate</td><td>removed</td><td>ES2016で &quot;enumerate &quot;トラップが削除され、for-inでは &quot;ownKeys &quot;トラップが使用されています。Duktape 1.xではfor-inの &quot;enumerate &quot;トラップに対応しています。</td></tr><tr><td>ownKeys</td><td>1.0.0</td><td>一部のトラップ結果検証（設定不可能なプロパティ、拡張不可能なターゲット）は未実装です。</td></tr><tr><td>apply</td><td>2.2.0</td><td></td></tr><tr><td>construct</td><td>2.2.0</td><td>new.targetと.prototypeの検索にいくつかの制限があります。</td></tr></tbody></table><p>Duktape特有の動作。</p><ul><li>例えば、proxy[123]は、文字列(&quot;123&quot;)ではなく、数字(123)のキー引数で .get トラップを実行します。標準的な動作は、インデックス付きオブジェクトを仮想化するときにはるかに遅くなるキーを文字列で強制することです。今後の課題は、この挙動を適合させることですが、Proxyを構成する何らかの方法を提供し、時に好まれる非強制的な挙動を提供することです。</li></ul><p>制限事項は以下の通りです。</p><ul><li>ES2015 のトラップの約半分しか実装されていない。このため、Proxy オブジェクトに対して Object.defineProperty() を呼び出すと、奇妙な動作が発生します。</li><li>例えば、[[OwnPropertyKeys]] () で説明されている、設定できないターゲットプロパティや拡張できないターゲットオブジェクトに対する ownKeys トラップ結果検証ステップはまだ実装されていません。</li><li>Proxyを継承したオブジェクトからプロパティを読み込む際にget trapが発動しないなど、Proxyオブジェクトの継承が必ずしも正しく動作しない。</li><li>ES2015 の Proxy revocation 機能には対応していません。</li><li>new Proxy()で指定されるtargetやhandlerオブジェクトは、Proxyオブジェクトそのものであってはならない。ES2015ではこのような制限はありませんが、Duktapeでは内部実装を簡略化するために、とりあえずこの制限を設けています。</li></ul>',13),n=[a];function l(p,i,u,s,E,c){return e(),d("div",null,n)}const P=t(o,[["render",l]]);export{y as __pageData,P as default};