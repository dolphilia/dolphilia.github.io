import{_ as e,c as o,o as a,Q as i}from"./chunks/framework.44f152d8.js";const g=JSON.parse('{"title":"Core API リファレンス","description":"","frontmatter":{},"headers":[],"relativePath":"translation/vivliostyle/api.md","lastUpdated":1676974355000}'),r={name:"translation/vivliostyle/api.md"},t=i('<h1 id="core-api-リファレンス" tabindex="-1">Core API リファレンス <a class="header-anchor" href="#core-api-リファレンス" aria-label="Permalink to &quot;Core API リファレンス&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#constants">constants</a><ul><li><a href="#constants-pageprogression">constants.PageProgression</a></li><li><a href="#constants-pageside">constants.PageSide</a></li><li><a href="#constants-readystate">constants.ReadyState</a></li></ul></li><li><a href="#plugin">plugin</a><ul><li><a href="#plugin-registerhook-name-fn">plugin.registerHook(name, fn)</a></li><li><a href="#plugin-removehook-name-fn">plugin.removeHook(name, fn)</a></li></ul></li><li><a href="#profile">profile</a><ul><li><a href="#profile-profiler-registerstarttiming-name-timestamp">profile.profiler.registerStartTiming(name, timestamp)</a></li><li><a href="#profile-profiler-registerendtiming-name-timestamp">profile.profiler.registerEndTiming(name, timestamp)</a></li><li><a href="#profile-profiler-printtimings">profile.profiler.printTimings()</a></li><li><a href="#profile-profiler-disable">profile.profiler.disable()</a></li><li><a href="#profile-profiler-enable">profile.profiler.enable()</a></li></ul></li><li><a href="#core-viewer">core-viewer</a><ul><li><a href="#new-coreviewer-settings-options">new CoreViewer(settings, options)</a></li><li><a href="#pageviewmode">PageViewMode</a></li><li><a href="#zoomtype">ZoomType</a></li></ul></li><li><a href="#classes">Classes</a><ul><li><a href="#coreviewer">CoreViewer</a></li><li><a href="#coreviewer-getcurrentpageprogression">CoreViewer.getCurrentPageProgression()</a></li><li><a href="#coreviewer-getpagesizes">CoreViewer.getPageSizes()</a></li><li><a href="#coreviewer-istocvisible">CoreViewer.isTOCVisible()</a></li><li><a href="#coreviewer-loaddocument-singledocumentoptions-documentoptions-vieweroptions">CoreViewer.loadDocument(singleDocumentOptions, documentOptions, viewerOptions)</a></li><li><a href="#coreviewer-loadpublication-puburl-documentoptions-vieweroptions">CoreViewer.loadPublication(pubURL, documentOptions, viewerOptions)</a></li><li><a href="#coreviewer-navigatetointernalurl">CoreViewer.navigateToInternalUrl()</a></li><li><a href="#coreviewer-navigatetopage">CoreViewer.navigateToPage()</a></li><li><a href="#coreviewer-queryzoomfactor-type">CoreViewer.queryZoomFactor(type)</a></li><li><a href="#coreviewer-removelistener-type-listener">CoreViewer.removeListener(type, listener)</a></li><li><a href="#coreviewer-setoptions-options">CoreViewer.setOptions(options)</a></li><li><a href="#coreviewer-showtoc-opt-show-opt-autohide">CoreViewer.showTOC(opt_show, opt_autohide)</a></li></ul></li><li><a href="#typedefs">TypeDefs</a><ul><li><a href="#documentoptions">DocumentOptions</a></li><li><a href="#singledocumentoptions">SingleDocumentOptions</a></li><li><a href="#coreviewersettings">CoreViewerSettings</a></li><li><a href="#corevieweroptions">CoreViewerOptions</a></li></ul></li><li><a href="#print">print</a><ul><li><a href="#printhtml">printHTML</a></li></ul></li></ul></nav><h2 id="constants" tabindex="-1">constants <a class="header-anchor" href="#constants" aria-label="Permalink to &quot;constants&quot;">​</a></h2><h3 id="constants-pageprogression" tabindex="-1"><code>constants.PageProgression</code> <a class="header-anchor" href="#constants-pageprogression" aria-label="Permalink to &quot;`constants.PageProgression`&quot;">​</a></h3><p>Enum <code>PageProgression</code> はページ進行の方向を表す。<code>PageProgression</code> はメンバとして <code>LTR</code> と <code>RTL</code> を持つ。</p><h3 id="constants-pageside" tabindex="-1"><code>constants.PageSide</code> <a class="header-anchor" href="#constants-pageside" aria-label="Permalink to &quot;`constants.PageSide`&quot;">​</a></h3><p>Enum <code>PageSide</code> はページのサイドを表す。<code>PageSide</code> にはメンバとして <code>LEFT</code> と <code>RIGHT</code> が存在する。</p><h3 id="constants-readystate" tabindex="-1"><code>constants.ReadyState</code> <a class="header-anchor" href="#constants-readystate" aria-label="Permalink to &quot;`constants.ReadyState`&quot;">​</a></h3><p>Enum <code>ReadyState</code> はビューワの準備状態を表す。<code>ReadyState</code> はメンバとして <code>LOADING</code>、<code>INTERACTIVE</code>、<code>COMPLETE</code> を持っている。</p><h2 id="plugin" tabindex="-1">plugin <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;plugin&quot;">​</a></h2><h3 id="plugin-registerhook-name-fn" tabindex="-1"><code>plugin.registerHook(name, fn)</code> <a class="header-anchor" href="#plugin-registerhook-name-fn" aria-label="Permalink to &quot;`plugin.registerHook(name, fn)`&quot;">​</a></h3><p>指定された名前のフックに関数を登録します。登録された関数は、コアコードから適切なタイミングで呼び出されます。関数に渡される引数はフックに依存する。複数の関数が登録されている場合、登録された順番に呼び出される。</p><h6 id="パラメータ" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>name</code> (string) — フックの名称</li><li><code>fn</code> (function) — フックに登録する関数。</li></ul><h3 id="plugin-removehook-name-fn" tabindex="-1"><code>plugin.removeHook(name, fn)</code> <a class="header-anchor" href="#plugin-removehook-name-fn" aria-label="Permalink to &quot;`plugin.removeHook(name, fn)`&quot;">​</a></h3><p>同じ関数が複数回登録されていても、最初に登録されたものだけを削除します。</p><h6 id="パラメータ-1" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-1" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>name</code> (string) — フックの名称</li><li><code>fn</code> (function) — フックから取り外す機能</li></ul><h2 id="profile" tabindex="-1">profile <a class="header-anchor" href="#profile" aria-label="Permalink to &quot;profile&quot;">​</a></h2><h3 id="profile-profiler-registerstarttiming-name-timestamp" tabindex="-1"><code>profile.profiler.registerStartTiming(name, timestamp)</code> <a class="header-anchor" href="#profile-profiler-registerstarttiming-name-timestamp" aria-label="Permalink to &quot;`profile.profiler.registerStartTiming(name, timestamp)`&quot;">​</a></h3><p>あるイベントの開始タイミングを登録する。</p><h6 id="パラメータ-2" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-2" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>name</code> (string) — イベントの名称</li><li><code>timestamp</code> (number, optional) — 指定された場合、&quot;now &quot;ではなく、実際のイベントのタイムスタンプとして使用される。</li></ul><h3 id="profile-profiler-registerendtiming-name-timestamp" tabindex="-1"><code>profile.profiler.registerEndTiming(name, timestamp)</code> <a class="header-anchor" href="#profile-profiler-registerendtiming-name-timestamp" aria-label="Permalink to &quot;`profile.profiler.registerEndTiming(name, timestamp)`&quot;">​</a></h3><p>あるイベントの終了タイミングを登録する。</p><h6 id="パラメータ-3" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-3" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>name</code> (string) — イベントの名称</li><li><code>timestamp</code> (number, optional) — 指定された場合、&quot;now &quot;ではなく、実際のイベントのタイムスタンプとして使用される。</li></ul><h3 id="profile-profiler-printtimings" tabindex="-1"><code>profile.profiler.printTimings()</code> <a class="header-anchor" href="#profile-profiler-printtimings" aria-label="Permalink to &quot;`profile.profiler.printTimings()`&quot;">​</a></h3><p>登録した時間（開始／終了／継続）を記録します。 数値はすべてms単位で表示されます。</p><h3 id="profile-profiler-disable" tabindex="-1"><code>profile.profiler.disable()</code> <a class="header-anchor" href="#profile-profiler-disable" aria-label="Permalink to &quot;`profile.profiler.disable()`&quot;">​</a></h3><p>プロファイリングを無効にする。</p><h3 id="profile-profiler-enable" tabindex="-1"><code>profile.profiler.enable()</code> <a class="header-anchor" href="#profile-profiler-enable" aria-label="Permalink to &quot;`profile.profiler.enable()`&quot;">​</a></h3><p>プロファイリングを有効にする。</p><h2 id="core-viewer" tabindex="-1">core-viewer <a class="header-anchor" href="#core-viewer" aria-label="Permalink to &quot;core-viewer&quot;">​</a></h2><h3 id="new-coreviewer-settings-options" tabindex="-1"><code>new CoreViewer(settings, options)</code> <a class="header-anchor" href="#new-coreviewer-settings-options" aria-label="Permalink to &quot;`new CoreViewer(settings, options)`&quot;">​</a></h3><p>VivliostyleのCoreViewerクラスです。<a href="#coreviewer"><code>CoreViewer</code></a>を作成します。</p><h6 id="パラメータ-4" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-4" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>settings</code> (<a href="#coreviewersettings">CoreViewerSettings</a>)</li><li><code>options</code> (<a href="#corevieweroptions">CoreViewerOptions</a>, optional)</li></ul><h3 id="pageviewmode" tabindex="-1"><code>PageViewMode</code> <a class="header-anchor" href="#pageviewmode" aria-label="Permalink to &quot;`PageViewMode`&quot;">​</a></h3><p>Enum <code>PageViewMode</code>. <code>PageViewMode</code> はメンバ <code>SINGLE_PAGE</code>、<code>SPREAD</code> および <code>AUTO_SPREAD</code> を持っています。</p><h3 id="zoomtype" tabindex="-1"><code>ZoomType</code> <a class="header-anchor" href="#zoomtype" aria-label="Permalink to &quot;`ZoomType`&quot;">​</a></h3><p>Enum <code>ZoomType</code>. <code>ZoomType</code> のメンバは <code>FIT_INSIDE_VIEWPORT</code> のみである。</p><h2 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h2><h3 id="coreviewer" tabindex="-1"><code>CoreViewer</code> <a class="header-anchor" href="#coreviewer" aria-label="Permalink to &quot;`CoreViewer`&quot;">​</a></h3><h4 id="coreviewer-addlistener-type-listener" tabindex="-1"><code>CoreViewer.addListener(type, listener)</code> <a class="header-anchor" href="#coreviewer-addlistener-type-listener" aria-label="Permalink to &quot;`CoreViewer.addListener(type, listener)`&quot;">​</a></h4><p>指定されたタイプのイベントがディスパッチされたときに呼び出されるリスナー関数を追加します。</p><h6 id="パラメータ-5" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-5" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>type</code> (string) — イベントの種類</li><li><code>listener</code> (function) — リスナー機能。</li></ul><h3 id="coreviewer-getcurrentpageprogression" tabindex="-1"><code>CoreViewer.getCurrentPageProgression()</code> <a class="header-anchor" href="#coreviewer-getcurrentpageprogression" aria-label="Permalink to &quot;`CoreViewer.getCurrentPageProgression()`&quot;">​</a></h3><p>ビューアの現在のページ進行を返す。ドキュメントが読み込まれていない場合は、null を返す。</p><h6 id="戻り値" tabindex="-1">戻り値 <a class="header-anchor" href="#戻り値" aria-label="Permalink to &quot;戻り値&quot;">​</a></h6><p><a href="#constantspageprogression">PageProgression</a></p><h3 id="coreviewer-getpagesizes" tabindex="-1"><code>CoreViewer.getPageSizes()</code> <a class="header-anchor" href="#coreviewer-getpagesizes" aria-label="Permalink to &quot;`CoreViewer.getPageSizes()`&quot;">​</a></h3><h6 id="戻り値-1" tabindex="-1">戻り値 <a class="header-anchor" href="#戻り値-1" aria-label="Permalink to &quot;戻り値&quot;">​</a></h6><p>Array&lt;{width: number, height: number}&gt;</p><h3 id="coreviewer-istocvisible" tabindex="-1"><code>CoreViewer.isTOCVisible()</code> <a class="header-anchor" href="#coreviewer-istocvisible" aria-label="Permalink to &quot;`CoreViewer.isTOCVisible()`&quot;">​</a></h3><p>TOCが表示されている場合はtrue、非表示の場合はfalse、TOCが利用できない場合はnullを返す。</p><h3 id="coreviewer-loaddocument-singledocumentoptions-documentoptions-vieweroptions" tabindex="-1"><code>CoreViewer.loadDocument(singleDocumentOptions, documentOptions, viewerOptions)</code> <a class="header-anchor" href="#coreviewer-loaddocument-singledocumentoptions-documentoptions-vieweroptions" aria-label="Permalink to &quot;`CoreViewer.loadDocument(singleDocumentOptions, documentOptions, viewerOptions)`&quot;">​</a></h3><p>Load an HTML or XML document(s).</p><h6 id="パラメータ-6" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-6" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>singleDocumentOptions</code> (<a href="#singledocumentoptions">SingleDocumentOptions</a>|Array&lt;<a href="#singledocumentoptions">SingleDocumentOptions</a>&gt;)</li><li><code>documentOptions</code> (<a href="#documentoptions">DocumentOptions</a>, optional)</li><li><code>viewerOptions</code> (<a href="#corevieweroptions">CoreViewerOptions</a>, optional)</li></ul><h3 id="coreviewer-loadpublication-puburl-documentoptions-vieweroptions" tabindex="-1"><code>CoreViewer.loadPublication(pubURL, documentOptions, viewerOptions)</code> <a class="header-anchor" href="#coreviewer-loadpublication-puburl-documentoptions-vieweroptions" aria-label="Permalink to &quot;`CoreViewer.loadPublication(pubURL, documentOptions, viewerOptions)`&quot;">​</a></h3><p>EPUB/WebPub出版物を読み込む。</p><h6 id="パラメータ-7" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-7" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>pubURL</code> (string)</li><li><code>documentOptions</code> (<a href="#documentoptions">DocumentOptions</a>, optional)</li><li><code>viewerOptions</code> (<a href="#corevieweroptions">CoreViewerOptions</a>, optional)</li></ul><h3 id="coreviewer-navigatetointernalurl" tabindex="-1"><code>CoreViewer.navigateToInternalUrl()</code> <a class="header-anchor" href="#coreviewer-navigatetointernalurl" aria-label="Permalink to &quot;`CoreViewer.navigateToInternalUrl()`&quot;">​</a></h3><p>指定された内部URLに移動する。</p><h3 id="coreviewer-navigatetopage" tabindex="-1"><code>CoreViewer.navigateToPage()</code> <a class="header-anchor" href="#coreviewer-navigatetopage" aria-label="Permalink to &quot;`CoreViewer.navigateToPage()`&quot;">​</a></h3><p>指定したページに移動します。</p><h3 id="coreviewer-queryzoomfactor-type" tabindex="-1"><code>CoreViewer.queryZoomFactor(type)</code> <a class="header-anchor" href="#coreviewer-queryzoomfactor-type" aria-label="Permalink to &quot;`CoreViewer.queryZoomFactor(type)`&quot;">​</a></h3><p>指定されたズームタイプに対応するズームファクターを返します。</p><h6 id="パラメータ-8" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-8" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>type</code> (<a href="#zoomtype">ZoomType</a>)</li></ul><h6 id="戻り値-2" tabindex="-1">戻り値 <a class="header-anchor" href="#戻り値-2" aria-label="Permalink to &quot;戻り値&quot;">​</a></h6><p>number</p><h3 id="coreviewer-removelistener-type-listener" tabindex="-1"><code>CoreViewer.removeListener(type, listener)</code> <a class="header-anchor" href="#coreviewer-removelistener-type-listener" aria-label="Permalink to &quot;`CoreViewer.removeListener(type, listener)`&quot;">​</a></h3><p>イベントリスナーを削除する。</p><h6 id="パラメータ-9" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-9" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>type</code> (string) — Event type.</li><li><code>listener</code> (function) — Listener function.</li></ul><h3 id="coreviewer-setoptions-options" tabindex="-1"><code>CoreViewer.setOptions(options)</code> <a class="header-anchor" href="#coreviewer-setoptions-options" aria-label="Permalink to &quot;`CoreViewer.setOptions(options)`&quot;">​</a></h3><p>ビューアにCoreViewerOptionsを設定します。</p><h6 id="パラメータ-10" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-10" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>options</code> (<a href="#corevieweroptions">CoreViewerOptions</a>)</li></ul><h3 id="coreviewer-showtoc-opt-show-opt-autohide" tabindex="-1"><code>CoreViewer.showTOC(opt_show, opt_autohide)</code> <a class="header-anchor" href="#coreviewer-showtoc-opt-show-opt-autohide" aria-label="Permalink to &quot;`CoreViewer.showTOC(opt_show, opt_autohide)`&quot;">​</a></h3><p>TOCボックスの表示／非表示</p><h6 id="パラメータ-11" tabindex="-1">パラメータ <a class="header-anchor" href="#パラメータ-11" aria-label="Permalink to &quot;パラメータ&quot;">​</a></h6><ul><li><code>opt_show</code> (boolean) - trueの場合、TOCを表示し、falseの場合、TOCを隠します。nullまたは未定義の場合、TOCをトグルします。</li><li><code>opt_autohide</code> (boolean) - trueの場合、TOCアイテムをクリックすると自動的に非表示になります。</li></ul><h2 id="typedefs" tabindex="-1">TypeDefs <a class="header-anchor" href="#typedefs" aria-label="Permalink to &quot;TypeDefs&quot;">​</a></h2><h3 id="documentoptions" tabindex="-1"><code>DocumentOptions</code> <a class="header-anchor" href="#documentoptions" aria-label="Permalink to &quot;`DocumentOptions`&quot;">​</a></h3><p>表示されている文書に対するオプション。</p><ul><li><code>documentObject</code> (Document, optional) — ドキュメントのためのドキュメントオブジェクト。提供された場合、ソースを再度パースすることなく直接使用されます。</li><li><code>fragment</code> (string, optional) — 文書中の表示したい位置の断片化識別子（EPUB CFI）。</li><li><code>authorStyleSheet</code> (<code>Array&lt;string&gt;</code>, optional) — ドキュメントから参照されるすべての作成者スタイルシートの後に注入される作成者スタイルシートの配列。単一のスタイルシートは、スタイルシートのURLまたはスタイルシートのテキストコンテンツである可能性があります。</li><li><code>userStyleSheet</code> (<code>Array&lt;string&gt;</code>, optional) — 注入されるユーザスタイルシートの配列。一つのスタイルシートは、スタイルシートのURLまたはスタイルシートのテキストコンテンツである可能性があります。</li></ul><h3 id="singledocumentoptions" tabindex="-1"><code>SingleDocumentOptions</code> <a class="header-anchor" href="#singledocumentoptions" aria-label="Permalink to &quot;`SingleDocumentOptions`&quot;">​</a></h3><p>単一のソースドキュメントに対するオプション。 <code>SingleDocumentOptions</code> は以下のメンバを持つオブジェクトであり、そうでなければ <code>url</code> を表す文字列である。</p><ul><li><code>url</code> (string) — ドキュメントのURL。</li><li><code>startPage</code> (number, optional) — 指定された場合、ドキュメントの最初のページで <code>page</code> ページベースのカウンタが指定された値に設定されます。これは、そのページで <code>counter-reset: page [specified value - 1]</code> と指定することと同じである。</li><li><code>skipPagesBefore</code> (number, optional) — 指定された場合、ドキュメントの最初のページのページベースのカウンターを更新する前に、 <code>page</code> ページベースのカウンターは指定された値だけ増分されます。このオプションは次の場合には無視されます。<code>startPageNumber</code> オプションも指定されます。</li></ul><h3 id="coreviewersettings" tabindex="-1"><code>CoreViewerSettings</code> <a class="header-anchor" href="#coreviewersettings" aria-label="Permalink to &quot;`CoreViewerSettings`&quot;">​</a></h3><p>CoreViewerのコンストラクタに渡す必要があるCoreViewerの設定です。</p><ul><li><code>viewportElement</code> (HTMLElement, <strong>required</strong>) — 表示コンテンツのビューポートとして使用される要素。</li><li><code>userAgentRootURL</code> (string, optional) — ビューアリソースファイル（ソースリポジトリの resources/ ディレクトリ以下）が提供されるディレクトリの URL。</li><li><code>window</code> (Window, optional) — ウィンドウオブジェクト。省略された場合は、現在の <code>window</code> が使用されます。</li><li><code>debug</code> (boolean, optional) — デバッグフラグ。</li></ul><h3 id="corevieweroptions" tabindex="-1"><code>CoreViewerOptions</code> <a class="header-anchor" href="#corevieweroptions" aria-label="Permalink to &quot;`CoreViewerOptions`&quot;">​</a></h3><p>Viewer オブジェクトを構築した後に設定可能な Viewer オプション。</p><ul><li><code>autoResize</code> (boolean, optional) — ウィンドウのサイズ変更時にレイアウトを再実行する default: true</li><li><code>fontSize</code> (number, optional) — デフォルトのフォントサイズ（px） デフォルト：16</li><li><code>pageBorderWidth</code> (number, optional) — 見開きの2ページ間の境界の幅（px）。見開き表示モード時のみ有効 デフォルト：1</li><li><code>renderAllPages</code> (boolean, optional) — ドキュメントロード時に全ページをレンダリングする default: true</li><li><code>pageViewMode</code> (PageViewMode, optional) — ページ表示モード（singlePage / spread / autoSpread）デフォルト：singlePage</li><li><code>zoom</code> (number, optional) — ページを表示する際のズーム倍率。</li><li><code>fitToScreen</code> (boolean, optional) — 画面に合わせた倍率の自動調整 default: false</li><li><code>defaultPaperSize</code> ({width: number, height: number}, optional) — デフォルトの用紙サイズをpxで指定します。page sizeがautoに設定されている場合に有効。デフォルト：undefined（ウィンドウズサイズを用紙サイズとして使用することを意味する）。</li></ul><h2 id="print" tabindex="-1">print <a class="header-anchor" href="#print" aria-label="Permalink to &quot;print&quot;">​</a></h2><h3 id="printhtml" tabindex="-1"><code>printHTML</code> <a class="header-anchor" href="#printhtml" aria-label="Permalink to &quot;`printHTML`&quot;">​</a></h3><p>Webサイト内で印刷する際に、元のレイアウトを崩すことなくvivliostyleでページレイアウトが可能</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">printHTML</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vivliostyle/core</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> htmlDoc </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">&lt;!doctype html&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">&lt;html&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;head&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">        &lt;style&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">        ... Add your CSS code here ...</span></span>\n<span class="line"><span style="color:#C3E88D;">        &lt;/style&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;/head&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;body&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">        ... Add your HTML code here ...</span></span>\n<span class="line"><span style="color:#C3E88D;">    &lt;/body&gt;</span></span>\n<span class="line"><span style="color:#C3E88D;">&lt;/html&gt;</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My printed page</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">printCallback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">iframeWin</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> iframeWin</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// optional: only needed if calling something other than window.print() for printing.</span></span>\n<span class="line"><span style="color:#89DDFF;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#82AAFF;">printHTML</span><span style="color:#A6ACCD;">(htmlDoc</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> config)</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span></code></pre></div>',104),n=[t];function l(s,c,p,d,h,u){return a(),o("div",null,n)}const f=e(r,[["render",l]]);export{g as __pageData,f as default};