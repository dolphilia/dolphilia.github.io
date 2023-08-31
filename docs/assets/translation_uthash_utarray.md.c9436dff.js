import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"utarray: dynamic array macros for C","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/utarray.md","filePath":"translation/uthash/utarray.md","lastUpdated":1687420112000}'),l={name:"translation/uthash/utarray.md"},p=e(`<h1 id="utarray-dynamic-array-macros-for-c" tabindex="-1">utarray: dynamic array macros for C <a class="header-anchor" href="#utarray-dynamic-array-macros-for-c" aria-label="Permalink to &quot;utarray: dynamic array macros for C&quot;">​</a></h1><p>Troy D. Hanson <a href="mailto:tdh@tkhanson.net" target="_blank" rel="noreferrer">tdh@tkhanson.net</a> v2.3.0, February 2021</p><p>Here&#39;s a link back to the <a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">https://github.com/troydhanson/uthash</a>[GitHub project page].</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>A set of general-purpose dynamic array macros for C structures are included with uthash in <code>utarray.h</code>. To use these macros in your own C program, just copy <code>utarray.h</code> into your source directory and use it in your programs.</p><p>#include &quot;utarray.h&quot;</p><p>The dynamic array supports basic operations such as push, pop, and erase on the array elements. These array elements can be any simple datatype or structure. The array &lt;&lt;operations,operations&gt;&gt; are based loosely on the C++ STL vector methods.</p><p>Internally the dynamic array contains a contiguous memory region into which the elements are copied. This buffer is grown as needed using <code>realloc</code> to accommodate all the data that is pushed into it.</p><p>Download</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">To download the \`utarray.h\` header file,</span></span>
<span class="line"><span style="color:#e1e4e8;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#e1e4e8;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BSD licensed</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">To download the \`utarray.h\` header file,</span></span>
<span class="line"><span style="color:#24292e;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#24292e;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BSD licensed</span></span></code></pre></div><p>This software is made available under the link:license.html[revised BSD license]. It is free and open source.</p><p>Platforms</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The &#39;utarray&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> * Linux,</span></span>
<span class="line"><span style="color:#e1e4e8;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#e1e4e8;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage</span></span>
<span class="line"><span style="color:#e1e4e8;">-----</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Declaration</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">The &#39;utarray&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> * Linux,</span></span>
<span class="line"><span style="color:#24292e;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#24292e;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage</span></span>
<span class="line"><span style="color:#24292e;">-----</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Declaration</span></span></code></pre></div><p>The array itself has the data type <code>UT_array</code>, regardless of the type of elements to be stored in it. It is declared like,</p><p>UT_array *nums;</p><p>New and free</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The next step is to create the array using \`utarray_new\`. Later when you&#39;re</span></span>
<span class="line"><span style="color:#e1e4e8;">done with the array, \`utarray_free\` will free it and all its elements.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Push, pop, etc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">The next step is to create the array using \`utarray_new\`. Later when you&#39;re</span></span>
<span class="line"><span style="color:#24292e;">done with the array, \`utarray_free\` will free it and all its elements.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Push, pop, etc</span></span></code></pre></div><p>The central features of the utarray involve putting elements into it, taking them out, and iterating over them. There are several &lt;&lt;operations,operations&gt;&gt; to pick from that deal with either single elements or ranges of elements at a time. In the examples below we will use only the push operation to insert elements.</p><h2 id="elements" tabindex="-1">Elements <a class="header-anchor" href="#elements" aria-label="Permalink to &quot;Elements&quot;">​</a></h2><p>Support for dynamic arrays of integers or strings is especially easy. These are best shown by example:</p><p>Integers</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">This example makes a utarray of integers, pushes 0-9 into it, then prints it.</span></span>
<span class="line"><span style="color:#e1e4e8;">Lastly it frees it.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.Integer elements</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  UT_array *nums;</span></span>
<span class="line"><span style="color:#e1e4e8;">  int i, *p;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_new(nums,&amp;ut_int_icd);</span></span>
<span class="line"><span style="color:#e1e4e8;">  for(i=0; i &lt; 10; i++) utarray_push_back(nums,&amp;i);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  for(p=(int*)utarray_front(nums);</span></span>
<span class="line"><span style="color:#e1e4e8;">      p!=NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">      p=(int*)utarray_next(nums,p)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;%d\\n&quot;,*p);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_free(nums);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The second argument to \`utarray_push_back\` is always a &#39;pointer&#39; to the type</span></span>
<span class="line"><span style="color:#e1e4e8;">(so a literal cannot be used). So for integers, it is an \`int*\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Strings</span></span>
<span class="line"><span style="color:#e1e4e8;">~~~~~~~</span></span>
<span class="line"><span style="color:#e1e4e8;">In this example we make a utarray of strings, push two strings into it, print</span></span>
<span class="line"><span style="color:#e1e4e8;">it and free it.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.String elements</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  UT_array *strs;</span></span>
<span class="line"><span style="color:#e1e4e8;">  char *s, **p;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_new(strs,&amp;ut_str_icd);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  s = &quot;hello&quot;; utarray_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#e1e4e8;">  s = &quot;world&quot;; utarray_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#e1e4e8;">  p = NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">  while ( (p=(char**)utarray_next(strs,p))) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;%s\\n&quot;,*p);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_free(strs);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">In this example, since the element is a \`char*\`, we pass a pointer to it</span></span>
<span class="line"><span style="color:#e1e4e8;">(\`char**\`) as the second argument to \`utarray_push_back\`. Note that &quot;push&quot; makes</span></span>
<span class="line"><span style="color:#e1e4e8;">a copy of the source string and pushes that copy into the array.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">About UT_icd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">This example makes a utarray of integers, pushes 0-9 into it, then prints it.</span></span>
<span class="line"><span style="color:#24292e;">Lastly it frees it.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Integer elements</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main() {</span></span>
<span class="line"><span style="color:#24292e;">  UT_array *nums;</span></span>
<span class="line"><span style="color:#24292e;">  int i, *p;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_new(nums,&amp;ut_int_icd);</span></span>
<span class="line"><span style="color:#24292e;">  for(i=0; i &lt; 10; i++) utarray_push_back(nums,&amp;i);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  for(p=(int*)utarray_front(nums);</span></span>
<span class="line"><span style="color:#24292e;">      p!=NULL;</span></span>
<span class="line"><span style="color:#24292e;">      p=(int*)utarray_next(nums,p)) {</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;%d\\n&quot;,*p);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_free(nums);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The second argument to \`utarray_push_back\` is always a &#39;pointer&#39; to the type</span></span>
<span class="line"><span style="color:#24292e;">(so a literal cannot be used). So for integers, it is an \`int*\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Strings</span></span>
<span class="line"><span style="color:#24292e;">~~~~~~~</span></span>
<span class="line"><span style="color:#24292e;">In this example we make a utarray of strings, push two strings into it, print</span></span>
<span class="line"><span style="color:#24292e;">it and free it.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.String elements</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main() {</span></span>
<span class="line"><span style="color:#24292e;">  UT_array *strs;</span></span>
<span class="line"><span style="color:#24292e;">  char *s, **p;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_new(strs,&amp;ut_str_icd);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  s = &quot;hello&quot;; utarray_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#24292e;">  s = &quot;world&quot;; utarray_push_back(strs, &amp;s);</span></span>
<span class="line"><span style="color:#24292e;">  p = NULL;</span></span>
<span class="line"><span style="color:#24292e;">  while ( (p=(char**)utarray_next(strs,p))) {</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;%s\\n&quot;,*p);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_free(strs);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">In this example, since the element is a \`char*\`, we pass a pointer to it</span></span>
<span class="line"><span style="color:#24292e;">(\`char**\`) as the second argument to \`utarray_push_back\`. Note that &quot;push&quot; makes</span></span>
<span class="line"><span style="color:#24292e;">a copy of the source string and pushes that copy into the array.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">About UT_icd</span></span></code></pre></div><p>Arrays be made of any type of element, not just integers and strings. The elements can be basic types or structures. Unless you&#39;re dealing with integers and strings (which use pre-defined <code>ut_int_icd</code> and <code>ut_str_icd</code>), you&#39;ll need to define a <code>UT_icd</code> helper structure. This structure contains everything that utarray needs to initialize, copy or destruct elements.</p><p>typedef struct { size_t sz; init_f *init; ctor_f *copy; dtor_f *dtor; } UT_icd;</p><p>The three function pointers <code>init</code>, <code>copy</code>, and <code>dtor</code> have these prototypes:</p><p>typedef void (ctor_f)(void *dst, const void *src); typedef void (dtor_f)(void *elt); typedef void (init_f)(void *elt);</p><p>The <code>sz</code> is just the size of the element being stored in the array.</p><p>The <code>init</code> function will be invoked whenever utarray needs to initialize an empty element. This only happens as a byproduct of <code>utarray_resize</code> or <code>utarray_extend_back</code>. If <code>init</code> is <code>NULL</code>, it defaults to zero filling the new element using memset.</p><p>The <code>copy</code> function is used whenever an element is copied into the array. It is invoked during <code>utarray_push_back</code>, <code>utarray_insert</code>, <code>utarray_inserta</code>, or <code>utarray_concat</code>. If <code>copy</code> is <code>NULL</code>, it defaults to a bitwise copy using memcpy.</p><p>The <code>dtor</code> function is used to clean up an element that is being removed from the array. It may be invoked due to <code>utarray_resize</code>, <code>utarray_pop_back</code>, <code>utarray_erase</code>, <code>utarray_clear</code>, <code>utarray_done</code> or <code>utarray_free</code>. If the elements need no cleanup upon destruction, <code>dtor</code> may be <code>NULL</code>.</p><p>Scalar types</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The next example uses \`UT_icd\` with all its defaults to make a utarray of</span></span>
<span class="line"><span style="color:#e1e4e8;">\`long\` elements. This example pushes two longs, prints them, and frees the</span></span>
<span class="line"><span style="color:#e1e4e8;">array.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.long elements</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  UT_array *nums;</span></span>
<span class="line"><span style="color:#e1e4e8;">  long l, *p;</span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_new(nums, &amp;long_icd);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  l=1; utarray_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#e1e4e8;">  l=2; utarray_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  p=NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">  while( (p=(long*)utarray_next(nums,p))) printf(&quot;%ld\\n&quot;, *p);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_free(nums);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Structures</span></span>
<span class="line"><span style="color:#e1e4e8;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Structures can be used as utarray elements. If the structure requires no</span></span>
<span class="line"><span style="color:#e1e4e8;">special effort to initialize, copy or destruct, we can use \`UT_icd\` with all</span></span>
<span class="line"><span style="color:#e1e4e8;">its defaults. This example shows a structure that consists of two integers. Here</span></span>
<span class="line"><span style="color:#e1e4e8;">we push two values, print them and free the array.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.Structure (simple)</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int a;</span></span>
<span class="line"><span style="color:#e1e4e8;">    int b;</span></span>
<span class="line"><span style="color:#e1e4e8;">} intpair_t;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  UT_array *pairs;</span></span>
<span class="line"><span style="color:#e1e4e8;">  intpair_t ip, *p;</span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_new(pairs,&amp;intpair_icd);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  ip.a=1;  ip.b=2;  utarray_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#e1e4e8;">  ip.a=10; ip.b=20; utarray_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  for(p=(intpair_t*)utarray_front(pairs);</span></span>
<span class="line"><span style="color:#e1e4e8;">      p!=NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">      p=(intpair_t*)utarray_next(pairs,p)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;%d %d\\n&quot;, p-&gt;a, p-&gt;b);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_free(pairs);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The real utility of \`UT_icd\` is apparent when the elements of the utarray are</span></span>
<span class="line"><span style="color:#e1e4e8;">structures that require special work to initialize, copy or destruct.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">For example, when a structure contains pointers to related memory areas that</span></span>
<span class="line"><span style="color:#e1e4e8;">need to be copied when the structure is copied (and freed when the structure is</span></span>
<span class="line"><span style="color:#e1e4e8;">freed), we can use custom \`init\`, \`copy\`, and \`dtor\` members in the \`UT_icd\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Here we take an example of a structure that contains an integer and a string.</span></span>
<span class="line"><span style="color:#e1e4e8;">When this element is copied (such as when an element is pushed into the array),</span></span>
<span class="line"><span style="color:#e1e4e8;">we want to &quot;deep copy&quot; the \`s\` pointer (so the original element and the new</span></span>
<span class="line"><span style="color:#e1e4e8;">element point to their own copies of \`s\`). When an element is destructed, we</span></span>
<span class="line"><span style="color:#e1e4e8;">want to &quot;deep free&quot; its copy of \`s\`. Lastly, this example is written to work</span></span>
<span class="line"><span style="color:#e1e4e8;">even if \`s\` has the value \`NULL\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.Structure (complex)</span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct {</span></span>
<span class="line"><span style="color:#e1e4e8;">    int a;</span></span>
<span class="line"><span style="color:#e1e4e8;">    char *s;</span></span>
<span class="line"><span style="color:#e1e4e8;">} intchar_t;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">void intchar_copy(void *_dst, const void *_src) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  intchar_t *dst = (intchar_t*)_dst, *src = (intchar_t*)_src;</span></span>
<span class="line"><span style="color:#e1e4e8;">  dst-&gt;a = src-&gt;a;</span></span>
<span class="line"><span style="color:#e1e4e8;">  dst-&gt;s = src-&gt;s ? strdup(src-&gt;s) : NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">void intchar_dtor(void *_elt) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  intchar_t *elt = (intchar_t*)_elt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  if (elt-&gt;s) free(elt-&gt;s);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  UT_array *intchars;</span></span>
<span class="line"><span style="color:#e1e4e8;">  intchar_t ic, *p;</span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_new(intchars, &amp;intchar_icd);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  ic.a=1; ic.s=&quot;hello&quot;; utarray_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#e1e4e8;">  ic.a=2; ic.s=&quot;world&quot;; utarray_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  p=NULL;</span></span>
<span class="line"><span style="color:#e1e4e8;">  while( (p=(intchar_t*)utarray_next(intchars,p))) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;%d %s\\n&quot;, p-&gt;a, (p-&gt;s ? p-&gt;s : &quot;null&quot;));</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  utarray_free(intchars);</span></span>
<span class="line"><span style="color:#e1e4e8;">  return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[[operations]]</span></span>
<span class="line"><span style="color:#e1e4e8;">Reference</span></span>
<span class="line"><span style="color:#e1e4e8;">---------</span></span>
<span class="line"><span style="color:#e1e4e8;">This table lists all the utarray operations. These are loosely based on the C++</span></span>
<span class="line"><span style="color:#e1e4e8;">vector class.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Operations</span></span>
<span class="line"><span style="color:#e1e4e8;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">|===============================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_new(UT_array *a, UT_icd *icd)| allocate a new array</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_free(UT_array *a)            | free an allocated array</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_init(UT_array *a,UT_icd *icd)| init an array (non-alloc)</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_done(UT_array *a)            | dispose of an array (non-allocd)</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_reserve(UT_array *a,int n)  | ensure space available for &#39;n&#39; more elements</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_push_back(UT_array *a,void *p) | push element p onto a</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_pop_back(UT_array *a)        | pop last element from a</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_extend_back(UT_array *a)     | push empty element onto a</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_len(UT_array *a)             | get length of a</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_eltptr(UT_array *a,int j)    | get pointer of element from index</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_eltidx(UT_array *a,void *e)  | get index of element from pointer</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_insert(UT_array *a,void *p, int j) | insert element p to index j</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_inserta(UT_array *a,UT_array *w, int j) | insert array w into array a at index j</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_resize(UT_array *dst,int num)  | extend or shrink array to num elements</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_concat(UT_array *dst,UT_array *src) | copy src to end of dst array</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_erase(UT_array *a,int pos,int len) | remove len elements from a[pos]..a[pos+len-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_clear(UT_array *a) | clear all elements from a, setting its length to zero</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_sort(UT_array *a,cmpfcn *cmp) | sort elements of a using comparison function</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_find(UT_array *a,void *v, cmpfcn *cmp) | find element v in utarray (must be sorted)</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_front(UT_array *a) | get first element of a</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_next(UT_array *a,void *e) | get element of a following e (front if e is NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_prev(UT_array *a,void *e) | get element of a before e (back if e is NULL)</span></span>
<span class="line"><span style="color:#e1e4e8;">| utarray_back(UT_array *a) | get last element of a</span></span>
<span class="line"><span style="color:#e1e4e8;">|===============================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Notes</span></span>
<span class="line"><span style="color:#e1e4e8;">~~~~~</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. \`utarray_new\` and \`utarray_free\` are used to allocate a new array and free it,</span></span>
<span class="line"><span style="color:#e1e4e8;">   while \`utarray_init\` and \`utarray_done\` can be used if the UT_array is already</span></span>
<span class="line"><span style="color:#e1e4e8;">   allocated and just needs to be initialized or have its internal resources</span></span>
<span class="line"><span style="color:#e1e4e8;">   freed.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2. \`utarray_reserve\` takes the &quot;delta&quot; of elements to reserve, not the total</span></span>
<span class="line"><span style="color:#e1e4e8;">   desired capacity of the array. This differs from the C++ STL &quot;reserve&quot; notion.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3. \`utarray_sort\` expects a comparison function having the usual \`strcmp\`-like</span></span>
<span class="line"><span style="color:#e1e4e8;">   convention where it accepts two elements (a and b) and returns a negative</span></span>
<span class="line"><span style="color:#e1e4e8;">   value if a precedes b, 0 if a and b sort equally, and positive if b precedes a.</span></span>
<span class="line"><span style="color:#e1e4e8;">   This is an example of a comparison function:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  int intsort(const void *a, const void *b) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      int _a = *(const int *)a;</span></span>
<span class="line"><span style="color:#e1e4e8;">      int _b = *(const int *)b;</span></span>
<span class="line"><span style="color:#e1e4e8;">      return (_a &lt; _b) ? -1 : (_a &gt; _b);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4. \`utarray_find\` uses a binary search to locate an element having a certain value</span></span>
<span class="line"><span style="color:#e1e4e8;">   according to the given comparison function. The utarray must be first sorted</span></span>
<span class="line"><span style="color:#e1e4e8;">   using the same comparison function. An example of using \`utarray_find\` with</span></span>
<span class="line"><span style="color:#e1e4e8;">   a utarray of strings is included in \`tests/test61.c\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">5. A &#39;pointer&#39; to a particular element (obtained using \`utarray_eltptr\` or</span></span>
<span class="line"><span style="color:#e1e4e8;">   \`utarray_front\`, \`utarray_next\`, \`utarray_prev\`, \`utarray_back\`) becomes invalid whenever</span></span>
<span class="line"><span style="color:#e1e4e8;">   another element is inserted into the utarray. This is because the internal</span></span>
<span class="line"><span style="color:#e1e4e8;">   memory management may need to \`realloc\` the element storage to a new address.</span></span>
<span class="line"><span style="color:#e1e4e8;">   For this reason, it&#39;s usually better to refer to an element by its integer</span></span>
<span class="line"><span style="color:#e1e4e8;">   &#39;index&#39; in code whose duration may include element insertion.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">6. To override the default out-of-memory handling behavior (which calls \`exit(-1)\`),</span></span>
<span class="line"><span style="color:#e1e4e8;">   override the \`utarray_oom()\` macro before including \`utarray.h\`.</span></span>
<span class="line"><span style="color:#e1e4e8;">   For example,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  #define utarray_oom() do { longjmp(error_handling_location); } while (0)</span></span>
<span class="line"><span style="color:#e1e4e8;">  ...</span></span>
<span class="line"><span style="color:#e1e4e8;">  #include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// vim: set nowrap syntax=asciidoc:</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">The next example uses \`UT_icd\` with all its defaults to make a utarray of</span></span>
<span class="line"><span style="color:#24292e;">\`long\` elements. This example pushes two longs, prints them, and frees the</span></span>
<span class="line"><span style="color:#24292e;">array.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.long elements</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UT_icd long_icd = {sizeof(long), NULL, NULL, NULL };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main() {</span></span>
<span class="line"><span style="color:#24292e;">  UT_array *nums;</span></span>
<span class="line"><span style="color:#24292e;">  long l, *p;</span></span>
<span class="line"><span style="color:#24292e;">  utarray_new(nums, &amp;long_icd);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  l=1; utarray_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#24292e;">  l=2; utarray_push_back(nums, &amp;l);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  p=NULL;</span></span>
<span class="line"><span style="color:#24292e;">  while( (p=(long*)utarray_next(nums,p))) printf(&quot;%ld\\n&quot;, *p);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_free(nums);</span></span>
<span class="line"><span style="color:#24292e;">  return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Structures</span></span>
<span class="line"><span style="color:#24292e;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Structures can be used as utarray elements. If the structure requires no</span></span>
<span class="line"><span style="color:#24292e;">special effort to initialize, copy or destruct, we can use \`UT_icd\` with all</span></span>
<span class="line"><span style="color:#24292e;">its defaults. This example shows a structure that consists of two integers. Here</span></span>
<span class="line"><span style="color:#24292e;">we push two values, print them and free the array.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Structure (simple)</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">typedef struct {</span></span>
<span class="line"><span style="color:#24292e;">    int a;</span></span>
<span class="line"><span style="color:#24292e;">    int b;</span></span>
<span class="line"><span style="color:#24292e;">} intpair_t;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UT_icd intpair_icd = {sizeof(intpair_t), NULL, NULL, NULL};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main() {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  UT_array *pairs;</span></span>
<span class="line"><span style="color:#24292e;">  intpair_t ip, *p;</span></span>
<span class="line"><span style="color:#24292e;">  utarray_new(pairs,&amp;intpair_icd);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  ip.a=1;  ip.b=2;  utarray_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#24292e;">  ip.a=10; ip.b=20; utarray_push_back(pairs, &amp;ip);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  for(p=(intpair_t*)utarray_front(pairs);</span></span>
<span class="line"><span style="color:#24292e;">      p!=NULL;</span></span>
<span class="line"><span style="color:#24292e;">      p=(intpair_t*)utarray_next(pairs,p)) {</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;%d %d\\n&quot;, p-&gt;a, p-&gt;b);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_free(pairs);</span></span>
<span class="line"><span style="color:#24292e;">  return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The real utility of \`UT_icd\` is apparent when the elements of the utarray are</span></span>
<span class="line"><span style="color:#24292e;">structures that require special work to initialize, copy or destruct.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">For example, when a structure contains pointers to related memory areas that</span></span>
<span class="line"><span style="color:#24292e;">need to be copied when the structure is copied (and freed when the structure is</span></span>
<span class="line"><span style="color:#24292e;">freed), we can use custom \`init\`, \`copy\`, and \`dtor\` members in the \`UT_icd\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Here we take an example of a structure that contains an integer and a string.</span></span>
<span class="line"><span style="color:#24292e;">When this element is copied (such as when an element is pushed into the array),</span></span>
<span class="line"><span style="color:#24292e;">we want to &quot;deep copy&quot; the \`s\` pointer (so the original element and the new</span></span>
<span class="line"><span style="color:#24292e;">element point to their own copies of \`s\`). When an element is destructed, we</span></span>
<span class="line"><span style="color:#24292e;">want to &quot;deep free&quot; its copy of \`s\`. Lastly, this example is written to work</span></span>
<span class="line"><span style="color:#24292e;">even if \`s\` has the value \`NULL\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.Structure (complex)</span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">typedef struct {</span></span>
<span class="line"><span style="color:#24292e;">    int a;</span></span>
<span class="line"><span style="color:#24292e;">    char *s;</span></span>
<span class="line"><span style="color:#24292e;">} intchar_t;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">void intchar_copy(void *_dst, const void *_src) {</span></span>
<span class="line"><span style="color:#24292e;">  intchar_t *dst = (intchar_t*)_dst, *src = (intchar_t*)_src;</span></span>
<span class="line"><span style="color:#24292e;">  dst-&gt;a = src-&gt;a;</span></span>
<span class="line"><span style="color:#24292e;">  dst-&gt;s = src-&gt;s ? strdup(src-&gt;s) : NULL;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">void intchar_dtor(void *_elt) {</span></span>
<span class="line"><span style="color:#24292e;">  intchar_t *elt = (intchar_t*)_elt;</span></span>
<span class="line"><span style="color:#24292e;">  if (elt-&gt;s) free(elt-&gt;s);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">UT_icd intchar_icd = {sizeof(intchar_t), NULL, intchar_copy, intchar_dtor};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main() {</span></span>
<span class="line"><span style="color:#24292e;">  UT_array *intchars;</span></span>
<span class="line"><span style="color:#24292e;">  intchar_t ic, *p;</span></span>
<span class="line"><span style="color:#24292e;">  utarray_new(intchars, &amp;intchar_icd);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  ic.a=1; ic.s=&quot;hello&quot;; utarray_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#24292e;">  ic.a=2; ic.s=&quot;world&quot;; utarray_push_back(intchars, &amp;ic);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  p=NULL;</span></span>
<span class="line"><span style="color:#24292e;">  while( (p=(intchar_t*)utarray_next(intchars,p))) {</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;%d %s\\n&quot;, p-&gt;a, (p-&gt;s ? p-&gt;s : &quot;null&quot;));</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  utarray_free(intchars);</span></span>
<span class="line"><span style="color:#24292e;">  return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">-------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[[operations]]</span></span>
<span class="line"><span style="color:#24292e;">Reference</span></span>
<span class="line"><span style="color:#24292e;">---------</span></span>
<span class="line"><span style="color:#24292e;">This table lists all the utarray operations. These are loosely based on the C++</span></span>
<span class="line"><span style="color:#24292e;">vector class.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Operations</span></span>
<span class="line"><span style="color:#24292e;">~~~~~~~~~~</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#24292e;">|===============================================================================</span></span>
<span class="line"><span style="color:#24292e;">| utarray_new(UT_array *a, UT_icd *icd)| allocate a new array</span></span>
<span class="line"><span style="color:#24292e;">| utarray_free(UT_array *a)            | free an allocated array</span></span>
<span class="line"><span style="color:#24292e;">| utarray_init(UT_array *a,UT_icd *icd)| init an array (non-alloc)</span></span>
<span class="line"><span style="color:#24292e;">| utarray_done(UT_array *a)            | dispose of an array (non-allocd)</span></span>
<span class="line"><span style="color:#24292e;">| utarray_reserve(UT_array *a,int n)  | ensure space available for &#39;n&#39; more elements</span></span>
<span class="line"><span style="color:#24292e;">| utarray_push_back(UT_array *a,void *p) | push element p onto a</span></span>
<span class="line"><span style="color:#24292e;">| utarray_pop_back(UT_array *a)        | pop last element from a</span></span>
<span class="line"><span style="color:#24292e;">| utarray_extend_back(UT_array *a)     | push empty element onto a</span></span>
<span class="line"><span style="color:#24292e;">| utarray_len(UT_array *a)             | get length of a</span></span>
<span class="line"><span style="color:#24292e;">| utarray_eltptr(UT_array *a,int j)    | get pointer of element from index</span></span>
<span class="line"><span style="color:#24292e;">| utarray_eltidx(UT_array *a,void *e)  | get index of element from pointer</span></span>
<span class="line"><span style="color:#24292e;">| utarray_insert(UT_array *a,void *p, int j) | insert element p to index j</span></span>
<span class="line"><span style="color:#24292e;">| utarray_inserta(UT_array *a,UT_array *w, int j) | insert array w into array a at index j</span></span>
<span class="line"><span style="color:#24292e;">| utarray_resize(UT_array *dst,int num)  | extend or shrink array to num elements</span></span>
<span class="line"><span style="color:#24292e;">| utarray_concat(UT_array *dst,UT_array *src) | copy src to end of dst array</span></span>
<span class="line"><span style="color:#24292e;">| utarray_erase(UT_array *a,int pos,int len) | remove len elements from a[pos]..a[pos+len-1]</span></span>
<span class="line"><span style="color:#24292e;">| utarray_clear(UT_array *a) | clear all elements from a, setting its length to zero</span></span>
<span class="line"><span style="color:#24292e;">| utarray_sort(UT_array *a,cmpfcn *cmp) | sort elements of a using comparison function</span></span>
<span class="line"><span style="color:#24292e;">| utarray_find(UT_array *a,void *v, cmpfcn *cmp) | find element v in utarray (must be sorted)</span></span>
<span class="line"><span style="color:#24292e;">| utarray_front(UT_array *a) | get first element of a</span></span>
<span class="line"><span style="color:#24292e;">| utarray_next(UT_array *a,void *e) | get element of a following e (front if e is NULL)</span></span>
<span class="line"><span style="color:#24292e;">| utarray_prev(UT_array *a,void *e) | get element of a before e (back if e is NULL)</span></span>
<span class="line"><span style="color:#24292e;">| utarray_back(UT_array *a) | get last element of a</span></span>
<span class="line"><span style="color:#24292e;">|===============================================================================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Notes</span></span>
<span class="line"><span style="color:#24292e;">~~~~~</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. \`utarray_new\` and \`utarray_free\` are used to allocate a new array and free it,</span></span>
<span class="line"><span style="color:#24292e;">   while \`utarray_init\` and \`utarray_done\` can be used if the UT_array is already</span></span>
<span class="line"><span style="color:#24292e;">   allocated and just needs to be initialized or have its internal resources</span></span>
<span class="line"><span style="color:#24292e;">   freed.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2. \`utarray_reserve\` takes the &quot;delta&quot; of elements to reserve, not the total</span></span>
<span class="line"><span style="color:#24292e;">   desired capacity of the array. This differs from the C++ STL &quot;reserve&quot; notion.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3. \`utarray_sort\` expects a comparison function having the usual \`strcmp\`-like</span></span>
<span class="line"><span style="color:#24292e;">   convention where it accepts two elements (a and b) and returns a negative</span></span>
<span class="line"><span style="color:#24292e;">   value if a precedes b, 0 if a and b sort equally, and positive if b precedes a.</span></span>
<span class="line"><span style="color:#24292e;">   This is an example of a comparison function:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  int intsort(const void *a, const void *b) {</span></span>
<span class="line"><span style="color:#24292e;">      int _a = *(const int *)a;</span></span>
<span class="line"><span style="color:#24292e;">      int _b = *(const int *)b;</span></span>
<span class="line"><span style="color:#24292e;">      return (_a &lt; _b) ? -1 : (_a &gt; _b);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4. \`utarray_find\` uses a binary search to locate an element having a certain value</span></span>
<span class="line"><span style="color:#24292e;">   according to the given comparison function. The utarray must be first sorted</span></span>
<span class="line"><span style="color:#24292e;">   using the same comparison function. An example of using \`utarray_find\` with</span></span>
<span class="line"><span style="color:#24292e;">   a utarray of strings is included in \`tests/test61.c\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">5. A &#39;pointer&#39; to a particular element (obtained using \`utarray_eltptr\` or</span></span>
<span class="line"><span style="color:#24292e;">   \`utarray_front\`, \`utarray_next\`, \`utarray_prev\`, \`utarray_back\`) becomes invalid whenever</span></span>
<span class="line"><span style="color:#24292e;">   another element is inserted into the utarray. This is because the internal</span></span>
<span class="line"><span style="color:#24292e;">   memory management may need to \`realloc\` the element storage to a new address.</span></span>
<span class="line"><span style="color:#24292e;">   For this reason, it&#39;s usually better to refer to an element by its integer</span></span>
<span class="line"><span style="color:#24292e;">   &#39;index&#39; in code whose duration may include element insertion.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">6. To override the default out-of-memory handling behavior (which calls \`exit(-1)\`),</span></span>
<span class="line"><span style="color:#24292e;">   override the \`utarray_oom()\` macro before including \`utarray.h\`.</span></span>
<span class="line"><span style="color:#24292e;">   For example,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  #define utarray_oom() do { longjmp(error_handling_location); } while (0)</span></span>
<span class="line"><span style="color:#24292e;">  ...</span></span>
<span class="line"><span style="color:#24292e;">  #include &quot;utarray.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// vim: set nowrap syntax=asciidoc:</span></span></code></pre></div>`,32),t=[p];function o(r,c,i,y,u,d){return n(),a("div",null,t)}const m=s(l,[["render",o]]);export{_ as __pageData,m as default};
