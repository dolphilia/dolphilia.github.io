import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.43c433ff.js";const h=JSON.parse('{"title":"デプロイメント","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/deploying.md","filePath":"translation/vitepress/deploying.md","lastUpdated":1676129847000}'),p={name:"translation/vitepress/deploying.md"},o=l(`<h1 id="デプロイメント" tabindex="-1">デプロイメント <a class="header-anchor" href="#デプロイメント" aria-label="Permalink to &quot;デプロイメント&quot;">​</a></h1><p>以下のガイドはいくつかの共通の前提に基づくものです。</p><ul><li>プロジェクトのdocsディレクトリの中にドキュメントを配置するのです。</li><li>デフォルトのビルド出力場所（.vitepress/dist）を使用しています。</li><li>VitePressはプロジェクトのローカル依存関係としてインストールされ、package.jsonに以下のスクリプトが設定されています。</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:serve&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress build docs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:serve&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><blockquote><p>ヒント：あなたのサイトがサブディレクトリ（<code>https://example.com/subdir/</code>）で提供される場合、あなたのdocs/.vitepress/config.jsで &#39;/subdir/&#39; をベースとして設定する必要があります。例えば、Github (または GitLab) ページを使用していて user.github.io/repo/ にデプロイしている場合は、ベースを /repo/ に設定します。</p></blockquote><h2 id="ローカルでのビルドとテスト" tabindex="-1">ローカルでのビルドとテスト <a class="header-anchor" href="#ローカルでのビルドとテスト" aria-label="Permalink to &quot;ローカルでのビルドとテスト&quot;">​</a></h2><ul><li>このコマンドを実行するとドキュメントをビルドすることができます。</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:build</span></span></code></pre></div><ul><li>ドキュメントをビルドしたらローカルで実行することでテストすることができます。</li></ul><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:serve</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:serve</span></span></code></pre></div><p>serve コマンドはローカルの静的ウェブサーバを起動し.vitepress/dist にあるファイルを <code>http://localhost:4173</code> で配信します。これは本番環境のビルドがあなたのローカル環境で問題なく見えるかどうかをチェックする簡単な方法です。</p><ul><li>引数に --port を渡すと、サーバーのポートを設定することができます。</li></ul><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;docs:serve&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitepress serve docs --port 8080&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;docs:serve&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitepress serve docs --port 8080&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>これでdocs:serveメソッドは <code>http://localhost:8080</code> でサーバーを起動するようになります。</p><h2 id="netlify-vercel-aws-amplify-cloudflare-pages-render" tabindex="-1">Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render <a class="header-anchor" href="#netlify-vercel-aws-amplify-cloudflare-pages-render" aria-label="Permalink to &quot;Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render&quot;">​</a></h2><p>新しいプロジェクトを立ち上げ、ダッシュボードを使用してこれらの設定を変更します。</p><ul><li>ビルドコマンド：yarn docs:build</li><li>出力ディレクトリ: docs/.vitepress/dist</li><li>Node Version: 14 (またはそれ以上。デフォルトでは通常14または16になりますが、Cloudflare Pagesではデフォルトはまだ12なので、変更する必要があるかもしれません)</li></ul><blockquote><p>警告: HTMLコードの自動最小化などのオプションは有効にしないでください。Vueにとって意味のあるコメントを出力から削除してしまいます。 削除された場合、ハイドレーションミスマッチエラーが表示されることがあります。</p></blockquote><h2 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h2><h3 id="github-actionsを利用する" tabindex="-1">GitHub Actionsを利用する <a class="header-anchor" href="#github-actionsを利用する" aria-label="Permalink to &quot;GitHub Actionsを利用する&quot;">​</a></h3><ol><li>テーマの設定ファイル docs/.vitepress/config.js で、base プロパティを GitHub リポジトリの名前に設定します。<a href="https://foo.github.io/bar/" target="_blank" rel="noreferrer">https://foo.github.io/bar/</a> にサイトをデプロイする予定なら、base を &#39;/bar/&#39; に設定します。常にスラッシュで始まり、スラッシュで終わる必要があります。</li><li>プロジェクトの .github/workflows ディレクトリ内に deploy.yml というファイルを作成し、以下の内容を記述します。</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">fetch-depth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">16</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">github_token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">publish_dir</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;"># cname: example.com # if wanna deploy to custom domain</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">fetch-depth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">16</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">github_token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">publish_dir</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;"># cname: example.com # if wanna deploy to custom domain</span></span></code></pre></div><blockquote><p>ヒント: 対応するブランチ名を置き換えてください。たとえば、ビルドしたいブランチが master であれば、上記のファイルでは main を master に置き換えてください。</p></blockquote><ol start="3"><li>コードをコミットして、mainブランチにプッシュします。</li><li>アクションが完了するのを待ちます。</li><li>リポジトリの「設定」の「ページ」メニューで、GitHub Pages のソースとして gh-pages ブランチを選択します。これで、プッシュするたびにドキュメントが自動的にデプロイされるようになります。</li></ol><h2 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-label="Permalink to &quot;GitLab Pages&quot;">​</a></h2><h3 id="gitlab-ciを利用する" tabindex="-1">GitLab CIを利用する <a class="header-anchor" href="#gitlab-ciを利用する" aria-label="Permalink to &quot;GitLab CIを利用する&quot;">​</a></h3><ol><li>docs/.vitepress/config.js の outDir を ../public に設定します。</li><li>.gitlab-ci.yml というファイルをプロジェクトのルートに作成し、以下のような内容を記述します。これにより、コンテンツに変更を加えるたびに、サイトがビルドされ、デプロイされます。</li></ol><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">node:16</span></span>
<span class="line"><span style="color:#85E89D;">pages</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">node_modules/</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">yarn install</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">yarn docs:build</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">artifacts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">paths</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">public</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">only</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#9ECBFF;">main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">node:16</span></span>
<span class="line"><span style="color:#22863A;">pages</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">node_modules/</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">script</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">yarn install</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">yarn docs:build</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">artifacts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">paths</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">public</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">only</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#032F62;">main</span></span></code></pre></div><h2 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-label="Permalink to &quot;Azure Static Web Apps&quot;">​</a></h2><ol><li>公式ドキュメントに従う。</li><li>設定ファイルにこれらの値を設定する（api_locationのような不要なものは削除する）。</li></ol><ul><li>app_location:/</li><li>output_location: docs/.vitepress/dist</li><li>app_build_command: yarn docs:build</li></ul><h2 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-label="Permalink to &quot;Firebase&quot;">​</a></h2><ol><li>プロジェクトのルートにfirebase.jsonと.firebasercを作成します。</li></ol><p>firebase.json:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;hosting&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;public&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ignore&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;hosting&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;public&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;docs/.vitepress/dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ignore&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>.firebaserc:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;projects&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;default&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;projects&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;default&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ol start="2"><li>yarn docs:buildを実行した後、このコマンドを実行するとデプロイされます。</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">firebase</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deploy</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">firebase</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deploy</span></span></code></pre></div><h2 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h2><ol><li>yarn docs:buildを実行した後、このコマンドを実行するとデプロイされます。</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">surge</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">surge</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs/.vitepress/dist</span></span></code></pre></div><h2 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-label="Permalink to &quot;Heroku&quot;">​</a></h2><ol><li>heroku-buildpack-static にあるドキュメントとガイドに従ってください。</li><li>プロジェクトのルートにstatic.jsonというファイルを作成し、以下の内容を記述します。</li></ol><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;root&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;root&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;docs/.vitepress/dist&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="layer0" tabindex="-1">Layer0 <a class="header-anchor" href="#layer0" aria-label="Permalink to &quot;Layer0&quot;">​</a></h2><p>Layer0を使ったVitePressアプリの作成とデプロイを参照してください。</p>`,47),e=[o];function t(c,r,i,E,y,d){return a(),n("div",null,e)}const b=s(p,[["render",t]]);export{h as __pageData,b as default};