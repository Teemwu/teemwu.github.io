---
title: VSCode 搭建 Java 开发环境
author: teemwu
date: 2020/08/05 00:17
isPublished: true
categories:
  - VS Code
  - 工具
tags:
  - Java
---

# VSCode 搭建 Java 开发环境

> 工欲善其事，必先利其器 -《论语·卫灵公》

最近在看《代码整洁之道》一书，其示例代码均为 Java 语言所写。虽说编程语言有很多相通的，但作为一名没有写过 Java 的前端，看完大半后发现很难再继续读下去，其中一些思想还是不能理解。加上后面打算再看下《算法》红宝书，正因此，激发了我对 Java 这门语言的兴趣，打算花点时间来入门下 Java 的基础。试了用 Eclipse 和 Intellij 编辑器来写了些练习，发现还是 VSCode 操作顺手。或许有人说 Intellij 很强大，可对于我来说 VSCode 免费、轻量级，优势还是挺明显的，最终也还是选了 VSCode。 写了几天遇到些问题，记录下吧。

### 扩展安装
如果你是为了简单编写和调试 Java 代码，直接安装下面两个扩展就可以直接跑 Java 程序了。
- [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java) Java 语言支持扩展
- [Debugger for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-debug) Java 调试相关的扩展

若你不满足于此，可以直接安装 Java 全家桶扩展，一扩展搞定所有。
- [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack) Java 主流扩展集合

### 遇到的问题
#### 1. 怎么更改启动调试快捷键？（由于我使用的 Mac 键盘，每次调试都要同时按 `fn + F5` 着实影响调试心情）
打开 VSCode 快捷键修改设置，路径 `Code=>Preferences=>KeyBoard Shortcuts`, 在设置的搜索框输入“Run”，找到相应的选项，点击编辑按钮，弹出快捷键录入框，按下你希望设置的组合键就好了

![](/public/imgs/2020/08/05/2020080500170.png)

