import{_ as t,o as d,c as r,R as i}from"./chunks/framework.c2IVng1e.js";const u=JSON.parse('{"title":"libffi","description":"","frontmatter":{},"headers":[],"relativePath":"translation/libffi/index.md","filePath":"translation/libffi/index.md","lastUpdated":1698742708000}'),e={name:"translation/libffi/index.md"},a=i('<h1 id="libffi" tabindex="-1">libffi <a class="header-anchor" href="#libffi" aria-label="Permalink to &quot;libffi&quot;">​</a></h1><p>ポータブルな外部関数インターフェイスライブラリ</p><p>libffi-3.4.4は2022年10月23日にリリースされた。githubからダウンロードしてください。: <a href="https://github.com/libffi/libffi/releases/download/v3.4.4/libffi-3.4.4.tar.gz" target="_blank" rel="noreferrer">https://github.com/libffi/libffi/releases/download/v3.4.4/libffi-3.4.4.tar.gz</a>.</p><p>libffiはフリーソフトウェアです。非常に自由なライセンスです。</p><h2 id="libffiとは" tabindex="-1">libffiとは？ <a class="header-anchor" href="#libffiとは" aria-label="Permalink to &quot;libffiとは？&quot;">​</a></h2><p>高級言語用のコンパイラーは、特定の規約に従ったコードを生成する。これらの規約は、部分的には、個別コンパイルが機能するために必要なものである。そのような規約のひとつが「呼び出し規約」である。呼び出し規約」とは、関数の引数が関数に入るときにどこにあるかについて、コンパイラが仮定したものです。呼び出し規約」はまた、関数の戻り値がどこにあるかについても指定します。</p><p>プログラムによっては、関数にどのような引数が渡されるのか、コンパイル時には分からないものもある。例えば、ある関数を呼び出すときに使われる引数の数と種類を、実行時にインタプリタに知らせることがあります。Libffiはそのようなプログラムで、インタプリタ・プログラムからコンパイルされたコードへの橋渡しをするために使うことができます。</p><p>libffiライブラリーは、様々な呼び出し規約に対する移植性の高い高レベルプログラミングインターフェースを提供します。これにより、プログラマーは、呼び出しインターフェイス記述によって指定された任意の関数を実行時に呼び出すことができます。</p><p>FFIとは、Foreign Function Interface（外部関数インターフェース）の略である。外部関数インターフェースは、ある言語で書かれたコードが別の言語で書かれたコードを呼び出すことを可能にするインターフェースの一般的な名称です。libffiライブラリーは、実際には、完全な機能を持つ外部関数インターフェースの、最も低い、マシン依存のレイヤーを提供するだけである。libffiの上には、2つの言語間で渡される値の型変換を処理する層が存在しなければならない。</p><h2 id="誰が使うのか" tabindex="-1">誰が使うのか？ <a class="header-anchor" href="#誰が使うのか" aria-label="Permalink to &quot;誰が使うのか？&quot;">​</a></h2><p>libffiライブラリーは、インタープリタ型コードとネイティブ・コンパイル型コードの間のブリッジを構築しようとするすべての人に有用である。代表的なユーザーは以下の通り。:</p><ul><li>CPython - Pythonプログラミング言語のデフォルトで最も広く使われている実装では、標準ctypesライブラリのlibffiが使われている。</li><li>OpenJDK - Java Platform Standard Editionのオープンソース実装では、いくつかのプラットフォームでインタプリタとネイティブコード間のブリッジにlibffiが使われている。</li><li>js-ctypes - MozillaがFirefox 3.6で提供する予定のjavascript用の外部関数インターフェース。</li><li>Dalvik - Dalvikは、Androidモバイル・デバイス上でJavaプラットフォームを実行する仮想マシンである。libffiは、カスタム・ブリッジング・コードが書かれていないAndroidポートで使用される。</li><li>Java Native Access (JNA) - Javaからネイティブ・コードを呼び出すJNIフリーの方法。</li><li>Ruby-FFI - Ruby の Foreign Function Interface 拡張。</li><li>fsbv - Foreign Structure By Valueは、Common Lispの外部関数インターフェース・ライブラリで、標準のCFFIパッケージを拡張し、構造体の引数を値で渡す機能をサポートしています。</li><li>JSCocoa - Mac OSXとiPhone（libffi-iphoneポート経由）でjavascriptからObjective-Cコードを呼び出す。</li><li>PyObjC - Mac OSX上でPythonからObjective-Cのコードを呼び出す。</li><li>RubyCocoa - Mac OSX上のRubyからObjective-Cのコードを呼び出す。</li><li>The Glasgow Haskell Compiler - この人気のあるHaskell実装からCコードを呼び出す。</li><li>Racket - この有名なScheme処理系からCコードを呼び出す。</li><li>gcj - Javaプログラミング言語用GNUコンパイラのランタイム・ライブラリであるlibffiは、解釈されたコードとネイティブにコンパイルされたコードとの間を行き来するコールを処理するために使われる。 gcjはGCC（GNU Compiler Collection）の一部である。</li></ul><h2 id="対応プラットフォーム" tabindex="-1">対応プラットフォーム <a class="header-anchor" href="#対応プラットフォーム" aria-label="Permalink to &quot;対応プラットフォーム&quot;">​</a></h2><p>Libffiは多くの異なるプラットフォームに移植されています。具体的な設定の詳細とテスト状況については、READMEファイルを参照してください。リリース時点では、以下の基本構成がテストされています：</p><table><thead><tr><th>アーキテクチャ</th><th>OS</th></tr></thead><tbody><tr><td>AArch64 (ARM64)</td><td>iOS</td></tr><tr><td>AArch64</td><td>Linux</td></tr><tr><td>AArch64</td><td>Windows</td></tr><tr><td>Alpha</td><td>Linux</td></tr><tr><td>Alpha</td><td>Tru64</td></tr><tr><td>ARC</td><td>Linux</td></tr><tr><td>ARM</td><td>Linux</td></tr><tr><td>ARM</td><td>iOS</td></tr><tr><td>ARM</td><td>Windows</td></tr><tr><td>AVR32</td><td>Linux</td></tr><tr><td>Blackfin</td><td>uClinux</td></tr><tr><td>CSKY</td><td>Linux</td></tr><tr><td>HPPA</td><td>HPUX</td></tr><tr><td>IA-64</td><td>Linux</td></tr><tr><td>KVX</td><td>Linux</td></tr><tr><td>LoongArch64</td><td>Linux</td></tr><tr><td>M68K</td><td>FreeMiNT</td></tr><tr><td>M68K</td><td>Linux</td></tr><tr><td>M68K</td><td>RTEMS</td></tr><tr><td>M88K</td><td>OpenBSD/mvme88k</td></tr><tr><td>Meta</td><td>Linux</td></tr><tr><td>MicroBlaze</td><td>Linux</td></tr><tr><td>MIPS</td><td>IRIX</td></tr><tr><td>MIPS</td><td>Linux</td></tr><tr><td>MIPS</td><td>RTEMS</td></tr><tr><td>MIPS64</td><td>Linux</td></tr><tr><td>Moxie</td><td>Bare metal</td></tr><tr><td>Nios II</td><td>Linux</td></tr><tr><td>OpenRISC</td><td>Linux</td></tr><tr><td>PowerPC 32-bit</td><td>AIX</td></tr><tr><td>PowerPC 64-bit</td><td>AIX</td></tr><tr><td>PowerPC</td><td>AMIGA</td></tr><tr><td>PowerPC</td><td>Linux</td></tr><tr><td>PowerPC</td><td>Mac OSX</td></tr><tr><td>PowerPC</td><td>FreeBSD</td></tr><tr><td>PowerPC 64-bit</td><td>FreeBSD</td></tr><tr><td>PowerPC 64-bit</td><td>Linux ELFv1</td></tr><tr><td>PowerPC 64-bit</td><td>Linux ELFv2</td></tr><tr><td>RISC-V 32-bit</td><td>Linux</td></tr><tr><td>RISC-V 64-bit</td><td>Linux</td></tr><tr><td>S390</td><td>Linux</td></tr><tr><td>S390X</td><td>Linux</td></tr><tr><td>SPARC</td><td>Linux</td></tr><tr><td>SPARC</td><td>Solaris</td></tr><tr><td>SPARC</td><td>Solaris</td></tr><tr><td>SPARC64</td><td>Linux</td></tr><tr><td>SPARC64</td><td>FreeBSD</td></tr><tr><td>SPARC64</td><td>Solaris</td></tr><tr><td>TILE-Gx/TILEPro</td><td>Linux</td></tr><tr><td>VAX</td><td>OpenBSD/vax</td></tr><tr><td>X86</td><td>FreeBSD</td></tr><tr><td>X86</td><td>GNU HURD</td></tr><tr><td>X86</td><td>Interix</td></tr><tr><td>X86</td><td>kFreeBSD</td></tr><tr><td>X86</td><td>Linux</td></tr><tr><td>X86</td><td>Mac OSX</td></tr><tr><td>X86</td><td>OpenBSD</td></tr><tr><td>X86</td><td>OS/2</td></tr><tr><td>X86</td><td>Solaris</td></tr><tr><td>X86</td><td>Solaris</td></tr><tr><td>X86</td><td>Windows/Cygwin</td></tr><tr><td>X86</td><td>Windows/MingW</td></tr><tr><td>X86-64</td><td>FreeBSD</td></tr><tr><td>X86-64</td><td>Linux</td></tr><tr><td>X86-64</td><td>Linux/x32</td></tr><tr><td>X86-64</td><td>OpenBSD</td></tr><tr><td>X86-64</td><td>Solaris</td></tr><tr><td>X86-64</td><td>Windows/Cygwin</td></tr><tr><td>X86-64</td><td>Windows/MingW</td></tr><tr><td>X86-64</td><td>Mac OSX</td></tr><tr><td>Xtensa</td><td>Linux</td></tr></tbody></table><p>Please send additional platform test results to <a href="mailto:libffi-discuss@sourceware.org" target="_blank" rel="noreferrer">libffi-discuss@sourceware.org</a> and feel free to update the wiki page above.</p><h2 id="入手方法" tabindex="-1">入手方法 <a class="header-anchor" href="#入手方法" aria-label="Permalink to &quot;入手方法&quot;">​</a></h2><p>最新版はgithubからダウンロードできます。: <a href="https://github.com/libffi/libffi/releases/download/v3.4.4/libffi-3.4.4.tar.gz" target="_blank" rel="noreferrer">https://github.com/libffi/libffi/releases/download/v3.4.4/libffi-3.4.4.tar.gz</a>.</p><p><a href="http://github.com/libffi/libffi" target="_blank" rel="noreferrer">http://github.com/libffi/libffi</a> の開発用gitリポジトリから最新版をチェックすることもできます。方法は以下の通り：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git://github.com/libffi/libffi.git</span></span></code></pre></div><p>また、<a href="http://github.com/libffi/libffi" target="_blank" rel="noreferrer">http://github.com/libffi/libffi</a> でソースを閲覧することもできる。</p><h2 id="メーリングリスト" tabindex="-1">メーリングリスト <a class="header-anchor" href="#メーリングリスト" aria-label="Permalink to &quot;メーリングリスト&quot;">​</a></h2><p>このような小さなソフトウェアには、たくさんのメーリングリストが用意されている。</p><ul><li>libffi-announce は libffi のリリースアナウンス用の低容量メーリングリストです。</li><li>libffi-discuss は質問やバグ報告などのためのメーリングリストです。</li></ul><h2 id="著者とクレジット" tabindex="-1">著者とクレジット <a class="header-anchor" href="#著者とクレジット" aria-label="Permalink to &quot;著者とクレジット&quot;">​</a></h2><p>libffiの原作者はAnthony Greenである。</p><p>GNUコンパイラコレクションプロジェクトの開発者は、無数の貴重な貢献をしました。詳しくは、ソース配布物のこの変更ログファイルをご覧ください。</p><p>libffiの背後にあるアイデアのいくつかは、Gianni MarianiのSilicon Graphicsマシン用のフリーなgencallライブラリに触発されたものです。</p><p>クロージャ機構は Kresten Krab Thorup が設計し実装した。</p><p>主なプロセッサアーキテクチャの移植は、以下の開発者が貢献した：</p><table><thead><tr><th>アーキテクチャ</th><th>開発者</th></tr></thead><tbody><tr><td>aarch64</td><td>Marcus Shawcroft, James Greenhalgh</td></tr><tr><td>alpha</td><td>Richard Henderson</td></tr><tr><td>arc</td><td>Hackers at Synopsis</td></tr><tr><td>arm</td><td>Raffaele Sena</td></tr><tr><td>avr32</td><td>Bradley Smith</td></tr><tr><td>blackfin</td><td>Alexandre Keunecke I. de Mendonca</td></tr><tr><td>cris</td><td>Simon Posnjak, Hans-Peter Nilsson</td></tr><tr><td>csky</td><td>Ma Jun, Zhang Wenmeng</td></tr><tr><td>frv</td><td>Anthony Green</td></tr><tr><td>ia64</td><td>Hans Boehm</td></tr><tr><td>kvx</td><td>Yann Sionneau</td></tr><tr><td>loongarch64</td><td>Cheng Lulu, Xi Ruoyao, Xu Hao,Zhang Wenlong, Pan Xuefeng</td></tr><tr><td>m32r</td><td>Kazuhiro Inaoka</td></tr><tr><td>m68k</td><td>Andreas Schwab</td></tr><tr><td>m88k</td><td>Miod Vallat</td></tr><tr><td>metag</td><td>Hackers at Imagination Technologies</td></tr><tr><td>microblaze</td><td>Nathan Rossi</td></tr><tr><td>mips</td><td>Anthony Green, Casey Marshall</td></tr><tr><td>mips64</td><td>David Daney</td></tr><tr><td>moxie</td><td>Anthony Green</td></tr><tr><td>nios ii</td><td>Sandra Loosemore</td></tr><tr><td>openrisc</td><td>Sebastian Macke</td></tr><tr><td>pa</td><td>Randolph Chung, Dave Anglin, Andreas Tobler</td></tr><tr><td>powerpc</td><td>Geoffrey Keating, Andreas Tobler, David Edelsohn, John Hornkvist</td></tr><tr><td>powerpc64</td><td>Jakub Jelinek</td></tr><tr><td>riscv</td><td>Michael Knyszek, Andrew Waterman, Stef O&#39;Rear</td></tr><tr><td>s390</td><td>Gerhard Tonn, Ulrich Weigand</td></tr><tr><td>sh</td><td>Kaz Kojima</td></tr><tr><td>sh64</td><td>Kaz Kojima</td></tr><tr><td>sparc</td><td>Anthony Green, Gordon Irlam</td></tr><tr><td>tile-gx/tilepro</td><td>Walter Lee</td></tr><tr><td>vax</td><td>Miod Vallat</td></tr><tr><td>x86</td><td>Anthony Green, Jon Beniston</td></tr><tr><td>x86-64</td><td>Bo Thorsen</td></tr><tr><td>xtensa</td><td>Chris Zankel</td></tr></tbody></table><p>イェスパー・スコフとアンドリュー・ヘイリーが、コードを調べたりバグを追跡したりと、分担以上の仕事をしてくれた。</p><p>また、Tom Tromeyにはバグフィックス、ドキュメンテーション、コンフィギュレーションの手助けをしてもらった。</p><p>libffi のインターフェースについて有益なフィードバックをくれた Jim Blandy にも感謝する。</p><p>Andreas Toblerはtestsuiteに多大な労力を費やしてくれた。</p><p>Alex Oliva は SElinux の実行可能ページの問題を解決してくれた。</p><p>上記のリストはほぼ間違いなく不完全で不正確です。ご要望があれば、喜んで修正や追加を行います。</p><p>問題があったり、バグを見つけたりした場合は、issue tracker <a href="https://github.com/libffi/libffi/issues" target="_blank" rel="noreferrer">https://github.com/libffi/libffi/issues</a> に問題を申請してください。作者への連絡先は <a href="mailto:green@moxielogic.com" target="_blank" rel="noreferrer">green@moxielogic.com</a> です。</p>',38),n=[a];function l(o,s,f,h,b,c){return d(),r("div",null,n)}const g=t(e,[["render",l]]);export{u as __pageData,g as default};