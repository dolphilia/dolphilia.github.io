import{_ as a,o as e,c as t,Q as i}from"./chunks/framework.43c433ff.js";const k=JSON.parse('{"title":"((o)) Duktape Wiki","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/wiki/index.md","filePath":"translation/duktape/wiki/index.md","lastUpdated":1676126774000}'),l={name:"translation/duktape/wiki/index.md"},r=i('<h1 id="o-duktape-wiki" tabindex="-1">((o)) Duktape Wiki <a class="header-anchor" href="#o-duktape-wiki" aria-label="Permalink to &quot;((o)) Duktape Wiki&quot;">​</a></h1><p><a href="https://wiki.duktape.org/home" target="_blank" rel="noreferrer">原文</a></p><p>Duktapeの公式Wikiへようこそ!</p><h2 id="ドキュメンテーション" tabindex="-1">ドキュメンテーション <a class="header-anchor" href="#ドキュメンテーション" aria-label="Permalink to &quot;ドキュメンテーション&quot;">​</a></h2><ul><li><a href="https://dolphilia.github.io/japanese_translation/duktape/guide/" target="_blank" rel="noreferrer">Duktapeプログラミングガイド</a>: <a href="http://duktape.org/guide.html" target="_blank" rel="noreferrer">http://duktape.org/guide.html</a> - 過去のバージョン: 1.5 1.4 1.3 1.2 1.1 1.0</li><li><a href="https://dolphilia.github.io/japanese_translation/duktape/api/" target="_blank" rel="noreferrer">Duktape APIリファレンス</a>: <a href="http://duktape.org/api.html" target="_blank" rel="noreferrer">http://duktape.org/api.html</a> - 過去のバージョン: 1.5 1.4 1.3 1.2 1.1 1.0</li></ul><h2 id="はじめに" tabindex="-1">はじめに <a class="header-anchor" href="#はじめに" aria-label="Permalink to &quot;はじめに&quot;">​</a></h2><ul><li><a href="./process_lines">ライン処理</a></li><li><a href="./prime_test">プライマリーテスト</a></li></ul><h2 id="how-to" tabindex="-1">How-To <a class="header-anchor" href="#how-to" aria-label="Permalink to &quot;How-To&quot;">​</a></h2><ul><li><a href="./how_to_handle_fatal_errors">致命的なエラーの処理方法</a></li><li><a href="./how_to_work_with_calue_stack_types">値スタック型の扱い方</a></li><li><a href="./how_to_make_function_calls">関数呼び出しの方法</a></li><li><a href="./how_to_use_virtual_properties">仮想プロパティの使い方</a></li><li><a href="./how_to_use_finalization">ファイナライゼーションの使い方</a></li><li>バッファの扱い方 (Duktape 1.x、<a href="./how_to_work_with_buffers_in_duktape_2x">Duktape 2.x</a>)</li><li><a href="./how_to_work_with_lightfuncs">lightfuncsの使い方</a></li><li><a href="./how_to_modules">モジュールの使い方</a></li><li><a href="./how_to_coroutines">コルーチンの使い方</a></li><li><a href="./how_to_use_logging">ロギングの使い方</a></li><li><a href="./how_to_persist_object_references_in_native_code">ネイティブコードでオブジェクト参照を持続させる方法</a></li><li><a href="./how_to_write_a_native_constructor_function">ネイティブのコンストラクタ関数の書き方</a></li><li><a href="./how_to_iterate_over_an_array">配列の反復処理</a></li><li><a href="./how_to_augment_error_objects">エラー・オブジェクトを拡張する</a></li><li><a href="./how_to_decode_duktape_bytecode">Duktapeバイトコードのデコード方法</a></li><li><a href="./how_to_work_with_non-bmp_characters">非BMP文字を扱うには</a></li><li><a href="./how_to_get_a_reference_to_the_global_object">グローバル・オブジェクトへの参照を取得する方法</a></li><li><a href="./how_to_run_on_bare_metal_platforms">ベアメタルプラットフォームで動作させる方法</a></li><li><a href="./how_to_enable_debug_prints">デバッグ・プリントを有効にする方法</a></li><li><a href="./how_to_configure_your_editor_for_duktape">Duktape用のエディターを設定する方法</a></li></ul><h2 id="よくある質問" tabindex="-1">よくある質問 <a class="header-anchor" href="#よくある質問" aria-label="Permalink to &quot;よくある質問&quot;">​</a></h2><ul><li><a href="./development_setup_for_developing_duktape">Duktapeを開発するための設定</a></li><li><a href="./troubleshooting_basics">トラブルシューティングの基本</a></li><li><a href="./internal_and_external_prototype">内部プロトタイプと外部プロトタイプ</a></li><li><a href="./api_c_types">API Cタイプ</a></li><li><a href="./post-es5_features">ES5以降の機能</a></li></ul><h2 id="コンフィグと機能オプション" tabindex="-1">コンフィグと機能オプション <a class="header-anchor" href="#コンフィグと機能オプション" aria-label="Permalink to &quot;コンフィグと機能オプション&quot;">​</a></h2><ul><li><a href="./congifuring_duktape_for_build">ビルドのためのDuktapeの設定</a></li><li>duk_config.h で使用される<a href="./config_options">設定オプション</a> (DUK_USE_xxx)</li><li>コンパイラのコマンドラインオプションとして使用される機能オプション (DUK_OPT_XXX) (Duktape 1.3 まで), <a href="https://github.com/svaarala/duktape/tree/master/config/feature-options" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/tree/master/config/feature-options</a> を参照。</li></ul><h2 id="移植性と互換性" tabindex="-1">移植性と互換性 <a class="header-anchor" href="#移植性と互換性" aria-label="Permalink to &quot;移植性と互換性&quot;">​</a></h2><ul><li>様々なコンパイラとターゲットに対する<a href="./portability">移植性</a>の注意、コンパイルとトラブルシューティングのヒント</li><li>プラットフォーム</li><li>アーキテクチャー</li><li>コンパイラ</li><li>標準ライブラリ: musl, uclibc</li><li><a href="./compatibility_with_typescript">TypeScriptとの互換性</a></li></ul><h2 id="パフォーマンス" tabindex="-1">パフォーマンス <a class="header-anchor" href="#パフォーマンス" aria-label="Permalink to &quot;パフォーマンス&quot;">​</a></h2><ul><li><a href="http://duktape.org/benchmarks.html" target="_blank" rel="noreferrer">http://duktape.org/benchmarks.html</a></li><li><a href="./how_to_optimize_performance">パフォーマンスを最適化する方法</a></li><li>Duktape 1.3.0のパフォーマンス測定</li><li>Duktape 1.4.0のパフォーマンス測定</li><li>Duktape 1.5.0のパフォーマンス測定</li><li>Duktape 2.0.0のパフォーマンス測定</li><li>Duktape 2.1.0のパフォーマンス測定</li><li>Duktape 2.2.0のパフォーマンス測定</li><li>Duktape 2.3.0の性能測定</li><li>Duktape 2.4.0のパフォーマンス測定</li><li>Duktape 2.5.0のパフォーマンス測定</li></ul><h2 id="ロー・メモリの最適化" tabindex="-1">ロー・メモリの最適化 <a class="header-anchor" href="#ロー・メモリの最適化" aria-label="Permalink to &quot;ロー・メモリの最適化&quot;">​</a></h2><ul><li>ロー・メモリー環境: low-memory.rst</li><li>ローメモリ設定オプションの提案: low-memory.yaml</li><li>ハイブリッドプールアロケータの例: alloc-hybrid</li></ul><h2 id="その他" tabindex="-1">その他 <a class="header-anchor" href="#その他" aria-label="Permalink to &quot;その他&quot;">​</a></h2><ul><li><a href="./projects_using_duktape">Duktapeを使ったプロジェクト</a></li><li><a href="./debug_clients">デバッグ・クライアント</a></li></ul><h2 id="寄稿、著作権、ライセンス" tabindex="-1">寄稿、著作権、ライセンス <a class="header-anchor" href="#寄稿、著作権、ライセンス" aria-label="Permalink to &quot;寄稿、著作権、ライセンス&quot;">​</a></h2><ul><li><a href="https://github.com/svaarala/duktape-wiki" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape-wiki</a></li></ul>',23),o=[r];function h(_,u,n,p,s,d){return e(),t("div",null,o)}const c=a(l,[["render",h]]);export{k as __pageData,c as default};