import{_ as s,o as i,c as t,R as a}from"./chunks/framework.c2IVng1e.js";const u=JSON.parse('{"title":"初期化・バージョン・エラー","description":"","frontmatter":{},"headers":[],"relativePath":"translation/GLFW/Reference/init.md","filePath":"translation/GLFW/Reference/init.md","lastUpdated":1698028338000}'),p={name:"translation/GLFW/Reference/init.md"},l=a('<h1 id="初期化・バージョン・エラー" tabindex="-1">初期化・バージョン・エラー <a class="header-anchor" href="#初期化・バージョン・エラー" aria-label="Permalink to &quot;初期化・バージョン・エラー&quot;">​</a></h1><p>これは、ライブラリーの初期化と終了、バージョン管理、エラー処理に関するリファレンス・ドキュメントである。タスク指向の情報については、API入門を参照してください。</p><nav class="table-of-contents"><ul><li><a href="#モジュール">モジュール</a></li><li><a href="#マクロ">マクロ</a></li><li><a href="#型定義">型定義</a></li><li><a href="#関数">関数</a></li></ul></nav><h2 id="モジュール" tabindex="-1">モジュール <a class="header-anchor" href="#モジュール" aria-label="Permalink to &quot;モジュール&quot;">​</a></h2><table><thead><tr><th>モジュール</th><th>説明</th></tr></thead><tbody><tr><td>エラーコード</td><td>エラーコード。</td></tr></tbody></table><h2 id="マクロ" tabindex="-1">マクロ <a class="header-anchor" href="#マクロ" aria-label="Permalink to &quot;マクロ&quot;">​</a></h2><table><thead><tr><th>マクロ</th><th>説明</th></tr></thead><tbody><tr><td>GLFW_TRUE</td><td>1</td></tr><tr><td>GLFW_FALSE</td><td>0</td></tr><tr><td>GLFW_JOYSTICK_HAT_BUTTONS</td><td>ジョイスティックのハットボタンのヒント。</td></tr><tr><td>GLFW_COCOA_CHDIR_RESOURCES</td><td>macOS固有のinitヒント。</td></tr><tr><td>GLFW_COCOA_MENUBAR</td><td>macOS固有のinitヒント。</td></tr></tbody></table><details class="details custom-block"><summary>GLFW_VERSION_MAJOR</summary><p>GLFWヘッダーのメジャーバージョン番号。これは、APIが互換性のない方法で変更されたときにインクリメントされる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_VERSION_MAJOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_VERSION_MINOR</summary><p>GLFWヘッダーのマイナーバージョン番号。これはAPIに機能が追加されたときにインクリメントされるが、後方互換性は保たれる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_VERSION_MINOR</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_VERSION_REVISION</summary><p>GLFWヘッダーのリビジョン番号。これは、APIの変更を含まないバグフィックスリリースが行われたときにインクリメントされる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_VERSION_REVISION</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_TRUE</summary><p>これは数字の1に対する意味上のシュガーでしかない。代わりに1、true、_True、GL_TRUE、VK_TRUEなど、1と等しいものを使うことができる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_TRUE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_FALSE</summary><p>これは数字の0に対する意味上のシュガーにすぎない。 代わりに0、false、_False、GL_FALSE、VK_FALSEなど、0に等しいものを使うことができる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_FALSE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_JOYSTICK_HAT_BUTTONS</summary><p>ジョイスティックのハットボタンのヒント。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_JOYSTICK_HAT_BUTTONS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00050001</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_COCOA_CHDIR_RESOURCES</summary><p>macOS固有のinitヒント。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_COCOA_CHDIR_RESOURCES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00051001</span></span></code></pre></div></details><details class="details custom-block"><summary>GLFW_COCOA_MENUBAR</summary><p>macOS固有のinitヒント。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLFW_COCOA_MENUBAR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00051002</span></span></code></pre></div></details><h2 id="型定義" tabindex="-1">型定義 <a class="header-anchor" href="#型定義" aria-label="Permalink to &quot;型定義&quot;">​</a></h2><table><thead><tr><th>名前</th><th>説明</th></tr></thead><tbody><tr><td><code>void(* GLFWerrorfun)</code></td><td>エラーコールバック用の関数ポインタ型。</td></tr></tbody></table><details class="details custom-block"><summary><code>void(* GLFWerrorfun)</code></summary><p>これはエラー・コールバック用の関数ポインタ型である。エラー・コールバック関数は以下のシグネチャを持つ：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> error_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><hr><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typedef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLFWerrorfun) (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> error_code, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">description)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] error_code</code>: エラーコード。将来のリリースではエラーコードが追加されるかもしれない。</li><li><code>[in] description</code>: エラーを表すUTF-8エンコードされた文字列。</li></ul><p><strong>ポインタの寿命</strong>:</p><p>エラー説明文字列は、コールバック関数が戻るまで有効である。</p><p><strong>参照</strong>:</p><ul><li>Error handling</li><li>glfwSetErrorCallback</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><h2 id="関数" tabindex="-1">関数 <a class="header-anchor" href="#関数" aria-label="Permalink to &quot;関数&quot;">​</a></h2><table><thead><tr><th>関数名</th><th>説明</th></tr></thead><tbody><tr><td>glfwInit</td><td>GLFWライブラリを初期化する。</td></tr><tr><td>glfwTerminate</td><td>GLFWライブラリを終了する。</td></tr><tr><td>glfwInitHint</td><td>指定されたinitヒントを目的の値に設定する。</td></tr><tr><td>glfwGetVersion</td><td>GLFWライブラリのバージョンを取得する。</td></tr><tr><td>glfwGetVersionString</td><td>コンパイル時の設定を表す文字列を返します。</td></tr><tr><td>glfwGetError</td><td>呼び出し元スレッドの最後のエラーを返し、クリアする。</td></tr><tr><td>glfwSetErrorCallback</td><td>エラー・コールバックを設定します。</td></tr></tbody></table><details class="details custom-block"><summary><code>glfwInit()</code></summary><p>この関数はGLFWライブラリを初期化する。ほとんどのGLFW関数が使用できるようになる前に、GLFWは初期化されなければならず、アプリケーションが終了する前に、初期化中または初期化後に割り当てられたリソースを解放するために、GLFWは終了されなければならない。</p><p>この関数が失敗した場合、戻る前にglfwTerminateを呼び出す。成功した場合は、アプリケーションが終了する前にglfwTerminateを呼び出す必要があります。</p><p>初期化に成功した後、終了する前にこの関数を追加で呼び出すと、すぐに GLFW_TRUE が返されます。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwInit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> )</span></span></code></pre></div><p><strong>戻り値</strong>:</p><p>成功すればGLFW_TRUE、エラーが発生すればGLFW_FALSE。</p><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_PLATFORM_ERRORである。</p><p><strong>備考</strong>:</p><p>macOS: この関数は、アプリケーションのカレントディレクトリを、もし存在すれば、アプリケーションのバンドルのContents/Resourcesサブディレクトリに変更します。これはGLFW_COCOA_CHDIR_RESOURCES initヒントで無効にできます。</p><p>X11: この関数は、アプリケーションのロケールのLC_CTYPEカテゴリがまだ &quot;C &quot;の場合、現在の環境に従って設定します。これは、&quot;C &quot;ロケールがUnicodeテキスト入力を壊すためです。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Initialization and termination</li><li>glfwTerminate</li></ul><p><strong>追加</strong>:</p><p>バージョン1.0で追加。</p></details><details class="details custom-block"><summary><code>glfwTerminate()</code></summary><p>この関数は、残っているウィンドウとカーソルをすべて破棄し、変更されたガンマ・ランプを復元し、その他の割り当てられたリソースを解放します。この関数が呼び出されると、ほとんどの GLFW 関数を使用できるようになる前に、再度 glfwInit を正常に呼び出す必要があります。</p><p>GLFWが正常に初期化された場合、この関数はアプリケーションが終了する前に呼ばれなければなりません。初期化に失敗した場合は，glfwInitが失敗を返す前にこの関数が呼ばれるので，この関数を呼ぶ必要はありません．</p><p>GLFWが初期化されていない場合、この関数は何の効果もない。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwTerminate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>エラー</strong>:</p><p>考えられるエラーはGLFW_PLATFORM_ERRORである。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>警告</strong>:</p><p>この関数が呼ばれたとき、残っているウィンドウのコンテキストは、他のスレッドで現在進行中であってはならない。</p><p><strong>リエントランシー</strong>:</p><p>この関数はコールバックから呼んではならない。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Initialization and termination</li><li>glfwInit</li></ul><p><strong>追加</strong>:</p><p>バージョン1.0で追加。</p></details><details class="details custom-block"><summary><code>glfwInitHint()</code></summary><p>この関数はGLFWの次の初期化のためのヒントを設定する。</p><p>ヒントを設定した値は GLFW によってリセットされることはなく、初期化中にのみ有効になります。一度GLFWが初期化されると，ライブラリが終了して再度初期化されるまで， 設定した値は無視される．</p><p>いくつかのヒントはプラットフォーム固有である。これらはどのプラットフォームでも設定できますが、その特定のプラットフォームにのみ影響します。他のプラットフォームでは無視される。これらのヒントを設定するのに、プラットフォーム固有のヘッダーや関数は必要ありません。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwInitHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> hint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] hint</code>: 設定するinitヒント。</li><li><code>[in] value</code>: initヒントの新しい値。</li></ul><p><strong>エラー</strong>:</p><p>起こりうるエラーは GLFW_INVALID_ENUM と GLFW_INVALID_VALUE である。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>init_hints</li><li>glfwInit</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwGetVersion()</code></summary><p>この関数は、GLFWライブラリのメジャー番号、マイナー番号、リビジョン番号を取得します。GLFWを共有ライブラリとして使用していて、必要最小限のバージョンを使用していることを確認したい場合を想定しています。</p><p>バージョン引数のいずれか、またはすべては NULL であってもよい。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetVersion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> major</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> minor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> rev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[out] major</code>: メジャーバージョン番号を格納する場所、またはNULL。</li><li><code>[out] minor</code>: マイナーバージョン番号を格納する場所、またはNULL。</li><li><code>[out] rev</code>: リビジョン番号を格納する場所、またはNULL。</li></ul><p><strong>エラー</strong>:</p><p>なし。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はどのスレッドからでも呼び出すことができる。</p><p><strong>参照</strong>:</p><ul><li>Version management</li><li>glfwGetVersionString</li></ul><p><strong>追加</strong>:</p><p>バージョン1.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetVersionString()</code></summary><p>この関数は、コンパイル時に生成されたGLFWライブラリバイナリのバージョン文字列を返します。これは、バージョン、プラットフォーム、コンパイラ、およびプラットフォーム固有のコンパイル時オプションを記述します。glGetStringで問い合わせるOpenGLやOpenGL ESのバージョン文字列と混同しないでください。</p><p>GLFWライブラリのバージョンを解析するためにバージョン文字列を使用しないでください。glfwGetVersion関数は、実行中のライブラリバイナリのバージョンを数値形式で提供します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetVersionString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>戻り値</strong>:</p><p>ASCIIエンコードされたGLFWバージョン文字列。</p><p><strong>エラー</strong>:</p><p>なし。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>ポインタの寿命</strong>:</p><p>返される文字列は静的で、コンパイル時に生成される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はどのスレッドからでも呼び出すことができる。</p><p><strong>参照</strong>:</p><ul><li>Version management</li><li>glfwGetVersion</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details><details class="details custom-block"><summary><code>glfwGetError()</code></summary><p>この関数は、呼び出し元のスレッドで発生した最後のエラーのエラーコードと、オプションとして UTF-8 でエンコードされた人間が読める説明を返し、クリアする。最後の呼び出しからエラーが発生していない場合、GLFW_NO_ERROR (ゼロ) を返し、説明ポインタは NULL に設定される。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> glfwGetError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] description</code>: エラー説明ポインタを格納する場所、またはNULL。</li></ul><p><strong>戻り値</strong>:</p><p>呼び出しスレッドの最後のエラーコード、または GLFW_NO_ERROR（ゼロ）。</p><p><strong>エラー</strong>:</p><p>なし。</p><p><strong>ポインタの寿命</strong>:</p><p>返された文字列はGLFWによって割り当てられ、解放される。自分で解放してはならない。次のエラーが発生するかライブラリが終了するまで有効であることが保証される。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はどのスレッドからでも呼び出すことができる。</p><p><strong>参照</strong>:</p><ul><li>Error handling</li><li>glfwSetErrorCallback</li></ul><p><strong>追加</strong>:</p><p>バージョン3.3で追加。</p></details><details class="details custom-block"><summary><code>glfwSetErrorCallback()</code></summary><p>この関数はエラーコールバックを設定し、GLFWエラーが発生するたびにエラーコードと人間が読める説明文とともに呼び出される。</p><p>エラーコードはコールバックが呼ばれる前に設定されます。エラーコールバックからglfwGetErrorを呼び出すと、エラーコードの引数と同じ値が返されます。</p><p>エラーコールバックはエラーが発生したスレッドで呼ばれる．複数のスレッドからGLFWを使用する場合は、エラーコールバックもそれに合わせて記述する必要があります。</p><p>説明文字列はそのエラーのために特別に生成された可能性があるため、コールバックが返った後の有効性は保証されません。コールバックが返った後に使用したい場合は、コピーを作成する必要があります。</p><p>一度設定されたエラー・コールバックは、ライブラリが終了した後も設定されたままとなる。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLFWerrorfun </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">glfwSetErrorCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GLFWerrorfun </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><strong>引数</strong>:</p><ul><li><code>[in] callback</code>: 新しいコールバック、または現在設定されているコールバックを削除する場合は NULL。</li></ul><p><strong>戻り値</strong>:</p><p>コールバックが設定されていない場合は NULL。</p><p><strong>コールバック署名</strong>:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> callback_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> error_code</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>コールバック・パラメータの詳細については、コールバック・ポインタ・タイプを参照のこと。</p><p><strong>エラー</strong>:</p><p>なし。</p><p><strong>備考</strong>:</p><p>この関数はglfwInitの前に呼び出される。</p><p><strong>スレッドセーフ</strong>:</p><p>この関数はメインスレッドからのみ呼び出されなければならない。</p><p><strong>参照</strong>:</p><ul><li>Error handling</li><li>glfwGetError</li></ul><p><strong>追加</strong>:</p><p>バージョン3.0で追加。</p></details>',27),n=[l];function e(h,r,d,o,k,g){return i(),t("div",null,n)}const F=s(p,[["render",e]]);export{u as __pageData,F as default};