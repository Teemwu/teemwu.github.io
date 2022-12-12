import{_ as t}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as r,c,b as a,w as i,d as e,e as d,a as C,r as u,o as h}from"./app.fe1e5ba4.js";const b=JSON.parse('{"title":"项目 NodeJS 版本锁定及自动切换","description":"","frontmatter":{"title":"项目 NodeJS 版本锁定及自动切换","author":"teemwu","date":"2021/08/24 17:33","isPublished":true,"categories":["Webpack","服务器"],"tags":null,"wordCount":897},"headers":[{"level":1,"title":"项目 NodeJS 版本锁定及自动切换","slug":"项目-nodejs-版本锁定及自动切换","link":"#项目-nodejs-版本锁定及自动切换","children":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"版本锁定","slug":"版本锁定","link":"#版本锁定","children":[]},{"level":2,"title":"自动切换","slug":"自动切换","link":"#自动切换","children":[]},{"level":2,"title":"Jenkins 中使用","slug":"jenkins-中使用","link":"#jenkins-中使用","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}]}],"relativePath":"随笔/2021/项目 NodeJS 版本锁定及自动切换.md","lastUpdated":1670810221000}'),A={name:"随笔/2021/项目 NodeJS 版本锁定及自动切换.md"},m=e("h1",{id:"项目-nodejs-版本锁定及自动切换",tabindex:"-1"},[d("项目 NodeJS 版本锁定及自动切换 "),e("a",{class:"header-anchor",href:"#项目-nodejs-版本锁定及自动切换","aria-hidden":"true"},"#")],-1),v=C(`<h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><p>随着项目的增多，旧项目和新项目使用的 node 版本可能差异比较大，在多人协作或者交接项目时，其他开发者的开发环境 node 的版本也不尽相同。因此，我们有必要锁定每个项目的 node 版本范围，为了减少工作量，还需实现运行项目时能自动切换到对应的 node 版本。</p><h2 id="版本锁定" tabindex="-1">版本锁定 <a class="header-anchor" href="#版本锁定" aria-hidden="true">#</a></h2><p>要锁定 node 的版本可以直接在 <code>package.json</code> 中设置，其中 <code>&quot;&gt;=10 &lt;14&quot;</code> 则表明 node 的版本要大于等于 10 小于 14，如果当前 node 版本不在此限定范围内的话，运行项目的时候终端会抛出提示说 node 的版本有误，并终止后续执行。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">engines</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;=10 &lt;14</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">npm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&gt;= 3.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><p>为了兼容通过 npm 来执行运行项目命令，需要在项目根目录新建一个文件名为 <code>.npmrc</code> 的配置文件，并加入以下语句。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">engine-strict = </span><span style="color:#89DDFF;">true</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>到这里，版本锁定已完成。</p><h2 id="自动切换" tabindex="-1">自动切换 <a class="header-anchor" href="#自动切换" aria-hidden="true">#</a></h2><p>之前一直使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a> 来对 node 进行多版本管理，为了轻量化，就不引入其它自动切换 node 的版本库了。由于 nvm 对 Windows 支持不是很完善，建议 Windows 用户使用 <a href="https://github.com/jasongin/nvs" target="_blank" rel="noreferrer">nvs</a> 进行版本管理。假设已经安装成功 nvm（没安装的可以根据<a href="https://github.com/nvm-sh/nvm#install--update-script" target="_blank" rel="noreferrer">官方文档</a>安装），我们需要在<code>～/.zshrc</code>文件中加入以下配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># place this after nvm initialization!</span></span>
<span class="line"><span style="color:#A6ACCD;">autoload -U add-zsh-hook</span></span>
<span class="line"><span style="color:#A6ACCD;">load-nvmrc() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  local node_version=&quot;$(nvm version)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  local nvmrc_path=&quot;$(nvm_find_nvmrc)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  if [ -n &quot;$nvmrc_path&quot; ]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">    local nvmrc_node_version=$(nvm version &quot;$(cat &quot;\${nvmrc_path}&quot;)&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    if [ &quot;$nvmrc_node_version&quot; = &quot;N/A&quot; ]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">      nvm install</span></span>
<span class="line"><span style="color:#A6ACCD;">    elif [ &quot;$nvmrc_node_version&quot; != &quot;$node_version&quot; ]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">      nvm use</span></span>
<span class="line"><span style="color:#A6ACCD;">    fi</span></span>
<span class="line"><span style="color:#A6ACCD;">  elif [ &quot;$node_version&quot; != &quot;$(nvm version default)&quot; ]; then</span></span>
<span class="line"><span style="color:#A6ACCD;">    echo &quot;Reverting to nvm default version&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    nvm use default</span></span>
<span class="line"><span style="color:#A6ACCD;">  fi</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">add-zsh-hook chpwd load-nvmrc</span></span>
<span class="line"><span style="color:#A6ACCD;">load-nvmrc</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果你的终端是 bash 或者其它的话，请自行查看<a href="https://github.com/nvm-sh/nvm#deeper-shell-integration" target="_blank" rel="noreferrer">官方示例</a>。上面的代码是当你在项目下打开终端时，nvm 会在当前项目下去找 <code>.nvmrc</code> 文件，因此我们需要在项目根目录增加此文件，写入自己想要执行的版本号，如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">13.14.0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>倘若你还没安装此版本的 node，nvm 则会自动去安装对应版本的 node 并且自动设为该版本。在项目中打开终端，nvm 就会自动切换到对应的 node 版本啦。</p><p>⚠️ <em><strong>如果没有自动切换版本，请重新打开终端或者重新通过 cd 指令进入项目目录</strong></em></p><h2 id="jenkins-中使用" tabindex="-1">Jenkins 中使用 <a class="header-anchor" href="#jenkins-中使用" aria-hidden="true">#</a></h2><p>通过 jenkins 自动化打包部署项目，发现就算按照以上步骤在服务器上进行 nvm 的安装和配置了，构建部署项目时亦不能进行 node 版本自动切换。调试后发现，jenkins 的构建项目环境并不能找到 nvm 指令，猜测是 jenkins 的运行环境中找不到 nvm 配置。因此，我门可以在 pipeline 中手动执行一下 nvm 配置，如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// xxx.groovy</span></span>
<span class="line"><span style="color:#A6ACCD;">stage(&#39;Build&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		git credentialsId: &#39;gitlab&#39;, url: &quot;\${projectScm}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">		sh &quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">			. ~/.nvm/nvm.sh</span></span>
<span class="line"><span style="color:#A6ACCD;">			. ~/.bashrc</span></span>
<span class="line"><span style="color:#A6ACCD;">			node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">			yarn install</span></span>
<span class="line"><span style="color:#A6ACCD;">			yarn build</span></span>
<span class="line"><span style="color:#A6ACCD;">			zip -r dist.zip dist/</span></span>
<span class="line"><span style="color:#A6ACCD;">		&quot;&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>保存后，重新执行下项目构建即可。</p><p>通过搜索发现还可以通过安装 Jenkins 的 <a href="https://plugins.jenkins.io/nvm-wrapper/" target="_blank" rel="noreferrer">nvm-wrapper</a> 插件来解决此问题，暂未测试。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/nvm-sh/nvm#nvmrc" target="_blank" rel="noreferrer">https://github.com/nvm-sh/nvm#nvmrc</a></li><li><a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines" target="_blank" rel="noreferrer">https://docs.npmjs.com/cli/v7/configuring-npm/package-json#engines</a></li><li><a href="https://plugins.jenkins.io/nvm-wrapper/" target="_blank" rel="noreferrer">https://plugins.jenkins.io/nvm-wrapper/</a></li></ul>`,22);function D(n,s,y,_,g,f){const l=t,o=u("ClientOnly");return h(),c("div",null,[m,a(o,null,{default:i(()=>[a(l,{modelValue:n.$frontmatter,"onUpdate:modelValue":s[0]||(s[0]=p=>n.$frontmatter=p)},null,8,["modelValue"])]),_:1}),v])}const F=r(A,[["render",D]]);export{b as __pageData,F as default};
