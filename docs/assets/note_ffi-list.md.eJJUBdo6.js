import{_ as e,c as i,o as t,a3 as o}from"./chunks/framework.DflgEAq4.js";const g=JSON.parse('{"title":"FFIの比較","description":"","frontmatter":{},"headers":[],"relativePath":"note/ffi-list.md","filePath":"note/ffi-list.md","lastUpdated":1707715524000}'),l={name:"note/ffi-list.md"},r=o('<h1 id="ffiの比較" tabindex="-1">FFIの比較 <a class="header-anchor" href="#ffiの比較" aria-label="Permalink to &quot;FFIの比較&quot;">​</a></h1><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-label="Permalink to &quot;PHP&quot;">​</a></h2><ul><li><code>FFI::addr</code> — C データへの管理されていないポインタを作成する。</li><li><code>FFI::alignof</code> — アライメントを取得</li><li><code>FFI::arrayType</code> — 新しいC配列型を動的に構築する</li><li><code>FFI::cast</code> — C 型キャストを行う</li><li><code>FFI::cdef</code> — 新しいFFIオブジェクトを作成する</li><li><code>FFI::free</code> — 管理されていないデータ構造を解放する</li><li><code>FFI::isNull</code> — <code>FFICData</code>がヌルポインタかどうかをチェックする。</li><li><code>FFI::load</code> — CヘッダーファイルからC宣言をロードする。</li><li><code>FFI::memcmp</code> — メモリ領域の比較</li><li><code>FFI::memcpy</code> — あるメモリ領域を別のメモリ領域にコピーする</li><li><code>FFI::memset</code> — メモリ領域を埋める</li><li><code>FFI::new</code> — Cデータ構造を作成する</li><li><code>FFI::scope</code> — プリロード中に解析されたC宣言を持つFFIオブジェクトをインスタンス化する。</li><li><code>FFI::sizeof</code> — Cデータまたは型のサイズを取得</li><li><code>FFI::string</code> — メモリ領域から PHP 文字列を作成します。</li><li><code>FFI::type</code> — C宣言から<code>FFICType</code>オブジェクトを生成する。</li><li><code>FFI::typeof</code> — <code>FFICData</code>の <code>FFICType</code> を取得する。</li></ul><h2 id="dart" tabindex="-1">Dart <a class="header-anchor" href="#dart" aria-label="Permalink to &quot;Dart&quot;">​</a></h2><ul><li><code>Abi</code>: アプリケーション・バイナリ・インターフェース (ABI).</li><li><code>AbiSpecificInteger</code>: Abi 固有のすべての整数型のスーパータイプ。</li><li><code>AbiSpecificIntegerMapping</code>: AbiSpecificInteger のサブタイプのマッピング。</li><li><code>Allocator</code>: ネイティブ・ヒープ上のメモリを管理する。</li><li><code>Array&lt;T extends NativeType&gt;</code>: Tsの固定サイズの配列。</li><li><code>Dart_CObject</code>: 不透明で、メンバーを表に出さない。</li><li><code>DartRepresentationOf</code></li><li><code>DefaultAsset</code>: 現在のライブラリのデフォルトのアセットIDを指定する注釈。</li><li><code>DynamicLibrary</code>: 動的にロードされるネイティブ・ライブラリ。</li><li><code>FfiNative&lt;T&gt;</code>: 外部関数を FFI ネイティブとしてマークするための注釈。</li><li><code>Finalizable</code>: 早急に確定させるべきでないオブジェクトのためのマーカー・インターフェイス。</li><li><code>Native&lt;T&gt;</code>: 外部関数をネイティブコードにバインドする方法を指定するアノテーション。</li><li><code>NativeApi</code>: Dart コードまたは C コードから dart_api_dl.h を介して Dart VM API にアクセスするためのユーティリティです。</li><li><code>NativeCallable&lt;T extends Function&gt;</code>: ネイティブ関数への呼び出しをリッスンするネイティブ callable。</li><li><code>NativeFinalizer</code>: Dart オブジェクトにアタッチできるネイティブのファイナライザ。</li><li><code>Packed</code>: Struct サブタイプに指定するアノテーションで、そのメンバをパックする必要があることを示す。</li><li><code>Unsized</code></li><li>標準的なC言語の型 <ul><li><code>Bool</code>: C言語のネイティブなブールを表す。</li><li><code>Char</code>: C の char 型。</li><li><code>Double</code>: C言語のネイティブ64ビットdoubleを表す。</li><li><code>Float</code>: C言語のネイティブ32ビットfloatを表す。</li><li><code>Int</code>: C の int 型。</li><li><code>Int16</code>: C言語のネイティブ符号付き16ビット整数を表す。</li><li><code>Int32</code>: C 言語のネイティブ符号付き 32 ビット整数を表します。</li><li><code>Int64</code>: C 言語のネイティブ符号付き 64 ビット整数を表します。</li><li><code>Int8</code>: C 言語のネイティブ符号付き 8 ビット整数を表します。</li><li><code>IntPtr</code>: C の intptr_t 型。</li><li><code>Long</code>: Cのlong int、別名long型。</li><li><code>LongLong</code>: Cのlong long型。</li><li><code>Short</code>: Cのshort型。</li><li><code>SignedChar</code>: C の符号付き char 型。</li><li><code>Size</code>: C の size_t 型。</li><li><code>Uint16</code>: Cのネイティブ符号なし16ビット整数を表す。</li><li><code>Uint32</code>: C のネイティブ符号なし 32 ビット整数を表す。</li><li><code>Uint64</code>: C のネイティブ符号なし 64 ビット整数を表す。</li><li><code>Uint8</code>: C のネイティブ符号なし 8 ビット整数を表す。</li><li><code>UintPtr</code>:C の uintptr_t 型。</li><li><code>Void</code>: C 言語の void 型を表す。</li><li><code>WChar</code>: C の wchar_t 型。</li><li><code>UnsignedChar</code>: C の符号なし char 型。</li><li><code>UnsignedInt</code>: C の符号なし int 型。</li><li><code>UnsignedLong</code>: C の符号なし long int、別名符号なし long 型。</li><li><code>UnsignedLongLong</code>: C の符号なし long long 型。</li><li><code>UnsignedShort</code>: C の符号なし short 型。</li></ul></li><li>構造的なC言語の型 <ul><li><code>NativeFunction&lt;T extends Function&gt;</code>: C言語の関数型を表す。</li><li><code>Pointer&lt;T extends NativeType&gt;</code>: C ネイティブ・メモリへのポインタを表す。拡張はできない。</li><li><code>Struct</code>: すべての FFI 構造体型のスーパータイプ。</li><li><code>Union</code>: すべての FFI ユニオン型のスーパータイプ。</li><li><code>VarArgs&lt;T extends Record&gt;</code>: C 言語で渡される可変引数の種類。</li></ul></li><li>特殊なC言語の型 <ul><li><code>Handle</code>: C 言語の Dart_Handle を表します。</li><li><code>NativeType</code>: NativeTypeのサブタイプは、C言語のネイティブ型を表す。</li><li><code>Opaque</code>: Opaqueのサブタイプは、C言語の不透明な型を表す。</li></ul></li></ul><h2 id="python" tabindex="-1">Python <a class="header-anchor" href="#python" aria-label="Permalink to &quot;Python&quot;">​</a></h2><ul><li><code>ffi.NULL</code>: <code>&lt;cdata &#39;void *&#39;&gt;</code>型の定数NULL。</li><li><code>ffi.error</code>: 様々なケースで提起されたパイソンの例外。</li><li><code>ffi.new()</code>: 指定されたC型に従ってインスタンスを確保し、そのポインタを返す。</li><li><code>ffi.cast()</code>: 与えられた値で初期化された、指定されたC型のインスタンスを返す。</li><li><code>ffi.errnof</code>: errnoの値は、このスレッド内の直近のC呼び出しから受け取られ、次のC呼び出しに渡される。</li><li><code>ffi.getwinerror()</code>: Windowsでは、errnoに加えて、関数の呼び出しにまたがってGetLastError()の値も保存および復元される。</li><li><code>ffi.string()</code>: cdata&#39;からPython文字列（またはユニコード文字列）を返す。</li><li><code>ffi.unpack()</code>: 与えられた長さのCデータの配列を展開し、Pythonの文字列/ユニコード/リストを返す。</li><li><code>ffi.buffer()</code>: 与えられた&#39;cdata&#39;が指す生のCデータを参照する、&#39;size&#39;バイトのバッファオブジェクトを返す。</li><li><code>ffi.from_buffer()</code>: 与えられた Python オブジェクトのデータを指す配列 cdata (デフォルトは <code>&lt;cdata &#39;char[]&#39;&gt;</code>) を返します。</li><li><code>ffi.memmove()</code>: メモリ領域 src からメモリ領域 dest に n バイトコピーする。以下の例を参照のこと。C関数のmemcpy()とmemmove()にヒントを得た。</li><li><code>ffi.typeof()</code>: パースされた文字列に対応する <code>&lt;ctype&gt;</code> 型のオブジェクト、または cdata インスタンスの C 型を返す。</li><li><code>ffi.sizeof()</code>: 引数のサイズをバイト数で返す。</li><li><code>ffi.alignof()</code>: 引数のナチュラル・アライメント・サイズをバイト単位で返す。</li><li><code>ffi.offsetof()</code>: 与えられたフィールドの構造体内のオフセットを返します。C 言語の offsetof() に相当する。</li><li><code>ffi.addressof()</code>: C言語の&#39;&amp;&#39;演算子に相当する：</li><li><code>ffi.CData, ffi.CType</code>: このドキュメントの残りの部分では <code>&lt;cdata&gt;</code> と <code>&lt;ctype&gt;</code> と呼ばれるオブジェクトの Python 型を示します。</li><li><code>ffi.gc()</code>: 同じデータを指す新しいcdataオブジェクトを返す。</li><li><code>ffi.new_handle()</code>: python_object への不透明な参照を含む void * 型の NULL ではない cdata を返します。これを C の関数に渡したり、C の構造体に格納することができます。</li><li><code>ffi.from_handle()</code>: 後で、ffi.from_handle(p) を使って、同じ void * ポインタを持つ値から元の python_object を取り出すことができます。</li><li><code>ffi.dlopen()</code>: 動的ライブラリの「ハンドル」を開き、<code>&lt;lib&gt;</code> オブジェクトとして返します。モジュールの準備と配布を参照してください。</li><li><code>ffi.dlclose()</code>: ffi.dlopen() が返す <code>&lt;lib&gt;</code> オブジェクトを明示的に閉じる。</li><li><code>ffi.new_allocator()</code>: 新しいアロケータを返す。アロケータとは、ffi.new()のように振る舞うが、提供されている低レベルのalloc関数とfree関数を使う呼び出し可能なものである。</li><li><code>ffi.release() and the context manager</code>: ffi.new()、ffi.gc()、ffi.from_buffer()、または ffi.new_allocator()()から、 cdata オブジェクトが保持するリソースを解放する。</li><li><code>ffi.init_once()</code>: 一度だけ実行する。</li><li><code>ffi.getctype()</code>: 与えられたC型の文字列表現を返す。</li><li><code>ffi.list_types()</code>: この FFI インスタンスが知っているユーザー・タイプ名を返します。</li></ul><h2 id="ruby" tabindex="-1">Ruby <a class="header-anchor" href="#ruby" aria-label="Permalink to &quot;Ruby&quot;">​</a></h2><h2 id="lisp" tabindex="-1">Lisp <a class="header-anchor" href="#lisp" aria-label="Permalink to &quot;Lisp&quot;">​</a></h2><h2 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-label="Permalink to &quot;Node.js&quot;">​</a></h2><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h2><p>refはNode.jsのネイティブアドオンで、組み込みのBufferクラスを拡張して、JavaScriptでC言語プログラミングをするのを助ける：</p><ul><li>バッファのメモリアドレスの取得</li><li>プロセッサのエンディアンのチェック</li><li>バッファがNULLポインタを表すかどうかのチェック</li><li>バッファを使った &quot;ポインタ &quot;の読み書き</li><li>C文字列（NULL終端）の読み書き</li><li>JavaScriptオブジェクト参照の読み書き</li><li>int64_tとuint64_t値の読み書き</li><li>バッファの内容を定義するための「型」規則</li></ul><p>refには実に多くの機能があるが、最終的にはすべてが何らかの形で統合される。簡単に説明すると、refのAPIは3つのセクションに分けられる：</p><ol><li>refのエクスポート: require(&#39;ref&#39;)から返されるエクスポートで利用可能なrefの関数とデフォルトの &quot;型 &quot;のすべての静的バージョン。</li><li>型システム: 型システムでは、任意のBufferインスタンスに型を定義し、汎用のref()関数とderef()関数を使用して値の参照と非参照を行うことができます。</li><li>Bufferの拡張: Buffer.prototypeはいくつかの便利な関数で拡張されています。これらはすべて、Bufferのthis変数をバッファ変数として使用する、静的な対応関数を反映したものです。</li></ol><h3 id="refのエクスポート" tabindex="-1">refのエクスポート <a class="header-anchor" href="#refのエクスポート" aria-label="Permalink to &quot;refのエクスポート&quot;">​</a></h3><ul><li>ref.NULL: CのNULLポインタを参照するバッファ。このバッファからデータにアクセスするとセグメンテーション・フォールトが発生するため、長さは0である。</li><li>ref.NULL_POINTER: NULL_POINTER is a pointer-sized Buffer instance pointing to NULL. Conceptually, it&#39;s equivalent to the following C code:</li><li>ref.address(): Accepts a Buffer instance and returns the memory address of the buffer instance.</li><li>ref.alloc(): Returns a new Buffer instance big enough to hold type, with the given value written to it.</li><li>ref.allocCString(): Returns a new Buffer instance with the given String written to it with the given encoding (defaults to &#39;utf8&#39;). The buffer is 1 byte longer than the string itself, and is NUL terminated.</li><li>ref.coerceType(): Coerces a &quot;type&quot; object from a String or an actual &quot;type&quot; object. String values are looked up from the ref.types Object.</li><li>ref.deref(): Accepts a Buffer instance and attempts to &quot;dereference&quot; it. That is, first it checks the indirection count of buffer&#39;s &quot;type&quot;, and if it&#39;s greater than 1 then it merely returns another Buffer, but with one level less indirection.</li><li>ref.derefType(): Returns a new clone of the given &quot;type&quot; object, with its indirection level decremented by 1.</li><li>ref.endianness(): A string that represents the native endianness of the machine&#39;s processor. The possible values are either &quot;LE&quot; or &quot;BE&quot;.</li><li>ref.get(): Calls the get() function of the Buffer&#39;s current &quot;type&quot; (or the passed in type if present) at the given offset.</li><li>ref.getType(): Returns the &quot;type&quot; property of the given Buffer. Creates a default type for the buffer when none exists.</li><li>ref.isNull(): Accepts a Buffer instance and returns true if the buffer represents the NULL pointer, false otherwise.</li><li>ref.readCString(): Returns a JavaScript String read from buffer at the given offset. The C String is read until the first NULL byte, which indicates the end of the String.</li><li>ref.readInt64BE(): Returns a big-endian signed 64-bit int read from buffer at the given offset.</li><li>ref.readInt64LE(): Returns a little-endian signed 64-bit int read from buffer at the given offset.</li><li>ref.readObject(): Reads a JavaScript Object that has previously been written to the given buffer at the given offset.</li><li>ref.readPointer(): Reads a Buffer instance from the given buffer at the given offset. The size parameter specifies the length of the returned Buffer instance, which defaults to 0.</li><li>ref.readUInt64BE(): Returns a big-endian unsigned 64-bit int read from buffer at the given offset.</li><li>ref.readUInt64LE(): Returns a little-endian unsigned 64-bit int read from buffer at the given offset.</li><li>ref.ref(): ref() accepts a Buffer instance and returns a new Buffer instance that is &quot;pointer&quot; sized and has its data pointing to the given Buffer instance. Essentially the created Buffer is a &quot;reference&quot; to the original pointer, equivalent to the following C code:</li><li>ref.refType(): Returns a new clone of the given &quot;type&quot; object, with its indirection level incremented by 1.</li><li>ref.reinterpret(): Returns a new Buffer instance with the specified size, with the same memory address as buffer.</li><li>ref.reinterpretUntilZeros(): Accepts a Buffer instance and a number of NULL bytes to read from the pointer. This function will scan past the boundary of the Buffer&#39;s length until it finds size number of aligned NULL bytes.</li><li>ref.set(): Calls the set() function of the Buffer&#39;s current &quot;type&quot; (or the passed in type if present) at the given offset.</li><li>ref.writeCString(): Writes the given string as a C String (NULL terminated) to the given buffer at the given offset. &quot;encoding&quot; is optional and defaults to &#39;utf8&#39;.</li><li>ref.writeInt64BE(): Writes the input Number or String as a big-endian signed 64-bit int into buffer at the given offset.</li><li>ref.writeInt64LE(): Writes the input Number or String as a little-endian signed 64-bit int into buffer at the given offset.</li><li>ref.writeObject(): Writes a pointer to object into buffer at the specified _offset.</li><li>ref.writePointer(): Writes the memory address of pointer to buffer at the specified offset.</li><li>ref.writeUInt64BE(): Writes the input Number or String as a big-endian unsigned 64-bit int into buffer at the given offset.</li><li>ref.writeUInt64LE(): Writes the input Number or String as a little-endian unsigned 64-bit int into buffer at the given offset.</li><li>ref._attach(): Attaches object to buffer such that it prevents object from being garbage collected until buffer does.</li><li>ref._reinterpret(): Same as ref.reinterpret(), except that this version does not attach buffer to the returned Buffer, which is potentially unsafe if the garbage collector runs.</li><li>ref._reinterpretUntilZeros(): Same as ref.reinterpretUntilZeros(), except that this version does not attach buffer to the returned Buffer, which is potentially unsafe if the garbage collector runs.</li><li>ref._writeObject(): Same as ref.writeObject(), except that this version does not attach the Object to the Buffer, which is potentially unsafe if the garbage collector runs.</li><li>ref._writePointer(): Same as ref.writePointer(), except that this version does not attach pointer to buffer, which is potentially unsafe if the garbage collector runs.</li></ul><h3 id="型システム" tabindex="-1">型システム <a class="header-anchor" href="#型システム" aria-label="Permalink to &quot;型システム&quot;">​</a></h3><ul><li>types.void: The void type.</li><li>types.int8: The int8 type.</li><li>types.uint8: The uint8 type.</li><li>types.int16: The int16 type.</li><li>types.uint16: The uint16 type.</li><li>types.int32: The int32 type.</li><li>types.uint32: The uint32 type.</li><li>types.int64: The int64 type.</li><li>types.uint64: The uint64 type.</li><li>types.float: The float type.</li><li>types.double: The double type.</li><li>types.Object: オブジェクト・タイプ。これは、通常のJSオブジェクトを生メモリに読み書きするために使用できる。</li><li>types.CString: CStringsは奇妙なものだ。sizeof(char *)で、インダイレクト・レベルは1、つまり、ポインタ・サイズで、utf8文字列データを指すバッファを返さなければならない。</li><li>types.bool: bool型。真または偽のブール型JavaScript値を受け入れ/返す、type.uint8を囲むラッパー型。</li><li>types.byte: The byte type.</li><li>types.char: The char type.</li><li>types.uchar: The uchar type.</li><li>types.short: The short type.</li><li>types.ushort: The ushort type.</li><li>types.int: The int type.</li><li>types.uint: The uint type.</li><li>types.long: The long type.</li><li>types.ulong: The ulong type.</li><li>types.longlong: The longlong type.</li><li>types.ulonglong: The ulonglong type.</li><li>types.size_t: The size_t type.</li></ul><h3 id="bufferの拡張" tabindex="-1">Bufferの拡張 <a class="header-anchor" href="#bufferの拡張" aria-label="Permalink to &quot;Bufferの拡張&quot;">​</a></h3>',20),n=[r];function a(c,d,f,s,h,u){return t(),i("div",null,n)}const b=e(l,[["render",a]]);export{g as __pageData,b as default};