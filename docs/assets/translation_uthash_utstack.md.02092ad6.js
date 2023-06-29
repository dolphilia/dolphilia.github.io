import{_ as s,o as n,c as a,R as e}from"./chunks/framework.320df067.js";const h=JSON.parse('{"title":"utstack: intrusive stack macros for C","description":"","frontmatter":{},"headers":[],"relativePath":"translation/uthash/utstack.md","filePath":"translation/uthash/utstack.md","lastUpdated":1687420112000}'),l={name:"translation/uthash/utstack.md"},t=e(`<h1 id="utstack-intrusive-stack-macros-for-c" tabindex="-1">utstack: intrusive stack macros for C <a class="header-anchor" href="#utstack-intrusive-stack-macros-for-c" aria-label="Permalink to &quot;utstack: intrusive stack macros for C&quot;">​</a></h1><p>Arthur O&#39;Dwyer <a href="mailto:arthur.j.odwyer@gmail.com" target="_blank" rel="noreferrer">arthur.j.odwyer@gmail.com</a> v2.3.0, February 2021</p><p>Here&#39;s a link back to the <a href="https://github.com/troydhanson/uthash" target="_blank" rel="noreferrer">https://github.com/troydhanson/uthash</a>[GitHub project page].</p><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>A set of very simple stack macros for C structures are included with uthash in <code>utstack.h</code>. To use these macros in your own C program, just copy <code>utstack.h</code> into your source directory and use it in your programs.</p><p>#include &quot;utstack.h&quot;</p><p>These macros support the basic operations of a stack, implemented as an intrusive linked list. A stack supports the &quot;push&quot;, &quot;pop&quot;, and &quot;count&quot; operations, as well as the trivial operation of getting the top element of the stack.</p><p>Download</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">To download the \`utstack.h\` header file,</span></span>
<span class="line"><span style="color:#A6ACCD;">follow the links on https://github.com/troydhanson/uthash to clone uthash or get a zip file,</span></span>
<span class="line"><span style="color:#A6ACCD;">then look in the src/ sub-directory.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BSD licensed</span></span></code></pre></div><p>This software is made available under the link:license.html[revised BSD license]. It is free and open source.</p><p>Platforms</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">The &#39;utstack&#39; macros have been tested on:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> * Linux,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Mac OS X,</span></span>
<span class="line"><span style="color:#A6ACCD;"> * Windows, using Visual Studio 2008 and Visual Studio 2010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Usage</span></span>
<span class="line"><span style="color:#A6ACCD;">-----</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Stack (list) head</span></span></code></pre></div><p>The stack head is simply a pointer to your element structure. You can name it anything. <em>It must be initialized to <code>NULL</code></em>. It doubles as a pointer to the top element of your stack.</p><p>element *stack = NULL;</p><p>Stack operations</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">The only operations on a stack are O(1) pushing, O(1) popping, and</span></span>
<span class="line"><span style="color:#A6ACCD;">O(n) counting the number of elements on the stack. None of the provided</span></span>
<span class="line"><span style="color:#A6ACCD;">macros permit directly accessing stack elements other than the top element.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">To increase the readability of your code, you can use the macro</span></span>
<span class="line"><span style="color:#A6ACCD;">\`STACK_EMPTY(head)\` as a more readable alternative to \`head == NULL\`,</span></span>
<span class="line"><span style="color:#A6ACCD;">and \`STACK_TOP(head)\` as a more readable alternative to \`head\`.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">|===============================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;">|STACK_PUSH(stack,add);         | push \`add\` onto \`stack\`</span></span>
<span class="line"><span style="color:#A6ACCD;">|STACK_POP(stack,elt);          | pop \`stack\` and save previous top as \`elt\`</span></span>
<span class="line"><span style="color:#A6ACCD;">|STACK_COUNT(stack,tmp,count);  | store number of elements into \`count\`</span></span>
<span class="line"><span style="color:#A6ACCD;">|STACK_TOP(stack)               | return \`stack\`</span></span>
<span class="line"><span style="color:#A6ACCD;">|STACK_EMPTY(stack)             | return \`stack == NULL\`</span></span>
<span class="line"><span style="color:#A6ACCD;">|===============================================================================</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">The parameters shown in the table above are explained here:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">stack::</span></span>
<span class="line"><span style="color:#A6ACCD;">  The stack head (a pointer to your element structure).</span></span>
<span class="line"><span style="color:#A6ACCD;">add::</span></span>
<span class="line"><span style="color:#A6ACCD;">  A pointer to the element structure you are adding to the stack.</span></span>
<span class="line"><span style="color:#A6ACCD;">elt::</span></span>
<span class="line"><span style="color:#A6ACCD;">  A pointer that will be assigned the address of the popped element. Need not be initialized.</span></span>
<span class="line"><span style="color:#A6ACCD;">tmp::</span></span>
<span class="line"><span style="color:#A6ACCD;">  A pointer of the same type as \`elt\`. Used internally. Need not be initialized.</span></span>
<span class="line"><span style="color:#A6ACCD;">count::</span></span>
<span class="line"><span style="color:#A6ACCD;">  An integer that will be assigned the size of the stack. Need not be initialized.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Example</span></span>
<span class="line"><span style="color:#A6ACCD;">~~~~~~~</span></span>
<span class="line"><span style="color:#A6ACCD;">This example program reads names from a text file (one name per line), and</span></span>
<span class="line"><span style="color:#A6ACCD;">pushes each name on the stack; then pops and prints them in reverse order.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.A stack of names</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;stdlib.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &lt;string.h&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">#include &quot;utstack.h&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#define BUFLEN 20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">typedef struct el {</span></span>
<span class="line"><span style="color:#A6ACCD;">    char bname[BUFLEN];</span></span>
<span class="line"><span style="color:#A6ACCD;">    struct el *next;</span></span>
<span class="line"><span style="color:#A6ACCD;">} el;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">el *head = NULL; /* important- initialize to NULL! */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">int main(int argc, char *argv[]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    el *elt, *tmp;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    char linebuf[sizeof el-&gt;bname];</span></span>
<span class="line"><span style="color:#A6ACCD;">    int count;</span></span>
<span class="line"><span style="color:#A6ACCD;">    FILE *file = fopen(&quot;test11.dat&quot;, &quot;r&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (file == NULL) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        perror(&quot;can&#39;t open: &quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        exit(-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    while (fgets(linebuf, sizeof linebuf, file) != NULL) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        el *name = malloc(sizeof *name);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (name == NULL) exit(-1);</span></span>
<span class="line"><span style="color:#A6ACCD;">        strcpy(name-&gt;bname, linebuf);</span></span>
<span class="line"><span style="color:#A6ACCD;">        STACK_PUSH(head, name);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    fclose(file);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    STACK_COUNT(head, elt, count);</span></span>
<span class="line"><span style="color:#A6ACCD;">    printf(&quot;%d elements were read into the stack\\n&quot;, count);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    /* now pop, print, and delete each element */</span></span>
<span class="line"><span style="color:#A6ACCD;">    while (!STACK_EMPTY(head)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        printf(&quot;%s\\n&quot;, STACK_TOP(head)-&gt;bname);</span></span>
<span class="line"><span style="color:#A6ACCD;">        STACK_POP(head, elt);</span></span>
<span class="line"><span style="color:#A6ACCD;">        free(elt);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[[flex_names]]</span></span>
<span class="line"><span style="color:#A6ACCD;">Other names for next</span></span></code></pre></div><p>If the element structure&#39;s <code>next</code> field is named something else, a separate group of macros must be used. These work the same as the regular macros, but take the field name as an extra parameter.</p><p>These &quot;flexible field name&quot; macros are shown below. They all end with <code>2</code>. Each operates the same as its counterpart without the <code>2</code>, but they take the name of the <code>next</code> field as a trailing argument.</p><p>[width=&quot;100%&quot;,cols=&quot;50&lt;m,40&lt;&quot;,grid=&quot;none&quot;,options=&quot;none&quot;] |=============================================================================== |STACK_PUSH2(stack,add,next); | push <code>add</code> onto <code>stack</code> |STACK_POP2(stack,elt,next); | pop <code>stack</code> and save previous top as <code>elt</code> |STACK_COUNT2(stack,tmp,count,next); | store number of elements into <code>count</code> |===============================================================================</p><p>// vim: set nowrap syntax=asciidoc:</p>`,20),p=[t];function o(c,r,i,C,A,u){return n(),a("div",null,p)}const y=s(l,[["render",o]]);export{h as __pageData,y as default};
