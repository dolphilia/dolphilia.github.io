import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"sokol_time.h","description":"","frontmatter":{},"headers":[],"relativePath":"translation/sokol/time.md","filePath":"translation/sokol/time.md","lastUpdated":1676126774000}'),l={name:"translation/sokol/time.md"},p=o(`<h1 id="sokol-time-h" tabindex="-1">sokol_time.h <a class="header-anchor" href="#sokol-time-h" aria-label="Permalink to &quot;sokol_time.h&quot;">​</a></h1><p>シンプルなクロスプラットフォームの時間測定</p><p>プロジェクトURL: <a href="https://github.com/floooh/sokol" target="_blank" rel="noreferrer">https://github.com/floooh/sokol</a></p><p>このファイルをCまたはC++ファイルにインクルードする前に実装を作成します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SOKOL_IMPL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SOKOL_IMPL</span></span></code></pre></div><p>または</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#define</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SOKOL_TIME_IMPL</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#define</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SOKOL_TIME_IMPL</span></span></code></pre></div><p>オプションとして、以下の定義を独自の実装で提供する:</p><ul><li>SOKOL_ASSERT(c) - 独自のアサートマクロ (デフォルト: assert(c))</li><li>SOKOL_TIME_API_DECL - 公開関数宣言のプレフィックス (デフォルト: extern)</li><li>SOKOL_API_DECL - SOKOL_TIME_API_DECL と同じ。</li><li>SOKOL_API_IMPL - public 関数実装の接頭辞（デフォルト：-）。</li></ul><p>sokol_time.hがDLLとしてコンパイルされた場合、宣言または実装を含む前に以下を定義します。:</p><ul><li>SOKOL_DLL</li></ul><p>Windowsでは、SOKOL_DLLは必要に応じて、SOKOL_TIME_API_DECLを__declspec(dllexport) または __declspec(dllimport) として定義します。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_setup</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_setup</span><span style="color:#24292E;">();</span></span></code></pre></div><p>sokol_timeを初期化するために他の関数の前に一度だけ呼び出す (これは例えばWindowsのQueryPerformanceFrequencyのように呼び出す)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_now</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_now</span><span style="color:#24292E;">();</span></span></code></pre></div><p>現在の時刻を不特定の &#39;ticks&#39; 単位で取得する。返される値は、「壁時計」の時間とは関係なく、また特定の時間単位でもなく、時差を計算するためにのみ有用である。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_diff</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">new</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">old</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_diff</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">new</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">old</span><span style="color:#24292E;">);</span></span></code></pre></div><p>新旧の時間差を計算する。これは常に正の、ゼロでない値を返す。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_since</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">start</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_since</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">start</span><span style="color:#24292E;">);</span></span></code></pre></div><p>現在時刻を取得し、開始からの経過時間を返す (これは &quot;stm_diff(stm_now(), start)&quot; のショートカットである)</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_laptime</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t*</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">last_time</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_laptime</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t*</span><span style="color:#24292E;"> </span><span style="color:#E36209;">last_time</span><span style="color:#24292E;">);</span></span></code></pre></div><p>これは、フレーム時間やその他の繰り返し発生するイベントの測定に便利である。現在の時刻を受け取り、last_time の値との時間差を返し、次の呼び出しのために last_time に現在の時刻を格納する。last_timeの値が0であれば、戻り値は0になる（これは通常、一番最初の呼び出しで起こる）。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_round_to_common_refresh_rate</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">duration</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_round_to_common_refresh_rate</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">duration</span><span style="color:#24292E;">)</span></span></code></pre></div><p>この奇妙な名前の関数は、測定されたフレーム時間を受け取り、最も近い「近くの」一般的なディスプレイのリフレッシュレートのフレーム時間をticksで返します。入力期間がどの一般的なディスプレイのリフレッシュレートにも近いものでない場合、入力期間はフォールバックとして変更されずに返されます。この関数の主な目的は、測定されたフレーム時間からジッター/不正確さを取り除き、代わりにフレーム時間としてディスプレイのリフレッシュレートを使用することです。</p><blockquote><p>注: より強固なフレームタイミングを得るには、sokol_app.h の関数 sapp_frame_duration() の利用を検討してください。</p></blockquote><p>ティック単位の継続時間を有用な時間単位に変換するには、以下の関数を使用します:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_sec</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ticks</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_ms</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ticks</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_us</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ticks</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#F97583;">double</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">stm_ns</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">uint64_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">ticks</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_sec</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ticks</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_ms</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ticks</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_us</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ticks</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#D73A49;">double</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">stm_ns</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">uint64_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">ticks</span><span style="color:#24292E;">);</span></span></code></pre></div><p>ティック値を秒、ミリ秒、マイクロ秒、ナノ秒に変換します。すべてのプラットフォームがナノ秒やマイクロ秒の精度を持つわけではないことに注意してください。</p><p>ボンネットの中で以下の時間測定機能を使用します。:</p><ul><li>Windows: QueryPerformanceFrequency() / QueryPerformanceCounter()</li><li>MacOS/iOS: mach_absolute_time()</li><li>emscripten: emscripten_get_now()</li><li>Linux+others: clock_gettime(CLOCK_MONOTONIC)</li></ul><h2 id="zlib-libpng-license" tabindex="-1">zlib/libpng license <a class="header-anchor" href="#zlib-libpng-license" aria-label="Permalink to &quot;zlib/libpng license&quot;">​</a></h2><p>Copyright (c) 2018 Andre Weissflog</p><p>This software is provided &#39;as-is&#39;, without any express or implied warranty. In no event will the authors be held liable for any damages arising from the use of this software.</p><p>Permission is granted to anyone to use this software for any purpose, including commercial applications, and to alter it and redistribute it freely, subject to the following restrictions:</p><pre><code>1. The origin of this software must not be misrepresented; you must not
claim that you wrote the original software. If you use this software in a
product, an acknowledgment in the product documentation would be
appreciated but is not required.

2. Altered source versions must be plainly marked as such, and must not
be misrepresented as being the original software.

3. This notice may not be removed or altered from any source
distribution.
</code></pre>`,35),e=[p];function t(c,r,i,y,d,E){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{_ as __pageData,h as default};