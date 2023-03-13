import{_ as i,c,C as n,z as r,x as l,a as d,N as y,D as e,o as C}from"./chunks/framework.bcd58125.js";const _=JSON.parse('{"title":"Git常用操作","description":"","frontmatter":{"title":"Git常用操作","author":"Teemwu","date":"2022/09/27 21:29","isPublished":true,"categories":["效率"],"tags":["git"],"wordCount":424},"headers":[{"level":1,"title":"Git常用操作","slug":"git常用操作","link":"#git常用操作","children":[{"level":2,"title":"分支操作","slug":"分支操作","link":"#分支操作","children":[]},{"level":2,"title":"版本对比","slug":"版本对比","link":"#版本对比","children":[]},{"level":2,"title":"git pull 撤销","slug":"git-pull-撤销","link":"#git-pull-撤销","children":[]},{"level":2,"title":"git 修改 .gitignore 文件使其生效","slug":"git-修改-gitignore-文件使其生效","link":"#git-修改-gitignore-文件使其生效","children":[]},{"level":2,"title":"clone 最新的一个提交，不含历史 commit","slug":"clone-最新的一个提交-不含历史-commit","link":"#clone-最新的一个提交-不含历史-commit","children":[]},{"level":2,"title":"撤销 git add","slug":"撤销-git-add","link":"#撤销-git-add","children":[]}]}],"relativePath":"posts/2022/Git常用操作.md","lastUpdated":1678694718000}'),D={name:"posts/2022/Git常用操作.md"},h=l("h1",{id:"git常用操作",tabindex:"-1"},[d("Git常用操作 "),l("a",{class:"header-anchor",href:"#git常用操作","aria-hidden":"true"},"#")],-1),g=y(`<h2 id="分支操作" tabindex="-1">分支操作 <a class="header-anchor" href="#分支操作" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 查看提交记录，获取 CommitID</span></span>
<span class="line"><span style="color:#A6ACCD;">git log</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 根据 CommitID 创建分支，并切换到新创建到分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout CommitID </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b YourBranchName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 分支改名</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m oldName newName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看所有分支（包括远程分支）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 切换到某个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout YourBranchName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将分支提交到远程服务器</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#FFCB6B;">HEAD</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">YourBranchName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除本地分支（-D 为强制删除）</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d YourBranchName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin </span><span style="color:#89DDFF;">--delete</span><span style="color:#A6ACCD;"> YourBranchName</span></span>
<span class="line"></span></code></pre></div><h2 id="版本对比" tabindex="-1">版本对比 <a class="header-anchor" href="#版本对比" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight has-diff" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 查看当前没有add 的内容修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看已经add 没有commit 的改动</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">cached</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 查看当前没有add和commit的改动</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff HEAD</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// OR</span></span>
<span class="line"><span style="color:#A6ACCD;">git status</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 两版本之间对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff CommitID1 CommitID2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 两版本之间某个文件夹的对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff CommitID1 CommitID2 YourFolderName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 显示两个分支所有有差异的文件列表</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 显示两个分支所有有差异的文件列表并排除掉 dist 目录</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">:!dist</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 显示两个分支所有 src 目录下有差异的文件列表</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">stat src</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 显示两个分支所有差异详情</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 两个分支指定具体文件对比</span></span>
<span class="line"><span style="color:#A6ACCD;">git diff branch1 branch2 </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">filePath</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="git-pull-撤销" tabindex="-1">git pull 撤销 <a class="header-anchor" href="#git-pull-撤销" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 查看历史变更记录</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 回退到指定版本号</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">hard </span><span style="color:#82AAFF;">版本号</span><span style="color:#A6ACCD;">(如:40a9a83)</span></span>
<span class="line"></span></code></pre></div><h2 id="git-修改-gitignore-文件使其生效" tabindex="-1">git 修改 .gitignore 文件使其生效 <a class="header-anchor" href="#git-修改-gitignore-文件使其生效" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git rm </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">r </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">cached </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">  #清除缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">git add </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> #重新trace file</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">m </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">update .gitignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> #提交和注释</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin master #可选，如果需要同步到remote上的话</span></span>
<span class="line"></span></code></pre></div><h2 id="clone-最新的一个提交-不含历史-commit" tabindex="-1">clone 最新的一个提交，不含历史 commit <a class="header-anchor" href="#clone-最新的一个提交-不含历史-commit" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git clone clonePath </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span></span>
<span class="line"></span></code></pre></div><h2 id="撤销-git-add" tabindex="-1">撤销 <code>git add</code> <a class="header-anchor" href="#撤销-git-add" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--mixed</span></span>
<span class="line"></span></code></pre></div>`,12);function A(s,a,m,u,f,F){const t=e("articleMeta"),p=e("ClientOnly");return C(),c("div",null,[h,n(p,null,{default:r(()=>[n(t,{modelValue:s.$frontmatter,"onUpdate:modelValue":a[0]||(a[0]=o=>s.$frontmatter=o)},null,8,["modelValue"])]),_:1}),g])}const E=i(D,[["render",A]]);export{_ as __pageData,E as default};
