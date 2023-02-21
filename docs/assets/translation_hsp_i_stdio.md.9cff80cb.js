import{_ as s,c as n,o as a,a as p}from"./app.b419af8d.js";const y=JSON.parse('{"title":"入出力","description":"","frontmatter":{},"headers":[{"level":2,"title":"getkey","slug":"getkey","link":"#getkey","children":[]},{"level":2,"title":"mouse","slug":"mouse","link":"#mouse","children":[]},{"level":2,"title":"randomize","slug":"randomize","link":"#randomize","children":[]},{"level":2,"title":"stick","slug":"stick","link":"#stick","children":[]},{"level":2,"title":"logmes","slug":"logmes","link":"#logmes","children":[]},{"level":2,"title":"assert","slug":"assert","link":"#assert","children":[]},{"level":2,"title":"mcall","slug":"mcall","link":"#mcall","children":[]},{"level":2,"title":"setease","slug":"setease","link":"#setease","children":[]},{"level":2,"title":"sortval","slug":"sortval","link":"#sortval","children":[]},{"level":2,"title":"sortstr","slug":"sortstr","link":"#sortstr","children":[]},{"level":2,"title":"sortnote","slug":"sortnote","link":"#sortnote","children":[]},{"level":2,"title":"sortget","slug":"sortget","link":"#sortget","children":[]}],"relativePath":"translation/hsp/i_stdio.md","lastUpdated":1676126774000}'),e={name:"translation/hsp/i_stdio.md"},l=p(`<h1 id="入出力" tabindex="-1">入出力 <a class="header-anchor" href="#入出力" aria-hidden="true">#</a></h1><p><strong>対応</strong>:</p><ul><li>Win</li><li>Cli</li><li>Let</li></ul><h2 id="getkey" tabindex="-1">getkey <a class="header-anchor" href="#getkey" aria-hidden="true">#</a></h2><p>キー入力チェック</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2
p1=変数   : 読み込むための変数
p2=1〜(1) : キーコード
</code></pre><p><strong>説明</strong>:</p><p>キーボード及びマウスボタンの状態をチェックして変数に代入します。指定したボタンが押されていれば、1を代入し、押されていなければ0が代入されます。 キーコードで指定する値の詳細は、以下の通りです。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  キーコード : 実際のキー</span></span>
<span class="line"><span style="color:#A6ACCD;"> ------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">        1    : マウスの左ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">        2    : マウスの右ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">        3    : キャンセル（[CTRL]+[BREAK]）</span></span>
<span class="line"><span style="color:#A6ACCD;">        4    : ３ボタンマウスのまん中のボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">        8    : [BACKSPACE]（PC98の[BS]）</span></span>
<span class="line"><span style="color:#A6ACCD;">        9    : [TAB]</span></span>
<span class="line"><span style="color:#A6ACCD;">       13    : [ENTER]</span></span>
<span class="line"><span style="color:#A6ACCD;">       16    : [SHIFT]</span></span>
<span class="line"><span style="color:#A6ACCD;">       17    : [CTRL]</span></span>
<span class="line"><span style="color:#A6ACCD;">       18    : [ALT]（PC98の[GRPH]）</span></span>
<span class="line"><span style="color:#A6ACCD;">       20    : [CAPSLOCK]</span></span>
<span class="line"><span style="color:#A6ACCD;">       27    : [ESC]</span></span>
<span class="line"><span style="color:#A6ACCD;">       32    : スペースキー</span></span>
<span class="line"><span style="color:#A6ACCD;">       33    : [PAGEUP]（PC98の[ROLLDOWN]）</span></span>
<span class="line"><span style="color:#A6ACCD;">       34    : [PAGEDOWN]（PC98の[ROLLUP]）</span></span>
<span class="line"><span style="color:#A6ACCD;">       35    : [END]（PC98の[HELP]）</span></span>
<span class="line"><span style="color:#A6ACCD;">       36    : [HOME]（PC98の[HOMECLR]）</span></span>
<span class="line"><span style="color:#A6ACCD;">       37    : カーソルキー[←]</span></span>
<span class="line"><span style="color:#A6ACCD;">       38    : カーソルキー[↑]</span></span>
<span class="line"><span style="color:#A6ACCD;">       39    : カーソルキー[→]</span></span>
<span class="line"><span style="color:#A6ACCD;">       40    : カーソルキー[↓]</span></span>
<span class="line"><span style="color:#A6ACCD;">   48〜57    : [0]〜[9]（メインキーボード）</span></span>
<span class="line"><span style="color:#A6ACCD;">   65〜90    : [A]〜[Z]</span></span>
<span class="line"><span style="color:#A6ACCD;">  96〜105    : [0]〜[9]（テンキー）</span></span>
<span class="line"><span style="color:#A6ACCD;"> 112〜121    : ファンクションキー [F1]〜[F10]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>この表に載っているキー以外でも、取得できる場合があります。(サンプルを実行するとキーコードを調べることができます。)</p><p><strong>例</strong>:</p><p>title &quot;キー入力してください(^^)v&quot; onkey *inkey onclick *inkey stop *inkey if lparam&gt;&gt;30:stop mes iparam stop</p><p><strong>参照</strong>:</p><p>stick</p><h2 id="mouse" tabindex="-1">mouse <a class="header-anchor" href="#mouse" aria-hidden="true">#</a></h2><p>マウスカーソル座標設定</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3
p1,p2 : 設定するX,Y座標
p3(0) : 設定モード値
</code></pre><p><strong>説明</strong>:</p><p>マウスカーソルをp1,p2で指定した座標に変更します。 指定する座標は、 ウィンドウ内の座標ではなくディスプレイでの座標(通常は、X=0〜ginfo_dispx/Y=0〜ginfo_dispy)を指定します。 p1とp2の指定を省略した場合は、現在の座標がそのまま適用されます。 p3の値で、マウスカーソルの表示・非表示に関する設定モードを決めます。p3の値は、以下のように動作します。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">モード値  内容</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    0     p1またはp2の値がマイナスの時にマウスカーソルを非表示に設定する</span></span>
<span class="line"><span style="color:#A6ACCD;">          それ以外の時は、(p1,p2)の座標にマウスカーソルを移動して表示する</span></span>
<span class="line"><span style="color:#A6ACCD;">   -1     (p1,p2)の座標にマウスカーソルを移動して非表示に設定する</span></span>
<span class="line"><span style="color:#A6ACCD;">    1     (p1,p2)の座標にマウスカーソルを移動し、表示・非表示の設定は維持する</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>p3の値が0(デフォルト値)の場合は、p1または、p2がマイナス値の場合に、HSPウィンドウ上でマウスカーソル表示をOFF(非表示)に設定します。 マウスカーソルの表示をOFFにした後は、有効な座標を設定することで再び表示されるようになります。 p3の値が0以外の場合は、(p1,p2)の値とマウスカーソルのON/OFFに関係なく座標を指定することができます。これは、マルチモニタ環境などでマイナス値の座標を扱う必要がある場合などに使用します。</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="randomize" tabindex="-1">randomize <a class="header-anchor" href="#randomize" aria-hidden="true">#</a></h2><p>乱数発生の初期化</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1
p1=0〜(不定) : 乱数の初期化パラメーター
</code></pre><p><strong>説明</strong>:</p><p>rnd関数で発生させる乱数のパターンを初期化します。</p><p>p1に同じ値を指定して初期化された乱数は、常に同じパターンで乱数を発生させられます。 p1を省略した場合は、 Windowsのタイマから得られた不定な値を使って初期化します。これによって、毎回まったく違う乱数を発生させることができます。</p><p><strong>参照</strong>:</p><p>rnd</p><h2 id="stick" tabindex="-1">stick <a class="header-anchor" href="#stick" aria-hidden="true">#</a></h2><p>キー入力情報取得</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3
p1=変数    : 読み込むための変数
p2=0〜(0)  : 非トリガータイプキー指定
p3=0〜1(1) : ウィンドウアクティブチェックON/OFF
</code></pre><p><strong>説明</strong>:</p><p>よく使われるキーボード及びマウスボタンの状態をまとめてチェックして変数に代入します。</p><p>stick命令が実行されると以下のような複数のボタン情報が１つの数値として、p1で指定した変数に代入されます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">値(10進)  値(16進) キー</span></span>
<span class="line"><span style="color:#A6ACCD;">-------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">     1  : $00001 : カーソルキー左(←)</span></span>
<span class="line"><span style="color:#A6ACCD;">     2  : $00002 : カーソルキー上(↑)</span></span>
<span class="line"><span style="color:#A6ACCD;">     4  : $00004 : カーソルキー右(→)</span></span>
<span class="line"><span style="color:#A6ACCD;">     8  : $00008 : カーソルキー下(↓)</span></span>
<span class="line"><span style="color:#A6ACCD;">    16  : $00010 : スペースキー</span></span>
<span class="line"><span style="color:#A6ACCD;">    32  : $00020 : Enterキー</span></span>
<span class="line"><span style="color:#A6ACCD;">    64  : $00040 : Ctrlキー</span></span>
<span class="line"><span style="color:#A6ACCD;">   128  : $00080 : ESCキー</span></span>
<span class="line"><span style="color:#A6ACCD;">   256  : $00100 : マウスの左ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">   512  : $00200 : マウスの右ボタン</span></span>
<span class="line"><span style="color:#A6ACCD;">  1024  : $00400 : TABキー</span></span>
<span class="line"><span style="color:#A6ACCD;">  2048  : $00800 : [Z]キー</span></span>
<span class="line"><span style="color:#A6ACCD;">  4096  : $01000 : [X]キー</span></span>
<span class="line"><span style="color:#A6ACCD;">  8192  : $02000 : [C]キー</span></span>
<span class="line"><span style="color:#A6ACCD;"> 16384  : $04000 : [A]キー</span></span>
<span class="line"><span style="color:#A6ACCD;"> 32768  : $08000 : [W]キー</span></span>
<span class="line"><span style="color:#A6ACCD;"> 65536  : $10000 : [D]キー</span></span>
<span class="line"><span style="color:#A6ACCD;">131072  : $20000 : [S]キー</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>何もボタンが押されていない場合には0が代入されます。</p><p>もし複数のボタンが同時に押されていた場合には、それらの数値がすべて加算されます。 たとえば、カーソルキーの右とスペースキーが同時に押されている場合には、4+16の20が変数に読み込まれます。 この数値をif命令などでチェックする場合には、演算子「&amp;」が役に立ちます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">例 :</span></span>
<span class="line"><span style="color:#A6ACCD;">	stick a,0            ; 変数aにキー状態を読み出し</span></span>
<span class="line"><span style="color:#A6ACCD;">	if a&amp;16 : goto *spc  ; スペースが押されたか?</span></span>
<span class="line"><span style="color:#A6ACCD;">	if a&amp;32 : goto *ent  ; Enterが押されたか?</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>このように「変数&amp;キー情報」で複数のボタン情報が入った数値から、 １つだけのキー情報を取り出すことができます。</p><p>stick命令は、 getkey命令によく似ていますが、最大の違いはボタンが押された瞬間だけを検出する点です。つまり、ボタンが押された時に１度だけ押されている情報を返し、あとは押されているボタンをはなすまでは、押されていることになりません。</p><p>ただし、p2の非トリガータイプキー指定により、押しっぱなしであっても情報を検出することができるようになります。</p><p>p2に押しっぱなしでも検出されるキーのコード(上の表にあるコードです。 複数の場合はそれぞれの数値を加えます)を指定すると、 そのキーだけはボタンが押されている間ずっと検出されるようになります。</p><p>この命令は、非常に複雑に見えますがキーを使ったスクリプトを作る際にとても便利な機能となるでしょう。 たとえば、シューティングゲームを思い浮かべてみてください。自分の機体は上下左右の方向にボタンが押されている間ずっと移動しなければなりません。しかし、ミサイルを発射するボタンは１回押してはなすまでは次の弾は発射されません。 このような場合には、上下左右のキーだけは非トリガータイプのキーに指定して、それ以外は１度だけ押された情報を返すようにすればいいわけです。</p><p>また、p3でウィンドウがアクティブでない場合は入力を無効にする機能をON/OFFすることができます。 p3が1か省略された場合は、HSPウィンドウがアクティブでない場合にはキー入力が無効になります。 p3が0の場合は、すべての状況下でキー入力を行ないます。</p><p><strong>参照</strong>:</p><p>getkey jstick</p><h2 id="logmes" tabindex="-1">logmes <a class="header-anchor" href="#logmes" aria-hidden="true">#</a></h2><p>デバッグメッセージ送信</p><p><strong>グループ</strong>:</p><p>HSPシステム制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>&quot;message&quot;
&quot;message&quot; : ログに記録するメッセージ
</code></pre><p><strong>説明</strong>:</p><p>デバッグウィンドウ表示時に、&quot;message&quot;の内容をデバッグログに記録します。 ある時点での変数の内容や、通過チェックなどに利用できます。 スクリプトエディタからデバッグウィンドウの表示モードを設定するか、assert命令によってデバッグウィンドウを表示させておく必要があります。 実行ファイル作成時は、この命令は無効になります。</p><p><strong>参照</strong>:</p><p>assert</p><h2 id="assert" tabindex="-1">assert <a class="header-anchor" href="#assert" aria-hidden="true">#</a></h2><p>デバッグウィンドウ表示</p><p><strong>グループ</strong>:</p><p>HSPシステム制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1
p1(0) : デバッグ時の条件式
</code></pre><p><strong>説明</strong>:</p><p>プログラムを一時的に中断してデバッグウィンドウを表示します。 p1に条件式が指定された場合には、p1の条件が正しくない場合にのみデバッグウィンドウを表示します。 (p1には、通過する時の条件式を書くことになるので注意してください。)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	assert a&gt;5  ; aが5以下の時にデバッグする</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>実行ファイル作成時は、この命令は無効になります。</p><p><strong>参照</strong>:</p><p>logmes</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="mcall" tabindex="-1">mcall <a class="header-anchor" href="#mcall" aria-hidden="true">#</a></h2><p>メソッドの呼び出し</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3…
p1 : 変数名
p2 : メソッド名
p3 : パラメーター
</code></pre><p><strong>説明</strong>:</p><p>p1で指定された変数の型に応じてメソッドを呼び出します。 p1の変数にCOMオブジェクト型を指定することで、COMオートメーションのメソッドを呼び出すことが可能です。 p2でメソッド名(文字列)または、ディスパッチID(DISPID)を指定して、p3以降に引数を指定します。 p3以降のパラメーター数や、型はそのまま適切に変換されメソッドに渡されます。 メソッドを実行した結果の返値は、comres命令で設定された変数に代入されます。 また、メソッド実行が成功した場合にはシステム変数 statは0になり、実行エラーが起こった場合には、 システム変数statに結果コード(HRESULT)が代入されます。</p><p>mcall命令は、拡張された変数の型を用意することで、 新しい機能を提供することが可能です。標準では、COMオブジェクト型のみに対応しています。</p><p><strong>参照</strong>:</p><p>#usecom newcom delcom querycom comres</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="setease" tabindex="-1">setease <a class="header-anchor" href="#setease" aria-hidden="true">#</a></h2><p>イージング関数の計算式を設定</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2,p3
p1 : 出力される最小値(実数値)
p2 : 出力される最大値(実数値)
p3 : 計算式のタイプ値
</code></pre><p><strong>説明</strong>:</p><p>決められた範囲の数値を任意の計算式で補間するイージング関数の設定を行ないます。 ここで指定された設定は、イージング関数(getease,geteasef)で値を取得する際に反映されます。 計算式のタイプ値には、以下を指定することができます。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	マクロ名                補間内容</span></span>
<span class="line"><span style="color:#A6ACCD;">	------------------------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_linear		リニア(直線補間)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quad_in		加速(Quadratic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quad_out		減速(Quadratic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quad_inout		加速→減速(Quadratic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_cubic_in		加速(Cubic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_cubic_out		減速(Cubic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_cubic_inout	加速→減速(Cubic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quartic_in		加速(Quartic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quartic_out	減速(Quartic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_quartic_inout	加速→減速(Quartic)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_bounce_in		バウンス効果(入)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_bounce_out		バウンス効果(出)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_bounce_inout	バウンス効果(入出)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_shake_in		シェイク効果(入)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_shake_out		シェイク効果(出)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_shake_inout	シェイク効果(入出)</span></span>
<span class="line"><span style="color:#A6ACCD;">	ease_loop		補間のループ(*)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">(*)で示されたタイプは、他のタイプに付加することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>計算式のタイプ値が省略された場合は、以前に設定された値がそのまま使用されます。</p><p>イージング関数は、自然な動きのアニメーションを得るための基本的な計算をサポートします。 たとえば、X座標が100だった物体を、X座標200まで50フレームのアニメーションで移動させるとします。 通常であれば、1フレームごとにX座標を100,102,104,106…というように2ずつ加算して新しい座標を得ることでアニメーションとなります。 しかし、これは直線的な動きにしかなりません。イージング関数は、フレームごとの座標を特定の計算式から取得することができます。 計算式の設定によって、ゆっくり移動を開始して、加速しながら移動、目標の前でまた減速するといった有機的なアニメーションを実現できるほか、放物線を描いてバウンドするような動き、振り回す(シェイクする)ような動きなど様々な用途に使用することができます。 イージング関数を使用するには、まずsetease命令で値が変化する範囲と、計算式を指定します。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	;	イージング関数の設定</span></span>
<span class="line"><span style="color:#A6ACCD;">	setease 100,200,ease_cubic_inout</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上の例では、100から200までの値を得るためのイージング関数をease_cubic_inoutの計算式で設定します。 次に、getease または geteasef関数により実際の値を取得します。 geteaseと、geteasefは基本的に同じもので、取得される値が整数値か、実数値かが異なります。 通常の座標を扱う場合は、整数値として取得しても問題ありません。(イージング関数の内部ではどちらも、実数による計算が行なわれています)</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	;	イージング関数の設定</span></span>
<span class="line"><span style="color:#A6ACCD;">	setease 100,200,ease_cubic_inout</span></span>
<span class="line"><span style="color:#A6ACCD;">	i=0</span></span>
<span class="line"><span style="color:#A6ACCD;">	repeat</span></span>
<span class="line"><span style="color:#A6ACCD;">		redraw 0</span></span>
<span class="line"><span style="color:#A6ACCD;">		color 0,0,0:boxf	; 画面をクリア</span></span>
<span class="line"><span style="color:#A6ACCD;">		x = getease(i,50)	; イージング値の取得(整数)</span></span>
<span class="line"><span style="color:#A6ACCD;">		color 255,255,255</span></span>
<span class="line"><span style="color:#A6ACCD;">		pos x,100 : mes &quot;●&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		redraw 1</span></span>
<span class="line"><span style="color:#A6ACCD;">		await 30</span></span>
<span class="line"><span style="color:#A6ACCD;">		i=i+1</span></span>
<span class="line"><span style="color:#A6ACCD;">	loop</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>getease関数の引数は、getease(時間経過値,最大値)となります。 時間経過値は、0から始まる整数値で、最大値で指定された値までを指定します。 つまり上の例で言えば、getease(0,50)は、setease命令で設定した100から200までの範囲でのスタート値、つまり100が返されます。 時間経過値が増えるごとに、100から200に向けて返される値も増加していきます。そして、getease(50,50)になった時に200が返るような計算式になっています。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">	時間経過値が0の時 = setease命令で指定した出力最小値が返される</span></span>
<span class="line"><span style="color:#A6ACCD;">	時間経過値が最大値の時 = setease命令で指定した出力最大値が返される</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>最大値のパラメーターを省略した場合は、4096が使用されます。 geteasef関数の場合も、引数はgeteasef(時間経過値,最大値)と変わりません。 ただし、時間経過値、最大値ともに実数を使用することができ、より細かい精度でイージング関数を利用できます。また、geteasef関数で最大値のパラメーターを省略した場合は、1.0が使用されます。</p><p>通常は、時間経過値がマイナスの値だった場合は、0とみなされます。また、時間経過値が最大値を超えた場合も、最大値として扱われます。 ただし、setease命令による計算式のタイプ設定で、ease_loop(補間のループ)を加算した場合は、範囲外の値も含めて補間のループ(繰り返し)を行ないます。補間のループでは、時間経過値にしたがって出力最小値、出力最大値を往復するような動きになります。</p><p>イージング関数は、馴れないうちは結果が想像しにくいところがありますが、使いこなすことで高度なアニメーションを手軽に利用することができる便利な機能です。 また標準で内蔵されている命令のため、HSP3DishやHGIMG4などあらゆるランタイムでも同様に呼び出すことができます。</p><p><strong>参照</strong>:</p><p>getease geteasef</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="sortval" tabindex="-1">sortval <a class="header-anchor" href="#sortval" aria-hidden="true">#</a></h2><p>配列変数を数値でソート</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><p>p1,p2 p1 : 数値型の配列変数名 p2 : 並び順 (0=小さい順/1=大きい順)</p><p><strong>説明</strong>:</p><p>数値が格納された配列変数を指定された並び順でソート(並び替え)します。 p1で指定された配列変数を直接並べ替えます。</p><p>並び替えに関する情報は、sortget命令で得ることができます。</p><p><strong>参照</strong>:</p><p>sortget</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="sortstr" tabindex="-1">sortstr <a class="header-anchor" href="#sortstr" aria-hidden="true">#</a></h2><p>配列変数を文字列でソート</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2
p1 : 文字列型の配列変数名
p2 : 並び順 (0=小さい順/1=大きい順)
</code></pre><p><strong>説明</strong>:</p><p>文字列が格納された配列変数を指定された並び順でソート(並び替え)します。 p1で指定された配列変数を直接並べ替えます。 ソートの並び順は、 ASCIIコードの大きい小さいで比較されるので、 ABC順、あいうえお順に並べ替えられます。</p><p>並び替えに関する情報は、sortget命令で得ることができます。</p><p><strong>参照</strong>:</p><p>sortget</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="sortnote" tabindex="-1">sortnote <a class="header-anchor" href="#sortnote" aria-hidden="true">#</a></h2><p>メモリノート文字列をソート</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2
p1 : メモリノート形式の文字列型の変数名
p2 : 並び順 (0=小さい順/1=大きい順)
</code></pre><p><strong>説明</strong>:</p><p>メモリノートパッド形式の 文字列が格納された変数を、 指定された並び順でソート(並び替え)します。 p1で指定された変数を直接並べ替えます。 ソートの並び順は、 ASCIIコードの大きい小さいで比較されるので、 ABC順、あいうえお順に並べ替えられます。</p><p>並び替えに関する情報は、sortget命令で得ることができます。 メモリノートパッド形式は、 notesel, noteget命令などで使用することのできる「\\n」(改行コード)で区切られたデータ列のことです。</p><p><strong>参照</strong>:</p><p>notesel sortget</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul><h2 id="sortget" tabindex="-1">sortget <a class="header-anchor" href="#sortget" aria-hidden="true">#</a></h2><p>ソート元のインデックスを取得</p><p><strong>グループ</strong>:</p><p>基本入出力制御命令</p><p><strong>パラメーター</strong>:</p><pre><code>p1,p2
p1 : 結果が代入される変数名
p2 : インデックスNo.
</code></pre><p><strong>説明</strong>:</p><p>sortstr, sortval, sortnote命令を実行後の配列において、格納されているデータは、ソートする前はどのインデックスに置かれていたものかを調べて結果を返します。 たとえば、配列変数aをソートした後、 sortget n,4という命令で、1という値が返ってきたとすると、a(4)という配列変数に現在入っている値は、ソートする前には、a(1)に入っていたことを示します。 この命令は、データの一部だけをソートして、その情報をもとにほかのデータの並び替えも行なうような時に有効です。</p><p><strong>参照</strong>:</p><p>sortstr sortval sortnote</p><p><strong>非対応</strong>:</p><ul><li>Let</li></ul>`,172),t=[l];function o(r,c,i,C,A,g){return a(),n("div",null,t)}const D=s(e,[["render",o]]);export{y as __pageData,D as default};
