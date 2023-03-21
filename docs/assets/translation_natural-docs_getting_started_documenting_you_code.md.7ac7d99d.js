import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.44f152d8.js";const d=JSON.parse('{"title":"Natural Docsによるコードの文書化（日本語訳）","description":"","frontmatter":{},"headers":[],"relativePath":"translation/natural-docs/getting_started/documenting_you_code.md","lastUpdated":1676126774000}'),p={name:"translation/natural-docs/getting_started/documenting_you_code.md"},e=l(`<h1 id="natural-docsによるコードの文書化-日本語訳" tabindex="-1">Natural Docsによるコードの文書化（日本語訳） <a class="header-anchor" href="#natural-docsによるコードの文書化-日本語訳" aria-label="Permalink to &quot;Natural Docsによるコードの文書化（日本語訳）&quot;">​</a></h1><p><a href="https://www.naturaldocs.org/getting_started/documenting_your_code/" target="_blank" rel="noreferrer">原文</a></p><h2 id="基本" tabindex="-1">基本 <a class="header-anchor" href="#基本" aria-label="Permalink to &quot;基本&quot;">​</a></h2><p>いよいよコードの文書化を開始するときが来ました。文書化を非常に簡単かつ苦痛にならないようにするため、すぐに飛び込んでみましょう。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Function: Multiply</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Multiplies two integers and returns the result.</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Multiply</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> x </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> y</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>必要なのはこれだけです。Natural Docsを実行するとこのような出力が表示されます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Multiply</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int Multiply (	</span></span>
<span class="line"><span style="color:#A6ACCD;">int 	x,</span></span>
<span class="line"><span style="color:#A6ACCD;">int 	y</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Multiplies two integers and returns the result.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>各コメントは簡単なものから詳細なものまで自由に作ることができます。以下は、より凝ったものです。明らかにやりすぎですが、あくまでデモンストレーションです。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Function: Multiply</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Multiplies two integers.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Parameters:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      x - The first integer.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      y - The second integer.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Returns:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      The two integers multiplied together.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   See Also:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">      Divide</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Multiply</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> x </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> y</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Multiply</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int Multiply (	</span></span>
<span class="line"><span style="color:#A6ACCD;">int 	x,</span></span>
<span class="line"><span style="color:#A6ACCD;">int 	y</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Multiplies two integers.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Parameters</span></span>
<span class="line"><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">The first integer.</span></span>
<span class="line"><span style="color:#A6ACCD;">y</span></span>
<span class="line"><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">The second integer.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Returns</span></span>
<span class="line"><span style="color:#A6ACCD;">The two integers multiplied together.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">See Also</span></span>
<span class="line"><span style="color:#A6ACCD;">Divide</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>それでもあまり怖くはないでしょう？ コメントも出力と同じように読みやすいものです。タグが散乱しているわけでもなく、構造も非常に自然です。見ただけでわかると思いますが、とりあえず1つずつ見ていきましょう。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Function: Multiply</span></span>
<span class="line"></span></code></pre></div><p>コメントはどれも「キーワード: タイトル」という形式の行から始まることになります。キーワードはたくさんありますが、それらはあなたが期待する通りのものです。関数、クラス、変数など。また同義語や略語も多く、Functionの代わりにFunc・Procedure・Methodなどを使うこともできます。このように何も覚えなくても記述しているものをそのまま使えるように設計されています。キーワードリストに目を通すことができますが、あまり頻繁に参照する必要はないでしょう。</p><p>この行のもう一つの部分はタイトルです。これはあなたが文書化しているもの、この場合は関数名Multiplyと一致させる必要があります。Natural Docsはプログラミング言語の大文字と小文字を区別しないので、正確に一致させないと出力にプロトタイプ（関数宣言を示す小さな灰色のボックス）が表示されない可能性があることに注意してください。タイトルにパラメータを含める必要はありません。 むしろ、そうしないほうがよいでしょう。</p><p>コメント記号は /** などの特別なものを使う必要はありません。重要なのは「キーワード: タイトル」の行で始まることだけです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Parameters:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Returns:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">See Also:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>また、行を飛ばしてコロンでテキストを終了させることによっても見出しを定義することができます。他のドキュメントシステムに慣れていると選べる見出しはほんの一握りだと思うかもしれませんが、この方法でフォーマットされたテキストはすべて見出しになります。もし、Dependenciesという見出しを付けたいのであれば、そのまま追加してください。ただタイトルケース（本のタイトルのようにほとんどの単語を大文字にすること）を使用する必要があることに注意してください。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">x - The first integer.</span></span>
<span class="line"><span style="color:#A6ACCD;">y - The second integer.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>これはいわゆる定義リストと呼ばれるものです。行を飛ばすまで止まらないので複数の行を使って定義を終わらせることができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">x - The first integer.</span></span>
<span class="line"><span style="color:#A6ACCD;">y - The second integer with a long description.</span></span>
<span class="line"><span style="color:#A6ACCD;">    This is still part of the description.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a new paragraph because we skipped a line</span></span>
<span class="line"><span style="color:#A6ACCD;">and didn&#39;t indent.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2行目は1行目と同じようにずっとインデントする必要はありませんが、少なくともスペース2つ分インデントする必要があります。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;Divide&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>これがNatural Docsでのリンクの仕方で角括弧を使います。これについては後で詳しく説明しますが、今はクールなものをお見せします。下の出力でマウスをその上に持っていってください。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Divide</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>生成されたドキュメントのいたるところでこのようなことが書かれていますね。</p><h2 id="クラスと範囲" tabindex="-1">クラスと範囲 <a class="header-anchor" href="#クラスと範囲" aria-label="Permalink to &quot;クラスと範囲&quot;">​</a></h2><p>しかし、有用性に疑問のあるクラス全体がある場合はどうでしょうか。各要素のすぐ上にNatural Docsのコメントを付けて個々の関数をドキュメント化したのと同じように、クラスとそのメンバーをドキュメント化することができます。この例では管理しやすいように短い説明文に戻します。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Class: Counter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// A class that manages an incrementing counter.</span></span>
<span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Counter</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Constructor: Counter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Initializes the object.</span></span>
<span class="line"><span style="color:#F07178;">   public </span><span style="color:#82AAFF;">Counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  value </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Function: Increment</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Adds one to the counter.</span></span>
<span class="line"><span style="color:#F07178;">   public </span><span style="color:#C792EA;">void</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Increment</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  value</span><span style="color:#89DDFF;">++;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Property: Value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Returns the value of the counter.</span></span>
<span class="line"><span style="color:#F07178;">   public </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> Value</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      get</span></span>
<span class="line"><span style="color:#F07178;">         </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> value</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // Variable: value</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   // The value of the counter.</span></span>
<span class="line"><span style="color:#F07178;">   private </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>すべて同じでClass、Property、VariableをFunctionキーワードに置き換えただけです。Constructorも使いましたが、これもFunctionと同じように簡単に使うことができます。どちらも同じものを表すキーワードなので問題ありません。</p><h3 id="対象範囲" tabindex="-1">対象範囲 <a class="header-anchor" href="#対象範囲" aria-label="Permalink to &quot;対象範囲&quot;">​</a></h3><p>ソースコード自体と同様にNatural Docsのコメントにはスコープがあります。ValueとIncrementはコードにあるようにクラスCounterの一部と見なされます。なぜこれが重要なのでしょうか。リンクです。あるコメントから別のコメントへのリンクは、ある関数が別の関数を呼び出す方法と同様の規則があります。ValueはIncrementと同じクラスなので、そのコメントは単に<code>&lt;Increment&gt;</code>でリンクすることができます。しかし、別のクラスからIncrementにリンクする場合は、代わりに<code>&lt;Counter.Increment&gt;</code>が必要です。実際には、3つの最も一般的なクラス/メンバの記法を使用できます。<code>&lt;Counter.Increment&gt;</code>、<code>&lt;Counter::Increment&gt;</code>、そして<code>&lt;Counter-&gt;Increment&gt;</code>です。</p><p>プログラミング言語が完全な言語サポートを持っている場合、スコープはコードによって決定され、自動的に適用されます。しかし、基本的な言語サポートしかない場合は、以下のルールに従います。</p><ul><li>Class のコメント（または Starts Scope と書かれたもの）の後に表示されるコメントは、そのクラスの一部となります。</li><li>Section コメント（または Ends Scope と書かれたもの）の後に表示されるコメントはすべて、再びグローバルになります。</li><li>Fileコメント（またはAlways Globalと書かれたもの）は、何があってもグローバルであり、他のコメントには影響しません。</li></ul><p>これを知らなくても同じことを書いていて、そのまま通用した可能性があります。通常は全く考える必要はないでしょう。しかし、何かがあなたの期待通りに動作しない場合に備えて、これらのルールを意識しておくのは良いことです。<a href="https://www.naturaldocs.org/reference/scope" target="_blank" rel="noreferrer">リファレンスの全文</a>はもっと詳しく書かれています。</p><p>あなたは今、ドキュメントを書き始めるのに十分な知識を持っています。もっと学べることはありますが、それらは付加的なものです。</p><h2 id="その他の書式" tabindex="-1">その他の書式 <a class="header-anchor" href="#その他の書式" aria-label="Permalink to &quot;その他の書式&quot;">​</a></h2><h3 id="段落、太字、下線" tabindex="-1">段落、太字、下線 <a class="header-anchor" href="#段落、太字、下線" aria-label="Permalink to &quot;段落、太字、下線&quot;">​</a></h3><p>これらの構文は非常に簡単です。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*Bold text*</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">_Underlined text_</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Paragraphs are broken by skipping lines.  So the two</span></span>
<span class="line"><span style="color:#A6ACCD;">lines above each have their own paragraph, but these</span></span>
<span class="line"><span style="color:#A6ACCD;">three lines are all part of the same one.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Bold text</span></span>
<span class="line"><span style="color:#A6ACCD;">Underlined text</span></span>
<span class="line"><span style="color:#A6ACCD;">Paragraphs are broken by skipping lines.  So the two lines above each have their own paragraph, but these three lines are all part of the same one.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>複数の単語に下線を引く場合、それぞれのスペースにアンダースコアを使うこともできますし、上記のように端につけることもできます。どちらの方法も有効です。</p><h3 id="箇条書きリスト" tabindex="-1">箇条書きリスト <a class="header-anchor" href="#箇条書きリスト" aria-label="Permalink to &quot;箇条書きリスト&quot;">​</a></h3><p>行頭にダッシュやアスタリスクを付けると、箇条書きにすることができます。内容は複数行にまたがることがあるので、終わらせるには1行飛ばす必要があります。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">- Bullet one.</span></span>
<span class="line"><span style="color:#A6ACCD;">- Bullet two.</span></span>
<span class="line"><span style="color:#A6ACCD;">  Bullet two continued.</span></span>
<span class="line"><span style="color:#A6ACCD;">- Bullet three.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Some text after the bullet list.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Bullet one.</span></span>
<span class="line"><span style="color:#A6ACCD;">Bullet two.  Bullet two continued.</span></span>
<span class="line"><span style="color:#A6ACCD;">Bullet three.</span></span>
<span class="line"><span style="color:#A6ACCD;">Some text after the bullet list.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>各レベルが前のレベルより少なくとも2スペース以上インデントされていれば、複数のレベルを持つことができます。また、1つの箇条書きの中に複数の段落があっても、そこから少なくとも2つのスペースでインデントされていれば問題ありません。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">* Level one.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  * Level two, first paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;">    Level two, first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Level two, second paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      * Level three.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Level one.</span></span>
<span class="line"><span style="color:#A6ACCD;">Level two, first paragraph.  Level two, first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;">Level two, second paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;">Level three.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="定義リスト" tabindex="-1">定義リスト <a class="header-anchor" href="#定義リスト" aria-label="Permalink to &quot;定義リスト&quot;">​</a></h3><p>定義リストは「項目 - 定義」という形式の行です。箇条書きのリストと同様、行を飛ばすまで続き、インデントされていれば定義の中に複数の段落を持つことができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Item 1 - The first paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;">         The first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">         The second paragraph</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Item 2 - The first paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;">  The first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  The second paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Some text after the definition list.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Item 1	</span></span>
<span class="line"><span style="color:#A6ACCD;">The first paragraph.  The first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;">The second paragraph</span></span>
<span class="line"><span style="color:#A6ACCD;">Item 2	</span></span>
<span class="line"><span style="color:#A6ACCD;">The first paragraph.  The first paragraph continued.</span></span>
<span class="line"><span style="color:#A6ACCD;">The second paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;">Some text after the definition list.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>関数を文書化し、パラメータ（またはパラメータ、引数など）という見出しの下に定義リストを置くとNatural Docsは自動的にプロトタイプでそれぞれを検索し、リストにそのタイプを含めます。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Function: MyFunction</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Parameters:</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *    x - Description of x.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *    y - Description of y.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *    z - Description of z.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyFunction</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> string </span><span style="color:#A6ACCD;font-style:italic;">y</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Counter </span><span style="color:#A6ACCD;font-style:italic;">z</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> ... </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Parameters</span></span>
<span class="line"><span style="color:#A6ACCD;">x</span></span>
<span class="line"><span style="color:#A6ACCD;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">Description of x.</span></span>
<span class="line"><span style="color:#A6ACCD;">y</span></span>
<span class="line"><span style="color:#A6ACCD;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">Description of y.</span></span>
<span class="line"><span style="color:#A6ACCD;">z</span></span>
<span class="line"><span style="color:#A6ACCD;">Counter</span></span>
<span class="line"><span style="color:#A6ACCD;">Description of z.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Counterのような文書化されたタイプの場合、その定義へのリンクとなり、マウスを乗せると概要がポップアップ表示されます。</p><h3 id="コードとテキスト図" tabindex="-1">コードとテキスト図 <a class="header-anchor" href="#コードとテキスト図" aria-label="Permalink to &quot;コードとテキスト図&quot;">​</a></h3><p>コードのセクションを追加するには、少なくとも3つのダッシュ・等号・またはアンダースコアで行を開始し、「Code」を続けてください。同じ記号が3つ以上並ぶ別の行が現れるまで続けられます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">--- Code</span></span>
<span class="line"><span style="color:#A6ACCD;">int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">---</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>必要なら3文字以上使ってもよいですし、また、その方が視覚的にはっきりするのであれば、キーワードの後にもっと続けても構いません。</p><p>また、Codeの代わりに言語名を指定すると、正しいシンタックスハイライトが使用されます。また、Textを使用するとハイライトを全く使用せず、各ブロックを個別に閉じることなく、あるモードから別のモードへ切り替えることができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">======= C# =======</span></span>
<span class="line"><span style="color:#A6ACCD;">int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">====== Perl ======</span></span>
<span class="line"><span style="color:#A6ACCD;">my $x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">my $y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">====== Text ======</span></span>
<span class="line"><span style="color:#A6ACCD;">This is plain text</span></span>
<span class="line"><span style="color:#A6ACCD;">==================</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">my $x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">my $y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is plain text</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>もし、ここやあそこに簡単な行を入れたいだけなら、それぞれの行を「&gt;」「|」または「:」で始めることができます。ただし、ハイライトはされません。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">&gt; int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int x = 12;</span></span>
<span class="line"><span style="color:#A6ACCD;">int y = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">This is a normal paragraph.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="リンクの詳細" tabindex="-1">リンクの詳細 <a class="header-anchor" href="#リンクの詳細" aria-label="Permalink to &quot;リンクの詳細&quot;">​</a></h2><p>リンクにはまだ続きがあります。URLやメールアドレスにリンクすることができますが、この場合、角括弧は任意です。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Visit &lt;http://www.website.com&gt; or send messages to email@address.com.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Visit http://​www​.website​.com or send messages to email@address.com.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>テキスト、「at」、そしてアドレスを角括弧に入れることで、名前付きリンクを作成することができます。この形式だと、文章の中で自然に読むことができます。また、「at」の代わりにコロンを使用することもできます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Visit &lt;the website: http://www.website.com&gt; or &lt;e-mail me at email@address.com&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Visit the website or e-mail me.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>電子メールアドレスは、見た目は通常のリンクと同じですが、HTMLが難読化されており、スパム・クローラーから保護することができます。</p><h3 id="複数形と所有格" tabindex="-1">複数形と所有格 <a class="header-anchor" href="#複数形と所有格" aria-label="Permalink to &quot;複数形と所有格&quot;">​</a></h3><p>通常のリンクについては、文章になじみやすいように、角括弧の中に複数形や所有格を入れることができます。言い換えれば、<code>&lt;Object&gt;</code>sのような使いにくい構文を使用する必要はありません（それもサポートされています）。単純に<code>&lt;Objects&gt;</code>と書けば、シンボルObjectにうまくリンクしてくれます。複数形や所有格など、どのような形でも扱うことができます。冗談ではありません。Foxes, Fox&#39;s, Foxes&#39;, Children, Mice, Alumni, Indices, Amoebae, Teeth, などなど、とにかく試してみてください。</p><h2 id="追加ドキュメント" tabindex="-1">追加ドキュメント <a class="header-anchor" href="#追加ドキュメント" aria-label="Permalink to &quot;追加ドキュメント&quot;">​</a></h2><p>時にはコード要素に直接対応しないドキュメントを含めたいことがあります。例えば、ライセンス情報やアーキテクチャの注記を含めたい場合です。これには2つの方法があります。</p><h3 id="単体でのコメント" tabindex="-1">単体でのコメント <a class="header-anchor" href="#単体でのコメント" aria-label="Permalink to &quot;単体でのコメント&quot;">​</a></h3><p>あなたが書くコメントのほとんどは、ソースコードの要素に直接対応するものですが、そうでなければならないというわけではありません。利用可能なキーワードのいずれかを選び、そのキーワードで独立したコメントを作成することができます。例えば:</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Class: Counter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * A class that manages an incrementing counter.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">public </span><span style="color:#C792EA;">class</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Counter</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   /* About: Thread Safety</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * This class is not designed to be thread safe.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   /* Constructor: Counter</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    * Initializes the object.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    */</span></span>
<span class="line"><span style="color:#F07178;">   public </span><span style="color:#82AAFF;">Counter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">  value </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">   ...</span></span>
<span class="line"></span></code></pre></div><p>余分なコメントは関数と同じように出力に追加されます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Thread Safety</span></span>
<span class="line"><span style="color:#A6ACCD;">This class is not designed to be thread safe.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>スコープのため、コメントは実際には上記のようにCounterの一部とみなされることを忘れないでください。あなたは、<code>&lt;Counter.Thread Safety&gt;</code>で、Counter の外側からそれにリンクすることになります。この考えには慣れが必要かもしれませんが、もし余分なコメントが1つのクラスだけに適用されるなら、それは実際にそれを行う最も適切な方法です。プロジェクト全体に適用されるライセンスのようなものであれば、関数をそこに移動するのと同じように、それをグローバルにするためにクラスの上に置くことになります。</p><h3 id="テキストファイル" tabindex="-1">テキストファイル <a class="header-anchor" href="#テキストファイル" aria-label="Permalink to &quot;テキストファイル&quot;">​</a></h3><p>また、テキストファイルを使用して追加のドキュメントを追加することもできます。拡張子が.txtのファイルをソースフォルダに置き、「キーワード: タイトル」行で始めると、その内容はソースコード内のコメントと同じように扱われるようになります。つまり、複数の「keyword: title」行を使用して複数の内容を定義したり、ソースコード内のコメントとリンクしたり、利用可能なすべての書式オプションを使用することができるのです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Title: License</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   This file is licensed under the GPL.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   I can link to &lt;Counter&gt; and &lt;Counter.Increment&gt;, and the</span></span>
<span class="line"><span style="color:#A6ACCD;">   documentation in that class can even link back with &lt;License&gt;.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">About: Second Topic</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   I can create a *second* topic in here too, complete with</span></span>
<span class="line"><span style="color:#A6ACCD;">   formatting.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>「タイトル」のように「キーワード: タイトル」の行で始めることを忘れてはいけません。上記の「License」のように「keyword: title」行で始めることを忘れてはなりません。これはNatural Docsが通常のテキストファイルと区別する方法です。</p><h2 id="リストの文書化" tabindex="-1">リストの文書化 <a class="header-anchor" href="#リストの文書化" aria-label="Permalink to &quot;リストの文書化&quot;">​</a></h2><p>もう一つ知っておくと便利なことがあります。例えば、定数のような小さなドキュメントをたくさん持っているとします。それぞれに個別のコメントを書くのは、いくら圧縮しても非常に面倒です。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Constant: COUNTER_NORMAL</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Causes the counter to increment normally.</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_NORMAL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Constant: COUNTER_ODD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Causes the counter to only increment in odd numbers.</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_ODD </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Constant: COUNTER_EVEN</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Causes the counter to only increment in even numbers.</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_EVEN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>キーワードリストを見て、ほとんどすべてのキーワードが複数形であることにお気づきでしょうか。これは、リストコメントと呼ばれるものを作成するために使用されます。複数形のキーワードを使ってコメントを定義すると、その中の定義リストに表示されるものは、あたかもそれぞれがコメントを持っているかのようにリンク可能になります。例えば:</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Constants: Counter Modes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   COUNTER_NORMAL - Causes the counter to increment normally.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   COUNTER_ODD    - Causes the counter to only increment in odd numbers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   COUNTER_EVEN   - Causes the counter to only increment in even numbers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_NORMAL </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_ODD </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> COUNTER_EVEN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>これで<code>&lt;COUNTER_ODD&gt;</code>と書けば、最初の例と同じように動作するようになります。</p><p>enumキーワードを使用すると、自動的に同様の動作をするため、特別です。これによりenumとその値の両方が同じ場所で文書化されます。</p><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* Enum: CounterMode</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Normal - Causes the counter to increment normally.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Odd    - Causes the counter to only increment in odd numbers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">   Even   - Causes the counter to only increment in even numbers.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> CounterMode </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> Normal</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> Odd</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> Even </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>CounterModeだけでなく、CounterMode.Oddへのリンクも可能になりました。</p>`,98),o=[e];function t(c,i,r,C,y,A){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
