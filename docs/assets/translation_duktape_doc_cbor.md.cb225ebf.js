import{_ as i,c as l,o as a,Q as t}from"./chunks/framework.44f152d8.js";const _=JSON.parse('{"title":"CBOR","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/doc/cbor.md","lastUpdated":1682143322000}'),r={name:"translation/duktape/doc/cbor.md"},e=t('<h1 id="cbor" tabindex="-1">CBOR <a class="header-anchor" href="#cbor" aria-label="Permalink to &quot;CBOR&quot;">​</a></h1><p>CBORは、JSONに似たバイナリ交換のための標準フォーマットです。 JSONよりも高速で小さく、より多くのデータ型をエンコードすることができます。 特に、バイナリデータはbase-64などでエンコードすることなくシリアライズすることができる。 これらの特性から、状態ファイルの保存やIPCなどに有用である。</p><p>情報保存のためのCBORの欠点もある。</p><ul><li>プロパティ属性や継承をサポートしない。</li><li>DAGやループグラフがない。</li><li>プロパティを持つ配列オブジェクトは、そのインデックス以外のプロパティを失います。</li><li>ギャップを持つ配列オブジェクトは、未定義として読み返されると、そのギャップが失われます。</li><li>バッファオブジェクトとビューは、生データ以外の多くの詳細を失います。</li><li>ECMAScript の文字列は完全に表現することができません。</li><li>関数とネイティブオブジェクトは、その詳細のほとんどを失います。</li><li>CBORタグはソフトデコードの情報を提供するのに便利ですが、タグはIANAが管理する空間の単なる整数であり、カスタムタグのためのスペースはありません。 そのため、タグはプライベートな、アプリケーション固有のタグに簡単に使用することはできない。しかし、IANAは少しの努力でカスタムタグを予約することができます。<a href="https://www.iana.org/assignments/cbor-tags/cbor-tags.xhtml" target="_blank" rel="noreferrer">https://www.iana.org/assignments/cbor-tags/cbor-tags.xhtml</a> を参照してください。</li></ul><h2 id="今後の課題" tabindex="-1">今後の課題 <a class="header-anchor" href="#今後の課題" aria-label="Permalink to &quot;今後の課題&quot;">​</a></h2><p>一般的なことです。</p><ul><li>エンコード/デコードの動作を制御するフラグを追加する。</li><li>ストリームの解析が容易になるように、トレイラーを使ったデコードを可能にする。同様の変更は、JSONのデコードにも有用である。</li><li>CBORタグを欠損値用に確保する。</li><li>その他の必要なCBORタグを確保する。</li><li>副作用のあるエンコードと副作用のないエンコードを明示的にサポート (例: Proxy traps と getters のスキップ)。</li><li>JSONエンコーディングは.toJSON()をサポートし、.toCBOR()のようなものをサポートするかも？</li><li>エンコードとデコードをより最適化する。</li></ul><p>エンコーディング。</p><ul><li>型付き配列のタグ付け: <a href="https://datatracker.ietf.org/doc/draft-ietf-cbor-array-tags/.%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%82%A2%E3%83%B3%E3%82%BF%E3%82%B0%E3%81%8C%E5%AD%98%E5%9C%A8%E3%81%97%E3%81%AA%E3%81%84%E3%81%9F%E3%82%81%EF%BC%8C%E3%83%9F%E3%83%83%E3%82%AF%E3%82%B9%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%82%A2%E3%83%B3%E3%82%92%E3%83%AA%E3%83%88%E3%83%AB%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%82%A2%E3%83%B3%E3%81%AB%E5%A4%89%E6%8F%9B%E3%81%99%E3%82%8B%E5%BF%85%E8%A6%81%E3%81%8C%E3%81%82%E3%82%8A%E3%81%BE%E3%81%99%EF%BC%8E" target="_blank" rel="noreferrer">https://datatracker.ietf.org/doc/draft-ietf-cbor-array-tags/.ミックスエンディアンタグが存在しないため，ミックスエンディアンをリトルエンディアンに変換する必要があります．</a></li><li>型付き配列を整数配列としてエンコードする？</li><li>Float16Array エンコーディングのサポート (メインエンジンでサポートされた場合)。</li><li>IANA の予約が完了したら、配列のギャップのタグ付けを行います。<a href="https://github.com/svaarala/duktape/blob/master/doc/cbor-missing-tag.rst%E3%80%82" target="_blank" rel="noreferrer">https://github.com/svaarala/duktape/blob/master/doc/cbor-missing-tag.rst。</a></li><li>エンコーディング時に64ビット整数をサポート（例：2^53まで？</li><li>オブジェクトが23個以上のキーを持つ場合でも、確定長のオブジェクトエンコードが可能です。</li><li>Map/Setエンコーディング(一度メインエンジンでサポートされた)、多分Map/Setにデコードバックするようにタグ付け。</li><li>Bigintエンコーディング(一度メインエンジンでサポートされた)、Python CBORのようなタグ付きバイト文字列として。</li><li>文字列のエンコードオプション：サロゲートペアの結合、UTF-8でないバイト文字列のタグ付け、U+FFFD置換などを使用して、文字列にデコードバックします。</li><li>シンボルの検出、有用なタグ付けされたフォームでのエンコード。</li><li>関数のより良いエンコーディング。</li><li>シリアライゼーションのフック。呼び出し側がコンテキストに応じた方法で値（特にオブジェクト）をシリアライズできるようにする（例えば、リモートで呼び出せるようにするためにIPCメタデータを持つ関数をシリアライズする）。 このようなフックは、デコード処理のためにカスタム値をマークするタグを発行することができるはずです。</li></ul><p>デコード</p><ul><li>型付き配列のデコードをサポートします。 デコーダはホストのエンディアンに変換する必要があるか?</li><li>Float16Arrayのデコードをサポート(メインエンジンでサポートされれば)。</li><li>文字列でないキーを持つオブジェクトのデコードは、Mapとして表現される可能性があります。</li><li>デコード時にベアオブジェクトと配列を使用しますか？</li><li>デコード時にプレーンオブジェクトではなくMapを使用することで、文字列でないキーを許容します。</li><li>Bigintのデコード(メインエンジンでサポートされたら)。</li><li>BMP以外のコードポイントをサロゲートペアにデコードします。</li><li>コールサイトが安全であることを示すときのシンボルのデコード。</li><li>呼び出し元がコンテキストに応じた方法でオブジェクトを復活させるための復活フック (例: シリアル化された関数オブジェクトをIPCプロキシ関数に復活させる)。 このようなフックは、復活が存在するタグに依存できるように、エンコードタグに アクセスできる必要があります。</li><li>デコードされたオブジェクトと配列をコンパクトにするオプション。</li><li>例えば，最適化されていない整数をfastintとしてデコードしたり，互換性の ある浮動小数点値をfastintとしてデコードしたりできます．</li></ul>',11),o=[e];function s(E,c,n,p,A,d){return a(),l("div",null,o)}const h=i(r,[["render",s]]);export{_ as __pageData,h as default};