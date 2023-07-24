import{_ as s,o as n,c as a,U as e}from"./chunks/framework.a0f12ab5.js";const y=JSON.parse('{"title":"utringbuffer: dynamic ring-buffer macros for C","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/utringbuffer.md","filePath":"translation/uthash/utringbuffer.md","lastUpdated":1687420112000}'),l={name:"translation/uthash/utringbuffer.md"},p=e(`<h1 id="utringbuffer-dynamic-ring-buffer-macros-for-c" tabindex="-1">utringbuffer: dynamic ring-buffer macros for C <a class="header-anchor" href="#utringbuffer-dynamic-ring-buffer-macros-for-c" aria-label="Permalink to &quot;utringbuffer: dynamic ring-buffer macros for C&quot;">​</a></h1><p>Arthur O&#39;Dwyer <a href="mailto:arthur.j.odwyer@gmail.com" target="_blank" rel="noreferrer">arthur.j.odwyer@gmail.com</a> v2.3.0, February 2021</p><p>Here&#39;s a link back to the <a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">https://github.com/troydhanson/uthash</a>[GitHub project page].</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>The functions in <code>utringbuffer.h</code> are based on the general-purpose array macros provided in <code>utarray.h</code>, so before reading this page you should read link:utarray.html[that page] first.</p><p>To use these macros in your own C program, copy both <code>utarray.h</code> and <code>utringbuffer.h</code> into your source directory and use <code>utringbuffer.h</code> in your program.</p><p>#include &quot;utringbuffer.h&quot;</p><p>The provided &lt;&lt;operations,operations&gt;&gt; are based loosely on the C++ STL vector methods. The ring-buffer data type supports construction (with a specified capacity), destruction, iteration, and push, but not pop; once the ring-buffer reaches full capacity, pushing a new element automatically pops and destroys the oldest element. The elements contained in the ring-buffer can be any simple datatype or structure.</p><p>Internally the ring-buffer contains a pre-allocated memory region into which the elements are copied, starting at position 0. When the ring-buffer reaches full capacity, the next element to be pushed is pushed at position 0, overwriting the oldest element, and the internal index representing the &quot;start&quot; of the ring-buffer is incremented. A ring-buffer, once full, can never become un-full.</p><p>Download</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">To download the \`utringbuffer.h\` header file,</span></span>
<span class="line"><span style="color:#A6ACCD;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#A6ACCD;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BSD licensed</span></span></code></pre></div><p>This software is made available under the link:license.html[revised BSD license]. It is free and open source.</p><p>Platforms</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">The &#39;utringbuffer&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> * Linux,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Usage</span></span>
<span class="line"><span style="color:#A6ACCD;">-----</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Declaration</span></span></code></pre></div><p>The ring-buffer itself has the data type <code>UT_ringbuffer</code>, regardless of the type of elements to be stored in it. It is declared like,</p><p>UT_ringbuffer *history;</p><p>New and free</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">The next step is to create the ring-buffer using \`utringbuffer_new\`. Later when you&#39;re</span></span>
<span class="line"><span style="color:#A6ACCD;">done with the ring-buffer, \`utringbuffer_free\` will free it and all its elements.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Push, etc</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;">The central features of the ring-buffer involve putting elements into it</span></span>
<span class="line"><span style="color:#A6ACCD;">and iterating over them. There are several &lt;&lt;operations,operations&gt;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">that deal with either single elements or ranges of elements at a</span></span>
<span class="line"><span style="color:#A6ACCD;">time. In the examples below we will use only the push operation to insert</span></span>
<span class="line"><span style="color:#A6ACCD;">elements.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Elements</span></span>
<span class="line"><span style="color:#A6ACCD;">--------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Support for dynamic arrays of integers or strings is especially easy. These are</span></span>
<span class="line"><span style="color:#A6ACCD;">best shown by example:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Integers</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;">This example makes a ring-buffer of integers, pushes 0-9 into it, then prints it</span></span>
<span class="line"><span style="color:#A6ACCD;">two different ways. Lastly it frees it.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.Integer elements</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utringbuffer.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  UT_ringbuffer *history;</span></span>
<span class="line"><span style="color:#A6ACCD;">  int i, *p;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_new(history, 7, &amp;ut_int_icd);</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(i=0; i &lt; 10; i++) utringbuffer_push_back(history, &amp;i);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for (p = (int*)utringbuffer_front(history);</span></span>
<span class="line"><span style="color:#A6ACCD;">       p != NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">       p = (int*)utringbuffer_next(history, p)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%d\\n&quot;, *p);  /* prints &quot;3 4 5 6 7 8 9&quot; */</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for (i=0; i &lt; utringbuffer_len(history); i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    p = utringbuffer_eltptr(history, i);</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%d\\n&quot;, *p);  /* prints &quot;3 4 5 6 7 8 9&quot; */</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_free(history);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The second argument to \`utringbuffer_push_back\` is always a &#39;pointer&#39; to the type</span></span>
<span class="line"><span style="color:#A6ACCD;">(so a literal cannot be used). So for integers, it is an \`int*\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Strings</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;">In this example we make a ring-buffer of strings, push two strings into it, print</span></span>
<span class="line"><span style="color:#A6ACCD;">it and free it.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.String elements</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utringbuffer.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  UT_ringbuffer *strs;</span></span>
<span class="line"><span style="color:#A6ACCD;">  char *s, **p;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_new(strs, 7, &amp;ut_str_icd);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  s = &quot;hello&quot;; utringbuffer_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#A6ACCD;">  s = &quot;world&quot;; utringbuffer_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#A6ACCD;">  p = NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">  while ( (p=(char**)utringbuffer_next(strs,p))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%s\\n&quot;,*p);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_free(strs);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">In this example, since the element is a \`char*\`, we pass a pointer to it</span></span>
<span class="line"><span style="color:#A6ACCD;">(\`char**\`) as the second argument to \`utringbuffer_push_back\`. Note that &quot;push&quot; makes</span></span>
<span class="line"><span style="color:#A6ACCD;">a copy of the source string and pushes that copy into the array.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">About UT_icd</span></span></code></pre></div><p>Arrays can be made of any type of element, not just integers and strings. The elements can be basic types or structures. Unless you&#39;re dealing with integers and strings (which use pre-defined <code>ut_int_icd</code> and <code>ut_str_icd</code>), you&#39;ll need to define a <code>UT_icd</code> helper structure. This structure contains everything that utringbuffer (or utarray) needs to initialize, copy or destruct elements.</p><p>typedef struct { size_t sz; init_f *init; ctor_f *copy; dtor_f *dtor; } UT_icd;</p><p>The three function pointers <code>init</code>, <code>copy</code>, and <code>dtor</code> have these prototypes:</p><p>typedef void (ctor_f)(void *dst, const void *src); typedef void (dtor_f)(void *elt); typedef void (init_f)(void *elt);</p><p>The <code>sz</code> is just the size of the element being stored in the array.</p><p>The <code>init</code> function is used by utarray but is never used by utringbuffer; you may safely set it to any value you want.</p><p>The <code>copy</code> function is used whenever an element is copied into the buffer. It is invoked during <code>utringbuffer_push_back</code>. If <code>copy</code> is <code>NULL</code>, it defaults to a bitwise copy using memcpy.</p><p>The <code>dtor</code> function is used to clean up an element that is being removed from the buffer. It may be invoked due to <code>utringbuffer_push_back</code> (on the oldest element in the buffer), <code>utringbuffer_clear</code>, <code>utringbuffer_done</code>, or <code>utringbuffer_free</code>. If the elements need no cleanup upon destruction, <code>dtor</code> may be <code>NULL</code>.</p><p>Scalar types</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">The next example uses \`UT_icd\` with all its defaults to make a ring-buffer of</span></span>
<span class="line"><span style="color:#A6ACCD;">\`long\` elements. This example pushes two longs into a buffer of capacity 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">prints the contents of the buffer (which is to say, the most recent value</span></span>
<span class="line"><span style="color:#A6ACCD;">pushed), and then frees the buffer.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.long elements</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utringbuffer.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  UT_ringbuffer *nums;</span></span>
<span class="line"><span style="color:#A6ACCD;">  long l, *p;</span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_new(nums, 1, &amp;long_icd);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  l=1; utringbuffer_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#A6ACCD;">  l=2; utringbuffer_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  p=NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">  while((p = (long*)utringbuffer_next(nums,p))) printf(&quot;%ld\\n&quot;, *p);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_free(nums);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Structures</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Structures can be used as utringbuffer elements. If the structure requires no</span></span>
<span class="line"><span style="color:#A6ACCD;">special effort to initialize, copy or destruct, we can use \`UT_icd\` with all</span></span>
<span class="line"><span style="color:#A6ACCD;">its defaults. This example shows a structure that consists of two integers. Here</span></span>
<span class="line"><span style="color:#A6ACCD;">we push two values, print them and free the buffer.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.Structure (simple)</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utringbuffer.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">typedef struct {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    int b;</span></span>
<span class="line"><span style="color:#A6ACCD;">} intpair_t;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  UT_ringbuffer *pairs;</span></span>
<span class="line"><span style="color:#A6ACCD;">  intpair_t ip, *p;</span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_new(pairs, 7, &amp;intpair_icd);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ip.a=1;  ip.b=2;  utringbuffer_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ip.a=10; ip.b=20; utringbuffer_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  for(p=(intpair_t*)utringbuffer_front(pairs);</span></span>
<span class="line"><span style="color:#A6ACCD;">      p!=NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">      p=(intpair_t*)utringbuffer_next(pairs,p)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%d %d\\n&quot;, p-&gt;a, p-&gt;b);</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_free(pairs);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The real utility of \`UT_icd\` is apparent when the elements stored in the</span></span>
<span class="line"><span style="color:#A6ACCD;">ring-buffer are structures that require special work to initialize, copy or</span></span>
<span class="line"><span style="color:#A6ACCD;">destruct.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">For example, when a structure contains pointers to related memory areas that</span></span>
<span class="line"><span style="color:#A6ACCD;">need to be copied when the structure is copied (and freed when the structure is</span></span>
<span class="line"><span style="color:#A6ACCD;">freed), we can use custom \`init\`, \`copy\`, and \`dtor\` members in the \`UT_icd\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Here we take an example of a structure that contains an integer and a string.</span></span>
<span class="line"><span style="color:#A6ACCD;">When this element is copied (such as when an element is pushed),</span></span>
<span class="line"><span style="color:#A6ACCD;">we want to &quot;deep copy&quot; the \`s\` pointer (so the original element and the new</span></span>
<span class="line"><span style="color:#A6ACCD;">element point to their own copies of \`s\`). When an element is destructed, we</span></span>
<span class="line"><span style="color:#A6ACCD;">want to &quot;deep free&quot; its copy of \`s\`. Lastly, this example is written to work</span></span>
<span class="line"><span style="color:#A6ACCD;">even if \`s\` has the value \`NULL\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.Structure (complex)</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utringbuffer.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">typedef struct {</span></span>
<span class="line"><span style="color:#A6ACCD;">    int a;</span></span>
<span class="line"><span style="color:#A6ACCD;">    char *s;</span></span>
<span class="line"><span style="color:#A6ACCD;">} intchar_t;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void intchar_copy(void *_dst, const void *_src) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  intchar_t *dst = (intchar_t*)_dst, *src = (intchar_t*)_src;</span></span>
<span class="line"><span style="color:#A6ACCD;">  dst-&gt;a = src-&gt;a;</span></span>
<span class="line"><span style="color:#A6ACCD;">  dst-&gt;s = src-&gt;s ? strdup(src-&gt;s) : NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">void intchar_dtor(void *_elt) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  intchar_t *elt = (intchar_t*)_elt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  free(elt-&gt;s);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  UT_ringbuffer *intchars;</span></span>
<span class="line"><span style="color:#A6ACCD;">  intchar_t ic, *p;</span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_new(intchars, 2, &amp;intchar_icd);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  ic.a=1; ic.s=&quot;hello&quot;; utringbuffer_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ic.a=2; ic.s=&quot;world&quot;; utringbuffer_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ic.a=3; ic.s=&quot;peace&quot;; utringbuffer_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  p=NULL;</span></span>
<span class="line"><span style="color:#A6ACCD;">  while( (p=(intchar_t*)utringbuffer_next(intchars,p))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%d %s\\n&quot;, p-&gt;a, (p-&gt;s ? p-&gt;s : &quot;null&quot;));</span></span>
<span class="line"><span style="color:#A6ACCD;">    /* prints &quot;2 world 3 peace&quot; */</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  utringbuffer_free(intchars);</span></span>
<span class="line"><span style="color:#A6ACCD;">  return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[[operations]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Reference</span></span>
<span class="line"><span style="color:#A6ACCD;">---------</span></span>
<span class="line"><span style="color:#A6ACCD;">This table lists all the utringbuffer operations. These are loosely based on the C++</span></span>
<span class="line"><span style="color:#A6ACCD;">vector class.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Operations</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">|===============================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_new(UT_ringbuffer *a, int n, UT_icd *icd)  | allocate a new ringbuffer</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_free(UT_ringbuffer *a)                     | free an allocated ringbuffer</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_init(UT_ringbuffer *a, int n, UT_icd *icd) | init a ringbuffer (non-alloc)</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_done(UT_ringbuffer *a)                     | dispose of a ringbuffer (non-alloc)</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_clear(UT_ringbuffer *a)                    | clear all elements from a, making it empty</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_push_back(UT_ringbuffer *a, element *p)    | push element p onto a</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_len(UT_ringbuffer *a)                      | get length of a</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_empty(UT_ringbuffer *a)                    | get whether a is empty</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_full(UT_ringbuffer *a)                     | get whether a is full</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_eltptr(UT_ringbuffer *a, int j)            | get pointer of element from index</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_eltidx(UT_ringbuffer *a, element *e)       | get index of element from pointer</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_front(UT_ringbuffer *a)                    | get oldest element of a</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_next(UT_ringbuffer *a, element *e)         | get element of a following e (front if e is NULL)</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_prev(UT_ringbuffer *a, element *e)         | get element of a before e (back if e is NULL)</span></span>
<span class="line"><span style="color:#A6ACCD;">| utringbuffer_back(UT_ringbuffer *a)                     | get newest element of a</span></span>
<span class="line"><span style="color:#A6ACCD;">|===============================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Notes</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1. \`utringbuffer_new\` and \`utringbuffer_free\` are used to allocate a new ring-buffer</span></span>
<span class="line"><span style="color:#A6ACCD;">   and to free it,</span></span>
<span class="line"><span style="color:#A6ACCD;">   while \`utringbuffer_init\` and \`utringbuffer_done\` can be used if the UT_ringbuffer</span></span>
<span class="line"><span style="color:#A6ACCD;">   is already allocated and just needs to be initialized or have its internal resources</span></span>
<span class="line"><span style="color:#A6ACCD;">   freed.</span></span>
<span class="line"><span style="color:#A6ACCD;">2. Both \`utringbuffer_new\` and \`utringbuffer_init\` take a second parameter \`n\` indicating</span></span>
<span class="line"><span style="color:#A6ACCD;">   the capacity of the ring-buffer, that is, the size at which the ring-buffer is considered</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;full&quot; and begins to overwrite old elements with newly pushed ones.</span></span>
<span class="line"><span style="color:#A6ACCD;">3. Once a ring-buffer has become full, it will never again become un-full except by</span></span>
<span class="line"><span style="color:#A6ACCD;">   means of \`utringbuffer_clear\`. There is no way to &quot;pop&quot; a single old item from the</span></span>
<span class="line"><span style="color:#A6ACCD;">   front of the ring-buffer. You can simulate this ability by maintaining a separate</span></span>
<span class="line"><span style="color:#A6ACCD;">   integer count of the number of &quot;logically popped elements&quot;, and starting your iteration</span></span>
<span class="line"><span style="color:#A6ACCD;">   with \`utringbuffer_eltptr(a, popped_count)\` instead of with \`utringbuffer_front(a)\`.</span></span>
<span class="line"><span style="color:#A6ACCD;">4. Pointers to elements (obtained using \`utringbuffer_eltptr\`, \`utringbuffer_front\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">   \`utringbuffer_next\`, etc.) are not generally invalidated by \`utringbuffer_push_back\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">   because utringbuffer does not perform reallocation; however, a pointer to the oldest</span></span>
<span class="line"><span style="color:#A6ACCD;">   element may suddenly turn into a pointer to the &#39;newest&#39; element if</span></span>
<span class="line"><span style="color:#A6ACCD;">   \`utringbuffer_push_back\` is called while the buffer is full.</span></span>
<span class="line"><span style="color:#A6ACCD;">5. The elements of a ring-buffer are stored in contiguous memory, but once the ring-buffer</span></span>
<span class="line"><span style="color:#A6ACCD;">   has become full, it is no longer true that the elements are contiguously in order from</span></span>
<span class="line"><span style="color:#A6ACCD;">   oldest to newest; i.e., \`(element *)utringbuffer_front(a) + utringbuffer_len(a)-1\` is</span></span>
<span class="line"><span style="color:#A6ACCD;">   not generally equal to \`(element *)utringbuffer_back(a)\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// vim: set nowrap syntax=asciidoc:</span></span></code></pre></div>`,28),t=[p];function o(r,i,c,C,A,u){return n(),a("div",null,t)}const d=s(l,[["render",o]]);export{y as __pageData,d as default};
