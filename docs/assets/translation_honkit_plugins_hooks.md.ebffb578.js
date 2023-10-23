import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const q=JSON.parse('{"title":"フック","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/plugins/hooks.md","filePath":"translation/honkit/plugins/hooks.md","lastUpdated":1676129847000}'),p={name:"translation/honkit/plugins/hooks.md"},o=l(`<h1 id="フック" tabindex="-1">フック <a class="header-anchor" href="#フック" aria-label="Permalink to &quot;フック&quot;">​</a></h1><p>フックとは、カスタムコールバックにより、プロセスの動作を補強したり、変更したりする手法です。</p><h3 id="フック一覧" tabindex="-1">フック一覧 <a class="header-anchor" href="#フック一覧" aria-label="Permalink to &quot;フック一覧&quot;">​</a></h3><h3 id="グローバルパイプラインとの相対比較" tabindex="-1">グローバルパイプラインとの相対比較 <a class="header-anchor" href="#グローバルパイプラインとの相対比較" aria-label="Permalink to &quot;グローバルパイプラインとの相対比較&quot;">​</a></h3><table><thead><tr><th>名前</th><th>説明</th><th>引数</th></tr></thead><tbody><tr><td><code>init</code></td><td>ブックをパースした後、出力とページを生成する前に呼び出されます。</td><td>None</td></tr><tr><td><code>finish:before</code></td><td>ページ生成後、アセット、カバー、...をコピーする前に呼び出されます。</td><td>None</td></tr><tr><td><code>finish</code></td><td>他のすべての後に呼び出されます。</td><td>None</td></tr></tbody></table><h3 id="ページパイプラインとの相対的な関係" tabindex="-1">ページパイプラインとの相対的な関係 <a class="header-anchor" href="#ページパイプラインとの相対的な関係" aria-label="Permalink to &quot;ページパイプラインとの相対的な関係&quot;">​</a></h3><blockquote><p>ページの解析を拡張するために、templatingを使用することが推奨されます。</p></blockquote><table><thead><tr><th>名前</th><th>説明</th><th>引数</th></tr></thead><tbody><tr><td><code>page:before</code></td><td>ページでテンプレートエンジンを実行する前に呼び出される</td><td>ページオブジェクト</td></tr><tr><td><code>page</code></td><td>ページを出力してインデックスを作成する前に呼び出される。</td><td>ページオブジェクト</td></tr></tbody></table><p>📝 インクリメンタルモード(<code>honkit serve</code>)では、非変更ページのフックをスキップすることがある。</p><h5 id="ページオブジェクト" tabindex="-1">ページオブジェクト <a class="header-anchor" href="#ページオブジェクト" aria-label="Permalink to &quot;ページオブジェクト&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// パーサー名</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;markdown&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ブックルートからの相対的なファイルパス</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;page.md&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 絶対ファイルパス</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;rawpath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/usr/...&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// SUMMARYのページタイトル</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ページの内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Markdown/Asciidoc in &quot;page:before&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// HTML in &quot;page&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;h1&gt;Hello&lt;/h1&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ページのレベル</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;level&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.5.3.1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ページの深さ</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;depth&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// その他の属性は.mdの中で、コンテンツの先頭にある2つの「---」の間に表示されます。 </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 例えばマークダウンの先頭では</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// description: This is a description</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ---</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;This is a description&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 前の記事</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;previous&quot;</span><span style="color:#E1E4E8;">: Article Object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 次の記事</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;next&quot;</span><span style="color:#E1E4E8;">: Article Object</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// パーサー名</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;markdown&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ブックルートからの相対的なファイルパス</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;page.md&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 絶対ファイルパス</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;rawpath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/usr/...&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// SUMMARYのページタイトル</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ページの内容</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Markdown/Asciidoc in &quot;page:before&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// HTML in &quot;page&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;content&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;h1&gt;Hello&lt;/h1&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ページのレベル</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;level&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.5.3.1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ページの深さ</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;depth&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// その他の属性は.mdの中で、コンテンツの先頭にある2つの「---」の間に表示されます。 </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 例えばマークダウンの先頭では</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ---</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// description: This is a description</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ---</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;This is a description&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 前の記事</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;previous&quot;</span><span style="color:#24292E;">: Article Object</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 次の記事</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;next&quot;</span><span style="color:#24292E;">: Article Object</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="タイトルを追加する例" tabindex="-1">タイトルを追加する例 <a class="header-anchor" href="#タイトルを追加する例" aria-label="Permalink to &quot;タイトルを追加する例&quot;">​</a></h5><p><code>page:before</code> フックでは、 <code>page.content</code> が markdown/asciidoc のコンテンツになります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;page:before&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        page.content </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;# Title</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">page.content;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> page;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;page:before&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">page</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        page.content </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;# Title</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;">page.content;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> page;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h5 id="一部のhtmlを置き換える例" tabindex="-1">一部のhtmlを置き換える例 <a class="header-anchor" href="#一部のhtmlを置き換える例" aria-label="Permalink to &quot;一部のhtmlを置き換える例&quot;">​</a></h5><p><code>page</code> フックでは、 <code>page.content</code> が markdown/asciidoc 変換で生成された HTML になります。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;page&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">page</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        page.content </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> page.content.</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&lt;b&gt;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&lt;strong&gt;&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#B392F0;">replace</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;&lt;/b&gt;&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;&lt;/strong&gt;&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> page;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;page&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">page</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        page.content </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> page.content.</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&lt;b&gt;&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&lt;strong&gt;&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#6F42C1;">replace</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;&lt;/b&gt;&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;&lt;/strong&gt;&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> page;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="非同期操作" tabindex="-1">非同期操作 <a class="header-anchor" href="#非同期操作" aria-label="Permalink to &quot;非同期操作&quot;">​</a></h3><p>フック・コールバックは非同期でプロミスを返すことができます。</p><p>例:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;init&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writeSomeFile</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">writeAnotherFile</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;init&quot;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writeSomeFile</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">writeAnotherFile</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21),t=[o];function e(c,r,E,y,i,u){return n(),a("div",null,t)}const h=s(p,[["render",e]]);export{q as __pageData,h as default};
