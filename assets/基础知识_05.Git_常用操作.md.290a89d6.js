import{_ as t}from"./chunks/articleMeta.vue_vue_type_script_setup_true_lang.ec1f1841.js";import{_ as c,c as i,b as n,w as r,d as l,e as d,a as C,r as y,o as D}from"./app.fe1e5ba4.js";const v=JSON.parse('{"title":"常用","description":"","frontmatter":{},"headers":[{"level":1,"title":"常用","slug":"常用","link":"#常用","children":[{"level":2,"title":"分支操作","slug":"分支操作","link":"#分支操作","children":[]},{"level":2,"title":"版本对比","slug":"版本对比","link":"#版本对比","children":[]},{"level":2,"title":"git pull 撤销","slug":"git-pull-撤销","link":"#git-pull-撤销","children":[]},{"level":2,"title":"git 修改 .gitignore 文件使其生效","slug":"git-修改-gitignore-文件使其生效","link":"#git-修改-gitignore-文件使其生效","children":[]},{"level":2,"title":"clone 最新的一个提交，不含历史 commit","slug":"clone-最新的一个提交-不含历史-commit","link":"#clone-最新的一个提交-不含历史-commit","children":[]},{"level":2,"title":"撤销 git add","slug":"撤销-git-add","link":"#撤销-git-add","children":[]}]}],"relativePath":"基础知识/05.Git/常用操作.md","lastUpdated":1670810221000}'),A={name:"基础知识/05.Git/常用操作.md"},g=l("h1",{id:"常用",tabindex:"-1"},[d("常用 "),l("a",{class:"header-anchor",href:"#常用","aria-hidden":"true"},"#")],-1),h=C(`<h2 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 查看提交记录，获取 CommitID</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#676E95;">// 根据 CommitID 创建分支，并切换到新创建到分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout CommitID </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b YourBranchName</span></span>
<span class="line"><span style="color:#676E95;">// 分支改名</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m oldName newName</span></span>
<span class="line"><span style="color:#676E95;">// 查看分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"><span style="color:#676E95;">// 查看所有分支（包括远程分支）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#676E95;">// 切换到某个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout YourBranchName</span></span>
<span class="line"><span style="color:#676E95;">// 将分支提交到远程服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#FFCB6B;">HEAD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">YourBranchName</span></span>
<span class="line"><span style="color:#676E95;">// 删除本地分支（-D 为强制删除）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d YourBranchName</span></span>
<span class="line"><span style="color:#676E95;">// 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#89DDFF;">--delete</span><span style="color:#A6ACCD;"> YourBranchName</span></span>
<span class="line"></span></code></pre></div><h2 id="版本对比" tabindex="-1">版本对比 <a class="header-anchor" href="#版本对比" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki has-diff"><code><span class="line"><span style="color:#676E95;">// 查看当前没有add 的内容修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"><span style="color:#676E95;">// 查看已经add 没有commit 的改动</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">cached</span></span>
<span class="line"><span style="color:#676E95;">// 查看当前没有add和commit的改动</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD</span></span>
<span class="line"><span style="color:#676E95;">// OR</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#676E95;">// 两版本之间对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff CommitID1 CommitID2</span></span>
<span class="line"><span style="color:#676E95;">// 两版本之间某个文件夹的对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff CommitID1 CommitID2 YourFolderName</span></span>
<span class="line"><span style="color:#676E95;">// 显示两个分支所有有差异的文件列表</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat</span></span>
<span class="line"><span style="color:#676E95;">// 显示两个分支所有有差异的文件列表并排除掉 dist 目录</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:!dist</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;">// 显示两个分支所有 src 目录下有差异的文件列表</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat src</span></span>
<span class="line"><span style="color:#676E95;">// 显示两个分支所有差异详情</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2</span></span>
<span class="line"><span style="color:#676E95;">// 两个分支指定具体文件对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filePath</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="git-pull-撤销" tabindex="-1">git pull 撤销 <a class="header-anchor" href="#git-pull-撤销" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 查看历史变更记录</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"><span style="color:#676E95;">// 回退到指定版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">hard </span><span style="color:#82AAFF;">版本号</span><span style="color:#A6ACCD;">(如:40a9a83)</span></span>
<span class="line"></span></code></pre></div><h2 id="git-修改-gitignore-文件使其生效" tabindex="-1">git 修改 .gitignore 文件使其生效 <a class="header-anchor" href="#git-修改-gitignore-文件使其生效" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">cached </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">  #清除缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> #重新trace file</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">update .gitignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> #提交和注释</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master #可选，如果需要同步到remote上的话</span></span>
<span class="line"></span></code></pre></div><h2 id="clone-最新的一个提交-不含历史-commit" tabindex="-1">clone 最新的一个提交，不含历史 commit <a class="header-anchor" href="#clone-最新的一个提交-不含历史-commit" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git clone clonePath </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><h2 id="撤销-git-add" tabindex="-1">撤销 <code>git add</code> <a class="header-anchor" href="#撤销-git-add" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git reset --mixed</span></span>
<span class="line"></span></code></pre></div>`,12);function m(s,a,u,F,f,b){const e=t,p=y("ClientOnly");return D(),i("div",null,[g,n(p,null,{default:r(()=>[n(e,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=o=>s.$frontmatter=o)},null,8,["modelValue"])]),_:1}),h])}const x=c(A,[["render",m]]);export{v as __pageData,x as default};
