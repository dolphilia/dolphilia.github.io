import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.92ce8a2a.js";const m=JSON.parse('{"title":"utstack: intrusive stack macros for C","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/utstack.md","filePath":"translation/uthash/utstack.md","lastUpdated":1687420112000}'),l={name:"translation/uthash/utstack.md"},p=a(`<h1 id="utstack-intrusive-stack-macros-for-c" tabindex="-1">utstack: intrusive stack macros for C <a class="header-anchor" href="#utstack-intrusive-stack-macros-for-c" aria-label="Permalink to &quot;utstack: intrusive stack macros for C&quot;">​</a></h1><p>Arthur O&#39;Dwyer <a href="mailto:arthur.j.odwyer@gmail.com" target="_blank" rel="noreferrer">arthur.j.odwyer@gmail.com</a> v2.3.0, February 2021</p><p>Here&#39;s a link back to the <a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">https://github.com/troydhanson/uthash</a>[GitHub project page].</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>A set of very simple stack macros for C structures are included with uthash in <code>utstack.h</code>. To use these macros in your own C program, just copy <code>utstack.h</code> into your source directory and use it in your programs.</p><p>#include &quot;utstack.h&quot;</p><p>These macros support the basic operations of a stack, implemented as an intrusive linked list. A stack supports the &quot;push&quot;, &quot;pop&quot;, and &quot;count&quot; operations, as well as the trivial operation of getting the top element of the stack.</p><p>Download</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">To download the \`utstack.h\` header file,</span></span>
<span class="line"><span style="color:#e1e4e8;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#e1e4e8;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">BSD licensed</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">To download the \`utstack.h\` header file,</span></span>
<span class="line"><span style="color:#24292e;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#24292e;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">BSD licensed</span></span></code></pre></div><p>This software is made available under the link:license.html[revised BSD license]. It is free and open source.</p><p>Platforms</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The &#39;utstack&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"> * Linux,</span></span>
<span class="line"><span style="color:#e1e4e8;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#e1e4e8;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Usage</span></span>
<span class="line"><span style="color:#e1e4e8;">-----</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Stack (list) head</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">The &#39;utstack&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"> * Linux,</span></span>
<span class="line"><span style="color:#24292e;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#24292e;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Usage</span></span>
<span class="line"><span style="color:#24292e;">-----</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Stack (list) head</span></span></code></pre></div><p>The stack head is simply a pointer to your element structure. You can name it anything. <em>It must be initialized to <code>NULL</code></em>. It doubles as a pointer to the top element of your stack.</p><p>element *stack = NULL;</p><p>Stack operations</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The only operations on a stack are O(1) pushing, O(1) popping, and</span></span>
<span class="line"><span style="color:#e1e4e8;">O(n) counting the number of elements on the stack. None of the provided</span></span>
<span class="line"><span style="color:#e1e4e8;">macros permit directly accessing stack elements other than the top element.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">To increase the readability of your code, you can use the macro</span></span>
<span class="line"><span style="color:#e1e4e8;">\`STACK_EMPTY(head)\` as a more readable alternative to \`head == NULL\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">and \`STACK_TOP(head)\` as a more readable alternative to \`head\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">|===============================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;">|STACK_PUSH(stack,add);         | push \`add\` onto \`stack\`</span></span>
<span class="line"><span style="color:#e1e4e8;">|STACK_POP(stack,elt);          | pop \`stack\` and save previous top as \`elt\`</span></span>
<span class="line"><span style="color:#e1e4e8;">|STACK_COUNT(stack,tmp,count);  | store number of elements into \`count\`</span></span>
<span class="line"><span style="color:#e1e4e8;">|STACK_TOP(stack)               | return \`stack\`</span></span>
<span class="line"><span style="color:#e1e4e8;">|STACK_EMPTY(stack)             | return \`stack == NULL\`</span></span>
<span class="line"><span style="color:#e1e4e8;">|===============================================================================</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The parameters shown in the table above are explained here:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">stack::</span></span>
<span class="line"><span style="color:#e1e4e8;">  The stack head (a pointer to your element structure).</span></span>
<span class="line"><span style="color:#e1e4e8;">add::</span></span>
<span class="line"><span style="color:#e1e4e8;">  A pointer to the element structure you are adding to the stack.</span></span>
<span class="line"><span style="color:#e1e4e8;">elt::</span></span>
<span class="line"><span style="color:#e1e4e8;">  A pointer that will be assigned the address of the popped element. Need not be initialized.</span></span>
<span class="line"><span style="color:#e1e4e8;">tmp::</span></span>
<span class="line"><span style="color:#e1e4e8;">  A pointer of the same type as \`elt\`. Used internally. Need not be initialized.</span></span>
<span class="line"><span style="color:#e1e4e8;">count::</span></span>
<span class="line"><span style="color:#e1e4e8;">  An integer that will be assigned the size of the stack. Need not be initialized.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Example</span></span>
<span class="line"><span style="color:#e1e4e8;">~~~~~~~</span></span>
<span class="line"><span style="color:#e1e4e8;">This example program reads names from a text file (one name per line), and</span></span>
<span class="line"><span style="color:#e1e4e8;">pushes each name on the stack; then pops and prints them in reverse order.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.A stack of names</span></span>
<span class="line"><span style="color:#e1e4e8;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &lt;string.h&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">#include &quot;utstack.h&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#define BUFLEN 20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">typedef struct el {</span></span>
<span class="line"><span style="color:#e1e4e8;">    char bname[BUFLEN];</span></span>
<span class="line"><span style="color:#e1e4e8;">    struct el *next;</span></span>
<span class="line"><span style="color:#e1e4e8;">} el;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">el *head = NULL; /* important- initialize to NULL! */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">int main(int argc, char *argv[]) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    el *elt, *tmp;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    char linebuf[sizeof el-&gt;bname];</span></span>
<span class="line"><span style="color:#e1e4e8;">    int count;</span></span>
<span class="line"><span style="color:#e1e4e8;">    FILE *file = fopen(&quot;test11.dat&quot;, &quot;r&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (file == NULL) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        perror(&quot;can&#39;t open: &quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">        exit(-1);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    while (fgets(linebuf, sizeof linebuf, file) != NULL) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        el *name = malloc(sizeof *name);</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (name == NULL) exit(-1);</span></span>
<span class="line"><span style="color:#e1e4e8;">        strcpy(name-&gt;bname, linebuf);</span></span>
<span class="line"><span style="color:#e1e4e8;">        STACK_PUSH(head, name);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    fclose(file);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    STACK_COUNT(head, elt, count);</span></span>
<span class="line"><span style="color:#e1e4e8;">    printf(&quot;%d elements were read into the stack\\n&quot;, count);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    /* now pop, print, and delete each element */</span></span>
<span class="line"><span style="color:#e1e4e8;">    while (!STACK_EMPTY(head)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        printf(&quot;%s\\n&quot;, STACK_TOP(head)-&gt;bname);</span></span>
<span class="line"><span style="color:#e1e4e8;">        STACK_POP(head, elt);</span></span>
<span class="line"><span style="color:#e1e4e8;">        free(elt);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return 0;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[[flex_names]]</span></span>
<span class="line"><span style="color:#e1e4e8;">Other names for next</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">The only operations on a stack are O(1) pushing, O(1) popping, and</span></span>
<span class="line"><span style="color:#24292e;">O(n) counting the number of elements on the stack. None of the provided</span></span>
<span class="line"><span style="color:#24292e;">macros permit directly accessing stack elements other than the top element.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">To increase the readability of your code, you can use the macro</span></span>
<span class="line"><span style="color:#24292e;">\`STACK_EMPTY(head)\` as a more readable alternative to \`head == NULL\`,</span></span>
<span class="line"><span style="color:#24292e;">and \`STACK_TOP(head)\` as a more readable alternative to \`head\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#24292e;">|===============================================================================</span></span>
<span class="line"><span style="color:#24292e;">|STACK_PUSH(stack,add);         | push \`add\` onto \`stack\`</span></span>
<span class="line"><span style="color:#24292e;">|STACK_POP(stack,elt);          | pop \`stack\` and save previous top as \`elt\`</span></span>
<span class="line"><span style="color:#24292e;">|STACK_COUNT(stack,tmp,count);  | store number of elements into \`count\`</span></span>
<span class="line"><span style="color:#24292e;">|STACK_TOP(stack)               | return \`stack\`</span></span>
<span class="line"><span style="color:#24292e;">|STACK_EMPTY(stack)             | return \`stack == NULL\`</span></span>
<span class="line"><span style="color:#24292e;">|===============================================================================</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The parameters shown in the table above are explained here:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">stack::</span></span>
<span class="line"><span style="color:#24292e;">  The stack head (a pointer to your element structure).</span></span>
<span class="line"><span style="color:#24292e;">add::</span></span>
<span class="line"><span style="color:#24292e;">  A pointer to the element structure you are adding to the stack.</span></span>
<span class="line"><span style="color:#24292e;">elt::</span></span>
<span class="line"><span style="color:#24292e;">  A pointer that will be assigned the address of the popped element. Need not be initialized.</span></span>
<span class="line"><span style="color:#24292e;">tmp::</span></span>
<span class="line"><span style="color:#24292e;">  A pointer of the same type as \`elt\`. Used internally. Need not be initialized.</span></span>
<span class="line"><span style="color:#24292e;">count::</span></span>
<span class="line"><span style="color:#24292e;">  An integer that will be assigned the size of the stack. Need not be initialized.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Example</span></span>
<span class="line"><span style="color:#24292e;">~~~~~~~</span></span>
<span class="line"><span style="color:#24292e;">This example program reads names from a text file (one name per line), and</span></span>
<span class="line"><span style="color:#24292e;">pushes each name on the stack; then pops and prints them in reverse order.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.A stack of names</span></span>
<span class="line"><span style="color:#24292e;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &lt;string.h&gt;</span></span>
<span class="line"><span style="color:#24292e;">#include &quot;utstack.h&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#define BUFLEN 20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">typedef struct el {</span></span>
<span class="line"><span style="color:#24292e;">    char bname[BUFLEN];</span></span>
<span class="line"><span style="color:#24292e;">    struct el *next;</span></span>
<span class="line"><span style="color:#24292e;">} el;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">el *head = NULL; /* important- initialize to NULL! */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">int main(int argc, char *argv[]) {</span></span>
<span class="line"><span style="color:#24292e;">    el *elt, *tmp;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    char linebuf[sizeof el-&gt;bname];</span></span>
<span class="line"><span style="color:#24292e;">    int count;</span></span>
<span class="line"><span style="color:#24292e;">    FILE *file = fopen(&quot;test11.dat&quot;, &quot;r&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    if (file == NULL) {</span></span>
<span class="line"><span style="color:#24292e;">        perror(&quot;can&#39;t open: &quot;);</span></span>
<span class="line"><span style="color:#24292e;">        exit(-1);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    while (fgets(linebuf, sizeof linebuf, file) != NULL) {</span></span>
<span class="line"><span style="color:#24292e;">        el *name = malloc(sizeof *name);</span></span>
<span class="line"><span style="color:#24292e;">        if (name == NULL) exit(-1);</span></span>
<span class="line"><span style="color:#24292e;">        strcpy(name-&gt;bname, linebuf);</span></span>
<span class="line"><span style="color:#24292e;">        STACK_PUSH(head, name);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    fclose(file);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    STACK_COUNT(head, elt, count);</span></span>
<span class="line"><span style="color:#24292e;">    printf(&quot;%d elements were read into the stack\\n&quot;, count);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    /* now pop, print, and delete each element */</span></span>
<span class="line"><span style="color:#24292e;">    while (!STACK_EMPTY(head)) {</span></span>
<span class="line"><span style="color:#24292e;">        printf(&quot;%s\\n&quot;, STACK_TOP(head)-&gt;bname);</span></span>
<span class="line"><span style="color:#24292e;">        STACK_POP(head, elt);</span></span>
<span class="line"><span style="color:#24292e;">        free(elt);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return 0;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[[flex_names]]</span></span>
<span class="line"><span style="color:#24292e;">Other names for next</span></span></code></pre></div><p>If the element structure&#39;s <code>next</code> field is named something else, a separate group of macros must be used. These work the same as the regular macros, but take the field name as an extra parameter.</p><p>These &quot;flexible field name&quot; macros are shown below. They all end with <code>2</code>. Each operates the same as its counterpart without the <code>2</code>, but they take the name of the <code>next</code> field as a trailing argument.</p><p>[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;] |=============================================================================== |STACK_PUSH2(stack,add,next); | push <code>add</code> onto <code>stack</code> |STACK_POP2(stack,elt,next); | pop <code>stack</code> and save previous top as <code>elt</code> |STACK_COUNT2(stack,tmp,count,next); | store number of elements into <code>count</code> |===============================================================================</p><p>// vim: set nowrap syntax=asciidoc:</p>`,20),t=[p];function o(c,i,r,d,y,u){return n(),e("div",null,t)}const f=s(l,[["render",o]]);export{m as __pageData,f as default};
