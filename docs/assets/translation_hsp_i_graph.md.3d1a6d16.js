import{_ as s,c as n,o as p,a}from"./app.e18c80f2.js";const y=JSON.parse('{"title":"画面制御","description":"","frontmatter":{},"headers":[{"level":2,"title":"cls","slug":"cls","link":"#cls","children":[]},{"level":2,"title":"mes","slug":"mes","link":"#mes","children":[]},{"level":2,"title":"print","slug":"print","link":"#print","children":[]},{"level":2,"title":"title","slug":"title","link":"#title","children":[]},{"level":2,"title":"dialog","slug":"dialog","link":"#dialog","children":[]},{"level":2,"title":"bgscr","slug":"bgscr","link":"#bgscr","children":[]},{"level":2,"title":"bmpsave","slug":"bmpsave","link":"#bmpsave","children":[]},{"level":2,"title":"boxf","slug":"boxf","link":"#boxf","children":[]},{"level":2,"title":"buffer","slug":"buffer","link":"#buffer","children":[]},{"level":2,"title":"chgdisp","slug":"chgdisp","link":"#chgdisp","children":[]},{"level":2,"title":"color","slug":"color","link":"#color","children":[]},{"level":2,"title":"font","slug":"font","link":"#font","children":[]},{"level":2,"title":"gcopy","slug":"gcopy","link":"#gcopy","children":[]},{"level":2,"title":"gmode","slug":"gmode","link":"#gmode","children":[]},{"level":2,"title":"gsel","slug":"gsel","link":"#gsel","children":[]},{"level":2,"title":"gzoom","slug":"gzoom","link":"#gzoom","children":[]},{"level":2,"title":"palcolor","slug":"palcolor","link":"#palcolor","children":[]},{"level":2,"title":"palette","slug":"palette","link":"#palette","children":[]},{"level":2,"title":"pget","slug":"pget","link":"#pget","children":[]},{"level":2,"title":"picload","slug":"picload","link":"#picload","children":[]},{"level":2,"title":"pos","slug":"pos","link":"#pos","children":[]},{"level":2,"title":"pset","slug":"pset","link":"#pset","children":[]},{"level":2,"title":"redraw","slug":"redraw","link":"#redraw","children":[]},{"level":2,"title":"screen","slug":"screen","link":"#screen","children":[]},{"level":2,"title":"width","slug":"width","link":"#width","children":[]},{"level":2,"title":"sysfont","slug":"sysfont","link":"#sysfont","children":[]},{"level":2,"title":"line","slug":"line","link":"#line","children":[]},{"level":2,"title":"circle","slug":"circle","link":"#circle","children":[]},{"level":2,"title":"syscolor","slug":"syscolor","link":"#syscolor","children":[]},{"level":2,"title":"hsvcolor","slug":"hsvcolor","link":"#hsvcolor","children":[]},{"level":2,"title":"rgbcolor","slug":"rgbcolor","link":"#rgbcolor","children":[]},{"level":2,"title":"ginfo","slug":"ginfo","link":"#ginfo","children":[]},{"level":2,"title":"grect","slug":"grect","link":"#grect","children":[]},{"level":2,"title":"grotate","slug":"grotate","link":"#grotate","children":[]},{"level":2,"title":"gsquare","slug":"gsquare","link":"#gsquare","children":[]},{"level":2,"title":"objinfo","slug":"objinfo","link":"#objinfo","children":[]},{"level":2,"title":"axobj","slug":"axobj","link":"#axobj","children":[]},{"level":2,"title":"winobj","slug":"winobj","link":"#winobj","children":[]},{"level":2,"title":"sendmsg","slug":"sendmsg","link":"#sendmsg","children":[]},{"level":2,"title":"groll","slug":"groll","link":"#groll","children":[]},{"level":2,"title":"gradf","slug":"gradf","link":"#gradf","children":[]},{"level":2,"title":"celload","slug":"celload","link":"#celload","children":[]},{"level":2,"title":"celdiv","slug":"celdiv","link":"#celdiv","children":[]},{"level":2,"title":"celput","slug":"celput","link":"#celput","children":[]}],"relativePath":"translation/hsp/i_graph.md","lastUpdated":1676126774000}'),l={name:"translation/hsp/i_graph.md"},o=a(`<h1 id="画面制御" tabindex="-1">画面制御 <a class="header-anchor" href="#画面制御" aria-hidden="true">#</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li></ul><h2 id="cls" tabindex="-1">cls <a class="header-anchor" href="#cls" aria-hidden="true">#</a></h2><p>画面クリア</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1
 p1=0〜4(0) : クリアする時の色
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウ内の情報をすべてクリアします。</p><p>p1でクリアする５種類の色を指定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">色の指定値 :</span></span>
<span class="line"><span style="color:#A6ACCD;"> ( 0=白 / 1=明るい灰色 / 2=灰色 / 3=暗い灰色 / 4=黒 )</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>cls命令で画面をクリアすると、 画面にあるボタンや入力ボックスなどのオブジェクト類、フォントやカラー設定が初期状態に戻ります。</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="mes" tabindex="-1">mes <a class="header-anchor" href="#mes" aria-hidden="true">#</a></h2><p>メッセージ表示</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;strings&quot;,sw
 &quot;strings&quot; : 表示するメッセージ、または変数
 sw(0)     : オプション
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウ内に、指定されたメッセージを表示します。 メッセージは、カレントポジションと呼ばれるウィンドウ上の仮想的なカーソル位置から表示されます。(カレントポジションはpos命令により設定することができます。) オプション値によって、メッセージ表示時の動作を指定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   値  : マクロ名       : 動作</span></span>
<span class="line"><span style="color:#A6ACCD;"> -----------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">   1   : mesopt_nocr    : 最後に改行しない</span></span>
<span class="line"><span style="color:#A6ACCD;">   2   : mesopt_shadow  : 影付き文字を描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   4   : mesopt_outline : 縁取り文字を描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   8   : mesopt_light   : 影付き/縁取りを簡易描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   16  : mesopt_gmode   : gmodeの設定を反映する(HSP3Dishのみ)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>1またはmesopt_nocrを指定した場合は、表示した文字の右側にカレントポジションが移動します。 このオプション指定がない場合は、カレントポジションが次の行に自動的に移動します。 オプションに2またはmesopt_shadowを指定した場合は、影の付いた文字を描画します。 オプションに4またはmesopt_outlineを指定した場合は、縁取りの付いた文字を描画します。 影と縁取りは、objcolor命令で指定された色が使用されます。 また、影と縁取りの幅はfont命令で指定することができます。 オプションに16またはmesopt_gmodeを指定した場合は、gmodeで指定した半透明、色加算などの設定を反映した描画を行います。 (このオプションは、HSP3Dish及びHGIMG4でのみ有効です。通常のHSP3ランタイムでは無視されます)</p><p>影と縁取りの幅を1より大きくした場合は、表示処理の負荷が大きくなります。 簡易的な描画で負荷を軽減したい場合は、オプションに8またはmesopt_lightを指定するようにしてください。</p><p>オプション値は加算することで複数を同時に指定することができます。 「mesopt_nocr+mesopt_shadow」を指定した場合は、影付きで改行しない表示となります。</p><p>表示されるメッセージのフォントは、font命令で指定することができます。 表示するメッセージに改行コードが含まれていた場合には、改行され次の行から表示を続けます。</p><p><strong>参照</strong>:</p><p>print font pos objcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>例</strong>:</p><pre><code>mes &quot;mes命令は文字列を表示します&quot;

mes {&quot;複数行の文字列も
</code></pre><p>表示できます&quot;}</p><pre><code>font msmincho, 20, font_bold
mes &quot;font命令によって文字の大きさなどを変えられます&quot;
</code></pre><h2 id="print" tabindex="-1">print <a class="header-anchor" href="#print" aria-hidden="true">#</a></h2><p>メッセージ表示</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;strings&quot;,sw
 &quot;strings&quot; : 表示するメッセージまたは変数
 sw(0)     : オプション
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウ内に、指定されたメッセージを表示します。 メッセージは、カレントポジションと呼ばれるウィンドウ上の仮想的なカーソル位置から表示されます。(カレントポジションはpos命令により設定することができます。) オプション値によって、メッセージ表示時の動作を指定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   値  : マクロ名       : 動作</span></span>
<span class="line"><span style="color:#A6ACCD;"> -----------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">   1   : mesopt_nocr    : 最後に改行しない</span></span>
<span class="line"><span style="color:#A6ACCD;">   2   : mesopt_shadow  : 影付き文字を描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   4   : mesopt_outline : 縁取り文字を描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   8   : mesopt_light   : 影付き/縁取りを簡易描画する</span></span>
<span class="line"><span style="color:#A6ACCD;">   16  : mesopt_gmode   : gmodeの設定を反映する(HSP3Dishのみ)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>1またはmesopt_nocrを指定した場合は、表示した文字の右側にカレントポジションが移動します。 このオプション指定がない場合は、カレントポジションが次の行に自動的に移動します。 オプションに2またはmesopt_shadowを指定した場合は、影の付いた文字を描画します。 オプションに4またはmesopt_outlineを指定した場合は、縁取りの付いた文字を描画します。 影と縁取りは、objcolor命令で指定された色が使用されます。 また、影と縁取りの幅はfont命令で指定することができます。 オプションに16またはmesopt_gmodeを指定した場合は、gmodeで指定した半透明、色加算などの設定を反映した描画を行います。 (このオプションは、HSP3Dish及びHGIMG4でのみ有効です。通常のHSP3ランタイムでは無視されます)</p><p>影と縁取りの幅を1より大きくした場合は、表示処理の負荷が大きくなります。 簡易的な描画で負荷を軽減したい場合は、オプションに8またはmesopt_lightを指定するようにしてください。</p><p>オプション値は加算することで複数を同時に指定することができます。 「mesopt_nocr+mesopt_shadow」を指定した場合は、影付きで改行しない表示となります。</p><p>表示されるメッセージのフォントは、font命令で指定することができます。 表示するメッセージに改行コードが含まれていた場合には、改行され次の行から表示を続けます。</p><p>print命令はmes命令の別名であり、どちらも同じ意味になります。 HSPでは、mes命令を使用することを推奨しています。</p><p><strong>参照</strong>:</p><p>mes font pos objcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-hidden="true">#</a></h2><p>タイトルバー設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;strings&quot;
 &quot;strings&quot; : 指定する文字列
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウのタイトルバーキャプションを、&quot;strings&quot;の内容に設定します。 (タイトルバーキャプションは、通常「Hot Soup Processor ver3.x」と表示されている部分のことです)</p><p><strong>参照</strong>:</p><p>objprm</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLetアプレットの場合はステータスバーのテキストが変化します。</p><p><strong>例</strong>:</p><pre><code>// 「Window Title」という文字をウィンドウのタイトルバーに表示
title &quot;Window Title&quot;
</code></pre><h2 id="dialog" tabindex="-1">dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h2><p>ダイアログを開く</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;message&quot;,p1,&quot;option&quot;
 p1=0〜(0) : ダイアログのタイプ設定
</code></pre><p><strong>説明</strong>:</p><p>Windowsの標準的な各種ダイアログボックスを画面に表示します。 dialog命令で出したダイアログは、 HSPのウィンドウとは別にポップアップして現われます。</p><p>ユーザーの操作によりダイアログを閉じるまでは、 HSPスクリプトの続きは実行されません。</p><p>ダイアログのタイプは、p1の設定によって変わります。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   タイプ : 内容</span></span>
<span class="line"><span style="color:#A6ACCD;"> -----------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">     0    : 標準メッセージボックス + [OK]ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">     1    : 警告メッセージボックス + [OK]ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">     2    : 標準メッセージボックス + [はい][いいえ]ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">     3    : 警告メッセージボックス + [はい][いいえ]ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">    16    : ファイルOPEN(開く)ダイアログ</span></span>
<span class="line"><span style="color:#A6ACCD;">    17    : ファイルSAVE(保存)ダイアログ</span></span>
<span class="line"><span style="color:#A6ACCD;">    32    : カラー選択ダイアログ(固定色)</span></span>
<span class="line"><span style="color:#A6ACCD;">    33    : カラー選択ダイアログ(RGBを自由に選択)</span></span>
<span class="line"><span style="color:#A6ACCD;">    64〜  : 拡張ダイアログ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>タイプ0〜3の場合は、&quot;message&quot; で指定した内容を表示するメッセージボックスが現われます。また、&quot;option&quot;でメッセージボックスのタイトルバー文字列を指定することができます。(省略した場合はタイトルに何も表示されません) メッセージボックスが閉じられると、押したボタンの情報がシステム変数statに代入されます。この時、変数statの内容は、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  1 :「OK」ボタンが押された</span></span>
<span class="line"><span style="color:#A6ACCD;">  6 :「はい」ボタンが押された</span></span>
<span class="line"><span style="color:#A6ACCD;">  7 :「いいえ」ボタンが押された</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>のようになります。</p><p>タイプ16〜17の場合は、ファイル一覧から選択をするためのファイル選択ダイアログが現われます。この時、 &quot;message&quot;にロード(またはセーブ)するファイルの拡張子(3文字まで)を指定して、 その拡張子だけが表示されるようにすることができます。(&quot;*&quot;を指定するとすべてのファイルが表示されます) また、&quot;option&quot;で拡張子の詳細、たとえば &quot;txt&quot;ならば、&quot;テキストファイル&quot;などの補助的な説明がダイアログの「ファイルの種類」に表示されます。 &quot;option&quot;は省略することも可能です。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;txt&quot;,16,&quot;テキストファイル&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;STAT=&quot;+stat+&quot;\\nNAME=&quot;+refstr,0,&quot;結果&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>ファイル選択が完了すると、その結果がシステム変数statに代入されます。 変数statが1ならば、正常に選択されたことを意味します。変数statが0ならば、キャンセルされたかエラーが発生したことを意味しています。 「|」記号により区切ることで複数のファイル種別を指定することが可能です。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;txt|log&quot;,16,&quot;テキストファイル|ログファイル&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;STAT=&quot;+stat+&quot;\\nNAME=&quot;+refstr,0,&quot;結果&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>タイプ32〜33の場合は、カラー選択をするダイアログが表示されます。色選択が終了すると、選択した色のRGBデータがシステム変数、 ginfo_r,ginfo_g,ginfo_bに代入されます。また、変数 statが0ならば、キャンセルされたかエラーが発生したことを意味しています。1ならば、正常に選択されたことを意味します。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;&quot;,33</span></span>
<span class="line"><span style="color:#A6ACCD;">	dialog &quot;R=&quot;+ginfo_r+&quot;/G=&quot;+ginfo_g+&quot;/B=&quot;+ginfo_b,0,&quot;結果&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	stop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>タイプ64以降の値は、ランタイムごとに用意される拡張ダイアログのために予約されています。サポート外のタイプが指定された場合には、何も実行されません。</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="bgscr" tabindex="-1">bgscr <a class="header-anchor" href="#bgscr" aria-hidden="true">#</a></h2><p>枠のないウィンドウを初期化</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6,p7,p8
 p1=0〜(0)  : ウィンドウID
 p2=1〜(640): 初期化する画面サイズX（1ドット単位）
 p3=1〜(480): 初期化する画面サイズY（1ドット単位）
 p4=0〜(0) : 初期化する画面モード
 p5=0〜(-1) : ウィンドウの配置X（1ドット単位）
 p6=0〜(-1) : ウィンドウの配置Y（1ドット単位）
 p7=0〜     : ウィンドウのサイズX（1ドット単位）
 p8=0〜     : ウィンドウのサイズY（1ドット単位）
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウIDを初期化して枠のないウィンドウを作成します。 このウィンドウは、スクリーンセーバー作成などの特殊な用途で使用されます。 p2,p3パラメーターにより、初期化される画面サイズを指定します。 p4の初期化する画面モードは、以下から選ぶことができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   1 : パレットモード(1670万色中256色)で作成する</span></span>
<span class="line"><span style="color:#A6ACCD;">   2 : 非表示のウィンドウを作成する</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p4パラメータに「+1」(パレットモードで作成する)を指定した場合は、パレットあり256色のモードで画面が作成されます。 このモードを指定しなかった場合は、フルカラー(24bitカラー)の画面が作成されます。</p><p>p4パラメータに「+2」(非表示のウィンドウを作成する)を指定した場合は、実行時にはウィンドウが表示されませんが、「gsel ID,1」 で表示させることが可能です。</p><p>p5,p6パラメーターにより、デスクトップ画面上に表示されるウィンドウの位置を指定することができます。 p5,p6を省略またはマイナス値にした場合は、システム規定の座標が使用されます。 p2,p3パラメーターで指定された画面サイズの一部だけをウィンドウに表示したい場合には、 p7,p8のパラメータで、ウィンドウのクライアントサイズ(実際に表示される大きさ)を指定することができます。 その場合は、groll命令によりウィンドウ内に表示される位置を設定することができるようになります。 通常は、p7,p8パラメーターの指定は省略して構いません。その場合は、p2,p3で指定された画面サイズと同じクライアントサイズで表示します。</p><p>bgscr命令で画面を初期化した後はそのウィンドウIDが画面制御命令の描画先になります。</p><p><strong>参照</strong>:</p><p>screen buffer groll screen_hide screen_normal screen_palette</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet使用時は、パレットモードを使用できません。</p><p><strong>例</strong>:</p><pre><code>mes &quot;プログラムを終了するにはこのウィンドウを閉じてください&quot;

// 枠のないウィンドウを作成
bgscr 2, 320, 240
boxf
</code></pre><h2 id="bmpsave" tabindex="-1">bmpsave <a class="header-anchor" href="#bmpsave" aria-hidden="true">#</a></h2><p>画面イメージセーブ</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;filename&quot;
 &quot;filename&quot; : セーブするファイル名
</code></pre><p><strong>説明</strong>:</p><p>現在の画面イメージをそのままBMP形式の画像ファイルとしてセーブします。 &quot;filename&quot;で指定された名前でファイルが作成されます。拡張子も含めてファイル名を指定する必要があります。</p><p>セーブされる画像サイズは、対象となるウィンドウが初期化されたサイズになります。サイズを変更する場合には、一旦別なサイズのウィンドウに内容をコピーしてから、bmpsaveをするようにしてください。</p><h2 id="boxf" tabindex="-1">boxf <a class="header-anchor" href="#boxf" aria-hidden="true">#</a></h2><p>矩形を塗りつぶす</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜(0)  : 矩形の左上X座標
 p2=0〜(0)  : 矩形の左上Y座標
 p3=0〜     : 矩形の右下X座標
 p4=0〜     : 矩形の右下Y座標
</code></pre><p><strong>説明</strong>:</p><p>画面上に、 (p1,p2)と(p3,p4) を左上、右下の点として、現在の描画色で矩形 (四角形)を塗りつぶします。 (p1,p2)を省略した場合は、画面の左上(0,0)が設定されます。 (p3,p4)を省略した場合は、画面の右下(描画サイズいっぱいまで)が設定されます。</p><p><strong>参照</strong>:</p><p>color hsvcolor rgbcolor palcolor line circle gradf</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>例</strong>:</p><pre><code>// 全パラメータを省略すると全体塗りつぶし
boxf

color 255, 128, 0
boxf 80, 80, 150, 130
</code></pre><h2 id="buffer" tabindex="-1">buffer <a class="header-anchor" href="#buffer" aria-hidden="true">#</a></h2><p>仮想画面を初期化</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜 (0) : ウィンドウID
 p2=1〜(640): 初期化する画面サイズX（1ドット単位）
 p3=1〜(480): 初期化する画面サイズY（1ドット単位）
 p4=0〜(0) : 初期化する画面モード
</code></pre><p><strong>説明</strong>:</p><p>screen命令と同じく、指定したウィンドウIDを初期化して使用できるようにします。初期化する画面サイズと、画面モードはscreen命令と変わりませんが、buffer命令では、メモリ上に仮想画面が作られるだけで、実際の画面には表示されません。 これで作成した仮想画面は、通常の画面と同じようにprint命令やpicload命令を使用することができます。 gcopy命令などで別の画面にコピーするためのストック場所に使ったり、現在の画面を一時的に残しておくための保管場所に使うことができます。</p><p>なお、screenで初期化されたウィンドウIDをbuffer命令で再初期化することはできません。</p><p>buffer命令で画面を初期化した後はそのウィンドウIDが画面制御命令の描画先になります。</p><p><strong>参照</strong>:</p><p>screen bgscr screen_normal screen_palette</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet使用時は、パレットモードを使用できません。</p><h2 id="chgdisp" tabindex="-1">chgdisp <a class="header-anchor" href="#chgdisp" aria-hidden="true">#</a></h2><p>画像解像度を変更する</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3
 p1=0〜2(0)  : モードの設定
 p2=0〜(640) : X方向の画像解像度の設定
 p3=0〜(480) : Y方向の画像解像度の設定
</code></pre><p><strong>説明</strong>:</p><p>現在の表示解像度を強制的に変更します。 (p2,p3)でX,Y解像度を設定し、p1で変更モードを設定します。 モードは、1がフルカラーモード(32bit)、 2がパレットモード(8bit)となります。変更モードが0の場合は、最初の状態(変更前)に復帰します。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	chgdisp 1,640,480	; 640x480フルカラーに設定する</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>(p2,p3)のパラメーターの指定を省略した場合は、(640,480)となります。</p><p>chgdisp命令が実行されると、 その結果がシステム変数statに反映されます。 システム変数statの内容は以下の通りになります。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  stat=0 : 正常に解像度が設定された。</span></span>
<span class="line"><span style="color:#A6ACCD;">  stat=1 : カラーモードの変更はできなかったが、</span></span>
<span class="line"><span style="color:#A6ACCD;">           解像度の変更は正常に行なわれた。</span></span>
<span class="line"><span style="color:#A6ACCD;">  stat=2 : 解像度の変更ができなかった。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h2><p>カラー設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3
 p1,p2,p3=0〜255(0) : 色コード（R,G,Bの輝度）
</code></pre><p><strong>説明</strong>:</p><p>メッセージ表示、描画などの色を指定した値に設定します。 p1,p2,p3がそれぞれ、R,G,Bの輝度になります。</p><p>0が最も暗く、255が最も明るくなります。 color 0,0,0 は黒に、color 255,255,255 は白になります。 パレットモードの画面では、指定した色に一番近いパレットが選択されます。</p><p><strong>参照</strong>:</p><p>palcolor hsvcolor rgbcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="font" tabindex="-1">font <a class="header-anchor" href="#font" aria-hidden="true">#</a></h2><p>フォント設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;fontname&quot;,p1,p2,p3
 &quot;fontname&quot;   : フォント名
 p1=1〜(12)   : フォントの大きさ
 p2=0〜(0)    : フォントのスタイル
 p3=1〜(1)    : フォント修飾の幅
</code></pre><p><strong>説明</strong>:</p><p>mesおよびprint命令などで表示するテキスト書体の設定をします。 &quot;fontname&quot;でフォントの名前を指定します。</p><p>フォント名は、&quot;ＭＳ 明朝&quot;、&quot;ＭＳ ゴシック&quot;などのフォント名を直接指定してください。 フォントの大きさはドット数に比例した論理サイズで指定します。 数が大きいほど、文字も大きくなります。フォントのスタイルは、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  スタイル 1  : 太文字</span></span>
<span class="line"><span style="color:#A6ACCD;">  スタイル 2  : イタリック体</span></span>
<span class="line"><span style="color:#A6ACCD;">  スタイル 4  : 下線</span></span>
<span class="line"><span style="color:#A6ACCD;">  スタイル 8  : 打ち消し線</span></span>
<span class="line"><span style="color:#A6ACCD;">  スタイル16  : アンチエイリアス</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>となります。数値を合計することで複数のスタイルを同時に指定することも可能です。 p2を省略すると、0(通常のスタイル)になります。 スタイル16を指定すると、文字のアンチエイリアスを有効にします。(これはOS環境によって動作が異なります)</p><p>p3パラメーターで、影付き・縁取りなど修飾されたフォント表示の際に使用される幅を指定します。パラメーターを省略した場合は、デフォルト値(1)が使用されます。 フォント修飾は、mesまたはprint命令のオプション値で設定可能です。</p><p>初期設定やシステム指定のフォントに戻すには、 sysfont命令を使用してください。また、オブジェクトのフォントを変更する場合には、 objmode命令でモードの指定を行なう必要があります。</p><p>指定されたフォントが発見できなかった場合には、代用のフォントが自動的に検索されます。代用フォントの検索にも失敗した場合には、システム変数statに-1が代入されます。フォントが正常に設定された場合には、システム変数statに0が代入されます。</p><p><strong>参照</strong>:</p><p>sysfont objmode font_antialias font_bold font_italic font_normal font_strikeout font_underline</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="gcopy" tabindex="-1">gcopy <a class="header-anchor" href="#gcopy" aria-hidden="true">#</a></h2><p>画面コピー</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜(0) : ウィンドウID
 p2=0〜(0) : コピー元の左上X座標
 p3=0〜(0) : コピー元の左上Y座標
 p4=0〜    : コピーする大きさX（ドット単位）
 p5=0〜    : コピーする大きさY（ドット単位）
</code></pre><p><strong>説明</strong>:</p><p>gcopy命令は、 指定したウィンドウIDの画面の一部を、現在の描画先カレントポジションにコピーします。 コピー元のウィンドウIDは、自分のウィンドウIDと同じかまたは、screen命令やbuffer命令で初期化されたウィンドウIDでなければなりません。</p><p>gcopy命令でコピーする場合は、gmode命令によってコピーするモードをいくつか選ぶことができます。</p><p>gcopy命令でパレットモード画面の画像をコピーする際には注意が必要です。 コピーする２つのウィンドウのパレットが同じものでも問題のない画像を準備する必要があります。 また、パレットモード時のパレットは、ユーザー側で正しいものを設定するようにしてください。(画像ファイル使用時に、picload命令だけではパレット設定は行なわれません。)</p><p><strong>参照</strong>:</p><p>gmode gzoom</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="gmode" tabindex="-1">gmode <a class="header-anchor" href="#gmode" aria-hidden="true">#</a></h2><p>画面コピーモード設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜6(0)   : 画面コピーモード
 p2=0〜(32)   : コピーする大きさX（ドット単位）
 p3=0〜(32)   : コピーする大きさY（ドット単位）
 p4=0〜256(0) : 半透明合成時のブレンド率
</code></pre><p><strong>説明</strong>:</p><p>gcopyで使用されるモードおよび、サイズ、ブレンド率などを設定します。 それぞれのコピーモード動作は以下の通りです。</p><p>・モード0 = 通常のコピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">WindowsのシステムAPI(BitBlt関数)を使った画像コピーを行ないます。</span></span>
<span class="line"><span style="color:#A6ACCD;">最も標準的なモードです。</span></span>
<span class="line"><span style="color:#A6ACCD;">多くの場合、他のモードよりも高速に処理されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード1 = メモリ間コピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">画像バッファ間のメモリコピーを行ないます。</span></span>
<span class="line"><span style="color:#A6ACCD;">コピー元とコピー先は、同じ画像モード(パレットモード・フルカラーモード)でなければなりません。</span></span>
<span class="line"><span style="color:#A6ACCD;">動作は モード0と同じですが、非常に小さいサイズ(16*16ドット以下等)のコピーを行った際 モード0よりも 若干 高速になる場合があります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード2 = 透明色付きコピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">モード1と同様の方法でコピーを行ないますが、 RGBがすべて0(完全な黒)のドットは透明色とみなされコピーされません。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード3 = 半透明合成コピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">フルカラーモード時のみ使用することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">gmodeの4番目のパラメーターで指定したブレンド率による半透明合成コピーを行ないます。ブレンド率は0〜256の値となり、256で完全なコピーになります。</span></span>
<span class="line"><span style="color:#A6ACCD;">ブレンド率が0の場合はコピーは実行されません。</span></span>
<span class="line"><span style="color:#A6ACCD;">また、ブレンド率が256以上はメモリ間コピーが実行されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード4 = 透明色付き半透明合成コピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">モード3と同様の方法でコピーを行ないますが、RGB値が color命令で設定された色と同じドットは透明色とみなされコピーされません。</span></span>
<span class="line"><span style="color:#A6ACCD;">ブレンド率が0の場合はコピーは実行されません。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード5 = 色加算合成コピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">フルカラーモード時のみ使用することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">gmodeの4番目のパラメーターで指定したブレンド率による色加算合成コピーを行ないます。色加算では、コピー先のRGB値に、コピー元のRGB値を加算します。</span></span>
<span class="line"><span style="color:#A6ACCD;">加算時に輝度が255を越える場合は、255にクランプされます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード6 = 色減算合成コピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">フルカラーモード時のみ使用することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">gmodeの4番目のパラメーターで指定したブレンド率による色減算合成コピーを行ないます。色減算では、コピー先のRGB値から、コピー元のRGB値を減算します。減算時に輝度が0を下回る場合は、0にクランプされます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>・モード7 = ピクセルアルファブレンドコピー</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">フルカラーモード時のみ使用することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">gmodeで指定されたサイズの画像を、元画像の右側に用意しておき、 右側の画像をアルファブレンド成分として背景合成コピーを行ないます。</span></span>
<span class="line"><span style="color:#A6ACCD;">アルファブレンド成分が255の場合は、 そのまま元画像のピクセルがコピーされ、255より小さい場合には、そのブレンド率で背景と合成されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">ピクセルはRGB単位で参照されるため、RGBに異なるブレンド率を設定可能です。</span></span>
<span class="line"><span style="color:#A6ACCD;">アルファブレンド画像は、通常 (0,0,0)〜(255,255,255) のグレースケールで表現するといいでしょう。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>これらのモードは、gzoom命令では使用されません。 あくまでもgcopy命令使用時なので注意してください。 また、gmodeは現在 gsel命令で選択されているウィンドウIDのモードが変更されます。gmodeの設定後に、別なウィンドウIDでgcopy命令を実行しても設定が反映されないので注意してください。</p><p>(p2,p3)はコピーサイズのデフォルトを設定します。この値は、gcopy,gzoom命令でコピーする大きさの値を省略した場合にデフォルトで使われるサイズです。</p><p><strong>参照</strong>:</p><p>gcopy gmode_add gmode_alpha gmode_gdi gmode_mem gmode_pixela gmode_rgb0 gmode_rgb0alpha gmode_sub</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、モード7はサポートしていません。</p><h2 id="gsel" tabindex="-1">gsel <a class="header-anchor" href="#gsel" aria-hidden="true">#</a></h2><p>描画先指定、ウィンドウ最前面、非表示設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2
 p1=0〜(0)  : ウィンドウID
 p2=0〜2(0) : ウィンドウアクティブスイッチ
</code></pre><p><strong>説明</strong>:</p><p>画面制御命令の描画先を指定したウィンドウIDの画面に変更します。 これ以降は、p1で指定したウィンドウIDの画面に対して、mes命令やpicload命令などの画面描画に関する命令が実行されるようになります。</p><p>p2でオプションのスイッチが指定できます。p2の値が、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  -1 : 指定したウィンドウを非表示にする</span></span>
<span class="line"><span style="color:#A6ACCD;">   0 : 指定したウィンドウに特に影響はない</span></span>
<span class="line"><span style="color:#A6ACCD;">   1 : 指定したウィンドウがアクティブになる</span></span>
<span class="line"><span style="color:#A6ACCD;">   2 : 指定したウィンドウがアクティブになり、さらに常に最前面になる</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>のようにウィンドウの状態を変更することができます。 p2の指定を省略した場合は、特に何も影響はありません。</p><p>p2=-1で非表示にした場合は、 指定したウィンドウが消えますが完全に消去されるわけではありません。再びp2=1か2でアクティブにすると復帰します。</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、モード2はサポートされていません、またモード1で必ずアクティブになるとは限りません。</p><h2 id="gzoom" tabindex="-1">gzoom <a class="header-anchor" href="#gzoom" aria-hidden="true">#</a></h2><p>変倍して画面コピー</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6,p7,p8
 p1=0〜     : 画面にコピーする時の大きさX（ドット単位）
 p2=0〜     : 画面にコピーする時の大きさY（ドット単位）
 p3=0〜(0)  : ウィンドウID
 p4=0〜(0)  : コピー元の左上X座標
 p5=0〜(0)  : コピー元の左上Y座標
 p6=0〜     : コピーする大きさX（ドット単位）
 p7=0〜     : コピーする大きさY（ドット単位）
 p8=0〜1(0) : ズームのモード
</code></pre><p><strong>説明</strong>:</p><p>gzoom命令は、 指定したウィンドウIDの画面の一部を現在の描画先カレントポジションに、任意の大きさに変倍してコピーします。 コピー元のウィンドウIDは、自分のウィンドウIDと同じかまたは、screen命令やbuffer命令で初期化されたウィンドウIDでなければなりません。</p><p>p8でズームのモードを指定することができます。 p8に1を指定した場合には、 拡大縮小時にハーフトーンを使用した高品質な画像を生成します。(Windows9Xでは動作しません。)</p><p>p8が0か、または省略されている場合は、ハーフトーンを使用しませんが、 そのぶん高速に画像処理を行なうことができます。</p><p><strong>参照</strong>:</p><p>gcopy</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="palcolor" tabindex="-1">palcolor <a class="header-anchor" href="#palcolor" aria-hidden="true">#</a></h2><p>描画パレット設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1
 p1=0〜255(0) : パレットコード
</code></pre><p><strong>説明</strong>:</p><p>メッセージ表示、描画などの色を指定した値に設定します。 p1はパレットコードになります。パレットコードは、 パレットモード画面のために用意された256色(palette命令により設定された色)の中で何番目かを示すものです。 通常フルカラーモードを利用している限りでは使用する必要はありません。</p><p><strong>参照</strong>:</p><p>color hsvcolor rgbcolor palette</p><h2 id="palette" tabindex="-1">palette <a class="header-anchor" href="#palette" aria-hidden="true">#</a></h2><p>パレット設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜255(0)       : パレットコード
 p2,p3,p4=0〜255(0) : 色コード（R,G,Bの輝度）
 p5=0〜1(0)         : 更新スイッチ
</code></pre><p><strong>説明</strong>:</p><p>現在の画面に設定されているパレットの色データを変更します。 p1のパレットコードにp2,p3,p4で指定した輝度のRGBカラーを設定します。 p1の値がマイナスの場合は、設定は無視されます。 p5の値によって、画面上の更新を指定することができます。 p5が0か省略されている時は、パレットに値を設定しますが、 すぐには画面上に反映されません。 p5が1の時は、設定したパレット全体が画面上にも反映されます。 画面上に反映されるまでには時間がかかるため、パレットをまとめて更新する場合には、一番最後に更新スイッチを1にするようにしてください。</p><p><strong>参照</strong>:</p><p>palcolor</p><h2 id="pget" tabindex="-1">pget <a class="header-anchor" href="#pget" aria-hidden="true">#</a></h2><p>1dotの点を取得</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2
 p1=0〜 : 画面上のX座標
 p2=0〜 : 画面上のY座標
</code></pre><p><strong>説明</strong>:</p><p>画面上の1ドットの色データを読みだします。</p><p>p1,p2で指定した座標にあるドットの色データが選択色として設定されます。(color命令で指定したのと同じ状態になります) p1,p2の指定を省略した場合には、pos命令で設定されたカレントポジションの座標が使用されます。 取得した色の情報は、ginfo関数またはginfo_r,ginfo_g,ginfo_bマクロにより参照することができます。</p><p><strong>参照</strong>:</p><p>ginfo ginfo_r ginfo_g ginfo_b</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="picload" tabindex="-1">picload <a class="header-anchor" href="#picload" aria-hidden="true">#</a></h2><p>画像ファイルをロード</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;filename&quot;,p1
 &quot;filename&quot; : ロードするファイル名
 p1=0〜1(0) : 画像ロードモード
</code></pre><p><strong>説明</strong>:</p><p>画像ファイルをロードします。通常は、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">picload &quot;test.bmp&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>とするだけで、&quot;test.bmp&quot;で指定された画像ファイルが現在の画面にロードされ、ウィンドウサイズが自動的に絵のサイズに合わせられます。</p><p>p1の画像ロードモードは、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  モード０：ウィンドウを初期化してロード</span></span>
<span class="line"><span style="color:#A6ACCD;">  モード１：現在の画面の上にロード</span></span>
<span class="line"><span style="color:#A6ACCD;">  モード２：黒色でウィンドウを初期化してロード</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p1のロードモードを省略もしくは０にすることで、画像のサイズで初期化したウィンドウにロードされます。</p><p>p1にロードモード１を指定することで、現在のウィンドウのサイズなどを一切変更せず指定した座標からロードすることができます。 この場合は、pos命令で指定した座標が左上となります。</p><p>現在ロードできる、ファイル形式は以下の通りです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">BMP形式  : 拡張子 BMP : Windows標準の4,8,24bitのデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;">                        RLE圧縮のデータも扱うことができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">GIF形式  : 拡張子 GIF : GIF形式のデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;">                        アニメーション形式は扱えません。</span></span>
<span class="line"><span style="color:#A6ACCD;">JPEG形式 : 拡張子 JPG : JFIF標準のJPEGデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;">                        グレイスケールデータでもOKです。</span></span>
<span class="line"><span style="color:#A6ACCD;">ICO形式  : 拡張子 ICO : Windows標準のICO形式のアイコンデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;">PNG形式  : 拡張子 PNG : Portable Network Graphicsデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;">PSD形式  : 拡張子 PSD : Photoshop形式のデータ。(合成レイヤーのみ)</span></span>
<span class="line"><span style="color:#A6ACCD;">TGA形式  : 拡張子 TGA : TARGA 形式のデータ。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>picload命令は、screen、buffer、 bgscr命令で初期化された画面に対して実行することができます。 ※マルチアイコン形式のICOファイルには標準では対応していません。 ※インターレース形式のPNGファイルには標準では対応していません。PNGがサポートするすべての形式を読み込む場合は、imgloadまたはhspcvプラグインをご使用下さい。</p><p><strong>参照</strong>:</p><p>screen buffer bgscr imgload</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時には、BMP、JPEG、GIF、PNGの読み込みをサポートしています。その他の読み込みはサポートしていません。</p><h2 id="pos" tabindex="-1">pos <a class="header-anchor" href="#pos" aria-hidden="true">#</a></h2><p>カレントポジション設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2
 p1=0〜     : カレントポジションのX座標
 p2=0〜     : カレントポジションのY座標
</code></pre><p><strong>説明</strong>:</p><p>メッセージ表示、オブジェクトの表示などの基本座標となるカレントポジションの座標を指定します。</p><p>Xは一番左が0に、Yは上が0になり、1ドット単位の指定になります。 パラメータの省略をすると、現在の値が使われます。</p><p><strong>参照</strong>:</p><p>mes gcopy line</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="pset" tabindex="-1">pset <a class="header-anchor" href="#pset" aria-hidden="true">#</a></h2><p>1dotの点を表示</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2
 p1=0〜 : 画面上のX座標
 p2=0〜 : 画面上のY座標
</code></pre><p><strong>説明</strong>:</p><p>画面上に、現在設定されている描画色で1ドットの点を描画します。 p1,p2の指定を省略した場合には、pos命令で設定されたカレントポジションの座標が使用されます。</p><p><strong>参照</strong>:</p><p>pget color palcolor hsvcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="redraw" tabindex="-1">redraw <a class="header-anchor" href="#redraw" aria-hidden="true">#</a></h2><p>再描画の設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜3(1) : 描画モードの設定
 p2=0〜(0)  : 再描画する左上X座標
 p3=0〜(0)  : 再描画する左上Y座標
 p4=0〜(0)  : 再描画する大きさX（ドット単位）
 p5=0〜(0)  : 再描画する大きさY（ドット単位）
</code></pre><p><strong>説明</strong>:</p><p>画面の描画モードを指定します。描画モードとは、</p><p>描画モード0:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">mes,print,gcopy,gzoom などの画面制御命令が実行されても仮想画面を書き換えるだけで、実際の画面には反映されません。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>描画モード1:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">画面制御命令が実行されると、実際の画面にも反映されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>となっています。通常は描画モード１です。 描画モード0で画面内に画像をコピーしたり、メッセージを表示しておいて、最後にモード1にすることで画面の書き換えのちらつきをなくしスムーズに見せることができます。</p><p>モード1を指定した場合は即座に画面の更新を行います。</p><p>モード値に2を足した値を指定すると、描画モードのみを変更し画面の更新はされません。</p><p>また、p2〜p5までのパラメータにより、画面の一部だけを再描画させることが可能です。通常は省略すれば、全画面の更新を行ないます。</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>例</strong>:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// redraw命令のサンプル</span></span>
<span class="line"><span style="color:#A6ACCD;">// redraw命令を消すとちらつきが確認できます</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">*main_loop</span></span>
<span class="line"><span style="color:#A6ACCD;">	redraw 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	color 255, 255, 255</span></span>
<span class="line"><span style="color:#A6ACCD;">	boxf</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	pos 0, 0</span></span>
<span class="line"><span style="color:#A6ACCD;">	color 0, 0, 0</span></span>
<span class="line"><span style="color:#A6ACCD;">	mes &quot;描画と消去を繰り返しても文字がちらつきません&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	redraw 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	wait 1</span></span>
<span class="line"><span style="color:#A6ACCD;">	goto *main_loop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="screen" tabindex="-1">screen <a class="header-anchor" href="#screen" aria-hidden="true">#</a></h2><p>ウィンドウを初期化</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6,p7,p8
 p1=0〜(0)  : ウィンドウID
 p2=1〜(640): 初期化する画面サイズX（1ドット単位）
 p3=1〜(480): 初期化する画面サイズY（1ドット単位）
 p4=0〜(0)  : 初期化する画面モード
 p5=0〜(-1) : ウィンドウの配置X（1ドット単位）
 p6=0〜(-1) : ウィンドウの配置Y（1ドット単位）
 p7=0〜     : ウィンドウのサイズX（1ドット単位）
 p8=0〜     : ウィンドウのサイズY（1ドット単位）
</code></pre><p><strong>説明</strong>:</p><p>指定したウィンドウIDを初期化して使用できるようにします。 HSPの初期状態では、ウィンドウID0の画面しか使用されていませんが、ウィンドウID1以上を指定することで、新しいウィンドウを作成することができます。 ID1以上のウィンドウは、標準でサイズを自由に変えることが可能なスタイルを持つことになります。</p><p>p4の初期化する画面モードは、以下から選ぶことができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   0(screen_normal)    : フルカラーモードで作成する</span></span>
<span class="line"><span style="color:#A6ACCD;">  +1(screen_palette)   : パレットモード(1670万色中256色)で作成する</span></span>
<span class="line"><span style="color:#A6ACCD;">  +2(screen_hide)      : 非表示のウィンドウを作成する</span></span>
<span class="line"><span style="color:#A6ACCD;">  +4(screen_fixedsize) : サイズ固定ウィンドウ</span></span>
<span class="line"><span style="color:#A6ACCD;">  +8(screen_tool)      : ツールウィンドウ</span></span>
<span class="line"><span style="color:#A6ACCD;"> +16(screen_frame)     : 深い縁のあるウィンドウ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p4パラメータに「+1」(パレットモードで作成する)を指定した場合は、パレットあり256色のモードで画面が作成されます。 0を指定した場合は、フルカラー(24bitカラー)の画面が作成されます。</p><p>p4パラメータに「+2」(非表示のウィンドウを作成する)を指定した場合は、実行時にはウィンドウが表示されませんが、「gsel ID,1」 で表示させることが可能です。</p><p>p4パラメータのうち「+4」「+8」「+16」 はそれぞれウィンドウのスタイルを設定するためのものです。 「サイズ固定ウィンドウ」は、ID1以降のウィンドウでも、ID0のウィンドウと同様のサイズ変更が不可能なスタイルで作成されます。 「ツールウィンドウ」は、タイトルバーのサイズが小さくなりタスクバーにウインドウ名が表示されないウィンドウが作成されます。</p><p>p4パラメータが省略された場合は、 現在のWindows画面モードがパレットあり(256色) の場合はパレットモードで作成され、そうでない場合はフルカラーの画面として作成されます。</p><p>画面モードの値は、値を合計することで複数の設定を行なうことができます。 たとえば、</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	screen 2,320,240,4+8</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>は、サイズ固定+ツールウィンドウのスタイルを持ったものが作成されます。</p><p>screen命令は、すでに初期化されているウィンドウIDをふたたび別の設定で再初期化することも可能です。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 ：</span></span>
<span class="line"><span style="color:#A6ACCD;">	screen 0,640,480,1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上の例では、ウィンドウID0、つまりメインウィンドウを640x480ドット、パレットモードで再初期化します。</p><p>p5,p6パラメーターにより、デスクトップ画面上に表示されるウィンドウの位置を指定することができます。 p5,p6を省略またはマイナス値にした場合は、システム規定の座標が使用されます。 p2,p3パラメーターで指定された画面サイズの一部だけをウィンドウに表示したい場合には、 p7,p8のパラメータで、ウィンドウのクライアントサイズ(実際に表示される大きさ)を指定することができます。 その場合は、groll命令によりウィンドウ内に表示される位置を設定することができるようになります。 通常は、p7,p8パラメーターの指定は省略して構いません。その場合は、p2,p3で指定された画面サイズと同じクライアントサイズで表示します。</p><p>screen命令で画面を初期化した後はそのウィンドウIDが画面制御命令の描画先になります。</p><p><strong>参照</strong>:</p><p>bgscr buffer groll screen_fixedsize screen_frame screen_hide screen_normal screen_palette screen_tool</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、パレットモード・ツールウィンドウ・深い淵のあるウィンドウは使用できません。</p><h2 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-hidden="true">#</a></h2><p>ウィンドウサイズ設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜(-1) : クライアントエリアのサイズX（1ドット単位）
 p2=0〜(-1) : クライアントエリアのサイズY（1ドット単位）
 p3=0〜(-1) : ディスプレイ上でのウィンドウX座標（1ドット単位）
 p4=0〜(-1) : ディスプレイ上でのウィンドウY座標（1ドット単位）
</code></pre><p><strong>説明</strong>:</p><p>ウィンドウのクライアントサイズ(実際に表示される大きさ)とウィンドウ表示位置を変更します。 クライアントサイズは、screen命令やbuffer,bgscr命令で初期化された画面サイズより大きくすることはできません。</p><p>p1,p2およびp3,p4パラメータが省略されるか、またはマイナス値の場合は、現在の設定が使われます。</p><p><strong>参照</strong>:</p><p>screen buffer bgscr</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="sysfont" tabindex="-1">sysfont <a class="header-anchor" href="#sysfont" aria-hidden="true">#</a></h2><p>システムフォント選択</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1
 p1=0〜 : フォント種類指定
</code></pre><p><strong>説明</strong>:</p><p>システム標準のフォントを選択します。 p1で、フォントの種類を指定します。これは以下の中から選びます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   p1 : font set</span></span>
<span class="line"><span style="color:#A6ACCD;"> --------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    0 : HSP標準システムフォント</span></span>
<span class="line"><span style="color:#A6ACCD;">   10 : OEM 文字セットの固定幅フォント</span></span>
<span class="line"><span style="color:#A6ACCD;">   11 : Windows 文字セットの固定幅システムフォント</span></span>
<span class="line"><span style="color:#A6ACCD;">   12 : Windows 文字セットの可変幅システムフォント</span></span>
<span class="line"><span style="color:#A6ACCD;">   13 : 標準システムフォント</span></span>
<span class="line"><span style="color:#A6ACCD;">   17 : デフォルトGUIフォント</span></span>
<span class="line"><span style="color:#A6ACCD;">        (標準の環境でメニューやダイアログボックスに使われています)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p1が省略された場合は、標準システムフォントが選択されます。</p><p><strong>参照</strong>:</p><p>font</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="line" tabindex="-1">line <a class="header-anchor" href="#line" aria-hidden="true">#</a></h2><p>直線を描画</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜(0)  : ラインの終点X座標
 p2=0〜(0)  : ラインの終点Y座標
 p3=0〜     : ラインの始点X座標
 p4=0〜     : ラインの始点Y座標
</code></pre><p><strong>説明</strong>:</p><p>画面上に、(p1,p2)と(p3,p4)を結ぶ直線を描画します。 (p3,p4)を省略した場合は、カレントポジションから(p1,p2)まで、現在設定されている色で直線が描画されます。</p><p>line命令実行後は、(p1,p2)の座標がカレントポジションになります。 これにより、連続した直線を描画していくことが可能です。</p><p><strong>参照</strong>:</p><p>pos color palcolor boxf circle</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="circle" tabindex="-1">circle <a class="header-anchor" href="#circle" aria-hidden="true">#</a></h2><p>円を描画する</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜(0)  : 矩形の左上X座標
 p2=0〜(0)  : 矩形の左上Y座標
 p3=0〜     : 矩形の右下X座標
 p4=0〜     : 矩形の右下Y座標
 p5=0〜1(1) : 描画モード(0=線,1=塗りつぶし)
</code></pre><p><strong>説明</strong>:</p><p>画面上に、(p1,p2)と(p3,p4)を左上、右下の点として、矩形(四角形)に収まる大きさの円を描画します。 描画色は、color命令等で設定されたものになります。</p><p>p5に0が指定されている場合は、輪郭だけを線で描画します。 p5が1または省略されている場合は、円の内部も塗りつぶします。</p><p><strong>参照</strong>:</p><p>boxf line color palcolor hsvcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="syscolor" tabindex="-1">syscolor <a class="header-anchor" href="#syscolor" aria-hidden="true">#</a></h2><p>システムカラーを設定する</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1
 p1 : 設定するシステムカラーインデックス
</code></pre><p><strong>説明</strong>:</p><p>p1で指定したシステムカラーインデックスを選択色として設定します。 (color命令で指定したのと同じ状態になります) p1で指定できるシステムカラーインデックスは、以下の値となります。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 0 : スクロールバーの軸の色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 1 : デスクトップの色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 2 : アクティブウィンドウのタイトルバーの色 (グラデーションの場合はアクティブウィンドウのタイトルバーの左側の色)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 3 : 非アクティブウィンドウのタイトルバーのテキストの色 (グラデーションの場合は非アクティブウィンドウのタイトルバーの左側の色)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 4 : メニューの背景色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 5 : ウィンドウの背景色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 6 : ウィンドウの枠の色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 7 : メニュー内のテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 8 : ウィンドウ内のテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;"> 9 : アクティブウィンドウのタイトルバーのテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">10 : アクティブウィンドウの境界の色</span></span>
<span class="line"><span style="color:#A6ACCD;">11 : 非アクティブウィンドウの境界色</span></span>
<span class="line"><span style="color:#A6ACCD;">12 : MDIアプリケーションの背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">13 : コントロール内における選択された項目の色</span></span>
<span class="line"><span style="color:#A6ACCD;">14 : コントロール内における選択された項目のテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">15 : 3D オブジェクトの表面色</span></span>
<span class="line"><span style="color:#A6ACCD;">16 : 3D オブジェクトの影の色 (光源の反対方向の縁用)</span></span>
<span class="line"><span style="color:#A6ACCD;">17 : 淡色状態 (無効状態) のテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">18 : プッシュボタンのテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">19 : 非アクティブウィンドウのタイトルバーのテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">20 : 3D オブジェクトの最も明るい色 (光源方向の縁用)</span></span>
<span class="line"><span style="color:#A6ACCD;">21 : 3D オブジェクトの暗い影の色</span></span>
<span class="line"><span style="color:#A6ACCD;">22 : 3D オブジェクトの明るい色 (光源方向の縁用)</span></span>
<span class="line"><span style="color:#A6ACCD;">23 : ツールチップコントロールのテキストの色</span></span>
<span class="line"><span style="color:#A6ACCD;">24 : ツールチップコントロールの背景色</span></span>
<span class="line"><span style="color:#A6ACCD;">26 : ホットトラックアイテムの色</span></span>
<span class="line"><span style="color:#A6ACCD;">27 : グラデーションの場合はアクティブウィンドウのタイトルバーの右側の色</span></span>
<span class="line"><span style="color:#A6ACCD;">28 : グラデーションの場合は非アクティブウィンドウのタイトルバーの右側の色</span></span>
<span class="line"><span style="color:#A6ACCD;">29 : (Windows XP以上) メニューがフラットメニューとして表示されるときにメニューアイテムをハイライト表示するのに使用される色</span></span>
<span class="line"><span style="color:#A6ACCD;">30 : (Windows XP以上) メニューがフラットメニューとして表示されるときのメニューバーの背景色</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>参照</strong>:</p><p>color palcolor hsvcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="hsvcolor" tabindex="-1">hsvcolor <a class="header-anchor" href="#hsvcolor" aria-hidden="true">#</a></h2><p>HSV形式でカラーを設定する</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3
 p1=0〜191(0) : HSV形式 H値
 p2=0〜255(0) : HSV形式 S値
 p3=0〜255(0) : HSV形式 V値
</code></pre><p><strong>説明</strong>:</p><p>色の指定をHSV形式で行ないます。 color命令と同様に、以降の描画命令で設定された色が使用されます。</p><p><strong>参照</strong>:</p><p>color palcolor</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="rgbcolor" tabindex="-1">rgbcolor <a class="header-anchor" href="#rgbcolor" aria-hidden="true">#</a></h2><p>RGB形式でカラーを設定する</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1
 p1=$000000〜$ffffff(0) : RGB形式 カラーコード値
</code></pre><p><strong>説明</strong>:</p><p>色の指定をRGB形式($rrggbb)で行ないます。 p1にRGBそれぞれの輝度を8bit値で変換した値を指定します。 16進数を指定する「$」を使用して「$112233」のように記述することができます。 この場合、「R=$11,G=$22,B=$33」を指定することになります。 命令の機能としては、color命令やhsvcolor命令と同等で、以降の描画命令で設定された色が使用されます。 rgbcolorで指定するRGB形式のカラーコード値は、html等で指定する24bitカラーコードと互換性があります。</p><p><strong>参照</strong>:</p><p>color palcolor hsvcolor</p><h2 id="ginfo" tabindex="-1">ginfo <a class="header-anchor" href="#ginfo" aria-hidden="true">#</a></h2><p>ウィンドウ情報の取得</p><p><strong>グループ</strong>:</p><p>基本入出力関数</p><p><strong>パラメーター</strong>:</p><pre><code> (p1)
 p1=0〜 : 取得するタイプ
</code></pre><p><strong>説明</strong>:</p><p>p1で指定したタイプのウィンドウ関連情報値を返します。 取得できるタイプは以下の通りです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  0 : スクリーン上のマウスカーソルX座標</span></span>
<span class="line"><span style="color:#A6ACCD;">  1 : スクリーン上のマウスカーソルY座標</span></span>
<span class="line"><span style="color:#A6ACCD;">      スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標ではなく、デスクトップ画面全体から見た座標になります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  2 : アクティブなウィンドウID</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在アクティブになっているウィンドウIDを返します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      もし、 アクティブになっているウィンドウがHSP以外の場合は-1になります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  3 : 操作先ウィンドウID</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      gsel命令で指定した画面の操作先ウィンドウIDが代入されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  4 : ウィンドウの左上X座標</span></span>
<span class="line"><span style="color:#A6ACCD;">  5 : ウィンドウの左上Y座標</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    スクリーン座標系で現在のウィンドウの左上座標を返します。</span></span>
<span class="line"><span style="color:#A6ACCD;">    スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標ではなく、デスクトップ画面全体から見た座標になります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  6 : ウィンドウの右下X座標</span></span>
<span class="line"><span style="color:#A6ACCD;">  7 : ウィンドウの右下Y座標</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      スクリーン座標系で現在のウィンドウの右下座標を返します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      スクリーン座標系は、 pos命令などで使用するウィンドウ内の座標ではなく、デスクトップ画面全体から見た座標になります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  8 : ウィンドウの描画基点X座標</span></span>
<span class="line"><span style="color:#A6ACCD;">  9 : ウィンドウの描画基点Y座標</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在の操作先ウィンドウの描画基点座標を返します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      これは、描画内容をスクロール可能な(初期化サイズよりも表示サイズが小さい)ウィンドウにおいて、どれだけスクロールされているかを示す値です。</span></span>
<span class="line"><span style="color:#A6ACCD;">      スクロールさせていない通常の状態では、(0,0)になります。</span></span>
<span class="line"><span style="color:#A6ACCD;">      描画基点を設定する場合は、groll命令を使用します。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 10 : ウィンドウ全体のXサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"> 11 : ウィンドウ全体のYサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在の操作先ウィンドウの横幅、縦幅が返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">      これは、ウィンドウの枠やタイトルバーなども含めたサイズになります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 12 : クライアント領域Xサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"> 13 : クライアント領域Yサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在の操作先ウィンドウのクライアント領域サイズが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">      クライアント領域はウィンドウ内に表示されている描画可能な部分を指します。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 14 : メッセージの出力Xサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"> 15 : メッセージの出力Yサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      最後にmes, print命令により出力されたメッセージのサイズが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">      サイズは、 X,Y座標にどれだけのドット数で描画されたかを示します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      画面上の絶対座標ではないので注意してください。</span></span>
<span class="line"><span style="color:#A6ACCD;">      また、複数行ある文字列を出力した場合は、最後の行にあたるサイズが取得されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 16 : 現在設定されているカラーコード(R)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 17 : 現在設定されているカラーコード(G)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 18 : 現在設定されているカラーコード(B)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      color命令などにより指定された色コードが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 19 : デスクトップのカラーモード</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在のデスクトップカラーモード(色モード)が返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">      フルカラーモードの場合は0が、パレットモードの場合は1が返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 20 : デスクトップ全体のXサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"> 21 : デスクトップ全体のYサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      デスクトップ全体のサイズ(画面解像度)が返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 22 : カレントポジションのX座標</span></span>
<span class="line"><span style="color:#A6ACCD;"> 23 : カレントポジションのY座標</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      pos命令により設定されたカレントポジションのX,Y座標が返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 24 : メッセージ割り込み時のウィンドウID</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      oncmd命令により設定されたメッセージ割り込み時のウィンドウIDが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 25 : 未使用ウィンドウID</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      screen命令やbuffer命令などで初期化されていない未使用のウィンドウIDが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 26 : 画面の初期化Xサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"> 27 : 画面の初期化Yサイズ</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      現在の操作先ウィンドウの初期化サイズが返されます。</span></span>
<span class="line"><span style="color:#A6ACCD;">      最初にscreen,bgscr,buffer命令で初期化された画面サイズになります。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 256 : 加速度センサー値(X)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 257 : 加速度センサー値(Y)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 258 : 加速度センサー値(Z)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      加速度センサーが使用可能な環境で、センサーの値を取得します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      それぞれの座標軸の加速度を実数(m/s^2)で取得したものになります。</span></span>
<span class="line"><span style="color:#A6ACCD;">      加速度センサーが使用できない環境では、0.0が取得されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 259 : ジャイロセンサー値(X)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 260 : ジャイロセンサー値(Y)</span></span>
<span class="line"><span style="color:#A6ACCD;"> 261 : ジャイロセンサー値(Z)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      ジャイロセンサーが使用可能な環境で、センサーの値を取得します。</span></span>
<span class="line"><span style="color:#A6ACCD;">      それぞれの座標軸の傾きを実数(rad/s)で取得したものになります。</span></span>
<span class="line"><span style="color:#A6ACCD;">      ジャイロセンサーが使用できない環境では、0.0が取得されます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>参照</strong>:</p><p>objinfo</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、タイプ 19、画面のカラーモードは常に 0 を返します。 HSPLet時、タイプ 24、oncmd の割り込みウィンドウ ID はサポートされていません。 HSPLet時、タイプ 25はサポートされていません。</p><h2 id="grect" tabindex="-1">grect <a class="header-anchor" href="#grect" aria-hidden="true">#</a></h2><p>回転する矩形で塗りつぶす</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6
 p1=0〜(0)   : 矩形の中心X座標
 p2=0〜(0)   : 矩形の中心Y座標
 p3=0.0〜(0.0) : 回転角度(単位はラジアン)
 p4=0〜(?)   : Xサイズ
 p5=0〜(?)   : Yサイズ
</code></pre><p><strong>説明</strong>:</p><p>(p1,p2)で指定した座標を中心として、 (p4,p5)で指定したサイズの矩形(長方形)を現在設定されている色で描画します。 p3で回転角度を実数で指定することができます。 角度の単位は、ラジアン(0から始まって、2πで一周)となります。 grect命令は、gmodeで設定されたコピーモードの指定が反映されます。</p><p>gmodeが 0,1の場合は、通常の塗りつぶし。 gmodeが 3の場合は、指定されたレートで半透明になります。 gmodeが 5, 6の場合は、それぞれ色加算、色減算処理となります。 また、(p4,p5)のサイズ指定を省略した場合には、gmode命令で設定されているコピーサイズが使用されます。</p><p>パレットモード時には 指定した描画色で塗りつぶしが行なわれますが、半透明処理は行われません。</p><p><strong>参照</strong>:</p><p>color hsvcolor palcolor grotate gsquare gmode</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="grotate" tabindex="-1">grotate <a class="header-anchor" href="#grotate" aria-hidden="true">#</a></h2><p>矩形画像を回転してコピー</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6
 p1=0〜(0)   : コピー元のウィンドウID
 p2=0〜(0)   : コピー元の左上X座標
 p3=0〜(0)   : コピー元の左上Y座標
 p4=0.0〜(0.0) : 回転角度(単位はラジアン)
 p5=0〜(?)   : Xサイズ
 p6=0〜(?)   : Yサイズ
</code></pre><p><strong>説明</strong>:</p><p>grotate命令は、gcopy命令に回転を含めた処理を行ないます。 p1で、コピー元のウィンドウIDを指定、(p2,p3) でコピーされる元の画像にあたる座標を指定します。(gcopy命令と同様です) コピー先は、現在の描画先に指定されているウィンドウIDで、 pos命令で設定された場所を中心とした座標にコピーを行ないます。その際に、p4で回転角度を実数で指定することができます。 角度の単位は、ラジアン(0から始まって、2πで一周)となります。 (p5,p6)で、コピーされた後のX,Yサイズを指定します。 また、コピー元のX,Yサイズはgmode命令で設定されたデフォルトのコピーサイズが使用されます。 つまり、gmode命令で指定されたサイズよりも大きなサイズを(p5,p6)で指定した場合には、拡大されることになります。 (p5,p6) を省略した場合には、コピー元と同じサイズ、つまり等倍でコピーが行なわれます。</p><p>grotate命令は、gmodeで設定されたコピーモードの指定が反映されます。(モード7のピクセルアルファブレンドコピーは適用されません。) 透明色の設定や、半透明の設定はすべて gcopy命令でコピーした場合と同等に機能します。(詳しくはgmode命令のリファレンスを参照)</p><p>パレットモード時には半透明処理は実行されません。 また、異なる画面モード(パレットモードとフルカラーモード)間でのコピーはエラーになります。</p><p><strong>参照</strong>:</p><p>grect gsquare gmode</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="gsquare" tabindex="-1">gsquare <a class="header-anchor" href="#gsquare" aria-hidden="true">#</a></h2><p>任意の四角形を描画</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜(0) : コピー元のウィンドウID (マイナス値ならば塗りつぶし)
 p2=変数名 : コピー先X座標が格納される数値型配列変数名
 p3=変数名 : コピー先Y座標が格納される数値型配列変数名
 p4=変数名 : コピー元X座標が格納される数値型配列変数名
 p5=変数名 : コピー元Y座標が格納される数値型配列変数名
</code></pre><p><strong>説明</strong>:</p><p>任意の４点を持つ四角形をコピーまたは塗りつぶします。 p1で、画像コピー元のウィンドウIDを指定します。</p><p>p2,p3にはコピー先の座標４つを配列に格納した変数を指定します。 p4,p5にはコピー元の座標４つを配列に格納した変数を指定します。 配列変数には、左上(0),右上(1),右下(2),左下(3) の順番に座標を入れておく必要があります。</p><p>gsquare命令は、gmodeで設定されたコピーモードの指定が反映されます。(モード7のピクセルアルファブレンドコピーは適用されません。) 透明色の設定や、半透明の設定はすべて gcopy命令でコピーした場合と同等に機能します。(詳しくはgmode命令のリファレンスを参照)</p><p>パレットモード時には半透明処理は実行されません。 また、異なる画面モード(パレットモードとフルカラーモード)間でのコピーはエラーになります。</p><p>p1に-1などマイナス値を指定した場合は、画像コピーではなく塗りつぶしが行なわれます。 塗りつぶしは、単色による塗りつぶしと、グラデーションによる塗りつぶしを選択することができます。 p1に、-1から-256の値を指定した場合は、単色による塗りつぶしとなります。 単色塗りつぶしを行なう場合には、p4,p5パラメーターを指定する必要はありません。 その際、フルカラーモード時には 描画色による塗りつぶしとなります。 パレットモード時は、p1で指定した値-1をパレットコードとして塗りつぶしを行ないます。(-1〜-256がパレットコード0〜255に対応します)</p><p>p1に、-257またはgsquare_grad(-257のマクロ定義)を指定した場合は、グラデーションによる塗りつぶしが実行されます。 グラデーション塗りつぶしを行なう場合には、p4パラメーターに頂点の色を示すRGBコードを格納した配列変数を指定してください。 (RGBコードは、gradf命令で指定される色コードと同一のものになります。) グラデーション塗りつぶしでは、gmodeで設定されたコピーモードの指定は反映されず、常に不透明の描画になるので注意してください。</p><p><strong>参照</strong>:</p><p>grect grotate gmode color hsvcolor palcolor gradf</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><h2 id="objinfo" tabindex="-1">objinfo <a class="header-anchor" href="#objinfo" aria-hidden="true">#</a></h2><p>ウィンドウオブジェクト情報の取得</p><p><strong>グループ</strong>:</p><p>基本入出力関数</p><p><strong>パラメーター</strong>:</p><pre><code> (p1,p2)
 p1=0〜 : ウィンドウオブジェクトID
 p2=0〜 : 取得するタイプ
</code></pre><p><strong>説明</strong>:</p><p>現在アクティブなウィンドウに配置されている、特定のウィンドウオブジェクトに関連する情報値を返します。 p1にウィンドウオブジェクトID、p2に取得タイプを指定することで、該当する情報データが返されます。 取得できるタイプは以下の通りです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">     0  : モード(下位16bit)及びオプションデータ(上位16bit)</span></span>
<span class="line"><span style="color:#A6ACCD;">     1  : オブジェクトが配置されているBMSCR構造体のポインタ</span></span>
<span class="line"><span style="color:#A6ACCD;">     2  : ウィンドウオブジェクトのハンドル(HWND)</span></span>
<span class="line"><span style="color:#A6ACCD;">     3  : owid (内部汎用データ)</span></span>
<span class="line"><span style="color:#A6ACCD;">     4  : owsize (内部汎用データ)</span></span>
<span class="line"><span style="color:#A6ACCD;">  5〜8  : 代入変数の情報</span></span>
<span class="line"><span style="color:#A6ACCD;"> 9〜11  : ウィンドウオブジェクトコールバックの情報</span></span>
<span class="line"><span style="color:#A6ACCD;">    12  : 背景のブラシハンドル(HBRUSH)</span></span>
<span class="line"><span style="color:#A6ACCD;">    13  : 背景カラー情報(RGB)</span></span>
<span class="line"><span style="color:#A6ACCD;">    14  : 文字カラー情報(RGB)</span></span>
<span class="line"><span style="color:#A6ACCD;">15〜16  : オブジェクト固有の付加情報(exinfo1,exinfo2)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>ウィンドウオブジェクト情報は、通常の使用では利用する必要はありません。 外部API(DLL)等にウィンドウオブジェクトのハンドル(HWND)を渡す場合など、特殊な用途に利用することができます。</p><p><strong>参照</strong>:</p><p>ginfo objinfo_bmscr objinfo_hwnd objinfo_mode</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、ウィンドウハンドル（type==2）のみが利用可能です。</p><h2 id="axobj" tabindex="-1">axobj <a class="header-anchor" href="#axobj" aria-hidden="true">#</a></h2><p>ActiveXコントロールの配置</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,&quot;IID&quot;,p2,p3
 p1    : COMオブジェクトが代入される変数名
 &quot;IID&quot; : COMオブジェクトのクラスIDまたはプログラムID
 p2=0〜: オブジェクトのXサイズ
 p3=0〜: オブジェクトのYサイズ
</code></pre><p><strong>説明</strong>:</p><p>&quot;IID&quot;で指定されたクラスIDまたは、プログラムID(ProgID)を持つActiveXコントロール(OLEコントロール)をウィンドウオブジェクトとして配置します。 p2,p3で配置されるオブジェクトのX,Yサイズを指定します。 サイズの指定が省略されるか0以下の場合は、ウインドウ全体のサイズが使用されます。 配置に成功した場合は、システム変数statにオブジェクトIDが代入され、p1の変数をコントロールのためのCOMオブジェクト型変数として初期化します。 ActiveXコントロールの配置に失敗した場合は、システム変数statに-1が代入されて終了します。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	axobj ie, &quot;Shell.Explorer.2&quot;,640,480</span></span>
<span class="line"><span style="color:#A6ACCD;">	ie-&gt;&quot;Navigate&quot; &quot;www.onionsoft.net&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>参照</strong>:</p><p>newcom delcom querycom</p><p><strong>対応の補足</strong>:</p><p>ActiveXコントロールの配置には、「atl.dll」を使用します。 「atl.dll」がインストールされていない環境では、「サポートされない機能を選択しました」エラーが表示されます。</p><h2 id="winobj" tabindex="-1">winobj <a class="header-anchor" href="#winobj" aria-hidden="true">#</a></h2><p>ウィンドウオブジェクトの配置</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;Class&quot;,&quot;Title&quot;,p1,p2,p3,p4,p5,p6
 &quot;Class&quot; : ウィンドウクラス名
 &quot;Title&quot; : ウィンドウ名
 p1(0)   : 拡張ウィンドウスタイル
 p2(0)   : ウィンドウスタイル
 p3(0)   : Xサイズ
 p4(0)   : Yサイズ
 p5(0)   : メニューハンドルまたは子ウィンドウID
 p6(0)   : ウィンドウ作成データ
</code></pre><p><strong>説明</strong>:</p><p>winobjは、 Windowsのシステムがサポートするウィンドウをオブジェクトとして配置します。 p3,p4で配置するX,Yサイズを指定します。 サイズの指定が省略されるか0以下の場合は、objsizeで設定されている値が使用されます。</p><p>指定したウィンドウオブジェクトが生成されるとシステム変数statにオブジェクトIDが代入されます。 このオブジェクトIDは、clrobj命令を始めとするオブジェクト操作命令で使用することができます。 (生成されたウィンドウは、 現在アクティブなウィンドウが管理するオブジェクトとして登録されます。) 内部エラーなどでウィンドウオブジェクトが正常に生成されなかった場合には、システム変数statに-1が代入されます。</p><p>winobjによって配置したオブジェクトに対してobjprm命令を使用することはできません。</p><p>この命令は、HSPの命令がサポートしていないウィンドウオブジェクトをWindows APIを通して配置するためのもので、WIN32API のCreateWindowExと同様のパラメーターを受け取ります。 外部DLLとのやり取りや、モジュール作成に使用するもので通常覚えておく必要はありません。</p><p><strong>参照</strong>:</p><p>pos objsize clrobj</p><h2 id="sendmsg" tabindex="-1">sendmsg <a class="header-anchor" href="#sendmsg" aria-hidden="true">#</a></h2><p>ウィンドウメッセージの送信</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1(0) : ウィンドウハンドル
 p2(0) : メッセージID
 p3(0) : wParam値
 p4(0) : lParam値
</code></pre><p><strong>説明</strong>:</p><p>p1で指定したウィンドウハンドルに対して、 p2のメッセージとp3,p4のパラメーターを送信します。</p><p>p1で指定するウィンドウハンドルの値は、 HSPのウィンドウであればシステム変数hwndを、HSPのウィンドウオブジェクトの場合はobjinfo関数により取得することができます。</p><p>p3をwParam、p4をlParamの情報としてウィンドウメッセージが送信されます。 p3パラメーターは、整数値を指定することが可能です。 p4パラメーターには、整数値、文字列のいずれかを指定することができます。 整数値の場合は、値そのものをlParamとして扱います。 文字列の場合は、文字列ポインタ値をlParamとして扱います。</p><p>この命令は、 HSPの命令がサポートしていないウィンドウオブジェクトに対してWindowsのメッセージを送信するためのものです。 外部DLLとのやり取りや、 モジュール作成に使用するもので通常覚えておく必要はありません。</p><p><strong>参照</strong>:</p><p>hwnd objinfo winobj</p><p><strong>追加対応</strong>:</p><ul><li>Let</li></ul><p><strong>対応の補足</strong>:</p><p>HSPLet時、以下のメッセージのみ実装済みです。 0x00B0:EM_GETSEL 0x00B1:EM_SETSEL 0x00C6:EM_CANUNDO 0x00C7:EM_UNDO 0x00CC:EM_SETPASSWORDCHAR 0x0300:WM_CUT 0x0301:WM_COPY 0x0302:WM_PASTE 0x0303:WM_CLEAR</p><h2 id="groll" tabindex="-1">groll <a class="header-anchor" href="#groll" aria-hidden="true">#</a></h2><p>ウィンドウの描画基点とスケールを設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4
 p1=0〜(0)  : ウィンドウに描画する基点となるX座標
 p2=0〜(0)  : ウィンドウに描画する基点となるY座標
</code></pre><p><strong>説明</strong>:</p><p>グラフィック面をウィンドウに描画する基点座標を設定します。 基点座標は、描画されたグラフィック面の中で、どの座標からウインドウに表示するかを設定します。 座標を変更することで、グラフィック面の任意の位置から表示させることができます。 基点座標に、(0,0)を設定すると、描画された座標と一致する形でウインドウに表示されます。 現在設定されている基点座標は、ginfo_vx,ginfo_vyによって取得することができます。</p><p><strong>参照</strong>:</p><p>ginfo_vx ginfo_vy</p><h2 id="gradf" tabindex="-1">gradf <a class="header-anchor" href="#gradf" aria-hidden="true">#</a></h2><p>矩形をグラデーションで塗りつぶす</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5,p6,p7
 p1=0〜(0)  : 矩形の左上X座標
 p2=0〜(0)  : 矩形の左上Y座標
 p3=0〜     : 矩形のXサイズ
 p4=0〜     : 矩形のYサイズ
 p5=0〜(0)  : グラデーションのモード
 p6=0〜     : 塗りつぶし色1(RGBカラーコード)
 p7=0〜     : 塗りつぶし色2(RGBカラーコード)
</code></pre><p><strong>説明</strong>:</p><p>(p1,p2)を左上の点として、(p3,p4)のサイズをグラデーションで矩形(四角形)を塗りつぶします。 塗りつぶす色は、p6,p7で指定されたRGBカラーコードとなります。 RGBカラーコードは、color命令で指定するR,G,Bそれぞれの輝度をまとめて24ビット数値で表現したものです。 スクリプトで記述する場合は、最初に「$」を付けた16進表現を行なうと便利です。 「$112233」のように記述した場合は、R輝度が$11、G輝度が$22、B輝度が$33という値になります。この場合、輝度は$00〜$ffまでとなります。(10進数の0〜255にあたります) p5でグラデーションのモードを指定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">   p5 : グラデーションのモード</span></span>
<span class="line"><span style="color:#A6ACCD;"> --------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    0 : 横方向のグラデーション</span></span>
<span class="line"><span style="color:#A6ACCD;">    1 : 縦方向のグラデーション</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>グラデーションの塗りつぶしは、左上をp6、右下をp7で指定された色として行なわれます。 p6及びp7の指定を省略した場合は、現在の描画色を使用します。 (p1,p2)を省略した場合は、画面の左上(0,0)が設定されます。 (p3,p4)を省略した場合は、画面の描画サイズが設定されます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	; グラデーションで矩形を塗りつぶし</span></span>
<span class="line"><span style="color:#A6ACCD;">	gradf 120,180,400,100, 1, $ff00ff, $ffffff</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>単色で矩形を塗りつぶす場合は、boxf命令を使用してください。 また、四角形の頂点それぞれの色を指定したグラデーション描画を行なう場合は、gsquare命令を使用してください。</p><p><strong>参照</strong>:</p><p>boxf gsquare</p><h2 id="celload" tabindex="-1">celload <a class="header-anchor" href="#celload" aria-hidden="true">#</a></h2><p>画像ファイルをバッファにロード</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> &quot;filename&quot;,p1,p2
 &quot;filename&quot; : ロードするファイル名
 p1=1〜(-1) : 読み込み先ウインドウID
 p2=0〜1(0) : 初期化する画面モード
</code></pre><p><strong>説明</strong>:</p><p>画像ファイルを指定した仮想画面に読み込みます。 celload命令は、主にcelput命令やgcopy命令でコピーを行なうための画像素材を 仮想画面(非表示のウィンドウ)に読み込むためのものです。 buffer命令によって仮想画面を初期化して、picload命令で画像ファイルを読み込む という動作と、基本的に同一です。</p><p>&quot;filename&quot;パラメーターで、読み込む画像ファイル名を指定します。 使用できる画像ファイルの形式は、picload命令と同じです。 p1で、読み込み先のウインドウIDを指定することができます。 p1が省略されるか、マイナス値の場合は未使用のウインドウIDが自動的に使用されます。 (命令実行後、システム変数statに読み込まれたウィンドウIDが代入されます。) p2で、仮想画面の初期化モードを指定することができます。 p2が省略されるか、0の場合はフルカラーモード。1の場合は、パレットモードが選択されます。</p><p>celload命令により、画像素材を効率的に読み込み管理することができます。 詳しくは、プログラミングマニュアル(hspprog.htm)のCEL関連命令についてを参照してください。</p><p><strong>参照</strong>:</p><p>picload buffer celdiv celput</p><h2 id="celdiv" tabindex="-1">celdiv <a class="header-anchor" href="#celdiv" aria-hidden="true">#</a></h2><p>画像素材の分割サイズを設定</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> p1,p2,p3,p4,p5
 p1=0〜(1)  : ウインドウID
 p2=1〜(0)  : 横方向の分割サイズ
 p3=1〜(0)  : 縦方向の分割サイズ
 p4=0〜(0)  : 横方向の中心座標
 p5=0〜(0)  : 縦方向の中心座標
</code></pre><p><strong>説明</strong>:</p><p>指定したウィンドウIDが持つ画像素材の分割サイズを設定します。 分割された画像素材は、celput命令により画像を描画する際に参照されます。 たとえば、256×256ドットの画像を128×64ドットで分割する設定にした場合、 celput命令により128×64ドットの画像8枚分として扱うことができるようになります。</p><p>p1で、画像素材を持つウインドウIDを指定します。 (p2,p3)で、横(X)・縦(Y)方向の分割サイズ(分割された領域１つあたりのドット数)を指定します。 分割サイズを省略、または0以下の値にした場合は、素材のサイズがそのまま使用されます。</p><p>(p4,p5)で、描画の中心座標を設定することができます。 これは、celput命令で描画を行なった際に、描画の基点位置になります。 たとえば、(0,0)を中心座標として指定した場合は、celput命令で描画される位置(pos命令で指定した座標)に、画像素材の(0,0)が配置されることになります。 また、回転した画像の描画を行なう際にも、回転の中心となります。 通常は、(0,0)の位置、つまり左上が基点位置となっています。これは、gcopy命令での基点位置と同様です。</p><p>画像素材の分割設定は、ウィンドウIDごとに保存されており、cls命令などで初期化された 時点では、分割なし(画面全体をサイズとして指定)の設定になっています。 分割の設定は、必ず指定されたウィンドウIDに画像素材が読み込まれた状態で行なってください。 分割の設定を行なった後に、画像素材の読み込みを行なった場合は、分割設定はリセットされます。 詳しくは、プログラミングマニュアル(hspprog.htm)のCEL関連命令についてを参照してください。</p><p><strong>参照</strong>:</p><p>celload celput</p><h2 id="celput" tabindex="-1">celput <a class="header-anchor" href="#celput" aria-hidden="true">#</a></h2><p>画像素材を描画</p><p><strong>グループ</strong>:</p><p>画面制御命令</p><p><strong>パラメーター</strong>:</p><pre><code> id,no,zoomx,zoomy,angle
 id=0〜(1) : 画像素材を持つウインドウID
 no=0〜(0) : 分割画像No.
 zoomx=0.0〜(1.0) : 横方向の表示倍率(実数)
 zoomy=0.0〜(1.0) : 縦方向の表示倍率(実数)
 angle=0.0〜(0.0) : 回転角度(単位はラジアン)
</code></pre><p><strong>説明</strong>:</p><p>仮想画面に読み込まれた画像素材を、現在の操作先ウィンドウに描画します。 idで、画像素材を持つウインドウIDを指定します。 noで、分割画像No.を指定します。分割画像No.は、画像素材を持つウインドウIDの中で 分割された画像を特定する番号となります。 zoomx,zoomyにより、描画される画像の横(X)・縦(Y)方向倍率を指定できます。 zoomx,zoomyの指定は、実数で指定することが可能です。 また、angleにより画像の回転角度を指定することも可能です。 angleに指定される値は、実数で単位はラジアン(0から始まって、2πで一周)となります。(grotate、grect命令と同様の値になります)</p><p>celput命令は、gcopy命令と同様に指定されたウインドウIDの画像をコピーして描画します。 gcopy命令と同様に、gmode命令により指定されたコピーモード、ブレンド率が反映されます。 描画位置は、現在のカレントポジション(pos命令で指定された値)が基点となります。 描画される画像のサイズは、通常は(指定されたウィンドウIDにある)元画像と同じものになります。 描画される画像のサイズ及び、描画や回転の中心位置は、celdiv命令によって変更することが可能です。</p><p>zoomx,zoomy,angleの指定を省略するか、等倍の設定(1,1,0)になっている場合は、 自動的に高速なコピーが内部で実行されます。逆に、等倍でない描画を行なう場合は、 grotate命令と同様の描画処理が実行されます。 描画終了後は、描画したサイズに応じてカレントポジションを右に移動します。 (ただし、角度は考慮されません。あくまでも描画の横サイズ分を右に移動させます)</p><p>celput命令とその関連命令により、画像素材を効率的に管理することができます。 詳しくは、プログラミングマニュアル(hspprog.htm)のCEL関連命令についてを参照してください。</p><p><strong>参照</strong>:</p><p>celload celdiv gcopy grotate</p>`,671),e=[o];function t(r,c,i,g,C,A){return p(),n("div",null,e)}const h=s(l,[["render",t]]);export{y as __pageData,h as default};
