export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  /** 在线 Demo 地址，可选 */
  demoUrl?: string;
  /** GitHub 仓库地址，可选 */
  githubUrl?: string;
};

// TODO: 将来可以从后端或 CMS 获取数据，这里先使用本地数组，便于维护。
export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "使用 React、TypeScript 和 Tailwind CSS 构建的个人作品集网站，展示项目与技能，并针对深色主题和移动端做了优化。",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/projects/portfolio.png",
    demoUrl: "https://your-portfolio-demo.com",
    githubUrl: "https://github.com/your-name/portfolio",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    description:
      "一个数据可视化仪表盘示例，包含图表、表格和过滤器，展示前端组件化和状态管理能力。",
    technologies: ["React", "Recharts", "Tailwind CSS"],
    imageUrl: "/projects/dashboard.png",
    demoUrl: "https://your-dashboard-demo.com",
    githubUrl: "https://github.com/your-name/analytics-dashboard",
  },
  {
    id: "landing",
    title: "Product Landing Page",
    description:
      "以转化为目标的产品介绍落地页，注重排版、交互细节和加载性能。",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    imageUrl: "/projects/landing.png",
    demoUrl: "https://your-landing-demo.com",
    githubUrl: "https://github.com/your-name/product-landing",
  },
];

