import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.43c433ff.js";const k=JSON.parse('{"title":"HonKitのセットアップとインストール","description":"","frontmatter":{},"headers":[],"relativePath":"translation/honkit/setup.md","filePath":"translation/honkit/setup.md","lastUpdated":1676126774000}'),o={name:"translation/honkit/setup.md"},p=n(`<h1 id="honkitのセットアップとインストール" tabindex="-1">HonKitのセットアップとインストール <a class="header-anchor" href="#honkitのセットアップとインストール" aria-label="Permalink to &quot;HonKitのセットアップとインストール&quot;">​</a></h1><p>HonKitをインストールしてすぐに使えるようにするためには数分しかかかりません。</p><h3 id="ローカルインストール" tabindex="-1">ローカルインストール <a class="header-anchor" href="#ローカルインストール" aria-label="Permalink to &quot;ローカルインストール&quot;">​</a></h3><h5 id="必要条件" tabindex="-1">必要条件 <a class="header-anchor" href="#必要条件" aria-label="Permalink to &quot;必要条件&quot;">​</a></h5><p>HonKitのインストールは簡単でわかりやすいものです。システム要件は以下の2つの満たすだけです。</p><ul><li>NodeJS (v10.0.0以上を推奨)</li><li>Windows・Linux・Unix・Mac OS X</li></ul><h5 id="npmでインストールする" tabindex="-1">NPMでインストールする <a class="header-anchor" href="#npmでインストールする" aria-label="Permalink to &quot;NPMでインストールする&quot;">​</a></h5><p>HonKitをインストールする最良の方法は<strong>NPM</strong>または<strong>Yarn</strong>経由で行うことです。 ターミナルプロンプトで次のコマンドを実行するだけでHonKitがインストールされます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npm install honkit --save-dev</span></span>
<span class="line"><span style="color:#e1e4e8;"># または</span></span>
<span class="line"><span style="color:#e1e4e8;">$ yarn add honkit --dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npm install honkit --save-dev</span></span>
<span class="line"><span style="color:#24292e;"># または</span></span>
<span class="line"><span style="color:#24292e;">$ yarn add honkit --dev</span></span></code></pre></div><p>⚠️ 警告:</p><ul><li><code>honkit</code> をグローバルに (<code>--global</code>) インストールしている場合は、各プラグインのルールもグローバルに (<code>--global</code>) インストールする必要があります。</li><li>ローカルに <code>honkit</code> をインストールした場合、各プラグインもローカルにインストールする必要があります。</li></ul><p>ローカルに <code>honkit</code> をインストールすることをお勧めします。</p><h5 id="本を作る" tabindex="-1">本を作る <a class="header-anchor" href="#本を作る" aria-label="Permalink to &quot;本を作る&quot;">​</a></h5><p>HonKitは定型文を設定することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npx honkit init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npx honkit init</span></span></code></pre></div><p>もし、本を新しいディレクトリに作成したい場合は、<code>honkit init ./directory</code> を実行してください。</p><p>以下のコマンドで本をプレビューします。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npx honkit serve</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npx honkit serve</span></span></code></pre></div><p>または、次のコマンドで静的なウェブサイトを構築します。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npx honkit build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npx honkit build</span></span></code></pre></div><p><code>build</code> と <code>serve</code> コマンドを <code>package.json</code> に <a href="https://docs.npmjs.com/cli/run-script" target="_blank" rel="noreferrer">npm-run-scripts</a> として定義することができます。</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;build&quot;: &quot;honkit build&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    &quot;serve&quot;: &quot;honkit serve&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292E;">    &quot;build&quot;: &quot;honkit build&quot;,</span></span>
<span class="line"><span style="color:#24292E;">    &quot;serve&quot;: &quot;honkit serve&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre></div><p>この設定後、<code>npm run</code>コマンドを使用することができます。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># ビルド</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run build</span></span>
<span class="line"><span style="color:#e1e4e8;"># サーバへの接続開始</span></span>
<span class="line"><span style="color:#e1e4e8;">npm run serve</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># ビルド</span></span>
<span class="line"><span style="color:#24292e;">npm run build</span></span>
<span class="line"><span style="color:#24292e;"># サーバへの接続開始</span></span>
<span class="line"><span style="color:#24292e;">npm run serve</span></span></code></pre></div><h5 id="デバッグ" tabindex="-1">デバッグ <a class="header-anchor" href="#デバッグ" aria-label="Permalink to &quot;デバッグ&quot;">​</a></h5><p><code>--log=debug</code> と <code>--debug</code> オプションを使用すると、より良いエラーメッセージ (スタックトレース付き) を得ることができます。例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ honkit build ./ --log=debug --debug</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ honkit build ./ --log=debug --debug</span></span></code></pre></div>`,27),l=[p];function t(i,c,d,r,h,u){return a(),e("div",null,l)}const b=s(o,[["render",t]]);export{k as __pageData,b as default};