import{_ as e,o as t,c as a,R as n}from"./chunks/framework.c2IVng1e.js";const f=JSON.parse('{"title":"Status of underscore testcases","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/underscore-status.md","filePath":"translation/duktape/doc/underscore-status.md","lastUpdated":1682143322000}'),s={name:"translation/duktape/doc/underscore-status.md"},r=n(`<h1 id="status-of-underscore-testcases" tabindex="-1">Status of underscore testcases <a class="header-anchor" href="#status-of-underscore-testcases" aria-label="Permalink to &quot;Status of underscore testcases&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Underscore testcases exercise some core language features but also contain some browser specific stuff. There are also some asynchronous tests which cannot be executed directly. Underscore uses a unit test framework which needs to be emulated, see <code>underscore-test-shim.js</code>.</p><p>This document summarizes the currently failing testcases and why they fail.</p><h2 id="summary-of-failure-reasons" tabindex="-1">Summary of failure reasons <a class="header-anchor" href="#summary-of-failure-reasons" aria-label="Permalink to &quot;Summary of failure reasons&quot;">​</a></h2><ul><li>Because asyncTest() is unimplemented, all async tests are skipped now (such tests are used in the Functions module).</li><li>Several template testcases fail (see below), not diagnosed yet. The same errors occur with Rhino, so the culprit is probably the shim or the test cases themselves.</li><li>Interpolate bug, see below.</li></ul><h2 id="individual-errors" tabindex="-1">Individual errors <a class="header-anchor" href="#individual-errors" aria-label="Permalink to &quot;Individual errors&quot;">​</a></h2><h3 id="template-provides-the-generated-function-source-when-a-syntaxerror-occurs" tabindex="-1">_.template provides the generated function source, when a SyntaxError occurs <a class="header-anchor" href="#template-provides-the-generated-function-source-when-a-syntaxerror-occurs" aria-label="Permalink to &quot;\\_.template provides the generated function source, when a SyntaxError occurs&quot;">​</a></h3><p>In module utility:</p><pre><code>*** _.template provides the generated function source, when a SyntaxError occurs
FAILURE undefined
</code></pre><h3 id="template-handles-u2028-u2029" tabindex="-1">_.template handles u2028 &amp; u2029 <a class="header-anchor" href="#template-handles-u2028-u2029" aria-label="Permalink to &quot;\\_.template handles u2028 &amp; u2029&quot;">​</a></h3><p>In module utility:</p><pre><code>*** _.template handles \\u2028 &amp; \\u2029
FAILURE undefined
</code></pre><h3 id="result-calls-functions-and-returns-primitives" tabindex="-1">result calls functions and returns primitives <a class="header-anchor" href="#result-calls-functions-and-returns-primitives" aria-label="Permalink to &quot;result calls functions and returns primitives&quot;">​</a></h3><p>In module utility:</p><pre><code>*** result calls functions and returns primitives
*** _.templateSettings.variable
FAILURE undefined
FAILURE undefined
</code></pre><h3 id="_547-templatesettings-is-unchanged-by-custom-settings" tabindex="-1">#547 - _.templateSettings is unchanged by custom settings. <a class="header-anchor" href="#_547-templatesettings-is-unchanged-by-custom-settings" aria-label="Permalink to &quot;#547 - \\_.templateSettings is unchanged by custom settings.&quot;">​</a></h3><p>In module utility:</p><pre><code>*** #547 - _.templateSettings is unchanged by custom settings.
FAILURE undefined
FAILURE undefined
</code></pre><h3 id="_556-undefined-template-variables" tabindex="-1">#556 - undefined template variables. <a class="header-anchor" href="#_556-undefined-template-variables" aria-label="Permalink to &quot;#556 - undefined template variables.&quot;">​</a></h3><p>In module utility:</p><pre><code>*** #556 - undefined template variables.
FAILURE undefined
FAILURE undefined
FAILURE undefined
FAILURE undefined
FAILURE undefined
FAILURE undefined
FAILURE undefined
FAILURE undefined
</code></pre><h3 id="interpolate-evaluates-code-only-once" tabindex="-1">interpolate evaluates code only once. <a class="header-anchor" href="#interpolate-evaluates-code-only-once" aria-label="Permalink to &quot;interpolate evaluates code only once.&quot;">​</a></h3><p>In module utility:</p><pre><code>*** interpolate evaluates code only once.
TEST CASE FAILED: assert count mismatch (0 vs 2)
</code></pre>`,25),o=[r];function i(d,u,l,c,h,p){return t(),a("div",null,o)}const _=e(s,[["render",i]]);export{f as __pageData,_ as default};