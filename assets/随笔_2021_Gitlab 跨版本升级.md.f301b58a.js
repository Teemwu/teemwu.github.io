import{_ as a,c as s,o as n,a as l}from"./app.b066a273.js";const h=JSON.parse('{"title":"Gitlab \u8DE8\u7248\u672C\u5347\u7EA7","description":"","frontmatter":{"title":"Gitlab \u8DE8\u7248\u672C\u5347\u7EA7","author":"teemwu","date":"2021/02/26 16:17","isPublished":true,"categories":null,"tags":["gitlab"]},"headers":[{"level":1,"title":"Gitlab \u8DE8\u7248\u672C\u5347\u7EA7","slug":"gitlab-\u8DE8\u7248\u672C\u5347\u7EA7","link":"#gitlab-\u8DE8\u7248\u672C\u5347\u7EA7","children":[{"level":3,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD","link":"#\u4ECB\u7ECD","children":[]},{"level":3,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB","link":"#\u5F00\u59CB","children":[]},{"level":3,"title":"\u7CFB\u7EDF&\u73AF\u5883","slug":"\u7CFB\u7EDF-\u73AF\u5883","link":"#\u7CFB\u7EDF-\u73AF\u5883","children":[]},{"level":3,"title":"\u4E0B\u8F7D&\u5B89\u88C5","slug":"\u4E0B\u8F7D-\u5B89\u88C5","link":"#\u4E0B\u8F7D-\u5B89\u88C5","children":[]},{"level":3,"title":"\u81EA\u52A8&\u5B9A\u65F6\u5907\u4EFD","slug":"\u81EA\u52A8-\u5B9A\u65F6\u5907\u4EFD","link":"#\u81EA\u52A8-\u5B9A\u65F6\u5907\u4EFD","children":[]},{"level":3,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}]}],"relativePath":"\u968F\u7B14/2021/Gitlab \u8DE8\u7248\u672C\u5347\u7EA7.md","lastUpdated":1664375998000}'),e={name:"\u968F\u7B14/2021/Gitlab \u8DE8\u7248\u672C\u5347\u7EA7.md"},t=l(`<h1 id="gitlab-\u8DE8\u7248\u672C\u5347\u7EA7" tabindex="-1">Gitlab \u8DE8\u7248\u672C\u5347\u7EA7 <a class="header-anchor" href="#gitlab-\u8DE8\u7248\u672C\u5347\u7EA7" aria-hidden="true">#</a></h1><h3 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u60F3\u4F7F\u7528 gitlab \u65B0\u7248\u672C\u6DFB\u52A0\u7684\u4E00\u4E9B\u7279\u6027\uFF0C\u6700\u8FD1\u9879\u76EE\u4E0D\u662F\u5F88\u5FD9\uFF0C\u6545\u5F00\u59CB\u4E86\u4F5C\u6B7B\u7684 gitlab \u5347\u7EA7\u4E4B\u65C5\u3002\u3002\u3002\u771F\u7684\uFF0C\u6CA1\u4E8B\u8FD8\u662F\u4E0D\u5EFA\u8BAE\u5347\u7EA7\u8FD9\u4E1C\u897F\uFF01\u5F88\u4E45\u6CA1\u5F04 gitlab \u5F88\u591A\u4E1C\u897F\u90FD\u5FD8\u4E86\uFF0C\u8FC7\u7A0B\u4E2D\u5404\u79CD\u8E29\u5751\uFF0C\u6545\u5199\u4E00\u7BC7\u6587\u7AE0\u8BB0\u5F55\u4E0B\u5347\u7EA7\u3001\u5B89\u88C5\u53CA\u914D\u7F6E\u7684\u8FC7\u7A0B\uFF0C\u5E0C\u671B\u5BF9\u5404\u4F4D\u770B\u5B98\u6709\u70B9\u5E2E\u52A9\u3002</p><h3 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u5347\u7EA7\u67D0\u4E2A\u8F6F\u4EF6\u76F4\u63A5\u53BB <a href="https://about.gitlab.com/update" target="_blank" rel="noreferrer">\u5B98\u7F51</a> \u770B\u66F4\u65B0\u6559\u7A0B\u5373\u53EF\uFF0C\u800C\u5176\u5B98\u7F51\u63D0\u793A CentOS 7 \u5347\u7EA7 gitlab \u4E5F\u5F88\u7B80\u5355\uFF0C\u5C31\u4E24\u6B65\uFF1A</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#676E95;"># \u5907\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo gitlab-rake gitlab:backup:create </span><span style="color:#F07178;">STRATEGY</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">copy</span></span>
<span class="line"><span style="color:#676E95;"># \u4E0B\u8F7D&amp;\u5B89\u88C5\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo yum install -y gitlab-ce</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u4E00\u65F6\u5174\u8D77\uFF0C\u6267\u884C\u5B8C\u7B2C\u4E8C\u6B65\u540E\u53D1\u73B0\uFF0C\u5347\u7EA7\u5931\u8D25\uFF0C\u539F\u56E0\u662F\u6211\u7684 gitlab \u7248\u672C\u8FC7\u8001\uFF0811.11.3\uFF09\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5347\u7EA7\u5230 13.x \u7684\u7248\u672C\uFF0C\u9700\u8981\u4E00\u4E2A\u7248\u672C\u4E00\u4E2A\u7248\u672C\u5347\uFF0C\u53C2\u8003\u522B\u4EBA\u7684\u8E29\u5751\u7ECF\u9A8C\uFF0C\u9009\u62E9\u4E86 <code>11.11.3 -&gt; 12.0.12 -&gt; 12.10.14 -&gt; 13.0.10 -&gt; 13.4.2 -&gt; 13.9.1</code> \u8FD9\u4E2A\u7248\u672C\u5347\u7EA7\u8DEF\u7EBF \u5F00\u59CB\u5C1D\u8BD5\u5347\u7EA7\u65F6\uFF0C\u901A\u8FC7 <code>curl</code> \u548C <code>yum</code> \u7684\u65B9\u5F0F\u5728\u670D\u52A1\u5668\u7AEF\u8FDB\u884C gitlab-ce \u4E0B\u8F7D\uFF0C\u7136\u800C\u7ECF\u5E38\u4F1A\u56E0\u4E3A\u7F51\u7EDC\u95EE\u9898\u4E2D\u65AD\u6389\uFF0C\u6362\u4E86\u56FD\u5185\u955C\u50CF\u6E90(\u6E05\u534E\u6E90\u3001\u963F\u91CC\u4E91)\u4F9D\u65E7\u5076\u5C14\u4E2D\u65AD\uFF0C\u7B2C\u4E00\u6B21\u66F4\u65B0\uFF0C\u901A\u8FC7 <code>yum</code> \u8FDB\u884C\u4E0B\u8F7D\uFF0C\u5230\u767E\u5206\u4E4B\u4E5D\u5341\u591A\u7684\u65F6\u5019\u8FDB\u5EA6\u6761\u5361\u4F4F\u4E86\uFF0C\u7EE7\u7EED\u6267\u884C\u5B89\u88C5\u64CD\u4F5C\uFF0C\u540E\u9762\u542F\u52A8\u65F6\u62A5\u9519(\u201CSTDOUT: WARNING: This version of GitLab depends on gitlab-shell 9.3.0, but you&#39;re running 9.1.0. Please update gitlab-shell.\u201D)\uFF0C\u627E\u4E86\u4E00\u665A\u4E0A\u7684\u5904\u7406\u65B9\u6CD5\uFF0C\u5404\u79CD\u5C1D\u8BD5\u65E0\u679C\uFF0C\u4F30\u8BA1\u662F\u4E0B\u8F7D\u4E0D\u5B8C\u5168\u5F3A\u884C\u5B89\u88C5\u9020\u6210\u7684\u67D0\u4E9B\u5305\u4E0D\u5BF9\u5E94\uFF0C\u6216\u8005\u662F\u4E4B\u524D\u624B\u52A8\u6539\u4E86\u4E00\u4E9B\u914D\u7F6E\u6587\u4EF6\u5BFC\u81F4\u7684\uFF0C\u540E\u53E6\u8D77\u670D\u52A1\u5668\u91CD\u65B0\u5B89\u88C5\u5907\u4EFD\u6587\u4EF6\u7684\u5BF9\u5E94\u7248\u672C 11.11.3 \u91CD\u65B0\u8FDB\u884C\u66F4\u65B0\u64CD\u4F5C</p><h3 id="\u7CFB\u7EDF-\u73AF\u5883" tabindex="-1">\u7CFB\u7EDF&amp;\u73AF\u5883 <a class="header-anchor" href="#\u7CFB\u7EDF-\u73AF\u5883" aria-hidden="true">#</a></h3><ul><li>CentOS 7</li><li>Gitlab-CE 11.11.3 -&gt; 12.0.12 -&gt; 12.10.14 -&gt; 13.0.10 -&gt; 13.4.2 -&gt; 13.9.1</li></ul><h3 id="\u4E0B\u8F7D-\u5B89\u88C5" tabindex="-1">\u4E0B\u8F7D&amp;\u5B89\u88C5 <a class="header-anchor" href="#\u4E0B\u8F7D-\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u7531\u4E8E\u56FD\u5185\u539F\u56E0\uFF0C\u5982\u679C\u4F60\u60F3\u901A\u8FC7\u4FEE\u6539\u955C\u50CF\u6E90\u6765\u4E0B\u8F7D\u5B89\u88C5 gitlab-ce \u7684\u5B89\u88C5\u5305\uFF0C\u53EF\u4EE5\u67E5\u770B\u6587\u672B\u7684\u201C\u53C2\u8003\u201D\u94FE\u63A5\uFF0C\u6211\u4E0D\u63A8\u8350\u8FD9\u79CD\u505A\u6CD5\uFF0C\u56E0\u4E3A\u56FD\u5185\u955C\u50CF\u6E90\u4E0D\u7A33\u5B9A\uFF0C\u5982\u6E05\u534E\u6E90\u4E0B\u8F7D\u5230500M\u5DE6\u53F3\u5C31\u5F88\u4E0D\u7A33\u5B9A\uFF0C\u4E14\u6709\u4E9B\u540C\u6B65\u4E0D\u53CA\u65F6\u3002\u6211\u7684\u505A\u6CD5\u662F\uFF0C\u5728\u7535\u8111\u672C\u5730\u5F00 VPN \u53BB <a href="https://packages.gitlab.com/gitlab/gitlab-ce" target="_blank" rel="noreferrer">\u5B98\u7F51\u4E0B\u8F7D</a> \u5B8C\u6240\u6709\u6587\u4EF6\u540E\uFF0C\u518D\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u8FDB\u884C\u5B89\u88C5</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#676E95;"># \u4E0A\u4F20\u672C\u5730\u6587\u4EF6\u5230\u6307\u5B9A\u670D\u52A1\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">scp /path/filename username@servername:/path</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E4B\u540E\uFF0C\u9700\u8981\u5148\u5907\u4EFD\u4E14\u505C\u6389 gitlab \u518D\u8FDB\u884C\u5B89\u88C5</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#676E95;"># \u521B\u5EFA\u5907\u4EFD</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-rake gitlab:backup:create</span></span>
<span class="line"><span style="color:#676E95;"># \u505C\u6B62 gitlab \u5404\u9879\u670D\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-ctl stop unicorn</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-ctl stop sidekiq</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-ctl stop nginx</span></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -Uvh gitlab-ce-12.0.12-ce.0.el7.x86_64.rpm</span></span>
<span class="line"><span style="color:#676E95;"># \u5237\u65B0\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-ctl reconfigure</span></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u542F gitlab</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab-ctl restart</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u91CD\u590D\u4EE5\u4E0A\u51E0\u6761\u547D\u4EE4\uFF0C\u5373\u53EF\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\uFF0C\u5982\u679C\u8FC7\u7A0B\u4E2D\u6709\u7EA2\u5B57\u63D0\u793A\u201CWarning: Your gitlab.rb and gitlab-secrets.json files contain sensitive data...&quot;\u53EF\u4EE5\u6682\u65F6\u4E0D\u7BA1\uFF0C\u5347\u7EA7\u5230\u6700\u65B0\u7248\u672C\u540E\u518D\u5904\u7406\uFF0C\u62A5\u9519\u539F\u56E0\u662F gitlab.rb \u548C gitlab-secrets.json \u4E24\u4E2A\u6587\u4EF6\u5305\u542B\u654F\u611F\u4FE1\u606F\u3002\u672A\u88AB\u5907\u4EFD\u5230\u5907\u4EFD\u6587\u4EF6\u4E2D\u3002\u9700\u8981\u624B\u52A8\u5907\u4EFD\uFF0C\u4E24\u6587\u4EF6\u8DEF\u5F84\u5206\u522B\u4E3A <code>/etc/gitlab/gitlab.rb</code> \u548C <code>/etc/gitlab/gitlab-secrets.json</code>\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u65E7\u7248\u672C\u7684\u914D\u7F6E\uFF0C\u5C06\u8001\u7248\u672C\u7684 gitlab.rb \u6587\u4EF6\u66FF\u6362\u65B0\u7248\u672C\u7684 gitlab.rb \u5373\u53EF\uFF0Cgitlab-secrets.json \u6587\u4EF6\u540C\u7406\uFF0C\u4E0D\u8FC7\u8FD9\u4E2A\u662F\u8BB0\u5F55\u4E86\u5B89\u5168\u76F8\u5173\u7684\uFF0C\u6BD4\u5982\u4F60\u8BBF\u95EE Runners \u9875\u9762\u63D0\u793A 500 \u62A5\u9519\uFF0C\u5C31\u9700\u8981\u5C06\u65E7\u7248\u672C\u66FF\u6362\u6389\u65B0\u7248</p><h3 id="\u81EA\u52A8-\u5B9A\u65F6\u5907\u4EFD" tabindex="-1">\u81EA\u52A8&amp;\u5B9A\u65F6\u5907\u4EFD <a class="header-anchor" href="#\u81EA\u52A8-\u5B9A\u65F6\u5907\u4EFD" aria-hidden="true">#</a></h3><p>\u4FEE\u6539 <code>/etc/gitlab/gitlab.rb</code> \u6587\u4EF6</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#676E95;"># \u8BBE\u7F6E\u5907\u4EFD\u5B58\u50A8\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab_rails[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">backup_path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] = </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/mnt/udisk/gitlab/backups</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;"># \u5907\u4EFD\u6700\u8FD1\u4E03\u5929\u7684\u6570\u636E\uFF0C\u5373 7*24*60*60 \u79D2</span></span>
<span class="line"><span style="color:#A6ACCD;">gitlab_rails[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">backup_keep_time</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] = 604800</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u4FDD\u5B58\u540E\uFF0C\u5237\u65B0\u914D\u7F6E\u6587\u4EF6</p><div class="language-bat"><button class="copy"></button><span class="lang">bat</span><pre><code><span class="line"><span style="color:#A6ACCD;">gitlab-ctl reconfigure</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u7F16\u8F91\u5B9A\u65F6\u4EFB\u52A1</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">crontab -e</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u52A0\u5165\u4EE5\u4E0B\u5185\u5BB9\u540E\u4FDD\u5B58(\u6BCF\u5929\u4E2D\u5348 12 \u70B9\u548C\u508D\u665A 18 \u70B9\u81EA\u52A8\u6267\u884C\u5907\u4EFD\u64CD\u4F5C)</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">0 12 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create</span></span>
<span class="line"><span style="color:#A6ACCD;">0 18 * * * /opt/gitlab/bin/gitlab-rake gitlab:backup:create</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u4FDD\u5B58\u540E\u6211\u4EEC\u9700\u8981\u91CD\u65B0\u542F\u52A8\u5B9A\u65F6\u5668\uFF0C\u6267\u884C\u5982\u4E0B\u8BED\u53E5</p><div class="language-ini"><button class="copy"></button><span class="lang">ini</span><pre><code><span class="line"><span style="color:#676E95;"># \u91CD\u542F\u5B9A\u65F6\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl restart crond.service</span></span>
<span class="line"><span style="color:#676E95;"># \u91CD\u88C5\u5B9A\u65F6\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl reload crond.service</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u5B9A\u65F6\u4EFB\u52A1\u662F\u5426\u5F00\u542F\uFF08\u53EF\u9009\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">systemctl is-enabled crond.service</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u6240\u6709\u7528\u6237\u4E0B\u7684\u5B9A\u65F6\u4EFB\u52A1\uFF08\u53EF\u9009\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">cat /etc/passwd | cut -f 1 -d : |xargs -I {} crontab -l -u {}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u81F3\u6B64\uFF0C\u81EA\u52A8\u5B9A\u65F6\u5907\u4EFD\u5B8C\u6210</p><h3 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h3><ul><li><a href="https://blog.csdn.net/djzhao627/article/details/88356067" target="_blank" rel="noreferrer">CentOS 7\u4E0B\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684GitLab\uFF0C\u548C\u6570\u636E\u5907\u4EFD\u4E0E\u6062\u590D</a></li><li><a href="https://blog.csdn.net/huoyan98/article/details/108917811" target="_blank" rel="noreferrer">gitlab\u4ECE11.11.3\u5347\u7EA7\u81F313.4.2</a></li><li><a href="https://www.cnblogs.com/jxd283465/p/11525629.html" target="_blank" rel="noreferrer">gitlab\u5B89\u88C5\u3001\u5907\u4EFD\u3001\u6062\u590D\u3001\u5347\u7EA7\u3001\u5185\u5B58\u6D88\u8017\u95EE\u9898</a></li><li><a href="https://www.codenong.com/cs106080856/" target="_blank" rel="noreferrer">curl\u547D\u4EE4\u65AD\u70B9\u7EED\u4F20\u591A\u7EBF\u7A0B\u4E0B\u8F7D\u6587\u4EF6</a></li><li><a href="https://blog.csdn.net/fishinhouse/article/details/105131917" target="_blank" rel="noreferrer">\u8BBF\u95EEGitlab\u4E2D\u7684runners\u9875\u9762\u65F6\u663E\u793A500\u95EE\u9898</a></li><li><a href="https://www.cnblogs.com/sxdcgaq8080/p/10730633.html" target="_blank" rel="noreferrer">\u3010linux\u3011\u3010tomcat\u3011linux\u4E0B\u5B9A\u65F6\u91CD\u542Ftomcat \u3010CentOS 6.4\u3011\u3010CentOS 7.6\u3011</a></li></ul>`,29),p=[t];function c(i,o,r,d,b,g){return n(),s("div",null,p)}const y=a(e,[["render",c]]);export{h as __pageData,y as default};
