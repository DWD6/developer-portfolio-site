import React from "react";
import { motion } from "framer-motion";
import { projects, type Project } from "../data/projects";

type ProjectsProps = {
  /** 可选：传入自定义项目列表，默认使用本地数据 */
  items?: Project[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1], // 类似缓出曲线
    },
  }),
};

/**
 * Projects 组件：展示项目卡片列表。
 * 每个项目包含截图、标题、描述、技术栈标签以及外链按钮。
 */
const Projects: React.FC<ProjectsProps> = ({ items }) => {
  const list = items ?? projects;

  return (
    <section className="mt-16 space-y-6">
      <header className="space-y-2">
        <h2 className="bg-accent-gradient bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
          Projects
        </h2>
        <p className="text-sm text-gray-300 md:text-base">
          部分近期项目，用于展示前端开发与设计能力。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {list.map((project, index) => (
          <motion.article
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-[0_0_40px_rgba(15,23,42,0.4)] transition-transform duration-300 hover:-translate-y-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            custom={index}
          >
            <div className="relative overflow-hidden">
              <div className="bg-accent-gradient">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="max-h-52 w-full object-cover object-top opacity-95 transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">{project.description}</p>

              <div className="mt-auto space-y-3 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-cyan-100 ring-1 ring-cyan-400/30 backdrop-blur group-hover:bg-cyan-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-accent-gradient px-4 py-1.5 text-xs font-medium text-slate-900 shadow-lg shadow-cyan-500/40 transition hover:brightness-110"
                    >
                      查看 Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-gray-100 transition hover:border-cyan-400/60 hover:bg-white/10"
                    >
                      查看 GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

