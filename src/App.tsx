import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";

/**
 * 根组件：后续会根据 PRD 和 TECH_DESIGN 拆分为多个可复用区块组件。
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 space-y-6">
        <Hero
          title="Hi, I'm Your Name"
          subtitle="Front-End Developer · React · TypeScript"
          description="我是一名前端开发者，专注于使用 React、TypeScript 和现代前端工程化技术构建流畅、优雅的 Web 应用和个人作品集体验。"
          avatarSrc="/avatar.png"
          avatarAlt="个人头像"
        />
        <Projects />
        <Blog />
      </div>
    </div>
  );
};

export default App;

