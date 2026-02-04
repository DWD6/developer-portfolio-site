import React from "react";

type HeroProps = {
  /** 主标题，例如“Hi, I'm XXX” */
  title: string;
  /** 副标题，例如“Front-End Developer” */
  subtitle: string;
  /** 简短自我介绍文案 */
  description: string;
  /** 头像图片地址 */
  avatarSrc: string;
  /** 头像替代文本，提升无障碍体验 */
  avatarAlt?: string;
};

/**
 * Hero 组件：首页顶部的大标题 + 简介 + 头像区域。
 * - 深色主题，整体背景由外层页面控制；
 * - 使用渐变色强调标题和头像边框；
 * - 移动端为纵向布局，桌面端为左右布局。
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  avatarSrc,
  avatarAlt = "avatar",
}) => {
  return (
    <section className="flex flex-col items-center gap-8 py-10 md:flex-row md:items-center md:justify-between">
      <div className="text-center md:text-left">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-300/80">
          Portfolio
        </p>
        <h1 className="mt-3 bg-accent-gradient bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-2 text-sm font-medium text-cyan-200/80 md:text-base">
          {subtitle}
        </p>
        <p className="mt-4 max-w-xl text-sm text-gray-300 md:text-base">
          {description}
        </p>
      </div>

      <div className="relative">
        {/* 渐变描边头像：使用 bg-accent-gradient 作为外圈 */}
        <div className="relative h-32 w-32 rounded-full bg-accent-gradient p-[3px] shadow-[0_0_40px_rgba(34,211,238,0.35)] md:h-40 md:w-40">
          <img
            src={avatarSrc}
            alt={avatarAlt}
            loading="lazy"
            className="h-full w-full rounded-full border border-white/10 object-cover"
          />
        </div>
        {/* 柔和的发光效果 */}
        <div className="pointer-events-none absolute inset-0 -z-10 translate-y-6 scale-125 rounded-full bg-accent-gradient opacity-25 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;

