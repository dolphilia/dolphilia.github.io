import{_ as t,c as a,o as n,j as e,a as s}from"./chunks/framework.DflgEAq4.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/threading.md","filePath":"translation/duktape/guide/threading.md","lastUpdated":1676126774000}'),d={name:"translation/duktape/guide/threading.md"},u=e("h2",{id:"threading",tabindex:"-1"},[s("スレッディング "),e("a",{class:"header-anchor",href:"#threading","aria-label":'Permalink to "スレッディング {#threading}"'},"​")],-1),r=e("p",null,"Duktapeは限定的なマルチスレッドをサポートしています。",-1),i=e("ul",null,[e("li",null,"duk_create_heap()で作成された特定のDuktapeヒープはシングルスレッドです： 一度にヒープ内でコードを実行できるネイティブ・スレッドは1つだけです。ネイティブ・スレッドは、同じDuktapeヒープで同時に2つのネイティブ・スレッドがアクティブにならない限り、時間の経過とともに変更することができます。"),e("li",null,"Duktape/Cコールの中でduk_suspend()を使ってDuktapeの実行を中断し、後で duk_resume()で再開することが可能です。これらの呼び出しの間に、別のスレッドが同じDuktapeヒープを呼び出す可能性があります。アプリケーション・コードは、一度に1つのネイティブ・スレッドしかDuktapeを呼び出さないようにするために、必要なロックを管理しなければなりません。"),e("li",null,"Duktapeのヒープは、互いに完全に分離されています。Duktapeヒープごとにアクティブなネイティブ・スレッドが1つだけ存在する限り、複数のネイティブ・スレッドが同時にコードを実行することが可能です。")],-1),o=e("p",null,"背景として、Duktapeヒープは、ヒープ内に存在するDuktapeスレッドの数にかかわらず、単一のメモリー管理領域です（ネイティブ・スレッドとDuktapeスレッドを混同しないでください）。ヒープ内のDuktapeスレッドはオブジェクト参照を共有できるため、マルチスレッド対応にはガベージ・コレクションと全てのオブジェクト処理に同期が必要になります。同期化は大きな移植性の問題になるので、実用的なアプローチは、Duktapeヒープをシングルスレッドに制限することです。Duktapeヒープは何も共有しないので、原則的にヒープ間のスレッド制限はありません。しかし、いくつかのプラットフォーム機能が利用できない場合（可変プリプロセッサー・マクロやリエントラント・システムコールなど）には、いくつかの制限があります。",-1),l=e("p",null,"スレッド制限の詳細とベストプラクティスについては、threading.rstとHow to use multiple native threadsを参照してください。",-1),p=[u,r,i,o,l];function _(c,h,k,D,g,m){return n(),a("div",null,p)}const $=t(d,[["render",_]]);export{x as __pageData,$ as default};