import{_ as e,c as n,j as s,a as i,t as l,a3 as a,o as p}from"./chunks/framework.DflgEAq4.js";const b=JSON.parse('{"title":"テンプレート化","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/templating/index.md","filePath":"translation/honkit/templating/index.md","lastUpdated":1676126774000}'),h={name:"translation/honkit/templating/index.md"},o=a('<h1 id="テンプレート化" tabindex="-1">テンプレート化 <a class="header-anchor" href="#テンプレート化" aria-label="Permalink to &quot;テンプレート化&quot;">​</a></h1><p>HonKitは、ページやテーマのテンプレートを処理するために、<a href="https://mozilla.github.io/nunjucks/" target="_blank" rel="noreferrer">Nunjucks templating language</a>を使用しています。</p><p>Nunjucksの構文は、<strong>Jinja2</strong> や <strong>Liquid</strong> に非常によく似ています。この構文では、中括弧 <code>{ }</code> を使って、処理する必要のあるコンテンツをマークします。</p><h3 id="変数" tabindex="-1">変数 <a class="header-anchor" href="#変数" aria-label="Permalink to &quot;変数&quot;">​</a></h3>',4),k=a(`<div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">はじめまして。{{ name }}と申します。</span></span></code></pre></div><p>これはコンテキストからユーザー名を検索して表示します。変数名には、JavaScriptと同じようにプロパティを検索するドットを入れることができます。また、角括弧の構文も使えます。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo.bar }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo[&quot;bar&quot;] }}</span></span></code></pre></div><p>値が未定義の場合は何も表示しません。以下は全てfooが未定義の場合、何も出力しません。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo }}, {{ foo.bar }}, {{ foo.bar.baz }}</span></span></code></pre></div><p>HonKitはコンテキストから<a href="./variables.html">定義済み変数</a>のセットを提供します。</p><h3 id="フィルター" tabindex="-1">フィルター <a class="header-anchor" href="#フィルター" aria-label="Permalink to &quot;フィルター&quot;">​</a></h3><p>フィルタは基本的に変数に適用することができる関数です。パイプ演算子 (<code>|</code>) を使って呼び出され、引数を取ることができます。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo | title }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo | join(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;,&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ foo | replace(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) | capitalize }}</span></span></code></pre></div><p>3つ目の例は、フィルタを連鎖させる方法を示しています。この例では、まず &quot;foo &quot;を &quot;bar &quot;に置き換えてから大文字にして、&quot;Bar &quot;と表示させる。</p><h3 id="タグ" tabindex="-1">タグ <a class="header-anchor" href="#タグ" aria-label="Permalink to &quot;タグ&quot;">​</a></h3><h5 id="if" tabindex="-1">if <a class="header-anchor" href="#if" aria-label="Permalink to &quot;if&quot;">​</a></h5><p><code>if</code> は条件をテストし、選択的にコンテンツを表示することができます。JavaScriptの <code>if</code> と全く同じ動作をします。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> variable %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  It is true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><p>変数が定義されており、評価値がtrueであれば、&quot;It is true &quot;と表示されます。そうでなければ、何も表示されません。</p><p><code>elif</code> と <code>else</code> で代替条件を指定することができる。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> hungry %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  I am hungry</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% elif tired %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  I am tired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  I am good!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><h5 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-label="Permalink to &quot;for&quot;">​</a></h5><p><code>for</code> は配列や辞書を繰り返し処理します。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># HonKitに関する章</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> article </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> glossary.terms[&#39;gitbook&#39;].articles %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">* [{{ article.title }}]({{ article.path }})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endfor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div><h5 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h5><p>set\` は、変数を作成/変更することができます。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> softwareVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Current version is {{ softwareVersion }}.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Download it](website.com/download/{{ softwareVersion }})</span></span></code></pre></div><h5 id="インクルード・ブロック" tabindex="-1">インクルード・ブロック <a class="header-anchor" href="#インクルード・ブロック" aria-label="Permalink to &quot;インクルード・ブロック&quot;">​</a></h5><p>インクルージョンと継承については<a href="./conrefs.html">コンテンツ参照</a> のセクションで詳しく説明しています。</p><h3 id="エスケープ" tabindex="-1">エスケープ <a class="header-anchor" href="#エスケープ" aria-label="Permalink to &quot;エスケープ&quot;">​</a></h3><p>もしHonKitに特別なテンプレートタグを無視させたい場合はrawを使用すれば、その中のものはプレーンテキストとして出力されます。</p><div class="language-twig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">twig</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">raw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  this will {{ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">not</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> be processed }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{% </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endraw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> %}</span></span></code></pre></div>`,28);function r(t,d,E,c,g,u){return p(),n("div",null,[o,s("p",null,[i("変数はテンプレートのコンテキストから値を探します。単に変数を表示したい場合は、 "),s("code",null,l(t.variable),1),i(" という構文を使用します。例えば．")]),k])}const f=e(h,[["render",r]]);export{b as __pageData,f as default};