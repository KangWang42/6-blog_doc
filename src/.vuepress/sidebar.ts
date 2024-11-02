import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "代码教程",
      icon: "laptop-code",
      prefix: "代码教程/",
      children: "structure",
    },
    {
      text: "zotero教程",
      icon: "book",
      prefix: "zotero教程/",
      children: "structure",
    },
    {
      text: "obsidian教程",
      icon: "book",
      prefix: "obsidian教程/",
      children: "structure",
    },
    {
      text: "网页软件",
      icon: "book",
      prefix: "网页软件/",
      children: "structure",
    },
    ,
    {
      text: "其它教程",
      icon: "book",
      prefix: "其它教程/",
      children: "structure",
    },
    {
      text: "查看网盘",
      icon: "person-chalkboard",
      link: "https://alist.wk8686.top/%E5%8D%9A%E5%AE%A2%E8%B5%84%E6%BA%90",
    },
  ],
});
