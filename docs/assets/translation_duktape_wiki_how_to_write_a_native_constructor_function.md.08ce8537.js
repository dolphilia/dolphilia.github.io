import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"ネイティブコンストラクタ関数の書き方","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/wiki/how_to_write_a_native_constructor_function.md","filePath":"translation/duktape/wiki/how_to_write_a_native_constructor_function.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/wiki/how_to_write_a_native_constructor_function.md"},o=p(`<h1 id="ネイティブコンストラクタ関数の書き方" tabindex="-1">ネイティブコンストラクタ関数の書き方 <a class="header-anchor" href="#ネイティブコンストラクタ関数の書き方" aria-label="Permalink to &quot;ネイティブコンストラクタ関数の書き方&quot;">​</a></h1><p>ネイティブ・コンストラクタ関数は、ECMAScriptのコンストラクタと基本的に同じように動作しますが、Duktape/Cの関数にはデフォルトで.prototypeプロパティがないことが異なります。</p><p>コンストラクタ呼び出しによって新しいインスタンスを作成するには、（ECMAScriptでは）2つの基本的な方法があります。</p><ul><li>コンストラクタに自動的に渡されるデフォルトのインスタンスを使用する。</li><li>コンストラクタから代替インスタンスを返す</li></ul><h2 id="デフォルトのインスタンスを使用する" tabindex="-1">デフォルトのインスタンスを使用する <a class="header-anchor" href="#デフォルトのインスタンスを使用する" aria-label="Permalink to &quot;デフォルトのインスタンスを使用する&quot;">​</a></h2><p>ECMAScript のコンストラクタ関数が new MyObject() として呼び出されたとき。</p><ul><li>デフォルトのインスタンスオブジェクトは、呼び出しが行われる前に自動的に作成されます。このオブジェクトは空になり、その内部プロトタイプは MyObject.prototype が存在すればそれに、そうでなければ Object.prototype に設定されます。</li><li>デフォルトのインスタンスは、コンストラクタの呼び出しのために、これにバインドされます。</li></ul><p>このデフォルトのインスタンスは、コンストラクタがオブジェクト値を返さない限り、new MyObject()の結果となります。</p><p>ECMAScript では、この基本的なイディオムは次のようになります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// When called as new MyObject(), &quot;this&quot; will be bound to the default</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// instance object here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Return undefined, which causes the default instance to be used.</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// For an ECMAScript function an automatic MyObject.prototype value will be</span></span>
<span class="line"><span style="color:#6A737D;">// set.  That object will also have a .constructor property pointing back to</span></span>
<span class="line"><span style="color:#6A737D;">// Myobject.  You can add instance methods to MyObject.prototype.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">MyObject</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">printName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;My name is: &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyObject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test object&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">printName</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// My name is: test object</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// When called as new MyObject(), &quot;this&quot; will be bound to the default</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// instance object here.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Return undefined, which causes the default instance to be used.</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// For an ECMAScript function an automatic MyObject.prototype value will be</span></span>
<span class="line"><span style="color:#6A737D;">// set.  That object will also have a .constructor property pointing back to</span></span>
<span class="line"><span style="color:#6A737D;">// Myobject.  You can add instance methods to MyObject.prototype.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">MyObject</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">printName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;My name is: &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test object&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">printName</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// My name is: test object</span></span></code></pre></div><p>C言語で同等のものを実装する場合、唯一の違いは、Duktape/C関数が自動的に.prototypeプロパティを持たないことです。つまり、以下のように.prototypeプロパティを手動で設定しない限り、デフォルトのインスタンスはObject.prototypeを継承することになります。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* MyObject.prototype.printName */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_print_name</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Get access to the &#39;this&#39; binding. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_this</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Read this.name */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;My name is: </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">duk_safe_to_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  /* no return value (= undefined) */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_constructor</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ name ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* All Duktape/C functions can be called both as constructors</span></span>
<span class="line"><span style="color:#6A737D;">     * (&quot;new func()&quot;) and functions (&quot;func()&quot;).  Sometimes objects</span></span>
<span class="line"><span style="color:#6A737D;">     * allow both calls, sometimes not.  Here we reject a normal</span></span>
<span class="line"><span style="color:#6A737D;">     * non-constructor call.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">duk_is_constructor_call</span><span style="color:#E1E4E8;">(ctx)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Get access to the default instance. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_this</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set this.name to name. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this name ] */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Return undefined: default instance will be used. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Push constructor function; all Duktape/C functions are</span></span>
<span class="line"><span style="color:#6A737D;">     * &quot;constructable&quot; and can be called as &#39;new Foo()&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_constructor, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Push MyObject.prototype object. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_object</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ MyObject proto ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set MyObject.prototype.printName. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_print_name, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set MyObject.prototype = proto */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;prototype&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ MyObject ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Finally, register MyObject to the global object */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ ] */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_eval_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;test object&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_new</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* MyObject.prototype.printName */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_print_name</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Get access to the &#39;this&#39; binding. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_this</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Read this.name */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;My name is: </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">duk_safe_to_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  /* no return value (= undefined) */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_constructor</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ name ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* All Duktape/C functions can be called both as constructors</span></span>
<span class="line"><span style="color:#6A737D;">     * (&quot;new func()&quot;) and functions (&quot;func()&quot;).  Sometimes objects</span></span>
<span class="line"><span style="color:#6A737D;">     * allow both calls, sometimes not.  Here we reject a normal</span></span>
<span class="line"><span style="color:#6A737D;">     * non-constructor call.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">duk_is_constructor_call</span><span style="color:#24292E;">(ctx)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Get access to the default instance. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_this</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set this.name to name. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this name ] */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name this ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Return undefined: default instance will be used. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Push constructor function; all Duktape/C functions are</span></span>
<span class="line"><span style="color:#6A737D;">     * &quot;constructable&quot; and can be called as &#39;new Foo()&#39;.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_constructor, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Push MyObject.prototype object. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_object</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ MyObject proto ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set MyObject.prototype.printName. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_print_name, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set MyObject.prototype = proto */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;prototype&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ MyObject ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Finally, register MyObject to the global object */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ ] */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_eval_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;test object&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_new</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>あるいは、冗長なコメントをカットすると:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* MyObject.prototype.printName */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_print_name</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_this</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;My name is: </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">duk_safe_to_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_constructor</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">duk_is_constructor_call</span><span style="color:#E1E4E8;">(ctx)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set this.name = name; */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_this</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  /* use default instance */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_constructor, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_object</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_print_name, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;prototype&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_eval_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;test object&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_new</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* MyObject.prototype.printName */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_print_name</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_this</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;My name is: </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">duk_safe_to_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_constructor</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">duk_is_constructor_call</span><span style="color:#24292E;">(ctx)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set this.name = name; */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_this</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  /* use default instance */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_constructor, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_object</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_print_name, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;prototype&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_eval_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;test object&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_new</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>このCバージョンは、機能的にはECMAScriptバージョンとほとんど同じです。しかし、少なくとも2つの明確な違いがあります。</p><ul><li>ECMAScript バージョンの MyObject はコンストラクタと通常の関数呼び出しの両方を許可しています。C バージョンでは、エラーが起こりにくい非コンストラクタ呼び出しは拒否されます。</li><li>ECMAScript 版の MyObject.prototype には .constructor の後方参照があり、 MyObject.prototype.constructor === MyObject になっています。C バージョンにはこれがありませんが、参照を追加するのは簡単です。.constructor の後方参照は ECMAScript エンジンの観点からは何の機能も持ちませんが、呼び出すコードによっては、それを見つけることを期待するかもしれません。</li></ul><h2 id="using-a-replacement-value" tabindex="-1">Using a replacement value <a class="header-anchor" href="#using-a-replacement-value" aria-label="Permalink to &quot;Using a replacement value&quot;">​</a></h2><p>これはあまり使われない方法ですが、それでもECMAScript標準では完全にサポートされています。</p><p>ECMAScript のコードでは</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> MyObject_prototype </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">MyObject_prototype.</span><span style="color:#B392F0;">printName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;My name is: &#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.name)</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyObject</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// &quot;this&quot; binding has the default instance, ignore it.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Create result object explicitly.</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">    result.name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// You can set the internal prototype for the result explicitly.</span></span>
<span class="line"><span style="color:#E1E4E8;">    Object.</span><span style="color:#B392F0;">setPrototypeOf</span><span style="color:#E1E4E8;">(result, MyObject_prototype);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Important: by returning an object value the constructor</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// indicates that the return value should be used instead</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// of the default instance (which is always created).</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> obj </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MyObject</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;test object&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.</span><span style="color:#B392F0;">printName</span><span style="color:#E1E4E8;">();  </span><span style="color:#6A737D;">// My name is: test object</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> MyObject_prototype </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">MyObject_prototype.</span><span style="color:#6F42C1;">printName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;My name is: &#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.name)</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// &quot;this&quot; binding has the default instance, ignore it.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Create result object explicitly.</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">    result.name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// You can set the internal prototype for the result explicitly.</span></span>
<span class="line"><span style="color:#24292E;">    Object.</span><span style="color:#6F42C1;">setPrototypeOf</span><span style="color:#24292E;">(result, MyObject_prototype);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Important: by returning an object value the constructor</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// indicates that the return value should be used instead</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// of the default instance (which is always created).</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> obj </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MyObject</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;test object&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">obj.</span><span style="color:#6F42C1;">printName</span><span style="color:#24292E;">();  </span><span style="color:#6A737D;">// My name is: test object</span></span></code></pre></div><p>Duktape/Cでは、この方法はDuktape/C関数に.prototypeオブジェクトを設定する必要がないという利点があります。デフォルトのインスタンスはObject.prototypeを継承しますが、デフォルトインスタンスを無視するので、これは重要ではありません。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* MyObject_prototype.printName */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_print_name</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_this</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ this ] */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;My name is: </span><span style="color:#79B8FF;">%s\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">duk_safe_to_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#79B8FF;">duk_ret_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_constructor</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ name ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">duk_is_constructor_call</span><span style="color:#E1E4E8;">(ctx)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Push explicitly created instance and set its prototype. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_object</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject_prototype&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_set_prototype</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name result ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set result.name to name. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;name&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name result ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Return the &#39;result&#39; object: replaces the default instance. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Register MyObject_prototype. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_object</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_print_name, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject_prototype&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Register MyObject. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_c_function</span><span style="color:#E1E4E8;">(ctx, myobject_constructor, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_put_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ ] */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">myobject_init</span><span style="color:#E1E4E8;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_eval_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_global_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;MyObject&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;test object&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_new</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_get_prop_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;printName&quot;</span><span style="color:#E1E4E8;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_dup</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_call_method</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">duk_pop</span><span style="color:#E1E4E8;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* MyObject_prototype.printName */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_print_name</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_this</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* -&gt; stack: [ this ] */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;My name is: </span><span style="color:#005CC5;">%s\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">duk_safe_to_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* MyObject */</span></span>
<span class="line"><span style="color:#005CC5;">duk_ret_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_constructor</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Stack at entry is: [ name ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">duk_is_constructor_call</span><span style="color:#24292E;">(ctx)) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> DUK_RET_TYPE_ERROR;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Push explicitly created instance and set its prototype. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_object</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject_prototype&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_set_prototype</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name result ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Set result.name to name. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;name&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ name result ] */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Return the &#39;result&#39; object: replaces the default instance. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/* Initialize MyObject into global object. */</span></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#6A737D;">    /* Register MyObject_prototype. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_object</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_print_name, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject_prototype&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Register MyObject. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_c_function</span><span style="color:#24292E;">(ctx, myobject_constructor, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_put_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* -&gt; stack: [ ] */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">myobject_init</span><span style="color:#24292E;">(ctx);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from ECMAScript code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_eval_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;new MyObject(&#39;test object&#39;)&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /* Test creation of a new object from C code. */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_global_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;MyObject&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;test object&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* name argument */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_new</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">1</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">    /* ... stack top has result ... */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_get_prop_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;printName&quot;</span><span style="color:#24292E;">);</span><span style="color:#6A737D;">  /* call obj.printName(); */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_dup</span><span style="color:#24292E;">(ctx, </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_call_method</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">0</span><span style="color:#6A737D;"> /*nargs*/</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop call result */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">duk_pop</span><span style="color:#24292E;">(ctx);</span><span style="color:#6A737D;">  /* pop instance */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,22),t=[o];function e(c,r,y,E,i,u){return n(),a("div",null,t)}const d=s(l,[["render",e]]);export{_ as __pageData,d as default};