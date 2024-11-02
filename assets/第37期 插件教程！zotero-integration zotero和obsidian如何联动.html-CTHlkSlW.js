import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,d as t,o as a}from"./app-D00vkK85.js";const l={};function s(e,i){return a(),n("div",null,i[0]||(i[0]=[t('<blockquote><p>第37期 第37期 插件教程！zotero-integration: zotero和obsidian如何联动</p><p>我个人的学习模式主要是使用zotero来进行文献阅读，使用obsidian来进行笔记写作。同时obsidian可以使用dataview来管理和可视化zotero的文献库</p><p>这个过程比较重要的便是如何将zotero的条目信息导出到ob库中，作为中介来实现两个软件的协同；本期介绍zotero-integration方式，后续会更新zotlit的相关教程</p></blockquote><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><p>[TOC]</p><h2 id="联动效果" tabindex="-1"><a class="header-anchor" href="#联动效果"><span>联动效果</span></a></h2><h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍"><span>功能介绍</span></a></h3><ul><li>将zotero条目<strong>注释导入obsidian笔记</strong>，带注释链接及跳转</li><li>在zotero里将有笔<strong>记链接的条目添加彩色标签</strong></li><li><strong>从zotero直接跳转到obsidian对应链接</strong></li><li>Zotero7兼容</li></ul><h3 id="功能展示" tabindex="-1"><a class="header-anchor" href="#功能展示"><span>功能展示</span></a></h3><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/GIF 2023-12-14 18-35-39.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件准备" tabindex="-1"><a class="header-anchor" href="#插件准备"><span>插件准备</span></a></h2><h3 id="zotero准备" tabindex="-1"><a class="header-anchor" href="#zotero准备"><span>Zotero准备</span></a></h3><ul><li>安装<strong>zotero-markdb-connect</strong>插件：(https://github.com/daeh/zotero-markdb-connect)</li><li>安装<strong>Better BibTex for Zotero</strong>插件：(https://github.com/retorquere/zotero-better-bibtex)</li></ul><h3 id="obsidian准备" tabindex="-1"><a class="header-anchor" href="#obsidian准备"><span>Obsidian准备</span></a></h3><ul><li>安装<strong>Zotero Integration</strong>插件 <ul><li>可直接在官方商店安装</li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191740.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h3 id="简单获取" tabindex="-1"><a class="header-anchor" href="#简单获取"><span>简单获取</span></a></h3><p>公众号回复<strong>同步</strong>，直接获取最新（适配zotero7）的zotero插件</p><h2 id="插件配置" tabindex="-1"><a class="header-anchor" href="#插件配置"><span>插件配置</span></a></h2><h3 id="obsidian配置" tabindex="-1"><a class="header-anchor" href="#obsidian配置"><span>Obsidian配置</span></a></h3><h4 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h4><ul><li><p>Note Import Location</p><ul><li>设置笔记路径，最好新建一个文件夹专门放zotero同步的注释文件</li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184818.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li><p>Import Formats</p><ul><li>设置<strong>导入笔记的笔记名</strong></li><li>导入<strong>笔记的图片附件路径</strong></li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184726.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li><p>设置笔记模板和笔记名模板</p><ul><li>笔记的<strong>模板需要自己新建</strong>，并将路径粘贴到Template File项里</li><li>公众号回复&quot;<strong>同步</strong>&quot;,可获取参考用笔记模板</li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185159.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184918.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h4 id="配置预览" tabindex="-1"><a class="header-anchor" href="#配置预览"><span>配置预览</span></a></h4><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184546.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="zotero配置" tabindex="-1"><a class="header-anchor" href="#zotero配置"><span>Zotero配置</span></a></h3><h4 id="配置项-1" tabindex="-1"><a class="header-anchor" href="#配置项-1"><span>配置项</span></a></h4><ul><li>设置同步文件夹路径 <ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185648.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li>设置默认的文件过滤器,根据我的修改就好 <ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185721.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li>联动使用bbtx<strong>的keyword：citekey</strong>来识别 <ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185731.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li>填写自己的<strong>obsidian库名</strong><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185922.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h4 id="配置预览-1" tabindex="-1"><a class="header-anchor" href="#配置预览-1"><span>配置预览</span></a></h4><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185527.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul><h2 id="联动使用" tabindex="-1"><a class="header-anchor" href="#联动使用"><span>联动使用</span></a></h2><h3 id="导入zotero注释到obsdian库" tabindex="-1"><a class="header-anchor" href="#导入zotero注释到obsdian库"><span>导入zotero注释到obsdian库</span></a></h3><ul><li>在obsdian页面点击<strong>crtl+p</strong>，选择导入笔记（这是之前自己自定义的名称）</li><li>选择需要导入的条目</li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190133.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul><h3 id="在zotero中同步标签" tabindex="-1"><a class="header-anchor" href="#在zotero中同步标签"><span>在zotero中同步标签</span></a></h3><ul><li>首次打开zotero会<strong>自动同步条目</strong></li><li>也可以<strong>手动同步条目</strong><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190401.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li>为同步条目的<strong>自动标签添加颜色来辨识</strong><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h3 id="zotero跳转obsidian" tabindex="-1"><a class="header-anchor" href="#zotero跳转obsidian"><span>Zotero跳转obsidian</span></a></h3><ul><li>右键条目</li><li>选择<strong>open note in obsidian跳转</strong><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190540.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h2 id="其它注意事项" tabindex="-1"><a class="header-anchor" href="#其它注意事项"><span>其它注意事项</span></a></h2><h3 id="为obsidian不同颜色的注释添加颜色" tabindex="-1"><a class="header-anchor" href="#为obsidian不同颜色的注释添加颜色"><span>为obsidian不同颜色的注释添加颜色</span></a></h3><ul><li>使用CSS，并<strong>在obsidian启用</strong>。直接将CSS移动到图示路径，并启用 <ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191023.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li><li>CSS获取。公众号后台回复&quot;<strong>同步</strong>&quot;，可获取CSS文件</li><li><strong>CSS</strong>的修改 <ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190821.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h3 id="将callout修改为默认的收缩状态" tabindex="-1"><a class="header-anchor" href="#将callout修改为默认的收缩状态"><span>将callout修改为默认的收缩状态</span></a></h3><ul><li>将callout的默认修改为<strong>收缩状态</strong><ul><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191216.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ul></li></ul><h3 id="修改不同注释颜色的call-out标题" tabindex="-1"><a class="header-anchor" href="#修改不同注释颜色的call-out标题"><span>修改不同注释颜色的call Out标题</span></a></h3><ul><li>将#的十六制颜色换为自己的常用注释颜色</li><li>修改标题，图示为修改#f9e196颜色为Important标题 <img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191333.png" alt="" loading="lazy"><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191412.png" alt="" loading="lazy"></li></ul>',40)]))}const r=o(l,[["render",s],["__file","第37期 插件教程！zotero-integration zotero和obsidian如何联动.html.vue"]]),p=JSON.parse('{"path":"/zotero%E6%95%99%E7%A8%8B/%E7%AC%AC37%E6%9C%9F%20%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B%EF%BC%81zotero-integration%20zotero%E5%92%8Cobsidian%E5%A6%82%E4%BD%95%E8%81%94%E5%8A%A8.html","title":"第37期 插件教程！zotero-integration zotero和obsidian如何联动","lang":"zh-CN","frontmatter":{"类型":"公众号","公众号内容":["zotero教程","obsidian教程"],"rating":["⭐⭐"],"简记":"不建议看，bug是真的多","title":"第37期 插件教程！zotero-integration zotero和obsidian如何联动","description":"第37期 第37期 插件教程！zotero-integration: zotero和obsidian如何联动 我个人的学习模式主要是使用zotero来进行文献阅读，使用obsidian来进行笔记写作。同时obsidian可以使用dataview来管理和可视化zotero的文献库 这个过程比较重要的便是如何将zotero的条目信息导出到ob库中，作为中介...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zotero%E6%95%99%E7%A8%8B/%E7%AC%AC37%E6%9C%9F%20%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B%EF%BC%81zotero-integration%20zotero%E5%92%8Cobsidian%E5%A6%82%E4%BD%95%E8%81%94%E5%8A%A8.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"第37期 插件教程！zotero-integration zotero和obsidian如何联动"}],["meta",{"property":"og:description","content":"第37期 第37期 插件教程！zotero-integration: zotero和obsidian如何联动 我个人的学习模式主要是使用zotero来进行文献阅读，使用obsidian来进行笔记写作。同时obsidian可以使用dataview来管理和可视化zotero的文献库 这个过程比较重要的便是如何将zotero的条目信息导出到ob库中，作为中介..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-12-14%2018-35-39.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-02T10:14:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-02T10:14:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第37期 插件教程！zotero-integration zotero和obsidian如何联动\\",\\"image\\":[\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/GIF%202023-12-14%2018-35-39.gif\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191740.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184818.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184726.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185159.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184918.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214184546.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185648.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185721.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185731.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185922.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214185527.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190133.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190401.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190317.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190540.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191023.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214190821.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191216.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191333.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231214191412.png\\"],\\"dateModified\\":\\"2024-11-02T10:14:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"联动效果","slug":"联动效果","link":"#联动效果","children":[{"level":3,"title":"功能介绍","slug":"功能介绍","link":"#功能介绍","children":[]},{"level":3,"title":"功能展示","slug":"功能展示","link":"#功能展示","children":[]}]},{"level":2,"title":"插件准备","slug":"插件准备","link":"#插件准备","children":[{"level":3,"title":"Zotero准备","slug":"zotero准备","link":"#zotero准备","children":[]},{"level":3,"title":"Obsidian准备","slug":"obsidian准备","link":"#obsidian准备","children":[]},{"level":3,"title":"简单获取","slug":"简单获取","link":"#简单获取","children":[]}]},{"level":2,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[{"level":3,"title":"Obsidian配置","slug":"obsidian配置","link":"#obsidian配置","children":[]},{"level":3,"title":"Zotero配置","slug":"zotero配置","link":"#zotero配置","children":[]}]},{"level":2,"title":"联动使用","slug":"联动使用","link":"#联动使用","children":[{"level":3,"title":"导入zotero注释到obsdian库","slug":"导入zotero注释到obsdian库","link":"#导入zotero注释到obsdian库","children":[]},{"level":3,"title":"在zotero中同步标签","slug":"在zotero中同步标签","link":"#在zotero中同步标签","children":[]},{"level":3,"title":"Zotero跳转obsidian","slug":"zotero跳转obsidian","link":"#zotero跳转obsidian","children":[]}]},{"level":2,"title":"其它注意事项","slug":"其它注意事项","link":"#其它注意事项","children":[{"level":3,"title":"为obsidian不同颜色的注释添加颜色","slug":"为obsidian不同颜色的注释添加颜色","link":"#为obsidian不同颜色的注释添加颜色","children":[]},{"level":3,"title":"将callout修改为默认的收缩状态","slug":"将callout修改为默认的收缩状态","link":"#将callout修改为默认的收缩状态","children":[]},{"level":3,"title":"修改不同注释颜色的call Out标题","slug":"修改不同注释颜色的call-out标题","link":"#修改不同注释颜色的call-out标题","children":[]}]}],"git":{"createdTime":1730542489000,"updatedTime":1730542489000,"contributors":[{"name":"WangKang","email":"888666wang4286@gmail.com","commits":1}]},"readingTime":{"minutes":2.87,"words":861},"filePathRelative":"zotero教程/第37期 插件教程！zotero-integration zotero和obsidian如何联动.md","localizedDate":"2024年11月2日","excerpt":"<blockquote>\\n<p>第37期 第37期 插件教程！zotero-integration: zotero和obsidian如何联动</p>\\n<p>我个人的学习模式主要是使用zotero来进行文献阅读，使用obsidian来进行笔记写作。同时obsidian可以使用dataview来管理和可视化zotero的文献库</p>\\n<p>这个过程比较重要的便是如何将zotero的条目信息导出到ob库中，作为中介来实现两个软件的协同；本期介绍zotero-integration方式，后续会更新zotlit的相关教程</p>\\n</blockquote>\\n<h2>目录</h2>\\n<p>[TOC]</p>","autoDesc":true}');export{r as comp,p as data};
