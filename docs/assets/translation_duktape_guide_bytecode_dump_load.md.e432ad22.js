import{_ as t,o as a,c as d,z as e,a as o}from"./chunks/framework.320df067.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/guide/bytecode_dump_load.md","filePath":"translation/duktape/guide/bytecode_dump_load.md","lastUpdated":1676126774000}'),_={name:"translation/duktape/guide/bytecode_dump_load.md"},n=e("h2",{id:"bytecode_dump_load",tabindex:"-1"},[o("バイトコードのダンプとロード "),e("a",{class:"header-anchor",href:"#bytecode_dump_load","aria-label":'Permalink to "バイトコードのダンプとロード {#bytecode_dump_load}"'},"​")],-1),s=e("p",null,"duk_dump_function() と duk_load_function() という API コールは、C コードを呼び出して (1) ECMAScript 関数を移植性のあるバイトコードにシリアライズし、 (2) バイトコードをロードしてその関数を再構成することを可能にします。",-1),c=e("p",null,"バイトコードのフォーマットはDuktapeのバージョンに依存し、異なるDuktapeのマイナー・バージョンからバイトコードをロードするのは安全ではありません（パッチのバージョンはバイトコードの互換性に影響を与えません）。Duktapeの設定オプションもバイトコードの互換性に影響を与えるので、 dump/loadのソースとターゲットは同じオプションでコンパイルしなければなりません。バイトコード・フォーマットはプラットフォーム中立なので、あるプラットフォームでバイトコードをコンパイルして、別のプラットフォームでロードすることができます。これはクロスプラットフォーム・ビルドに便利な機能です。Duktapeはロードされたバイトコードを検証しないので、呼び出し側のコードは、実行中のDuktapeのバージョンでバイトコードがそのまま有効であることを確認しなければなりません。",-1),l=e("blockquote",null,[e("p",null,"呼び出し側のコードは、読み込まれるバイトコードが無傷で、実行中の Duktape のバージョンに対して有効であることを確認しなければなりません（つまり、同じバージョンの Duktape でコンパイルされ、その後変更されていないことを確認しなければなりません）。無効なバイトコードをロードすると、メモリが安全でない動作につながる可能性があります。また、悪意を持って細工されたバイトコードをロードすると、脆弱性が悪用される可能性さえあります。")],-1),u=e("p",null,"詳細は bytecode.rst を参照してください。",-1),p=[n,s,c,l,u];function r(i,m,k,h,b,f){return a(),d("div",null,p)}const x=t(_,[["render",r]]);export{D as __pageData,x as default};