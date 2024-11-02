import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "查看所有教程",
    icon: "pen-to-square",
    children: [
      {
        text: "zotero教程",
        icon: "pen-to-square",
        link: "/zotero教程/",
      },
      {
        text: "代码教程",
        icon: "pen-to-square",
        link: "/代码教程/",
      },
      {
        text: "网页软件",
        icon: "pen-to-square",
        link: "/网页软件/",
      },
      {
        text: "obsidian教程",
        icon: "pen-to-square",
        link: "/其它教程/",
      }
    ],
  },
]);
