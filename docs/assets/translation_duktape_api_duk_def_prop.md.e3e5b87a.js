import{_ as p,o as l,c as o,Q as a,k as s,a as n}from"./chunks/framework.43c433ff.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_def_prop.md","filePath":"translation/duktape/api/duk_def_prop.md","lastUpdated":1676126774000}'),e={name:"translation/duktape/api/duk_def_prop.md"},t=a(`<h2 id="duk-def-prop" tabindex="-1">duk_def_prop() <a class="header-anchor" href="#duk-def-prop" aria-label="Permalink to &quot;duk_def_prop()&quot;">​</a></h2><p>1.1.0 sandbox property</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">obj_idx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_uint_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">flags</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">obj_idx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_uint_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">flags</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | obj | ... | key | -&gt; | ... | obj | ... | (if have no value, setter, getter) | | ... | obj | ... | key | value | -&gt; | ... | obj | ... | (if have value) | | ... | obj | ... | key | getter | -&gt; | ... | obj | ... | (if have getter, but no setter) | | ... | obj | ... | key | setter | -&gt; | ... | obj | ... | (if have setter, but no getter) | | ... | obj | ... | key | getter | setter | -&gt; | ... | obj | ... | (if have both getter and setter) |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>Object.defineProperty() のようなセマンティクスで、 obj_idx にあるオブジェクトの property key の属性を作成または変更します。要求された変更が許可されない場合（例えば、プロパティが設定できない場合）、TypeErrorがスローされます。ターゲットがオブジェクトでない場合（またはインデックスが無効な場合）、エラーがスローされます。</p><p>flags フィールドは、どのプロパティの属性が変更されるかを示す &quot;have&quot; フラグを提供し、これは Object.defineProperty() で許可される部分プロパティ記述子をモデル化したものです。書き込み可能、設定可能、および列挙可能な属性の値は flags フィールドで指定し、プロパティ値、ゲッター、およびセッターはバリュースタック引数として指定します。新しいプロパティを作成するとき、属性値が見つからないと、ECMAScript のデフォルトが使用されます（すべての boolean 属性に対して false、value、getter、setter に対して undefined）；既存のプロパティを修正するとき、属性値が見つからないと、既存の属性値が変更されないことを意味します。</p><p>具体的な例として</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Set value, set writable, clear enumerable, leave configurable untouched.</span></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj, { value: </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">, writable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, enumerable: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Set value, set writable, clear enumerable, leave configurable untouched.</span></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj, { value: </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">, writable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, enumerable: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> });</span></span></code></pre></div><p>このようにマッピングします。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">duk_push_uint</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* value is taken from stack */</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx, obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span><span style="color:#6A737D;">  /* &lt;=&gt; value: 123 */</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_WRITABLE </span><span style="color:#F97583;">|</span><span style="color:#6A737D;">  /* &lt;=&gt; writable: true */</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_ENUMERABLE);</span><span style="color:#6A737D;">  /* &lt;=&gt; enumerable: false */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">duk_push_uint</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* value is taken from stack */</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx, obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span><span style="color:#6A737D;">  /* &lt;=&gt; value: 123 */</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_WRITABLE </span><span style="color:#D73A49;">|</span><span style="color:#6A737D;">  /* &lt;=&gt; writable: true */</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_ENUMERABLE);</span><span style="color:#6A737D;">  /* &lt;=&gt; enumerable: false */</span></span></code></pre></div><p>DUK_DEFPROP_FORCE フラグを使用すると、拡張不可能なターゲットオブジェクトや設定不可能なプロパティのために操作が通常失敗する場合でも、プロパティの変更を強制することができます。これは ECMAScript コードから Object.defineProperty() で行うことはできず、例えばサンドボックスのセットアップに有用です。場合によっては、強制的な変更さえも不可能で、エラーが投げられることになります。例えば、内部で仮想プロパティとして実装されているプロパティは、変更不可能であったり（string .length や index プロパティなど）、制限がある場合があります（array .length プロパティは内部制限により設定や列挙ができないなど）。</p><p>以下の基本フラグが定義されています。</p><p>定義 説明 DUK_DEFPROP_WRITABLE DUK_DEFPROP_HAVE_WRITABLE が設定されている場合のみ有効です。 DUK_DEFPROP_ENUMERABLE DUK_DEFPROP_HAVE_ENUMERABLEが設定されている場合のみ有効です。 DUK_DEFPROP_CONFIGURABLE 設定可能な属性を設定します。DUK_DEFPROP_HAVE_CONFIGURABLE が設定されている場合のみ有効です。 DUK_DEFPROP_HAVE_WRITABLE 書き込み可能な属性を設定または解除します （未設定の場合は変更されません）。 DUK_DEFPROP_HAVE_ENUMERABLE 列挙可能な属性を設定または解除します (未設定の場合は変更されません)。 DUK_DEFPROP_HAVE_CONFIGURABLE コンフィギュラブル属性を設定または解除します (未設定の場合、変更されません)。 DUK_DEFPROP_HAVE_VALUE 値属性を設定します。値はバリュースタックで指定されます。 DUK_DEFPROP_HAVE_GETTER ゲッター属性を設定し、値はバリュースタックに保存されます。 DUK_DEFPROP_HAVE_SETTER セッター属性の設定、値はバリュースタックで指定されます。 DUK_DEFPROP_FORCE 属性が設定不可能な場合でも、可能であれば属性を強制的に変更します。</p><p>また、一般的なフラグの組み合わせに対応する便利な定義もあります。例えば、DUK_DEFPROP_SET_WRITABLE は DUK_DEFPROP_HAVE_WRITABLE と DUK_DEFPROP_WRITABLE に相当します。現在、以下のものが定義されています。</p>`,17),c=s("p",null,[n("定義 説明 DUK_DEFPROP_{SET,CLEAR}"),s("em",{"SET,CLEAR":""},"WRITABLE 'writable' 属性を設定またはクリアします。 DUK_DEFPROP"),s("em",{"SET,CLEAR":""},"ENUMERABLE 'enumerable' 属性を設定または解除します。 DUK_DEFPROP"),s("em",{"W,E,C,WE,WC,EC,WEC":""},"CONFIGURABLE '設定可能' 属性を設定または解除します。 DUK_DEFPROP_SET"),n(' 1つまたは複数の属性を設定し、他の属性には触れないようにします。 DUK_DEFPROP_CLEAR_{W,E,C,WE,WC,EC,WEC} 1つまたは複数の属性をクリアします。 DUK_DEFPROP_ATTR_{W,E,C,WE,WC,EC,WEC} 書き込み可能、 列挙可能、 設定可能な属性を設定ま たは ク リ ア し ます。例えば、DUK_DEFPROP_ATTR_WCはwritableとconfigurableを設定し、enumerableをクリアします。 DUK_DEFPROP_HAVE_{W,E,C,WE,WC,EC,WEC} 1つ以上の属性が設定／クリアされることを示します。例えば、DUK_DEFPROP_HAVE_WC は DUK_DEFPROP_HAVE_WRITABLE | DUK_DEFPROP_HAVE_CONFIGURABLE と同等です。 DUK_DEFPROP_{W,E,C,WE,WC,EC,WEC} 属性値を与えます（一致する "have" フラグが設定されている場合に有効）。例えば DUK_DEFPROP_WE は DUK_DEFPROP_WRITABLE | DUK_DEFPROP_ENUMERABLE と同じ意味です。')],-1),r=a(`<p>いくつかの例（以下にもっと例を示します）。</p><p>値を設定し、書き込み可能を設定し、列挙可能をクリアし、設定可能を設定するには、値をバリュースタックにプッシュして、フラグを設定します。 基本フラグ。DUK_DEFPROP_HAVE_VALUE | DUK_DEFPROP_HAVE_WRITABLE | DUK_DEFPROP_WRITABLE | DUK_DEFPROP_HAVE_ENUMERABLE | DUK_DEFPROP_HAVE_CONFIGURABLE; or DUK_DEFPROP_CONFIGURABLE。 便利です。DUK_defprop_have_value | DUK_defprop_attr_WC. 書き込み可能な属性を消去する（他の属性はそのままにしておく）には、 flags を設定します。 基本フラグ。DUK_DEFPROP_HAVE_WRITABLE; または 便利です。DUK_DEFPROP_CLEAR_WRITABLE、または 便宜上DUK_DEFPROP_CLEAR_W. 値を設定し、書き込み可能を消去し、列挙可能を設定するには（他の属性はそのままで）、値をバリュースタックにプッシュし、フラグを設定します。 基本フラグ。DUK_DEFPROP_HAVE_VALUE | DUK_DEFPROP_HAVE_WRITABLE | DUK_DEFPROP_HAVE_ENUMERABLE | DUK_DEFPROP_ENUMERABLE; または 便利です。DUK_DEFPROP_HAVE_VALUE | DUK_DEFPROP_CLEAR_W | DUK_DEFPROP_SET_E、または 便利です。DUK_DEFPROP_HAVE_VALUE | DUK_DEFPROP_HAVE_WE | DUK_DEFPROP_E.</p><p>このAPIコールはいろいろと便利です。</p><p>Cコードから直接、非デフォルトの属性を持つプロパティを作成します。 Cコードから直接、アクセッサ（ゲッター／セッター）プロパティを作成します。 既存のプロパティの属性を C コードから直接変更します。 より多くの例については、APIテストケースtest-def-prop.cを参照してください。</p><p>ターゲットがdefinePropertyトラップを実装しているProxyオブジェクトの場合、トラップが起動するはずです。しかし、Duktapeは現在definePropertyトラップをサポートしておらず、defineProperty()オペレーションは現在ターゲットに転送されません。サポートが追加された場合、このAPIコールはトラップを呼び出したり、操作をターゲット・オブジェクトに転送したりするようになります。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> obj_idx </span><span style="color:#F97583;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an ordinary property which is writable and configurable, but</span></span>
<span class="line"><span style="color:#6A737D;"> * not enumerable.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 123, writable: true, enumerable: false, configurable: true</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* prop value */</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_WRITABLE </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_ENUMERABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_CONFIGURABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">123</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* prop value */</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx, obj_idx, DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_ATTR_WC);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Change the property value and make it non-writable.  Don&#39;t touch other</span></span>
<span class="line"><span style="color:#6A737D;"> * attributes.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 321, writable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">321</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">321</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_CLEAR_WRITABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Make the property non-configurable, don&#39;t touch value or other attributes.</span></span>
<span class="line"><span style="color:#6A737D;"> * Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      configurable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_prop_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx, obj_idx, DUK_DEFPROP_CLEAR_CONFIGURABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an accessor property which is non-configurable and non-enumerable.</span></span>
<span class="line"><span style="color:#6A737D;"> * Attribute flags are not given so they default to ECMAScript defaults</span></span>
<span class="line"><span style="color:#6A737D;"> * (false) automatically.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   object.defineproperty(obj, &#39;my_accessor_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      get: my_getter, set: my_setter</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_accessor_1&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_getter, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_setter, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_SETTER);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an accessor property which is non-configurable but enumerable.</span></span>
<span class="line"><span style="color:#6A737D;"> * Attribute flags are given explicitly which is easier to read without</span></span>
<span class="line"><span style="color:#6A737D;"> * knowing about ECMAScript attribute default values.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_accessor_2&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      get: my_getter, set: my_setter, enumerable: true, configurable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_accessor_2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_getter, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_setter, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_SETTER </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#F97583;">|</span><span style="color:#6A737D;">  /* clear */</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_ENUMERABLE </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> DUK_DEFPROP_ENUMERABLE);</span><span style="color:#6A737D;">  /* set */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable with convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_accessor_2&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_getter, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, my_setter, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_SETTER </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_CLEAR_CONFIGURABLE </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_SET_ENUMERABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Change the value of a non-configurable property by force.</span></span>
<span class="line"><span style="color:#6A737D;"> * No ECMAScript equivalent.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;my_nonconfigurable_prop&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_value</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">321</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_def_prop</span><span style="color:#E1E4E8;">(ctx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             obj_idx,</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#E1E4E8;">             DUK_DEFPROP_FORCE);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> obj_idx </span><span style="color:#D73A49;">=</span><span style="color:#6A737D;"> /* ... */</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an ordinary property which is writable and configurable, but</span></span>
<span class="line"><span style="color:#6A737D;"> * not enumerable.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 123, writable: true, enumerable: false, configurable: true</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* prop value */</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_WRITABLE </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_ENUMERABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_CONFIGURABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">123</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* prop value */</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx, obj_idx, DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_ATTR_WC);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Change the property value and make it non-writable.  Don&#39;t touch other</span></span>
<span class="line"><span style="color:#6A737D;"> * attributes.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      value: 321, writable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">321</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_WRITABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">321</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_CLEAR_WRITABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Make the property non-configurable, don&#39;t touch value or other attributes.</span></span>
<span class="line"><span style="color:#6A737D;"> * Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_prop_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      configurable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable using convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_prop_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx, obj_idx, DUK_DEFPROP_CLEAR_CONFIGURABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an accessor property which is non-configurable and non-enumerable.</span></span>
<span class="line"><span style="color:#6A737D;"> * Attribute flags are not given so they default to ECMAScript defaults</span></span>
<span class="line"><span style="color:#6A737D;"> * (false) automatically.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   object.defineproperty(obj, &#39;my_accessor_1&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      get: my_getter, set: my_setter</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_accessor_1&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_getter, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_setter, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_SETTER);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Create an accessor property which is non-configurable but enumerable.</span></span>
<span class="line"><span style="color:#6A737D;"> * Attribute flags are given explicitly which is easier to read without</span></span>
<span class="line"><span style="color:#6A737D;"> * knowing about ECMAScript attribute default values.  Equivalent to:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   Object.defineProperty(obj, &#39;my_accessor_2&#39;, {</span></span>
<span class="line"><span style="color:#6A737D;"> *      get: my_getter, set: my_setter, enumerable: true, configurable: false</span></span>
<span class="line"><span style="color:#6A737D;"> *   });</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_accessor_2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_getter, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_setter, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_SETTER </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_CONFIGURABLE </span><span style="color:#D73A49;">|</span><span style="color:#6A737D;">  /* clear */</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_ENUMERABLE </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> DUK_DEFPROP_ENUMERABLE);</span><span style="color:#6A737D;">  /* set */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* The same but more readable with convenience flags. */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_accessor_2&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_getter, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, my_setter, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_GETTER </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_SETTER </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_CLEAR_CONFIGURABLE </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_SET_ENUMERABLE);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Change the value of a non-configurable property by force.</span></span>
<span class="line"><span style="color:#6A737D;"> * No ECMAScript equivalent.</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;my_nonconfigurable_prop&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_value</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">321</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_def_prop</span><span style="color:#24292E;">(ctx,</span></span>
<span class="line"><span style="color:#24292E;">             obj_idx,</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_HAVE_VALUE </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#24292E;">             DUK_DEFPROP_FORCE);</span></span></code></pre></div><h3 id="参照" tabindex="-1">参照 <a class="header-anchor" href="#参照" aria-label="Permalink to &quot;参照&quot;">​</a></h3><p>duk_get_prop_desc</p>`,9),E=[t,c,r];function _(y,i,D,u,A,F){return l(),o("div",null,E)}const R=p(e,[["render",_]]);export{P as __pageData,R as default};