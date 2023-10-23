import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.92ce8a2a.js";const d=JSON.parse('{"title":"検索","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vitepress/theme-search.md","filePath":"translation/vitepress/theme-search.md","lastUpdated":1679373282000}'),p={name:"translation/vitepress/theme-search.md"},e=l(`<h1 id="検索" tabindex="-1">検索 <a class="header-anchor" href="#検索" aria-label="Permalink to &quot;検索&quot;">​</a></h1><p>VitePressでは、<a href="https://docsearch.algolia.com/docs/what-is-docsearch" target="_blank" rel="noreferrer">Algolia DocSearch</a>を使用したドキュメントサイトの検索をサポートしています。彼らのスタートガイドを参照してください。<code>.vitepress/config.ts</code>では、少なくとも以下のものを用意する必要があります。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    algolia: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    algolia: {</span></span>
<span class="line"><span style="color:#24292E;">      appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      indexName: </span><span style="color:#032F62;">&#39;...&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>DocSearchの対象にならない場合は、<a href="https://github.com/emersonbottero/vitepress-plugin-search" target="_blank" rel="noreferrer">コミュニティ・プラグイン</a>を使用するか、<a href="https://github.com/vuejs/vitepress/issues/670" target="_blank" rel="noreferrer">このGitHubスレッド</a>でカスタムソリューションを検討する必要があるかもしれません。</p><h2 id="i18n" tabindex="-1">i18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;i18n&quot;">​</a></h2><p>このような設定をすることで、多言語検索を利用することができます。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    algolia: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      locales: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        zh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          placeholder: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          translations: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            button: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">              buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            modal: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              searchBox: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                resetButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                cancelButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              startScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                recentSearchesTitle: </span><span style="color:#9ECBFF;">&#39;搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                noRecentSearchesText: </span><span style="color:#9ECBFF;">&#39;没有搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                saveRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;保存至搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                removeRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从搜索历史中移除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                favoriteSearchesTitle: </span><span style="color:#9ECBFF;">&#39;收藏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                removeFavoriteSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              errorScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                titleText: </span><span style="color:#9ECBFF;">&#39;无法获取结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                helpText: </span><span style="color:#9ECBFF;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                closeText: </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                searchByText: </span><span style="color:#9ECBFF;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">              noResultsScreen: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                suggestedQueryText: </span><span style="color:#9ECBFF;">&#39;你可以尝试查询&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                reportMissingResultsText: </span><span style="color:#9ECBFF;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                reportMissingResultsLinkText: </span><span style="color:#9ECBFF;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">              }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    algolia: {</span></span>
<span class="line"><span style="color:#24292E;">      appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      indexName: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      locales: {</span></span>
<span class="line"><span style="color:#24292E;">        zh: {</span></span>
<span class="line"><span style="color:#24292E;">          placeholder: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          translations: {</span></span>
<span class="line"><span style="color:#24292E;">            button: {</span></span>
<span class="line"><span style="color:#24292E;">              buttonText: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">              buttonAriaLabel: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            modal: {</span></span>
<span class="line"><span style="color:#24292E;">              searchBox: {</span></span>
<span class="line"><span style="color:#24292E;">                resetButtonTitle: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                resetButtonAriaLabel: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                cancelButtonText: </span><span style="color:#032F62;">&#39;取消&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                cancelButtonAriaLabel: </span><span style="color:#032F62;">&#39;取消&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              startScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                recentSearchesTitle: </span><span style="color:#032F62;">&#39;搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                noRecentSearchesText: </span><span style="color:#032F62;">&#39;没有搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                saveRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;保存至搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                removeRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;从搜索历史中移除&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                favoriteSearchesTitle: </span><span style="color:#032F62;">&#39;收藏&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                removeFavoriteSearchButtonTitle: </span><span style="color:#032F62;">&#39;从收藏中移除&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              errorScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                titleText: </span><span style="color:#032F62;">&#39;无法获取结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                helpText: </span><span style="color:#032F62;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              footer: {</span></span>
<span class="line"><span style="color:#24292E;">                selectText: </span><span style="color:#032F62;">&#39;选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                navigateText: </span><span style="color:#032F62;">&#39;切换&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                closeText: </span><span style="color:#032F62;">&#39;关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                searchByText: </span><span style="color:#032F62;">&#39;搜索提供者&#39;</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">              noResultsScreen: {</span></span>
<span class="line"><span style="color:#24292E;">                noResultsText: </span><span style="color:#032F62;">&#39;无法找到相关结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                suggestedQueryText: </span><span style="color:#032F62;">&#39;你可以尝试查询&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                reportMissingResultsText: </span><span style="color:#032F62;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                reportMissingResultsLinkText: </span><span style="color:#032F62;">&#39;点击反馈&#39;</span></span>
<span class="line"><span style="color:#24292E;">              }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p><a href="https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts" target="_blank" rel="noreferrer">これらのオプション</a>は、オーバーライドすることができます。これらのオプションの詳細については、Algoliaの公式ドキュメントを参照してください。</p>`,8),o=[e];function t(c,r,E,i,y,F){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{d as __pageData,u as default};
