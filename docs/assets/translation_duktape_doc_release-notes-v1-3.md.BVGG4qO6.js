import{_ as e,c as n,o as a,a3 as t}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"Duktape 1.3 release notes","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/release-notes-v1-3.md","filePath":"translation/duktape/doc/release-notes-v1-3.md","lastUpdated":1682143322000}'),s={name:"translation/duktape/doc/release-notes-v1-3.md"},i=t(`<h1 id="duktape-1-3-release-notes" tabindex="-1">Duktape 1.3 release notes <a class="header-anchor" href="#duktape-1-3-release-notes" aria-label="Permalink to &quot;Duktape 1.3 release notes&quot;">​</a></h1><h2 id="release-overview" tabindex="-1">Release overview <a class="header-anchor" href="#release-overview" aria-label="Permalink to &quot;Release overview&quot;">​</a></h2><p>This release adds multiple new features and performance improvements:</p><ul><li>Extend buffer support with Khronos/ES6 TypedArray API (subset of ES6 API), Node.js Buffer API, external buffers, and related C API additions and changes; see <a href="http://wiki.duktape.org/HowtoBuffers.html" target="_blank" rel="noreferrer">http://wiki.duktape.org/HowtoBuffers.html</a></li><li>Move to use an external duk_config.h header to improve portability and make Duktape easier to use as a library; this is a work in progress, see <a href="https://github.com/svaarala/duktape/blob/master/doc/duk-config.rst" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/blob/master/doc/duk-config.rst</a></li><li>Support module.exports</li><li>Bytecode dump/load support, and related C API additions</li><li>New API calls <code>duk_instanceof()</code> and <code>duk_pnew()</code></li><li>Performance improvements for e.g. bytecode opcode dispatch, JSON parsing and serialization, and lexer/compiler buffer handling</li></ul><h2 id="upgrading-from-duktape-1-2-x" tabindex="-1">Upgrading from Duktape 1.2.x <a class="header-anchor" href="#upgrading-from-duktape-1-2-x" aria-label="Permalink to &quot;Upgrading from Duktape 1.2.x&quot;">​</a></h2><p>No action (other than recompiling) should be needed for most users to upgrade from Duktape v1.2.x. Note the following:</p><ul><li>There&#39;s a new header file, <code>duk_config.h</code>, which must be in the include path. A default duk_config.h file, compatible with Duktape 1.2, is present in dist src/ and src-separate/ directories.</li><li>Duktape.modLoaded internal format has changed as a result of module.exports support. This should not matter unless you need to interact with Duktape.modLoaded directly for some reason.</li><li>Behavior for a CommonJS module load error has changed: the offending module is now de-registered instead of a partial module being cached. This allows calling code to retry the failing <code>require()</code> call.</li><li>DUK_OPT_DEEP_C_STACK has been removed and Duktape defaults to deep stacks on all platforms. There are explicit C stack options for (rare) platforms with a shallow stack (e.g. DUK_USE_NATIVE_CALL_RECLIMIT, DUK_USE_COMPILER_RECLIMIT).</li><li>Debugger breakpoint triggering behavior has changed so that breakpoints are only triggered when execution enters the exact breakpoint line. Breakpoints on lines without any executable code are ignored.</li><li>Some example files have been renamed. For example, <code>examples/debug-trans-socket/duk_debug_trans_socket.*</code> have been renamed to <code>examples/debug-trans-socket/duk_trans_socket.*</code>.</li></ul><p>There are bug fixes and other minor behavioral changes which may affect some applications, see <code>RELEASES.rst</code> for details.</p><h2 id="known-issues" tabindex="-1">Known issues <a class="header-anchor" href="#known-issues" aria-label="Permalink to &quot;Known issues&quot;">​</a></h2><p>This release has the following known issues worth noting.</p><h3 id="ecmascript-features" tabindex="-1">ECMAScript features <a class="header-anchor" href="#ecmascript-features" aria-label="Permalink to &quot;ECMAScript features&quot;">​</a></h3><ul><li>Non-compliant behavior for array indices near 2G or 4G elements.</li><li>RegExp parser is strict and won&#39;t accept some real world RegExps which are technically not compliant with ECMAScript E5/E5.1 specification.</li><li>Final mantissa bit rounding issues in the internal number-to-string conversion.</li></ul><h3 id="portability-and-platforms" tabindex="-1">Portability and platforms <a class="header-anchor" href="#portability-and-platforms" aria-label="Permalink to &quot;Portability and platforms&quot;">​</a></h3><ul><li>On some older clang/llvm versions (e.g. Clang 3.3 on FreeBSD 10): when <code>-m32</code> is used, Duktape will end up using the 8-byte packed value representation but clang will generate incorrect code for union assignment (see <code>misc/clang_aliasing.c</code>). The issue can be detected by defining <code>DUK_OPT_SELF_TESTS</code>. A workaround is to avoid packed types in this case by defining <code>DUK_OPT_NO_PACKED_TVAL</code>.</li><li>On some older clang/llvm versions (e.g. Clang 3.3 on FreeBSD 10): compilation may produce a warning &quot;generic selections are a C11-specific feature&quot;. The warning should be harmless.</li><li>On some older clang/llvm versions (e.g. Clang 3.3 on FreeBSD 10): harmless compilation warning for &quot;duk_repl_isinf&quot; being unused.</li><li>On some GCC versions and compilation options you may get a warning &quot;variable idx_func might be clobbered by longjmp or vfork [-Wclobbered]&quot;. This warning seems spurious and causes no known problems.</li><li>GCC <code>-O4</code> may produce a warning &quot;assuming signed overflow does not occur when assuming that (X - c) &gt; X is always false&quot; for some assertions. This warning seems spurious and causes no known problems.</li><li>GCC <code>-pedantic</code> without <code>-std=c99</code> causes the <code>unsigned long long</code> type to be used by Duktape, and an associated warning about the type. This is harmless and most easily fixed by simply using <code>-std=c99</code>.</li><li>MSVC <code>/Wp64</code> produces harmless warnings when compiling for x86. The warnings are caused by 64-bit incompatible code enabled for 32-bit targets; when you actually compile for a 64-bit target, those code paths are not used so the warnings are irrelevant.</li><li>The JSON.stringify() fast path (DUK_USE_JSON_STRINGIFY_FASTPATH) assumes that &quot;%lld&quot; format specifier is correct for the &quot;unsigned long long&quot; type.</li></ul><h2 id="raw-issues-from-test-runs" tabindex="-1">Raw issues from test runs <a class="header-anchor" href="#raw-issues-from-test-runs" aria-label="Permalink to &quot;Raw issues from test runs&quot;">​</a></h2><h3 id="api-tests" tabindex="-1">API tests <a class="header-anchor" href="#api-tests" aria-label="Permalink to &quot;API tests&quot;">​</a></h3><p>See <code>testcase-known-issues.yaml</code>:</p><pre><code>test-to-number.c: fail; 15 diff lines; known issue: number parsing bug for strings containing NUL characters (e.g. &#39;\\u0000&#39;)
</code></pre><h3 id="ecmascript-tests" tabindex="-1">ECMAScript tests <a class="header-anchor" href="#ecmascript-tests" aria-label="Permalink to &quot;ECMAScript tests&quot;">​</a></h3><p>See <code>testcase-known-issues.yaml</code>:</p><pre><code>test-bi-array-proto-push: fail; 30 diff lines; known issue: array length above 2^32-1 not supported
test-bi-array-push-maxlen: fail; 17 diff lines; known issue: array length above 2^32-1 not supported
test-bi-date-tzoffset-brute-fi: fail; 12 diff lines; known issue: year 1970 deviates from expected, Duktape uses equiv. year for 1970 on purpose at the moment; requires special feature options: test case has been written for Finnish locale
test-bi-function-nonstd-caller-prop: fail; 178 diff lines; requires special feature options: DUK_OPT_NONSTD_FUNC_CALLER_PROPERTY
test-bi-global-parseint-oct: fail; 20 diff lines; known issue: non-standard octal behavior does not match V8/Rhino
test-bi-global-parseint: fail; 108 diff lines; known issue: rounding differences for parsing integers larger than 2^53
test-bi-json-dec-types: fail; 21 diff lines; known issue: &#39;\\x&#39; should be allowed by eval() but not by JSON.parse(), Duktape rejects &#39;\\x&#39; in both
test-bi-json-enc-proplist-dups: fail; 8 diff lines; known issue: JSON.stringify() can be given a property list to serialize; duplicates should be eliminated but Duktape (and other engines) will happily serialize a property multiple times
test-bi-number-proto-toexponential: fail; 75 diff lines; known issue: corner case rounding errors in toExponential()
test-bi-number-proto-tostring: fail; 46 diff lines; known issue: expect strings to be checked, but probably Duktape rounding issues
test-bi-regexp-gh39: fail; 5 diff lines; known issue: requires leniency for non-standard regexps
test-bug-dataview-buffer-prop: fail; 20 diff lines; known issue: DataView .buffer property misleading when DataView argument is not an ArrayBuffer (custom behavior)
test-bug-enum-shadow-nonenumerable: fail; 12 diff lines; known issue: corner case enumeration semantics, not sure what correct behavior is (test262 ch12/12.6/12.6.4/12.6.4-2)
test-bug-invalid-oct-as-dec: fail; 14 diff lines; known issue: V8/Rhino parse invalid octal constants as decimal values, Duktape doesn&#39;t at the moment
test-bug-json-parse-__proto__: fail; 18 diff lines; known issue: when ES6 __proto__ enabled, JSON.parse() parses &#39;__proto__&#39; property incorrectly when a specially crafted reviver is used
test-bug-numconv-1e23: fail; 10 diff lines; known issue: corner case in floating point parse rounding
test-bug-numconv-denorm-toprec: fail; 7 diff lines; known issue: in a denormal corner case toPrecision() can output a zero leading digit
test-bug-tonumber-u0000: fail; 7 diff lines; known issue: &#39;\\u0000&#39; should ToNumber() coerce to NaN, but now coerces to zero like an empty string
test-dev-bound-thread-start-func: fail; 13 diff lines; known issue: initial function of a new coroutine cannot be bound
test-dev-func-cons-args: fail; 18 diff lines; known issue: corner cases for &#39;new Function()&#39; when arguments and code are given as strings
test-dev-lightfunc-accessor: fail; 50 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-lightfunc-finalizer: fail; 8 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-lightfunc: fail; 462 diff lines; requires special feature options: DUK_OPT_LIGHTFUNC_BUILTINS
test-dev-yield-after-callapply: fail; 8 diff lines; known issue: yield() not allowed when function called via Function.prototype.(call|apply)()
test-lex-unterminated-hex-uni-escape: fail; 29 diff lines; known issue: unterminated hex escapes should be parsed leniently, e.g. &#39;\\uX&#39; -&gt; &#39;uX&#39; but Duktape now refuses to parse them
test-numconv-parse-misc: fail; 12 diff lines; known issue: rounding corner case for 1e+23 (parses/prints as 1.0000000000000001e+23)
test-numconv-tostring-gen: fail; 257 diff lines; known issue: rounding corner cases in number-to-string coercion
test-numconv-tostring-misc: fail; 6 diff lines; known issue: rounding corner case, 1e+23 string coerces to 1.0000000000000001e+23
test-regexp-empty-quantified: fail; 15 diff lines; known issue: a suitable empty quantified (e.g. &#39;(x*)*&#39;) causes regexp parsing to terminate due to step limit
test-regexp-invalid-charclass: fail; 7 diff lines; known issue: some invalid character classes are accepted (e.g. &#39;[\\d-z]&#39; and &#39;[z-x]&#39;)
test-regexp-nonstandard-patternchar: fail; 6 diff lines; known issue: other engines allow an unescaped brace to appear literally (e.g. /{/), Duktape does not (which seems correct but is against real world behavior)
test-stmt-for-in-lhs: fail; 29 diff lines; known issue: for-in allows some invalid left-hand-side expressions which cause a runtime ReferenceError instead of a compile-time SyntaxError (e.g. &#39;for (a+b in [0,1]) {...}&#39;)
</code></pre><h3 id="test262" tabindex="-1">test262 <a class="header-anchor" href="#test262" aria-label="Permalink to &quot;test262&quot;">​</a></h3><p>See <code>test262-status.rst</code> and <code>test262-known-issues.yaml</code>. With ECMAScript 6 and Intl module tests removed:</p><pre><code>ch12/12.6/12.6.4/12.6.4-2 in non-strict mode   // diagnosed: enumeration corner case issue, see test-bug-enum-shadow-nonenumerable.js
ch15/15.10/15.10.2/15.10.2.5/S15.10.2.5_A1_T5 in non-strict mode   // diagnosed: Duktape bug, matching /(a*)b\\1+/ against &#39;baaaac&#39; causes first capture to match the empty string; the &#39;\\1+&#39; part will then use the &#39;+&#39; quantifier over the empty string.  As there is no handling to empty quantified now, Duktape bails out with a RangeError.
ch15/15.10/15.10.2/15.10.2.9/S15.10.2.9_A1_T5 in non-strict mode   // diagnosed: Duktape bug, matching /(a*)b\\1+/ against &#39;baaac&#39; causes first capture to be empty, the &#39;\\1+&#39; part will then quantify over an empty string leading to Duktape RangeError (there is no proper handling for an empty quantified now)
ch15/15.4/15.4.4/15.4.4.10/S15.4.4.10_A3_T3 in non-strict mode   // diagnosed: probably Duktape bug related to long array corner cases or &#39;length&#39; sign handling (C typing?)
ch15/15.4/15.4.4/15.4.4.12/S15.4.4.12_A3_T3 in non-strict mode   // diagnosed: probably Duktape bug related to long array corner cases or &#39;length&#39; sign handling (C typing?)
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-5-12 in non-strict mode   // diagnosed: Array length over 2G, not supported right now
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-5-16 in non-strict mode   // diagnosed: Array length over 2G, not supported right now
ch15/15.4/15.4.4/15.4.4.14/15.4.4.14-9-9 in non-strict mode   // diagnosed: a.indexOf(&lt;n&gt;,4294967290) returns -1 for all indices n=2,3,4,5 but is supposed to return 4294967294 for n=2.  The cause is long array corner case handling, possibly signed length handling (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-5-12 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-5-16 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
ch15/15.4/15.4.4/15.4.4.15/15.4.4.15-8-9 in non-strict mode   // diagnosed: probably Duktape bug: long array corner cases (C typing?)
</code></pre>`,24),o=[i];function r(l,d,c,u,p,f){return a(),n("div",null,o)}const m=e(s,[["render",r]]);export{g as __pageData,m as default};