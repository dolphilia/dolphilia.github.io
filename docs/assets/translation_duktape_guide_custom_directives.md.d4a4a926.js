import{_ as s,o as a,c as t,R as e}from"./chunks/framework.320df067.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/custom_directives.md","filePath":"translation/duktape/guide/custom_directives.md","lastUpdated":1676126774000}'),n={name:"translation/duktape/guide/custom_directives.md"},o=e(`<h2 id="custom_directives" tabindex="-1">カスタムディレクティブ <a class="header-anchor" href="#custom_directives" aria-label="Permalink to &quot;カスタムディレクティブ {#custom_directives}&quot;">​</a></h2><p>ECMAScript E5/E5.1 では、バージョンまたは実装固有の機能を有効にするために、ディレクティブプロローグを採用しています。標準では &quot;use strict &quot;という1つのディレクティブしか提供しませんが、asm.jsでは &quot;use asm &quot;を使用します。Duktapeのカスタムディレクティブについては、このセクションで説明します。</p><h3 id="use-duk-notail-ユースデューク・ノテイル" tabindex="-1">use duk notail （ユースデューク・ノテイル） <a class="header-anchor" href="#use-duk-notail-ユースデューク・ノテイル" aria-label="Permalink to &quot;use duk notail （ユースデューク・ノテイル）&quot;">​</a></h3><p>use duk notailディレクティブは、その関数が決してテールコールされてはならないことを示します。テールコールはコールスタックに影響を与えるので、スタックトレースで見ることができ、 (通常は無害です) また、例えば Duktape.act() を使ってコールスタックを検査する関数に影響を与えます。このディレクティブは、コールスタックが既知の形状であることを保証するために、特殊なケースで有用です。例</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">noTailCall</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">use duk notail</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>ネイティブ関数はテールコールされないので、対応する宣言は必要ない。</p>`,6),l=[o];function p(c,i,r,u,d,_){return a(),t("div",null,l)}const h=s(n,[["render",p]]);export{D as __pageData,h as default};