#### 2. 想忽略掉一些没意义的警告？（做练习时有些变量或方法暂时不用时，编辑器会出现黄色波浪线提醒，且输出警告信息）
在项目根目录新建 `.settings` 文件夹(新建完如果在 VSCode 目录里看不到，则看[问题3](#Q3) )，并在此文件夹下新建 `org.eclipse.jdt.core.prefs` 文件，此文件里面可以加入以下内容：
<details>
      <summary>org.eclipse.jdt.core.prefs</summary>

```ini
eclipse.preferences.version=1
org.eclipse.jdt.core.compiler.annotation.inheritNullAnnotations=disabled
org.eclipse.jdt.core.compiler.annotation.missingNonNullByDefaultAnnotation=ignore
org.eclipse.jdt.core.compiler.annotation.nonnull=org.eclipse.jdt.annotation.NonNull
org.eclipse.jdt.core.compiler.annotation.nonnull.secondary=
org.eclipse.jdt.core.compiler.annotation.nonnullbydefault=org.eclipse.jdt.annotation.NonNullByDefault
org.eclipse.jdt.core.compiler.annotation.nonnullbydefault.secondary=
org.eclipse.jdt.core.compiler.annotation.nullable=org.eclipse.jdt.annotation.Nullable
org.eclipse.jdt.core.compiler.annotation.nullable.secondary=
org.eclipse.jdt.core.compiler.annotation.nullanalysis=disabled
org.eclipse.jdt.core.compiler.problem.APILeak=warning
org.eclipse.jdt.core.compiler.problem.annotatedTypeArgumentToUnannotated=info
org.eclipse.jdt.core.compiler.problem.annotationSuperInterface=warning
org.eclipse.jdt.core.compiler.problem.autoboxing=ignore
org.eclipse.jdt.core.compiler.problem.comparingIdentical=warning
org.eclipse.jdt.core.compiler.problem.deadCode=warning
org.eclipse.jdt.core.compiler.problem.deprecation=warning
org.eclipse.jdt.core.compiler.problem.deprecationInDeprecatedCode=disabled
org.eclipse.jdt.core.compiler.problem.deprecationWhenOverridingDeprecatedMethod=disabled
org.eclipse.jdt.core.compiler.problem.discouragedReference=warning
org.eclipse.jdt.core.compiler.problem.emptyStatement=ignore
org.eclipse.jdt.core.compiler.problem.explicitlyClosedAutoCloseable=ignore
org.eclipse.jdt.core.compiler.problem.fallthroughCase=ignore
org.eclipse.jdt.core.compiler.problem.fatalOptionalError=disabled
org.eclipse.jdt.core.compiler.problem.fieldHiding=ignore
org.eclipse.jdt.core.compiler.problem.finalParameterBound=warning
org.eclipse.jdt.core.compiler.problem.finallyBlockNotCompletingNormally=warning
org.eclipse.jdt.core.compiler.problem.forbiddenReference=error
org.eclipse.jdt.core.compiler.problem.hiddenCatchBlock=warning
org.eclipse.jdt.core.compiler.problem.includeNullInfoFromAsserts=disabled
org.eclipse.jdt.core.compiler.problem.incompatibleNonInheritedInterfaceMethod=warning
org.eclipse.jdt.core.compiler.problem.incompleteEnumSwitch=warning
org.eclipse.jdt.core.compiler.problem.indirectStaticAccess=ignore
org.eclipse.jdt.core.compiler.problem.localVariableHiding=ignore
org.eclipse.jdt.core.compiler.problem.methodWithConstructorName=warning
org.eclipse.jdt.core.compiler.problem.missingDefaultCase=ignore
org.eclipse.jdt.core.compiler.problem.missingDeprecatedAnnotation=ignore
org.eclipse.jdt.core.compiler.problem.missingEnumCaseDespiteDefault=disabled
org.eclipse.jdt.core.compiler.problem.missingHashCodeMethod=ignore
org.eclipse.jdt.core.compiler.problem.missingOverrideAnnotation=ignore
org.eclipse.jdt.core.compiler.problem.missingOverrideAnnotationForInterfaceMethodImplementation=enabled
org.eclipse.jdt.core.compiler.problem.missingSerialVersion=warning
org.eclipse.jdt.core.compiler.problem.missingSynchronizedOnInheritedMethod=ignore
org.eclipse.jdt.core.compiler.problem.noEffectAssignment=warning
org.eclipse.jdt.core.compiler.problem.noImplicitStringConversion=warning
org.eclipse.jdt.core.compiler.problem.nonExternalizedStringLiteral=ignore
org.eclipse.jdt.core.compiler.problem.nonnullParameterAnnotationDropped=warning
org.eclipse.jdt.core.compiler.problem.nonnullTypeVariableFromLegacyInvocation=warning
org.eclipse.jdt.core.compiler.problem.nullAnnotationInferenceConflict=error
org.eclipse.jdt.core.compiler.problem.nullReference=warning
org.eclipse.jdt.core.compiler.problem.nullSpecViolation=error
org.eclipse.jdt.core.compiler.problem.nullUncheckedConversion=warning
org.eclipse.jdt.core.compiler.problem.overridingPackageDefaultMethod=warning
org.eclipse.jdt.core.compiler.problem.parameterAssignment=ignore
org.eclipse.jdt.core.compiler.problem.pessimisticNullAnalysisForFreeTypeVariables=warning
org.eclipse.jdt.core.compiler.problem.possibleAccidentalBooleanAssignment=ignore
org.eclipse.jdt.core.compiler.problem.potentialNullReference=ignore
org.eclipse.jdt.core.compiler.problem.potentiallyUnclosedCloseable=ignore
org.eclipse.jdt.core.compiler.problem.rawTypeReference=warning
org.eclipse.jdt.core.compiler.problem.redundantNullAnnotation=warning
org.eclipse.jdt.core.compiler.problem.redundantNullCheck=ignore
org.eclipse.jdt.core.compiler.problem.redundantSpecificationOfTypeArguments=ignore
org.eclipse.jdt.core.compiler.problem.redundantSuperinterface=ignore
org.eclipse.jdt.core.compiler.problem.reportMethodCanBePotentiallyStatic=ignore
org.eclipse.jdt.core.compiler.problem.reportMethodCanBeStatic=ignore
org.eclipse.jdt.core.compiler.problem.specialParameterHidingField=disabled
org.eclipse.jdt.core.compiler.problem.staticAccessReceiver=warning
org.eclipse.jdt.core.compiler.problem.suppressOptionalErrors=disabled
org.eclipse.jdt.core.compiler.problem.suppressWarnings=enabled
org.eclipse.jdt.core.compiler.problem.suppressWarningsNotFullyAnalysed=info
org.eclipse.jdt.core.compiler.problem.syntacticNullAnalysisForFields=disabled
org.eclipse.jdt.core.compiler.problem.syntheticAccessEmulation=ignore
org.eclipse.jdt.core.compiler.problem.terminalDeprecation=warning
org.eclipse.jdt.core.compiler.problem.typeParameterHiding=warning
org.eclipse.jdt.core.compiler.problem.unavoidableGenericTypeProblems=enabled
org.eclipse.jdt.core.compiler.problem.uncheckedTypeOperation=warning
org.eclipse.jdt.core.compiler.problem.unclosedCloseable=warning
org.eclipse.jdt.core.compiler.problem.undocumentedEmptyBlock=ignore
org.eclipse.jdt.core.compiler.problem.unhandledWarningToken=warning
org.eclipse.jdt.core.compiler.problem.unlikelyCollectionMethodArgumentType=warning
org.eclipse.jdt.core.compiler.problem.unlikelyCollectionMethodArgumentTypeStrict=disabled
org.eclipse.jdt.core.compiler.problem.unlikelyEqualsArgumentType=info
org.eclipse.jdt.core.compiler.problem.unnecessaryElse=ignore
org.eclipse.jdt.core.compiler.problem.unnecessaryTypeCheck=ignore
org.eclipse.jdt.core.compiler.problem.unqualifiedFieldAccess=ignore
org.eclipse.jdt.core.compiler.problem.unstableAutoModuleName=warning
org.eclipse.jdt.core.compiler.problem.unusedDeclaredThrownException=ignore
org.eclipse.jdt.core.compiler.problem.unusedDeclaredThrownExceptionExemptExceptionAndThrowable=enabled
org.eclipse.jdt.core.compiler.problem.unusedDeclaredThrownExceptionIncludeDocCommentReference=enabled
org.eclipse.jdt.core.compiler.problem.unusedDeclaredThrownExceptionWhenOverriding=disabled
org.eclipse.jdt.core.compiler.problem.unusedExceptionParameter=ignore
org.eclipse.jdt.core.compiler.problem.unusedImport=ignore
org.eclipse.jdt.core.compiler.problem.unusedLabel=warning
org.eclipse.jdt.core.compiler.problem.unusedLocal=ignore
org.eclipse.jdt.core.compiler.problem.unusedObjectAllocation=ignore
org.eclipse.jdt.core.compiler.problem.unusedParameter=ignore
org.eclipse.jdt.core.compiler.problem.unusedParameterIncludeDocCommentReference=enabled
org.eclipse.jdt.core.compiler.problem.unusedParameterWhenImplementingAbstract=disabled
org.eclipse.jdt.core.compiler.problem.unusedParameterWhenOverridingConcrete=disabled
org.eclipse.jdt.core.compiler.problem.unusedPrivateMember=ignore
org.eclipse.jdt.core.compiler.problem.unusedTypeParameter=ignore
org.eclipse.jdt.core.compiler.problem.unusedWarningToken=warning
org.eclipse.jdt.core.compiler.problem.varargsArgumentNeedCast=warning

```

</details>

#### 3. 新建 `.settings` 文件夹后看不到？<a id="Q3"></a>
在 VSCode 设置里加入下面配置就好（`Command + , ` 打开配置文件）
```json
{
    "files.exclude": {
        "**/.settings": false,
    },
}
```
