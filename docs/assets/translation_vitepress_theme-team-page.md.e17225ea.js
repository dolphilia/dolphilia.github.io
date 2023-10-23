import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.92ce8a2a.js";const F=JSON.parse('{"title":"Team Page","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-team-page.md","filePath":"translation/vitepress/theme-team-page.md","lastUpdated":1676126774000}'),p={name:"translation/vitepress/theme-team-page.md"},e=l(`<h1 id="team-page" tabindex="-1">Team Page <a class="header-anchor" href="#team-page" aria-label="Permalink to &quot;Team Page&quot;">​</a></h1><p>チームの紹介をしたい場合、Teamコンポーネントを使用してチームページを構築することができます。これらのコンポーネントを使用するには、2つの方法があります。ひとつはdocページに埋め込む方法、もうひとつは完全なチームページを作る方法です。</p><h2 id="チームメンバーをページ内に表示する" tabindex="-1">チームメンバーをページ内に表示する <a class="header-anchor" href="#チームメンバーをページ内に表示する" aria-label="Permalink to &quot;チームメンバーをページ内に表示する&quot;">​</a></h2><p>vitepress/theme から公開されている <code>&lt;VPTeamMembers&gt;</code> コンポーネントを使用すると、任意のページでチームメンバーのリストを表示することができます。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { VPTeamMembers } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">members</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: </span><span style="color:#9ECBFF;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Evan You&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Creator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;twitter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;"># Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;members&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { VPTeamMembers } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">members</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: </span><span style="color:#032F62;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Evan You&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Creator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;twitter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;"># Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;members&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>上記のようにすると、チームメンバーがカード風の要素で表示されます。以下のように表示されるはずです。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Evan You</span></span>
<span class="line"><span style="color:#e1e4e8;">Evan You</span></span>
<span class="line"><span style="color:#e1e4e8;">Creator</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Kia King Ishii</span></span>
<span class="line"><span style="color:#e1e4e8;">Kia King Ishii</span></span>
<span class="line"><span style="color:#e1e4e8;">Developer</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Evan You</span></span>
<span class="line"><span style="color:#24292e;">Evan You</span></span>
<span class="line"><span style="color:#24292e;">Creator</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Kia King Ishii</span></span>
<span class="line"><span style="color:#24292e;">Kia King Ishii</span></span>
<span class="line"><span style="color:#24292e;">Developer</span></span></code></pre></div><p><code>&lt;VPTeamMembers&gt;</code> コンポーネントには、SサイズとMサイズの2種類があります。好みによりますが、docページで使用する場合は、通常Sサイズの方がフィットするはずです。また、各メンバーに「説明」や「スポンサー」ボタンなどのプロパティを追加することができます。詳しくは <code>&lt;VPTeamMembers&gt;</code> をご覧ください。</p><p>チームメンバーをドキュメントページに埋め込むことは、小規模なチームで、チーム全体のページを用意するのが大変な場合や、ドキュメントのコンテキストを参照するために部分的にメンバーを紹介する場合に適しています。</p><p>チームメンバーの数が多い場合や、チームメンバーを表示するためのスペースを確保したい場合は、チームページ全体を作成することを検討してください。</p><h2 id="完全なチームページを作成する" tabindex="-1">完全なチームページを作成する <a class="header-anchor" href="#完全なチームページを作成する" aria-label="Permalink to &quot;完全なチームページを作成する&quot;">​</a></h2><p>docページにチームメンバーを追加する代わりに、カスタムホームページを作成する方法と同様に、完全なチームページを作成することもできます。</p><p>チームページを作成するには、まず、新しいmdファイルを作成します。ファイル名は特に問いませんが、ここではteam.mdとします。このファイルで、frontmatter オプションの layout: page を設定すると、TeamPage コンポーネントを使用してページ構造を構成することができます。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">layout: page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">members</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: </span><span style="color:#9ECBFF;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: </span><span style="color:#9ECBFF;">&#39;Evan You&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Creator&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;twitter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Our Team</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#E1E4E8;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;members&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">layout: page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">members</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: </span><span style="color:#032F62;">&#39;https://www.github.com/yyx990803.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    name: </span><span style="color:#032F62;">&#39;Evan You&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Creator&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/yyx990803&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;twitter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://twitter.com/youyuxi&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Our Team</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#24292E;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;members&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>完全なチームページを作成する場合、すべてのコンポーネントを <code>&lt;VPTeamPage&gt;</code> コンポーネントでラップすることを忘れないようにしてください。このコンポーネントによって、ネストされたすべてのチーム関連コンポーネントが、スペーシングのような適切なレイアウト構造を得ることができるようになります。</p><p><code>&lt;VPPageTitle&gt;</code> コンポーネントはページタイトルセクションを追加します。タイトルは <code>&lt;h1&gt;</code> 見出しです。titleと#leadスロットを使って、チームについてのドキュメントを作成します。</p><p><code>&lt;VPMembers&gt;</code> はドキュメントページで使用するときと同じように動作します。メンバーの一覧が表示されます。</p><h3 id="チームメンバーを分割するセクションを追加" tabindex="-1">チームメンバーを分割するセクションを追加 <a class="header-anchor" href="#チームメンバーを分割するセクションを追加" aria-label="Permalink to &quot;チームメンバーを分割するセクションを追加&quot;">​</a></h3><p>チームページには、「セクション」を追加することができます。例えば、コアチームメンバーやコミュニティパートナーなど、異なるタイプのチームメンバーがいるとします。これらのメンバーをセクションに分けることで、各グループの役割をより分かりやすく説明することができます。</p><p>そのためには、前回作成した team.md ファイルに <code>&lt;VPTeamPageSection&gt;</code> コンポーネントを追加してください。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">layout: page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageSection</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">coreMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">partners</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Our Team&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;medium&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;coreMembers&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Partners&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#members</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;partners&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">layout: page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageSection</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">coreMembers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">partners</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Our Team&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;medium&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;coreMembers&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Partners&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#members</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;partners&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><code>&lt;VPTeamPageSection&gt;</code> コンポーネントは、VPTeamPageTitle コンポーネントと同様に #title と #lead スロットを持つことができ、さらにチームのメンバーを表示するための #members スロットも持つことができます。</p><p>このとき、#members スロットに <code>&lt;VPTeamMembers&gt;</code> コンポーネントを配置することを忘れないように。</p><h2 id="vpteammembers-です。" tabindex="-1"><code>&lt;VPTeamMembers&gt;</code>です。 <a class="header-anchor" href="#vpteammembers-です。" aria-label="Permalink to &quot;\`&lt;VPTeamMembers&gt;\`です。&quot;">​</a></h2><p><code>&lt;VPTeamMembers&gt;</code> コンポーネントは、与えられたメンバーのリストを表示します。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;medium&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    ...</span></span>
<span class="line"><span style="color:#9ECBFF;">  ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;medium&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    { avatar: &#39;...&#39;, name: &#39;...&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    ...</span></span>
<span class="line"><span style="color:#032F62;">  ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Props</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 各メンバーの大きさ。デフォルトは \`medium\` である。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">size</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;small&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;medium&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 表示するメンバーのリスト。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">members</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TeamMember</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">TeamMember</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// メンバーのアバター画像。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">avatar</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// メンバーの名前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">name</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 会員名の下に表示されるタイトル。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 例：デベロッパー、ソフトウェアエンジニアなど</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">title</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 会員が所属する組織。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">org</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 組織のURLです。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">orgLink</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// メンバーに対する説明。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">desc</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ソーシャルリンク。例：GitHub、Twitterなど。ここでSocial Linksオブジェクトを渡すことができる。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// See: https://vitepress.vuejs.org/config/theme-configs.html#sociallinks</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">links</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SocialLink</span><span style="color:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 会員向けスポンサーページのURLです。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">sponsor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Props</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 各メンバーの大きさ。デフォルトは \`medium\` である。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">size</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;small&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;medium&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 表示するメンバーのリスト。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">members</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TeamMember</span><span style="color:#24292E;">[]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">TeamMember</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// メンバーのアバター画像。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">avatar</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// メンバーの名前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">name</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 会員名の下に表示されるタイトル。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 例：デベロッパー、ソフトウェアエンジニアなど</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">title</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 会員が所属する組織。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">org</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 組織のURLです。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">orgLink</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// メンバーに対する説明。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">desc</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ソーシャルリンク。例：GitHub、Twitterなど。ここでSocial Linksオブジェクトを渡すことができる。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// See: https://vitepress.vuejs.org/config/theme-configs.html#sociallinks</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">links</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SocialLink</span><span style="color:#24292E;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 会員向けスポンサーページのURLです。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">sponsor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="vpteampage" tabindex="-1"><code>&lt;VPTeamPage&gt;</code> <a class="header-anchor" href="#vpteampage" aria-label="Permalink to &quot;\`&lt;VPTeamPage&gt;\`&quot;">​</a></h2><p>完全なチームページを作成する際のルートコンポーネントです。1つのスロットしか受け付けません。渡されたすべてのチーム関連コンポーネントのスタイルを決定します。</p><h2 id="vpteampagetitle" tabindex="-1"><code>&lt;VPTeamPageTitle&gt;</code> <a class="header-anchor" href="#vpteampagetitle" aria-label="Permalink to &quot;\`&lt;VPTeamPageTitle&gt;\`&quot;">​</a></h2><p>ページの &quot;title &quot;セクションを追加します。一番最初の <code>&lt;VPTeamPage&gt;</code> の下で使用するとよいでしょう。titleと#leadのスロットを受け付ける。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Our Team</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#E1E4E8;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageTitle</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Our Team</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#24292E;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageTitle</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="vpteampagesection" tabindex="-1"><code>&lt;VPTeamPageSection&gt;</code> <a class="header-anchor" href="#vpteampagesection" aria-label="Permalink to &quot;\`&lt;VPTeamPageSection&gt;\`&quot;">​</a></h2><p>チームページ内に「セクション」を作成します。title、#lead、#membersのスロットを受け付ける。<code>&lt;VPTeamPage&gt;</code> の中にいくつでもセクションを追加することができます。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#title</span><span style="color:#E1E4E8;">&gt;Partners&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#lead</span><span style="color:#E1E4E8;">&gt;Lorem ipsum...&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#members</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">VPTeamMembers</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:members</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;data&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPageSection</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">VPTeamPage</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#title</span><span style="color:#24292E;">&gt;Partners&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#lead</span><span style="color:#24292E;">&gt;Lorem ipsum...&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#members</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">VPTeamMembers</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:members</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;data&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPageSection</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">VPTeamPage</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,35),o=[e];function t(c,r,E,y,i,m){return a(),n("div",null,o)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
