import{_ as a,c as s,o as e,Q as o}from"./chunks/framework.44f152d8.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/modules.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/guide/modules.md"},n=o(`<h2 id="modules" tabindex="-1">モジュール <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;モジュール {#modules}&quot;">​</a></h2><h3 id="commonjsモジュールローディングフレームワーク" tabindex="-1">CommonJSモジュールローディングフレームワーク <a class="header-anchor" href="#commonjsモジュールローディングフレームワーク" aria-label="Permalink to &quot;CommonJSモジュールローディングフレームワーク&quot;">​</a></h3><p>モジュール・ローディングの多様なユースケースに単一のフレームワークで対応するのは難しいので、ビルトインのモジュール・ローディング・フレームワークはありません。Duktapeの配布物には、例えば、いくつかのオプションのモジュール・ローダー・ フレームワークが含まれています。</p><ul><li>module-duktape: CommonJS modules version 1.1.1 をベースにしたDuktape 1.x 互換ローダーで、module.exportsといくつかのDuktape固有のモジュール・オブジェクトのプロパティを追加でサポートしています。内部構造はmodules.rstで説明されており、例としてはモジュールの使い方を参照してください。このローダーはDuktape 1.xではビルトインでしたが、Duktape 2.xではオプショナルな追加機能として移動しました。</li><li>module-node: Node.jsのモジュールに対応したローダーです。Node.js的なモジュールの使い方の例を参照してください。</li></ul><p>また、独自のモジュール・ローダーを一から実装することもできます。上記のローダーは、DuktapeのパブリックAPIを使って実装されており、内部への特別なアクセスはありません。</p><p>モジュール・ローダーは require() 関数を提供し、以下のようにモジュールをロードすることができます。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> mod </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo/bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">mod</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">hello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>ローダーは、実際のモジュール解決やロードをユーザー提供のフックに抽象化し、様々な環境での組み込みを可能にします。例えば</p><ul><li>ファイルシステムのない環境でも、仮想的な組み込みファイルの集合からモジュールをロードすることで、モジュールロードを利用することができます。</li><li>Babelなどを使って、ロード中にオンザフライのトランスパイルが可能です。</li></ul><h3 id="es2015-モジュール" tabindex="-1">ES2015 モジュール <a class="header-anchor" href="#es2015-モジュール" aria-label="Permalink to &quot;ES2015 モジュール&quot;">​</a></h3><p>ES2015 のインポート/エクスポートと ES2015 モジュールは、現在サポートされていません。</p><h3 id="c-モジュール規約§。" tabindex="-1">C モジュール規約§。 <a class="header-anchor" href="#c-モジュール規約§。" aria-label="Permalink to &quot;C モジュール規約§。&quot;">​</a></h3><p>DLL から C モジュールをロードして初期化するための推奨される (必須ではありませんが) C モジュール規約があります: c-module-convention.rst.</p>`,13),t=[n];function p(r,c,i,d,u,m){return e(),s("div",null,t)}const _=a(l,[["render",p]]);export{D as __pageData,_ as default};