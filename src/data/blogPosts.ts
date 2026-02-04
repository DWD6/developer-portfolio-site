// src/data/blogPosts.ts 最终修复代码（保留新版，删除旧版重复内容）
export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO 字符串或简单日期字符串（如 "2026-02-01"）
  tags: string[];
  excerpt: string;
  content: string;
};

/**
 * 博客文章数据：
 * - 你可以直接在这里新增、修改或删除文章；
 * - 后续也可以改成从后端 / CMS 获取。
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-react-and-typescript",
    title: "从零开始：我如何用 React + TypeScript 搭建个人作品集",
    date: "2026-02-01",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    excerpt:
      "记录我从搭建开发环境、选择技术栈到实现第一个组件的过程，希望能给正在学习 React 和 TypeScript 的你一些参考。",
    content: [
      "这一篇文章主要记录我搭建个人作品集网站的过程：为什么选择 React + TypeScript + Vite，以及 Tailwind CSS 在样式层面的优势。",
      "",
      "首先，我希望项目的开发体验要足够顺畅，所以选择了 Vite 作为构建工具。它的冷启动速度和 HMR 体验，比传统脚手架要好很多。",
      "",
      "其次，使用 TypeScript 可以在写组件和管理数据结构时提供良好的类型提示，减少很多低级错误，这对中长期维护非常有帮助。",
    ].join("\n"),
  },
  {
    slug: "learning-path-frontend",
    title: "我的前端学习路径：从基础到项目实战",
    date: "2026-01-15",
    tags: ["HTML", "CSS", "JavaScript", "学习路径"],
    excerpt:
      "整理自己一路学习前端的关键节点，包括基础知识、进阶框架以及如何通过项目来巩固知识点。",
    content: [
      "刚开始学前端的时候，我也是从最基础的 HTML、CSS、JavaScript 入门的。",
      "",
      "在掌握了基础语法和浏览器工作原理之后，我开始尝试用纯原生技术做一些小项目，比如待办清单、简单的静态页面。",
      "",
      "等到熟悉了这些内容，我才慢慢引入 React 这样的框架，并通过实战项目（比如现在的个人作品集网站）来串联知识点。",
    ].join("\n"),
  },
];