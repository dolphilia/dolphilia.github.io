import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.DflgEAq4.js";const y=JSON.parse('{"title":"データ構造","description":"","frontmatter":{},"headers":[],"relativePath":"translation/yyjson/DataStructure.md","filePath":"translation/yyjson/DataStructure.md","lastUpdated":1684305876000}'),t={name:"translation/yyjson/DataStructure.md"},l=n(`<h1 id="データ構造" tabindex="-1">データ構造 <a class="header-anchor" href="#データ構造" aria-label="Permalink to &quot;データ構造&quot;">​</a></h1><p>yyjsonには、immutableとmutableという2種類のデータ構造があります。</p><ul><li>イミュータブルなデータ構造は、JSONドキュメントを読むときに返されます。これらは変更することができません。</li><li>Mutableデータ構造は、JSONドキュメントを構築するときに作成されます。それらは変更することができます。</li><li>yyjsonは、この2種類のデータ構造を変換するための関数も提供しています。</li></ul><p>この文書で説明されているデータ構造はプライベートなものであり、アクセスするにはパブリックAPIを使用する必要があることに注意してください。</p><hr><h2 id="不変の値" tabindex="-1">不変の値 <a class="header-anchor" href="#不変の値" aria-label="Permalink to &quot;不変の値&quot;">​</a></h2><p>各JSONの値は、不変の <code>yyjson_val</code> 構造体に格納される：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yyjson_val {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tag;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        uint64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     i64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      f64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        size_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ofs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } uni;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>タグの下位8ビットには値の種類が格納される<br>。 タグの上位56ビットは値のサイズ（文字列の長さ、オブジェクトのサイズ、配列のサイズ）を格納する。</p><p>現代の64ビットプロセッサは、一般的にRAMアドレスのサポートが64ビット未満に制限されている(<a href="https://en.wikipedia.org/wiki/RAM_limit" target="_blank" rel="noreferrer">Wikipedia</a>)。例えば、Intel64、AMD64、ARMv8では、物理アドレスが52ビット（4PB）制限されています。したがって、64ビットの<code>タグ</code>にタイプとサイズを格納するのが安全である。</p><h2 id="イミュータブル・ドキュメント" tabindex="-1">イミュータブル・ドキュメント <a class="header-anchor" href="#イミュータブル・ドキュメント" aria-label="Permalink to &quot;イミュータブル・ドキュメント&quot;">​</a></h2><p>JSONドキュメントは、すべての文字列を<strong>連続した</strong>メモリー領域に格納します。<br> 各文字列は、インプレースでアンエスケープされ、ヌルターミネーターで終了します。 例えば、以下のようになります：</p><p>JSONドキュメントでは、すべての値を別の<strong>連続した</strong>メモリ領域に格納します。 <code>object</code>と<code>array</code>はそれぞれのメモリ使用量を保存するので、コンテナの子値を簡単にウォークスルーできる。<br> 例えば、以下のような感じです：</p><hr><h2 id="ミュータブル値" tabindex="-1">ミュータブル値 <a class="header-anchor" href="#ミュータブル値" aria-label="Permalink to &quot;ミュータブル値&quot;">​</a></h2><p>ミュータブルなJSON値は、それぞれ <code>yyjson_mut_val</code> 構造体に格納されます：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> yyjson_mut_val {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    uint64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tag;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        uint64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    u64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        int64_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">     i64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      f64;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">       *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        size_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ofs;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } uni;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    yyjson_mut_val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">next;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>tag<code>とuni</code>フィールドは不変の値と同じであり、<code>next</code>フィールドはリンクリストを構築するために使用されます。</p><h2 id="ミュータブルドキュメント" tabindex="-1">ミュータブルドキュメント <a class="header-anchor" href="#ミュータブルドキュメント" aria-label="Permalink to &quot;ミュータブルドキュメント&quot;">​</a></h2><p>ミュータブルJSONドキュメントは、複数の <code>yyjson_mut_val</code> から構成されます。</p><p>オブジェクト<code>や配列</code>の子要素は循環リンクされ、親要素は循環リンクリストの <strong>末尾</strong> を保持する。これにより、yyjson は <code>append</code>, <code>prepend</code>, <code>remove_first</code> を O(1) 時間で行うことができる。</p><p>例えば</p>`,22),e=[l];function p(h,k,r,d,o,c){return a(),i("div",null,e)}const g=s(t,[["render",p]]);export{y as __pageData,g as default};