import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const E=JSON.parse('{"title":"変数","description":"","frontmatter":{},"headers":[],"relativePath":"translation/dart/language/syntax_basics/variables.md","filePath":"translation/dart/language/syntax_basics/variables.md","lastUpdated":1708596923000}'),n={name:"translation/dart/language/syntax_basics/variables.md"},l=t(`<h1 id="変数" tabindex="-1">変数 <a class="header-anchor" href="#変数" aria-label="Permalink to &quot;変数&quot;">​</a></h1><p>変数の作成と初期化の例です：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>変数は参照を格納する。<code>name</code>という変数には、&quot;Bob&quot;という値を持つ<code>String</code>オブジェクトへの参照が格納されている。</p><p><code>name</code>変数の型は<code>String</code>と推測されるが、型を指定することで変更できる。オブジェクトの型が1つに限定されない場合は、<code>Object</code>型（必要に応じて<code>dynamic</code>型）を指定する。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>もう一つの方法は、推論される型を明示的に宣言することである：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>このページでは、ローカル変数には型アノテーションではなく<code>var</code>を使うという<a href="./.html">スタイルガイドの推奨</a>に従っている。</p></div><h2 id="null-safety" tabindex="-1">Null safety <a class="header-anchor" href="#null-safety" aria-label="Permalink to &quot;Null safety&quot;">​</a></h2><p>Dart言語では、ヌルの安全性を確保している。</p><p>ヌル・セーフティは、<code>null</code>に設定された変数への意図しないアクセスによって発生するエラーを防ぎます。このエラーはヌル再参照エラーと呼ばれます。NULL参照解除エラーは、<code>null</code>と評価される式のプロパティにアクセスしたりメソッドを呼び出したりすると発生します。このルールの例外は、<code>toString()</code>や<code>hashCode</code>のように、<code>null</code>がプロパティやメソッドをサポートしている場合です。ヌル・セーフティでは、Dart コンパイラがコンパイル時にこれらの潜在的なエラーを検出します。</p><p>例えば、<code>int</code>型変数<code>i</code>の絶対値を求めたいとします。<code>i</code>が<code>null</code>の場合、<code>i.abs()</code>を呼び出すと<code>null</code>の再参照エラーが発生します。他の言語ではこれを試すと実行時エラーになる可能性がありますが、Dartのコンパイラはこのような動作を禁止しています。したがって、Dartアプリが実行時エラーを引き起こすことはありません。</p><p>Nullセーフティは、3つの重要な変更をもたらします：</p><ol><li>変数、パラメータ、その他の関連コンポーネントに型を指定するとき、その型が<code>null</code>を許すかどうかを制御することができます。 nullabilityを有効にするには、型宣言の最後に<code>?</code>を追加する。</li></ol><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Null可能な型。nullまたは文字列。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NULL不可の型。nullにはできないが、文字列にはできる。</span></span></code></pre></div><ol start="2"><li><p>変数を使用する前に初期化する必要があります。Nullable 変数のデフォルトは <code>null</code> なので、デフォルトで初期化されます。Dart は null値を持たない型に初期値を設定しません。初期値を設定するように強制されます。Dartでは、初期化されていない変数を観察することはできません。このため、受信者の型が <code>null</code> であっても、<code>null</code> が使用されるメソッドやプロパティをサポートしていない場合、プロパティにアクセスしたりメソッドを呼び出したりすることができません。</p></li><li><p>null可能な型を持つ式のプロパティにアクセスしたり、メソッドを呼び出したりすることはできません。同じ例外が、<code>hashCode</code>や<code>toString()</code>のように<code>null</code>がサポートするプロパティやメソッドにも適用されます。</p></li></ol><p>健全なヌル・セーフティは、潜在的な <strong>実行時エラー</strong> を <strong>編集時</strong> の解析エラーに変える。ヌル・セーフティは、ヌルでない変数にフラグを立てる：</p><ul><li>null以外の値で初期化されていない。</li><li><code>null</code>値を代入。</li></ul><p>このチェックにより、アプリをデプロイする前にこれらのエラーを修正することができる。</p><h2 id="デフォルト値" tabindex="-1">デフォルト値 <a class="header-anchor" href="#デフォルト値" aria-label="Permalink to &quot;デフォルト値&quot;">​</a></h2><p>null可能な型を持つ初期化されていない変数の初期値はnullです。数値型の変数も初期値は NULL です。Dart の他のすべてのものと同様、数値もオブジェクトだからです。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lineCount;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lineCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>本番コードは <code>assert()</code> 呼び出しを無視する。一方、開発中のコードでは、<code>assert(condition)</code> は条件が false の場合に例外をスローします。詳細は <a href="./.html">Assert</a>を参照ください。</p></div><p>ヌル・セーフティでは、ヌルでない変数の値は、使用する前に初期化しなければならない：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lineCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>ローカル変数は宣言された場所で初期化する必要はありませんが、使用する前に値を代入する必要があります。例えば、以下のコードは、<code>lineCount</code>が<code>print()</code>に渡されるまでにNULLでないことをDartが検出できるため、有効です：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lineCount;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (weLikeToCount) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lineCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> countLines</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lineCount </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lineCount);</span></span></code></pre></div><p>トップレベル変数とクラス変数は遅延初期化される。初期化コードは、その変数が最初に使われたときに実行される。</p><h2 id="late変数" tabindex="-1">late変数 <a class="header-anchor" href="#late変数" aria-label="Permalink to &quot;late変数&quot;">​</a></h2><p><code>late</code>修飾子には2つの使用例がある：</p><ul><li>宣言後に初期化されるNULLでない変数の宣言。</li><li>変数の初期化を怠る。</li></ul><p>多くの場合、Dartの制御フロー解析は、非NULL変数が使用される前に非NULL値に設定されたことを検出できますが、解析に失敗することもあります。よくあるケースは、トップレベル変数とインスタンス変数です：Dartはこれらの変数が設定されているかどうかを判断できないことが多いため、試行しません。</p><p>変数が使用される前に設定されていることは確かだが、Dartがそれを認めない場合は、その変数を<code>late</code>としてマークすることでエラーを修正できる：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">late</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> description;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  description </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Feijoada!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(description);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Notice</p><p><code>late</code>変数の初期化に失敗すると、その変数が使用されるときに実行時エラーが発生する。</p></div><p>変数を<code>late</code>とマークしておきながら宣言時に初期化すると、その変数が最初に使われるときにイニシャライザーが実行される。この遅延初期化は、いくつかの場合に便利である：</p><ul><li>変数が不要で、初期化にコストがかかる場合。</li><li>インスタンス変数を初期化していて、そのイニシャライザーがこの変数にアクセスする必要がある。</li></ul><p>次の例では、もし<code>temperature</code>変数が使われなければ、高価な<code>readThermometer()</code>関数が呼ばれることはありません：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// このプログラムでは、readThermometer()の呼び出しはこれだけである。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">late</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> temperature </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readThermometer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Lazily initialized.</span></span></code></pre></div><h2 id="final-と-const" tabindex="-1">final と const <a class="header-anchor" href="#final-と-const" aria-label="Permalink to &quot;final と const&quot;">​</a></h2><p>変数を変更するつもりがない場合は、varの代わりに、あるいは型に加えて、finalまたはconstを使う。final変数は一度しか設定できないが、const変数はコンパイル時の定数である。∂const変数はコンパイル時の定数です（const変数は暗黙的にfinalとなります）。</p><div class="info custom-block"><p class="custom-block-title">Note</p><p>インスタンス変数はfinalにできるが、constにはできない。</p></div><p>以下は、final変数を作成して設定する例である：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bob&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 型注釈なし</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nickname </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Bobby&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>final変数の値を変更することはできない：</p><div class="danger custom-block"><p class="custom-block-title">✗ static analysis: failuredart</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Alice&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// エラー：final変数は一度しか設定できない。</span></span></code></pre></div></div><p>コンパイル時に定数にしたい変数には const を使う。定数変数がクラス・レベルにある場合は、static const とします。変数を宣言する場所では、値を数値や文字列リテラル、const 変数、定数に対する算術演算の結果などのコンパイル時定数に設定します：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 圧力の単位（dynes/cm2）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> atm </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.01325</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 標準大気</span></span></code></pre></div><p>constキーワードは、定数変数を宣言するためだけのものではありません。定数値を作成するコンストラクタの宣言にも使用できます。どんな変数でも定数値を持つことができます。</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">final</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> baz </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// \`const []\` に相当する。</span></span></code></pre></div><p>上記のbazのように、const宣言の初期化式からconstを省略することができる。詳しくは、constを重複して使わないを参照してください。</p><p>finalでない、const でない変数の値を変更することができます：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Was const []</span></span></code></pre></div><p>const変数の値を変更することはできない：</p><div class="danger custom-block"><p class="custom-block-title">✗ static analysis: failuredart</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">baz </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// エラー：定数変数に値を代入できません。</span></span></code></pre></div></div><p>型チェックやキャスト（isやas）、コレクションif、スプレッド演算子（...や...？）を使用する定数を定義できます：</p><div class="language-dart vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ここで、i は int 値を持つ const オブジェクトである。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// タイプキャストを使う。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;int&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用はis、回収はif。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> set</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> List</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) ...list}; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...とスプレッド。</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">Note</p><p>finalオブジェクトは変更できませんが、そのフィールドは変更できます。これに対して、constオブジェクトとそのフィールドは変更できません。</p></div><p>constを使って定数値を作成する方法の詳細については、リスト、マップ、およびクラスを参照してください。</p>`,60),p=[l];function h(e,k,d,r,c,o){return a(),i("div",null,p)}const y=s(n,[["render",h]]);export{E as __pageData,y as default};