import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.43c433ff.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"translation/duktape/api/duk_debugger_notify.md","filePath":"translation/duktape/api/duk_debugger_notify.md","lastUpdated":1676126774000}'),p={name:"translation/duktape/api/duk_debugger_notify.md"},o=l(`<h2 id="duk-debugger-notify" tabindex="-1">duk_debugger_notify() <a class="header-anchor" href="#duk-debugger-notify" aria-label="Permalink to &quot;duk_debugger_notify()&quot;">​</a></h2><p>1.5.0 debugger</p><h3 id="プロトタイプ" tabindex="-1">プロトタイプ <a class="header-anchor" href="#プロトタイプ" aria-label="Permalink to &quot;プロトタイプ&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">duk_bool_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">duk_debugger_notify</span><span style="color:#E1E4E8;">(duk_context </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">ctx</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">duk_idx_t</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">nvalues</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">duk_bool_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">duk_debugger_notify</span><span style="color:#24292E;">(duk_context </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">ctx</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">duk_idx_t</span><span style="color:#24292E;"> </span><span style="color:#E36209;">nvalues</span><span style="color:#24292E;">);</span></span></code></pre></div><h3 id="スタック" tabindex="-1">スタック <a class="header-anchor" href="#スタック" aria-label="Permalink to &quot;スタック&quot;">​</a></h3><p>| ... | val1 | ... | valN | -&gt; | ... |</p><h3 id="要約" tabindex="-1">要約 <a class="header-anchor" href="#要約" aria-label="Permalink to &quot;要約&quot;">​</a></h3><p>デバッグプロトコルのdvaluesにマッピングされたバリュースタックトップのnvalues値を含むアプリケーション固有のデバッガ通知（AppNotify）を送信します。戻り値は、notifyが正常に送信されたか(0以外)、送信されなかったか(0)を示します。引数nvaluesは常にスタックトップからポップオフされます。デバッガサポートがコンパイルされていない場合、またはデバッガが接続されていない場合、このコールはno-opである; いずれの場合も、コールはnotifyが送信されなかったことを示す0を返す。</p><p>アプリケーション固有の通知の使用方法に関する詳細や例については、デバッガのドキュメントを参照してください。</p><h3 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* Causes the following notify to be sent over the debugger protocol:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   NFY AppNotify &quot;BatteryStatus&quot; 740 1000 true EOM</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> battery_current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">740</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> battery_limit </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> battery_charging </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">duk_push_string</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#9ECBFF;">&quot;BatteryStatus&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, battery_current);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_int</span><span style="color:#E1E4E8;">(ctx, battery_limit);</span></span>
<span class="line"><span style="color:#B392F0;">duk_push_boolean</span><span style="color:#E1E4E8;">(ctx, battery_charging);</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">duk_debugger_notify</span><span style="color:#E1E4E8;">(ctx, </span><span style="color:#79B8FF;">4</span><span style="color:#6A737D;"> /*nvalues*/</span><span style="color:#E1E4E8;">)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;battery status notification sent</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">printf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;battery status notification not sent</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* Causes the following notify to be sent over the debugger protocol:</span></span>
<span class="line"><span style="color:#6A737D;"> *</span></span>
<span class="line"><span style="color:#6A737D;"> *   NFY AppNotify &quot;BatteryStatus&quot; 740 1000 true EOM</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> battery_current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">740</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> battery_limit </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> battery_charging </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">duk_push_string</span><span style="color:#24292E;">(ctx, </span><span style="color:#032F62;">&quot;BatteryStatus&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, battery_current);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_int</span><span style="color:#24292E;">(ctx, battery_limit);</span></span>
<span class="line"><span style="color:#6F42C1;">duk_push_boolean</span><span style="color:#24292E;">(ctx, battery_charging);</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">duk_debugger_notify</span><span style="color:#24292E;">(ctx, </span><span style="color:#005CC5;">4</span><span style="color:#6A737D;"> /*nvalues*/</span><span style="color:#24292E;">)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;battery status notification sent</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">printf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;battery status notification not sent</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,11),t=[o];function e(c,r,y,i,E,u){return a(),n("div",null,t)}const F=s(p,[["render",e]]);export{_ as __pageData,F as default};