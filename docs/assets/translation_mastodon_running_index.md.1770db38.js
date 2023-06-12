import{_ as s,o as a,c as n,R as l}from"./chunks/framework.320df067.js";const D=JSON.parse('{"title":"マシンを準備する","description":"","frontmatter":{},"headers":[],"relativePath":"translation/mastodon/running/index.md","filePath":"translation/mastodon/running/index.md","lastUpdated":1676784496000}'),p={name:"translation/mastodon/running/index.md"},e=l(`<h1 id="マシンを準備する" tabindex="-1">マシンを準備する <a class="header-anchor" href="#マシンを準備する" aria-label="Permalink to &quot;マシンを準備する&quot;">​</a></h1><p>新しいマシンをセットアップする場合は、最初にセキュアにしておくことをお勧めします。<strong>Ubuntu 20.04</strong>を使用していると仮定した場合。</p><nav class="table-of-contents"><ul><li><a href="#パスワードによるsshログインを許可しない-鍵のみ">パスワードによるSSHログインを許可しない(鍵のみ)</a></li><li><a href="#システムパッケージのアップデート">システムパッケージのアップデート</a></li><li><a href="#fail2banをインストールし、繰り返し行われるログイン試行をブロックする。">fail2banをインストールし、繰り返し行われるログイン試行をブロックする。</a></li><li><a href="#ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する">ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する</a></li></ul></nav><h2 id="パスワードによるsshログインを許可しない-鍵のみ" tabindex="-1">パスワードによるSSHログインを許可しない(鍵のみ) <a class="header-anchor" href="#パスワードによるsshログインを許可しない-鍵のみ" aria-label="Permalink to &quot;パスワードによるSSHログインを許可しない(鍵のみ)&quot;">​</a></h2><p>まず、パスワードではなく鍵を使って実際にサーバにログインしていることを確認してください。そうしないと、ロックアウトされてしまいます。多くのホスティングプロバイダーは公開鍵のアップロードをサポートしており、新しいマシンに鍵ベースのルートログインを自動的にセットアップしてくれます。</p><p><code>etc/ssh/sshd_config</code> を編集して、<code>PasswordAuthentication</code> を見つけます。コメントアウトが解除され、<code>no</code> に設定されていることを確認します。もし、変更したのであれば、sshd を再起動します。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssh.service</span></span></code></pre></div><h2 id="システムパッケージのアップデート" tabindex="-1">システムパッケージのアップデート <a class="header-anchor" href="#システムパッケージのアップデート" aria-label="Permalink to &quot;システムパッケージのアップデート&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">upgrade</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span></code></pre></div><h2 id="fail2banをインストールし、繰り返し行われるログイン試行をブロックする。" tabindex="-1">fail2banをインストールし、繰り返し行われるログイン試行をブロックする。 <a class="header-anchor" href="#fail2banをインストールし、繰り返し行われるログイン試行をブロックする。" aria-label="Permalink to &quot;fail2banをインストールし、繰り返し行われるログイン試行をブロックする。&quot;">​</a></h2><p>まず、fail2banをインストールします。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fail2ban</span></span></code></pre></div><p><code>etc/fail2ban/jail.local</code> を編集し、以下を記述します。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">[DEFAULT]</span></span>
<span class="line"><span style="color:#A6ACCD;">destemail = your@email.here</span></span>
<span class="line"><span style="color:#A6ACCD;">sendername = Fail2Ban</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[sshd]</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled = true</span></span>
<span class="line"><span style="color:#A6ACCD;">port = 22</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[sshd-ddos]</span></span>
<span class="line"><span style="color:#A6ACCD;">enabled = true</span></span>
<span class="line"><span style="color:#A6ACCD;">port = 22</span></span></code></pre></div><p>最後にfail2banを再起動します。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fail2ban</span></span></code></pre></div><h2 id="ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する" tabindex="-1">ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する <a class="header-anchor" href="#ファイアウォールを設置し、ssh-http-httpsのポートだけを許可する" aria-label="Permalink to &quot;ファイアウォールを設置し、SSH, HTTP, HTTPSのポートだけを許可する&quot;">​</a></h2><p>まず、iptables-persistentをインストールします。インストール時に、現在のルールを維持するかどうか尋ねられますが、拒否してください。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">iptables-persistent</span></span></code></pre></div><p><code>etc/iptables/rules.v4</code> を編集し、以下を記述します。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*filter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  ループバック（lo0）のトラフィックをすべて許可し、lo0を使用しない127/8へのトラフィックをすべてドロップする。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -i lo -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT ! -i lo -d 127.0.0.0/8 -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  確立されたすべてのインバウンドコネクションを受け入れる</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  すべてのアウトバウンドトラフィックを許可する - 特定のトラフィックのみを許可するように変更することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A OUTPUT -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  どこからでもHTTPとHTTPSの接続を許可する（WebサイトとSSL用の通常のポート）。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  SSH接続を許可する</span></span>
<span class="line"><span style="color:#A6ACCD;">#  dport番号は、sshd_configで設定したポート番号と同じにする必要があります。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  Pingを許可する</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p icmp -m icmp --icmp-type 8 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 宛先不明メッセージを許可する。特にコード4（断片化が必要）が必要、またはPMTUDが壊れる。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p icmp -m icmp --icmp-type 3 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  iptablesの拒否された呼び出しのログ</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -m limit --limit 5/min -j LOG --log-prefix &quot;iptables denied: &quot; --log-level 7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  その他の受信をすべて拒否する - 明示的に許可されたポリシー以外はデフォルトで拒否する</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A FORWARD -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COMMIT</span></span></code></pre></div><p>iptables-persistentでは、その設定は起動時にロードされます。しかし、今はリブートしていないので、初めて手動でロードする必要があります。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">iptables-restore</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/iptables/rules.v4</span></span></code></pre></div><p>IPv6でも到達可能な場合は、<code>/etc/iptables/rules.v6</code>を編集して、その中にこれを追加してください。</p><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">*filter</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  ループバック（lo0）のトラフィックをすべて許可し、lo0を使用しない127/8へのトラフィックをすべてドロップする。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -i lo -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT ! -i lo -d ::1/128 -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  確立されたすべてのインバウンドコネクションを受け入れる</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  すべてのアウトバウンドトラフィックを許可する - 特定のトラフィックのみを許可するように変更することができます。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A OUTPUT -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  どこからでもHTTPとHTTPSの接続を許可する（WebサイトとSSL用の通常のポート）。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp --dport 80 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp --dport 443 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  SSH接続を許可する</span></span>
<span class="line"><span style="color:#A6ACCD;">#  dport番号は、sshd_configで設定したポート番号と同じである必要があります。</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p tcp -m state --state NEW --dport 22 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  Pingを許可する</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -p icmpv6 -j ACCEPT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  iptablesの拒否された呼び出しのログ</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -m limit --limit 5/min -j LOG --log-prefix &quot;iptables denied: &quot; --log-level 7</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#  その他の受信をすべて拒否する - 明示的に許可されたポリシー以外はデフォルトで拒否する</span></span>
<span class="line"><span style="color:#A6ACCD;">-A INPUT -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;">-A FORWARD -j REJECT</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">COMMIT</span></span></code></pre></div><p>IPv4ルールと同様に、以下のように手動で読み込むことができます。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ip6tables-restore</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/iptables/rules.v6</span></span></code></pre></div>`,27),o=[e];function t(c,i,C,r,A,y){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};
