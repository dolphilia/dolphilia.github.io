import{_ as e,o as a,c as t,R as o}from"./chunks/framework.c2IVng1e.js";const f=JSON.parse('{"title":"Duktape 2.4 release notes","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/release-notes-v2-4.md","filePath":"translation/duktape/doc/release-notes-v2-4.md","lastUpdated":1682143322000}'),r={name:"translation/duktape/doc/release-notes-v2-4.md"},i=o('<h1 id="duktape-2-4-release-notes" tabindex="-1">Duktape 2.4 release notes <a class="header-anchor" href="#duktape-2-4-release-notes" aria-label="Permalink to &quot;Duktape 2.4 release notes&quot;">​</a></h1><h2 id="release-overview" tabindex="-1">Release overview <a class="header-anchor" href="#release-overview" aria-label="Permalink to &quot;Release overview&quot;">​</a></h2><p>Main changes in this release (see RELEASES.rst for full details):</p><ul><li>Symbol built-in is now enabled by default.</li><li>Add duk_push_bare_array() API call which pushes a bare Array, i.e. one that doesn&#39;t inherit from Array.prototype.</li><li>Add duk_to_stacktrace() and duk_safe_to_stacktrace() to make it easier to get stacktraces in C code.</li><li>Add duk_require_constructable() and duk_require_constructor_call().</li><li>Various fixes and portability improvements. Special thanks to Renata Hodovan for several issues found using Fuzzinator (<a href="https://github.com/renatahodovan/fuzzinator" target="_blank" rel="noreferrer">https://github.com/renatahodovan/fuzzinator</a>).</li></ul><h2 id="upgrading-from-duktape-2-3" tabindex="-1">Upgrading from Duktape 2.3 <a class="header-anchor" href="#upgrading-from-duktape-2-3" aria-label="Permalink to &quot;Upgrading from Duktape 2.3&quot;">​</a></h2><p>No action (other than recompiling) should be needed for most users to upgrade from Duktape v2.3.x. Note the following:</p><ul><li>Symbol built-in (Symbol(xxx), Symbol.toPrimitive, etc) is now enabled by default. If you don&#39;t want the built-in, disable <code>DUK_USE_SYMBOL_BUILTIN</code> in tools/configure.py.</li><li>The <code>DUK_USE_USER_DECLARE</code> config option was removed. If in use, replace with a <code>configure.py</code> fixup file/line.</li></ul>',7),n=[i];function s(l,d,u,c,p,_){return a(),t("div",null,n)}const m=e(r,[["render",s]]);export{f as __pageData,m as default};