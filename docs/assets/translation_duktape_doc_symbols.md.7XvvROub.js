import{_ as e,o as t,c as o,R as a}from"./chunks/framework.c2IVng1e.js";const m=JSON.parse('{"title":"ES2015 Symbols in Duktape 2.x","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/symbols.md","filePath":"translation/duktape/doc/symbols.md","lastUpdated":1682143322000}'),i={name:"translation/duktape/doc/symbols.md"},s=a('<h1 id="es2015-symbols-in-duktape-2-x" tabindex="-1">ES2015 Symbols in Duktape 2.x <a class="header-anchor" href="#es2015-symbols-in-duktape-2-x" aria-label="Permalink to &quot;ES2015 Symbols in Duktape 2.x&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>Duktape 2.x adds ES2015 Symbol support. Duktape 1.x internal keys are unified with the Symbol concept, and are considered a custom &quot;hidden symbol&quot; type which is not normally visible to ECMAScript code. C code can access hidden symbols, however.</p><p>The internal implementation is similar to existing internal keys. Symbols are represented as <code>duk_hstring</code> heap objects, with the string data containing a byte prefix which is invalid (extended) UTF-8 so that it can never occur for normal ECMAScript strings, or even strings with non-BMP codepoints. Object coerced strings have a special object class and the underlying symbol is stored in <code>_Value</code> similarly to e.g. Number object.</p><p>Representation basics:</p><ul><li>Symbols have an external type <code>DUK_TYPE_STRING</code>.</li><li>Symbols have internal type tag <code>DUK_TAG_STRING</code>.</li><li>Symbols can be distinguished internally from ordinary strings by looking up the <code>DUK_HSTRING_FLAG_SYMBOL</code> flag. Hidden symbols also have the <code>DUK_HSTRING_FLAG_HIDDEN</code> set.</li></ul><p>Behavior basics:</p><ul><li>Symbols are visible to ECMAScript code as required by ES2015 and later. Hidden symbols are not visible through e.g. <code>Object.getOwnPropertySymbols()</code>. They can only be accessed if a reference to the hidden symbol string is somehow available, e.g. via a C binding.</li><li>Symbols are visible to the public C API as strings: <code>duk_is_string()</code> is true, <code>duk_get_string()</code> returns a pointer to the symbol internal string representation, etc. C code can create symbols simply by pushing C strings with a specific format, see below.</li><li>While symbols are strings in the C API, coercion semantics are based on the ECMAScript behavior. For example, <code>duk_to_string()</code> applied to a symbol throws a <code>TypeError</code>.</li></ul><p>See:</p><ul><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol" target="_blank" rel="noreferrer">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol</a></li><li><a href="http://www.2ality.com/2014/12/es6-symbols.html" target="_blank" rel="noreferrer">http://www.2ality.com/2014/12/es6-symbols.html</a></li></ul><h2 id="internal-key-formats" tabindex="-1">Internal key formats <a class="header-anchor" href="#internal-key-formats" aria-label="Permalink to &quot;Internal key formats&quot;">​</a></h2><p>Initial bytes in the ranges [0x00,0x7F] and [0xC0,0xFE] are valid for Duktape&#39;s extended UTF-8 flavor. The byte 0xFF and the range [0x80,0xBF] are free to be used as symbol markers.</p><hr><p>Internal string format Description</p><p>&lt;ff&gt; anyValue Hidden symbol (Duktape specific) used by application code. Prior to Duktape 2.2 Duktape internal hidden symbols also used the 0xFF prefix followed by a capital letter (A-Z). Starting from Duktape 2.2 all 0xFF prefixed strings are reserved for application code.</p><p>&lt;80&gt; symbolDescription Global symbol with description &#39;symbolDescription&#39; created using Symbol.for().</p><p>&lt;81&gt; symbolDescription Local symbol with description &lt;ff&gt; uniqueSuffix &#39;symbolDescription&#39;. Trailing unique string makes the symbol unique. The unique suffix is opaque and chosen arbitrarily by Duktape. It&#39;s unique within a Duktape heap (across all global environments).</p><p>&lt;81&gt; &lt;ff&gt; uniqueSuffix Local symbol with an empty description. Unique suffix makes each such symbol unique. The unique suffix is arbitrary but must not contain the 0xFF byte.</p><p>&lt;81&gt; &lt;ff&gt; uniqueSuffix Local symbol with undefined description. &lt;ff&gt; ES2015 differentiates internally between symbols with an empty string description vs. symbols with an undefined description.</p><p>&lt;81&gt; symbolDescription Well known symbol with description &lt;ff&gt; &#39;symbolDescription&#39;. Well known symbols (like Symbol.iterator) are local symbols which are still shared across &quot;code realms&quot;. Any fixed suffix never colliding with runtime generated unique local symbols works, currently an empty suffix is used.</p><p>&lt;82&gt; anyValue Hidden symbol (Duktape specific) used by Duktape internals. User code should never use this byte prefix or rely on any Duktape internal hidden Symbols.</p><p>&lt;83 to be&gt; Reserved for future use, behavior is undefined (Duktape 2.1 interprets as Symbols, Duktape 2.2 does not, don&#39;t rely on either behavior.</p><p>&lt;bf&gt; Initial byte marker for bytecode dump format since Duktape 2.2.</p><p>&lt;00 to 7f&gt; Valid ASCII initial byte.</p><p>&lt;c0 to f7&gt; Valid standard UTF-8 (or CESU-8) initial byte.</p><p>&lt;f8 to fe&gt; Valid extended UTF-8 initial byte.</p><hr><p>There are public API macros (DUK_HIDDEN_SYMBOL() etc) to create symbol literals from C code.</p><h2 id="global-symbols" tabindex="-1">Global symbols <a class="header-anchor" href="#global-symbols" aria-label="Permalink to &quot;Global symbols&quot;">​</a></h2><p>Global symbols are the same across separate global environments and even across Duktape heaps. ES2015 Section 19.4.2.1:</p><blockquote><p>The GlobalSymbolRegistry is a List that is globally available. It is shared by all Code Realms.</p></blockquote><p>and ES2015 Section 8.2:</p><blockquote><p>Before it is evaluated, all ECMAScript code must be associated with a Realm. Conceptually, a realm consists of a set of intrinsic objects, an ECMAScript global environment, all of the ECMAScript code that is loaded within the scope of that global environment, and other associated state and resources.</p></blockquote><p>The current approach satisfies these simply by making a globally registered Symbol have a fixed format so that if a Symbol with the same description is created in another Duktape thread (or even Duktape heap), its internal representation will be identical. No explicit registry is maintained.</p><h2 id="well-known-symbols" tabindex="-1">Well-known symbols <a class="header-anchor" href="#well-known-symbols" aria-label="Permalink to &quot;Well-known symbols&quot;">​</a></h2><p>Well-known symbols (such as <code>Symbol.iterator</code>) are distinct from any local or global symbols. ES2015 Section 6.1.5.1:</p><blockquote><p>Well-known symbols are built-in Symbol values that are explicitly referenced by algorithms of this specification. They are typically used as the keys of properties whose values serve as extension points of a specification algorithm. Unless otherwise specified, well-known symbols values are shared by all Code Realms (8.2).</p></blockquote><p>The fixed representation described above ensures that well-known symbols are the same across all code realms (and even across Duktape heaps). The internal representation is essentially the same as for a unique local symbol, but the suffix that makes local symbols unique is missing. Thus, they behave like local symbols other than having a fixed representation.</p><h2 id="unifying-with-duktape-internal-keys" tabindex="-1">Unifying with Duktape internal keys <a class="header-anchor" href="#unifying-with-duktape-internal-keys" aria-label="Permalink to &quot;Unifying with Duktape internal keys&quot;">​</a></h2><p>Necessary changes to add symbol behavior:</p><ul><li>Strings with initial byte 0x80, 0x81, 0x82 or 0xFF are flagged as symbols (<code>DUK_HSTRING_FLAG_SYMBOL</code>). If the initial byte is 0xFF or 0x82, also the hidden symbol flag (<code>DUK_HSTRING_FLAG_HIDDEN</code>) is set.</li><li><code>typeof(sym)</code> should return &quot;symbol&quot; rather than string. This is done for Duktape hidden symbols too.</li><li><code>ToString(sym)</code> must be rejected for a symbol, while <code>String(sym)</code> must specifically check for symbols. Coercion needs to strip possible &quot;unique suffix&quot; when coming up with the Symbol description.</li><li>Symbols should be safe from accidental enumeration, JSON serialization, etc. This is actually already the case because internal keys are already excluded in Duktape 1.x.</li><li><code>Object.getOwnPropertySymbols(</code>) should return a list of symbol properties for an object, but filter out Duktape hidden symbols.</li><li><code>Object(sym)</code> should create an object with internal class &quot;Symbol&quot;, with the plain symbol value stored behind <code>_Value</code> (hidden symbol property) as for Number objects, etc.</li><li>Non-strict comparison needs to handle symbols. ToPrimitive() coercion is maybe enough to ensure <code>sym == Object(sym)</code> is accepted.</li><li>Property code needs to accept plain Symbols as is (treated like any other strings), and Symbol objects should look up their internal string value (instead of being coerced to e.g. <code>Symbol(symbolDescription)</code>. Current code just uses <code>ToString()</code> which causes a TypeError.</li><li>Dozens of similar semantics checks throughout the code base.</li></ul><h2 id="some-design-questions" tabindex="-1">Some design questions <a class="header-anchor" href="#some-design-questions" aria-label="Permalink to &quot;Some design questions&quot;">​</a></h2><h3 id="how-should-c-code-see-symbols" tabindex="-1">How should C code see Symbols? <a class="header-anchor" href="#how-should-c-code-see-symbols" aria-label="Permalink to &quot;How should C code see Symbols?&quot;">​</a></h3><p>Easiest approach:</p><ul><li>Symbols are not enumerated by duk_enum() unless requested. Either fold in with internal keys, add a separate flags. Maybe rename existing internal keys flag.</li><li>Property operations work with symbols and internal keys without distinction.</li><li>API call to create a symbol from C code. Hides the construction of the internal string.</li></ul><h3 id="best-naming-for-duktape-internal-keys" tabindex="-1">Best naming for Duktape internal keys <a class="header-anchor" href="#best-naming-for-duktape-internal-keys" aria-label="Permalink to &quot;Best naming for Duktape internal keys&quot;">​</a></h3><p>With <a href="https://github.com/svaarala/duktape/pull/979" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/pull/979</a> Duktape internal properties would become unreachable from ECMAScript code, even if you construct the internal string using a buffer and then try to use it as an object key. This offers more protection for sandboxing than ES2015 Symbols which can be enumerated.</p><p>Current naming for Duktape 1.x internal keys is &quot;hidden symbols&quot;. Some alternatives considered:</p><ul><li>Internal symbol: easy to confuse with specification symbols for example. One benefit would be that as a term close to &quot;internal property&quot;.</li><li>Hidden symbol: conveys semantics (assuming GH-797) pretty well.</li><li>Private symbol</li><li>Native symbol</li><li>Invisible symbol</li></ul>',49),l=[s];function n(r,c,d,b,u,p){return t(),o("div",null,l)}const y=e(i,[["render",n]]);export{m as __pageData,y as default};