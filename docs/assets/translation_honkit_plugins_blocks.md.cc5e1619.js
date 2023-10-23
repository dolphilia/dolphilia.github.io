import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92ce8a2a.js";const h=JSON.parse('{"title":"ブロックの拡張","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/plugins/blocks.md","filePath":"translation/honkit/plugins/blocks.md","lastUpdated":1676126774000}'),p={name:"translation/honkit/plugins/blocks.md"},o=l(`<h1 id="ブロックの拡張" tabindex="-1">ブロックの拡張 <a class="header-anchor" href="#ブロックの拡張" aria-label="Permalink to &quot;ブロックの拡張&quot;">​</a></h1><p>テンプレートブロックを拡張することは、作者に追加機能を提供するための最良の方法です。</p><p>最も一般的な使用法は、実行時にいくつかのタグ内のコンテンツを処理することです。これは <a href="./filters.html">filters</a> のようなものですが、単一の式に制限されないので、ステロイドのようなものです。</p><h3 id="新規ブロックの定義" tabindex="-1">新規ブロックの定義 <a class="header-anchor" href="#新規ブロックの定義" aria-label="Permalink to &quot;新規ブロックの定義&quot;">​</a></h3><p>ブロックはプラグインによって定義され、ブロックはブロックディスクリプタに関連付けられた名前のマップである。ブロックディスクリプタは、少なくとも <code>process</code> メソッドを含む必要があります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    blocks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tag1: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">process</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Hello &quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">block.body</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&quot;, How are you?&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    blocks: {</span></span>
<span class="line"><span style="color:#24292E;">        tag1: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">process</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">block</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Hello &quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">block.body</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&quot;, How are you?&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><code>process</code>は、タグを置き換えるhtmlコンテンツを返す必要があります。this\` と HonKit API については <a href="./api.html">Context and APIs</a> を参照してください。</p><h3 id="ブロック引数の扱い" tabindex="-1">ブロック引数の扱い <a class="header-anchor" href="#ブロック引数の扱い" aria-label="Permalink to &quot;ブロック引数の扱い&quot;">​</a></h3><p>ブロックに引数を渡すことができる。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{% tag1 &quot;argument 1&quot;, &quot;argument 2&quot;, name=&quot;Test&quot; %}</span></span>
<span class="line"><span style="color:#e1e4e8;">これがブロックの本体です。</span></span>
<span class="line"><span style="color:#e1e4e8;">{% endtag1 %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{% tag1 &quot;argument 1&quot;, &quot;argument 2&quot;, name=&quot;Test&quot; %}</span></span>
<span class="line"><span style="color:#24292e;">これがブロックの本体です。</span></span>
<span class="line"><span style="color:#24292e;">{% endtag1 %}</span></span></code></pre></div><p>そして引数は<code>process</code>メソッドで簡単にアクセスできます。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    blocks: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        tag1: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">process</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">block</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// block.args equals [&quot;argument 1&quot;, &quot;argument 2&quot;]</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#6A737D;">// block.kwargs equals { &quot;name&quot;: &quot;Test&quot; }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    blocks: {</span></span>
<span class="line"><span style="color:#24292E;">        tag1: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">process</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">block</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// block.args equals [&quot;argument 1&quot;, &quot;argument 2&quot;]</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// block.kwargs equals { &quot;name&quot;: &quot;Test&quot; }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><h3 id="サブブロックの取り扱い" tabindex="-1">サブブロックの取り扱い <a class="header-anchor" href="#サブブロックの取り扱い" aria-label="Permalink to &quot;サブブロックの取り扱い&quot;">​</a></h3><p>定義されたブロックは異なるサブブロックに解析することができます。例えばソースを考えてみましょう。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{% myTag %}</span></span>
<span class="line"><span style="color:#e1e4e8;">    本体</span></span>
<span class="line"><span style="color:#e1e4e8;">    {% subblock1 %}</span></span>
<span class="line"><span style="color:#e1e4e8;">    サブブロック本体 1</span></span>
<span class="line"><span style="color:#e1e4e8;">    {% subblock 2 %}</span></span>
<span class="line"><span style="color:#e1e4e8;">    サブブロック本体 1</span></span>
<span class="line"><span style="color:#e1e4e8;">{% endmyTag %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{% myTag %}</span></span>
<span class="line"><span style="color:#24292e;">    本体</span></span>
<span class="line"><span style="color:#24292e;">    {% subblock1 %}</span></span>
<span class="line"><span style="color:#24292e;">    サブブロック本体 1</span></span>
<span class="line"><span style="color:#24292e;">    {% subblock 2 %}</span></span>
<span class="line"><span style="color:#24292e;">    サブブロック本体 1</span></span>
<span class="line"><span style="color:#24292e;">{% endmyTag %}</span></span></code></pre></div>`,15),e=[o];function t(c,r,i,y,E,u){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
