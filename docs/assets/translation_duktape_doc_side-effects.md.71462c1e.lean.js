import{_ as i,c as r,o as s,Q as t,x as e,a}from"./chunks/framework.44f152d8.js";const y=JSON.parse('{"title":"Side effects","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/side-effects.md","lastUpdated":1682143322000}'),n={name:"translation/duktape/doc/side-effects.md"},o=t("",48),l=e("p",null,[a("Once a code segment with NORZ macros is complete, "),e("a",{href:"./","SLOW,FAST":""},"DUK_REFZERO_CHECK"),a("() should be called. The macro checks for any pending finalizers and processes them. No error catcher is necessary: error throw path also calls the macros and processes pending finalizers. (The NORZ name is a bit of a misnomer since Duktape 2.1 reworks.)")],-1),c=t("",47),d=[o,l,c];function h(u,f,p,m,b,g){return s(),r("div",null,d)}const v=i(n,[["render",h]]);export{y as __pageData,v as default};