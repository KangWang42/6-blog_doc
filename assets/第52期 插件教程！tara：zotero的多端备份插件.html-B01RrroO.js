import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as n,o as e}from"./app-D00vkK85.js";const r={};function i(s,t){return e(),a("div",null,t[0]||(t[0]=[n('<blockquote><p>第52期 插件教程！tara：zotero的多端备份插件</p><p>本期介绍zotero的备份插件tara（蒲公英）</p><p>插件的主要功能是一键备份 <strong>zotero插件，zotero插件配置，zotero引用样式，zotero翻译器</strong></p><p>同时介绍一下如何win系统实现<strong>手动备份</strong>zotero的全数据</p></blockquote><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><p>[TOC]</p><h2 id="效果展示" tabindex="-1"><a class="header-anchor" href="#效果展示"><span>效果展示</span></a></h2><h3 id="配置导出" tabindex="-1"><a class="header-anchor" href="#配置导出"><span>配置导出</span></a></h3><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221528.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="配置导入及恢复" tabindex="-1"><a class="header-anchor" href="#配置导入及恢复"><span>配置导入及恢复</span></a></h3><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221703.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装"><span>插件安装</span></a></h2><ul><li>安装网址： Releases · l0o0/tara (github.com)(https://github.com/l0o0/tara/releases) <ul><li>下载xpi文件（图示为zotero7版本）</li><li><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221933.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li><li>注意：<strong>github部分区域需要稳定网络访问</strong>；也可进入<a href="https://wk8686.top/cusgit" target="_blank" rel="noopener noreferrer">网页在线下载</a>直接下载或进入<a href="https://wk8686.top/file/?0%20%E5%85%AC%E4%BC%97%E5%8F%B7/0%20zotero_%E6%8F%92%E4%BB%B6%E5%90%88%E9%9B%86/%E6%8F%92%E4%BB%B6-z7%20beta68%E5%90%8E" target="_blank" rel="noopener noreferrer">我的云盘</a> 进行下载</li></ul></li><li>进入zotero-工具-附加组件-<strong>Install Add-on From Files</strong>-选择下载的xpi文件进行安装</li></ul><h2 id="插件使用-zotero7为例" tabindex="-1"><a class="header-anchor" href="#插件使用-zotero7为例"><span>插件使用（zotero7为例）</span></a></h2><h3 id="创建备份" tabindex="-1"><a class="header-anchor" href="#创建备份"><span>创建备份</span></a></h3><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222116.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="导出备份" tabindex="-1"><a class="header-anchor" href="#导出备份"><span>导出备份</span></a></h3><p>数据会保存在数据文件夹的<strong>backup目录</strong>中（用于转移到另一台电脑中使用该备份恢复）</p><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222330.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="导入备份" tabindex="-1"><a class="header-anchor" href="#导入备份"><span>导入备份</span></a></h3><p>用于不同电脑的zotero的<strong>快速设置与恢复</strong></p><p>在新的zotero里<strong>安装tara插件</strong></p><p>在新电脑使用tara插件选择<strong>导入</strong>，并选中<strong>zip备份包</strong></p><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222543.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="恢复备份" tabindex="-1"><a class="header-anchor" href="#恢复备份"><span>恢复备份</span></a></h3><p>在同一设备中点击恢复，选中时间节点</p><p>在不同设备中<strong>首先要导入，再点击恢复</strong></p><figure><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222630.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="如何手动设置备份-无奈的时候用tara已经挺好用" tabindex="-1"><a class="header-anchor" href="#如何手动设置备份-无奈的时候用tara已经挺好用"><span>如何手动设置备份（无奈的时候用tara已经挺好用）</span></a></h2><p>手动备份可以实现数据的无损备份，包括但不仅限于<strong>账户、插件、设置、文献</strong>等数据。</p><p>首先您需要在新电脑上安装 Zotero，然后将旧电脑的<strong>配置文件夹及数据文件夹</strong>拷贝到新电脑的同一位置。</p><p>配置文件夹的转移确保是<strong>同一位置</strong>，同时要做好备份工作（是的，<strong>备份的备份</strong>）</p><h3 id="win系统配置文件夹" tabindex="-1"><a class="header-anchor" href="#win系统配置文件夹"><span>Win系统配置文件夹</span></a></h3><p><strong>zotero数据源目录：C:\\Users&lt;用户名&gt;\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\*.default 中文件</strong> 注意事项</p><ul><li>AppData是隐藏目录，需要设置<strong>显示隐藏文件夹</strong>后进入</li><li>转移的过程中务必保证，两个电脑的zotero都是<strong>关闭的</strong>，避免出现无法访问的情况</li></ul><h3 id="win系统数据文件夹" tabindex="-1"><a class="header-anchor" href="#win系统数据文件夹"><span>Win系统数据文件夹</span></a></h3><p>包含了<strong>zotero的翻译器，数据文件等</strong></p><p>注意事项</p><ul><li>数据文件夹复制的时候务必<strong>复制完整</strong></li><li>转移的过程中务必保证，两个电脑的zotero都务必<strong>关闭的</strong>，避免出现无法访问的情况，导致<strong>传输不全</strong><img src="https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224223519.png" alt="" loading="lazy"></li></ul><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><h3 id="跨系统间的恢复还不完整" tabindex="-1"><a class="header-anchor" href="#跨系统间的恢复还不完整"><span>跨系统间的恢复还不完整</span></a></h3><p>如从mac到win的恢复，或者mac到win的恢复</p><p>可能会出现<strong>恢复不完整</strong>的情况</p><p>建议<strong>同系统内的恢复</strong></p><h3 id="帮别人配置的时候注意自己的信息" tabindex="-1"><a class="header-anchor" href="#帮别人配置的时候注意自己的信息"><span>帮别人配置的时候注意自己的信息</span></a></h3><p>如果帮同学或老师配置插件的过程中<strong>省事使用了tara</strong></p><p>会一起将自己的可能的<strong>有价值信息</strong>给一起备份</p><p>包括但不限于</p><ul><li><strong>gpt密钥</strong></li><li><strong>easyscholar密钥等</strong></li></ul>',46)]))}const p=o(r,[["render",i],["__file","第52期 插件教程！tara：zotero的多端备份插件.html.vue"]]),c=JSON.parse('{"path":"/zotero%E6%95%99%E7%A8%8B/%E7%AC%AC52%E6%9C%9F%20%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B%EF%BC%81tara%EF%BC%9Azotero%E7%9A%84%E5%A4%9A%E7%AB%AF%E5%A4%87%E4%BB%BD%E6%8F%92%E4%BB%B6.html","title":"第52期 插件教程！tara：zotero的多端备份插件","lang":"zh-CN","frontmatter":{"类型":"公众号","公众号内容":["zotero插件教程"],"简记":"数据最珍贵","rating":["⭐⭐⭐⭐"],"title":"第52期 插件教程！tara：zotero的多端备份插件","description":"第52期 插件教程！tara：zotero的多端备份插件 本期介绍zotero的备份插件tara（蒲公英） 插件的主要功能是一键备份 zotero插件，zotero插件配置，zotero引用样式，zotero翻译器 同时介绍一下如何win系统实现手动备份zotero的全数据 目录 [TOC] 效果展示 配置导出 配置导入及恢复 插件安装 安装网址： R...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/zotero%E6%95%99%E7%A8%8B/%E7%AC%AC52%E6%9C%9F%20%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B%EF%BC%81tara%EF%BC%9Azotero%E7%9A%84%E5%A4%9A%E7%AB%AF%E5%A4%87%E4%BB%BD%E6%8F%92%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"第52期 插件教程！tara：zotero的多端备份插件"}],["meta",{"property":"og:description","content":"第52期 插件教程！tara：zotero的多端备份插件 本期介绍zotero的备份插件tara（蒲公英） 插件的主要功能是一键备份 zotero插件，zotero插件配置，zotero引用样式，zotero翻译器 同时介绍一下如何win系统实现手动备份zotero的全数据 目录 [TOC] 效果展示 配置导出 配置导入及恢复 插件安装 安装网址： R..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221528.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-02T10:14:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-02T10:14:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第52期 插件教程！tara：zotero的多端备份插件\\",\\"image\\":[\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221528.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221703.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221933.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222116.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222330.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222543.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224222630.png\\",\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224223519.png\\"],\\"dateModified\\":\\"2024-11-02T10:14:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"效果展示","slug":"效果展示","link":"#效果展示","children":[{"level":3,"title":"配置导出","slug":"配置导出","link":"#配置导出","children":[]},{"level":3,"title":"配置导入及恢复","slug":"配置导入及恢复","link":"#配置导入及恢复","children":[]}]},{"level":2,"title":"插件安装","slug":"插件安装","link":"#插件安装","children":[]},{"level":2,"title":"插件使用（zotero7为例）","slug":"插件使用-zotero7为例","link":"#插件使用-zotero7为例","children":[{"level":3,"title":"创建备份","slug":"创建备份","link":"#创建备份","children":[]},{"level":3,"title":"导出备份","slug":"导出备份","link":"#导出备份","children":[]},{"level":3,"title":"导入备份","slug":"导入备份","link":"#导入备份","children":[]},{"level":3,"title":"恢复备份","slug":"恢复备份","link":"#恢复备份","children":[]}]},{"level":2,"title":"如何手动设置备份（无奈的时候用tara已经挺好用）","slug":"如何手动设置备份-无奈的时候用tara已经挺好用","link":"#如何手动设置备份-无奈的时候用tara已经挺好用","children":[{"level":3,"title":"Win系统配置文件夹","slug":"win系统配置文件夹","link":"#win系统配置文件夹","children":[]},{"level":3,"title":"Win系统数据文件夹","slug":"win系统数据文件夹","link":"#win系统数据文件夹","children":[]}]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[{"level":3,"title":"跨系统间的恢复还不完整","slug":"跨系统间的恢复还不完整","link":"#跨系统间的恢复还不完整","children":[]},{"level":3,"title":"帮别人配置的时候注意自己的信息","slug":"帮别人配置的时候注意自己的信息","link":"#帮别人配置的时候注意自己的信息","children":[]}]}],"git":{"createdTime":1730542489000,"updatedTime":1730542489000,"contributors":[{"name":"WangKang","email":"888666wang4286@gmail.com","commits":1}]},"readingTime":{"minutes":2.88,"words":864},"filePathRelative":"zotero教程/第52期 插件教程！tara：zotero的多端备份插件.md","localizedDate":"2024年11月2日","excerpt":"<blockquote>\\n<p>第52期 插件教程！tara：zotero的多端备份插件</p>\\n<p>本期介绍zotero的备份插件tara（蒲公英）</p>\\n<p>插件的主要功能是一键备份 <strong>zotero插件，zotero插件配置，zotero引用样式，zotero翻译器</strong></p>\\n<p>同时介绍一下如何win系统实现<strong>手动备份</strong>zotero的全数据</p>\\n</blockquote>\\n<h2>目录</h2>\\n<p>[TOC]</p>\\n<h2>效果展示</h2>\\n<h3>配置导出</h3>\\n<figure><img src=\\"https://pic-go-42.oss-cn-guangzhou.aliyuncs.com/img/20231224221528.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{p as comp,c as data};
