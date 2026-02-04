import React from "react";
import { blogPosts, type BlogPost } from "../data/blogPosts";

type BlogProps = {
  /** 可选：自定义文章列表，默认使用本地 blogPosts */
  items?: BlogPost[];
};

const Blog: React.FC<BlogProps> = ({ items }) => {
  const list = items ?? blogPosts;

  if (list.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 space-y-6">
      <header className="space-y-2">
        <h2 className="bg-accent-gradient bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
          Blog
        </h2>
        <p className="text-sm text-gray-300 md:text-base">
          记录我的学习笔记、踩坑经验和实践总结。
        </p>
      </header>

      <div className="space-y-4">
        {list.map((post) => (
          <article
            key={post.id}
            className="group rounded-2xl border border-white/5 bg-white/5 p-4 transition hover:border-cyan-400/40 hover:bg-white/10"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">
                  {post.title}
                </h3>
                <p className="mt-1 text-xs text-gray-400 md:text-sm">
                  {post.date}
                </p>
              </div>

              <div className="mt-2 flex flex-wrap gap-2 md:mt-0 md:justify-end">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-cyan-100 ring-1 ring-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-300 md:text-base">
              {post.summary}
            </p>

            {post.url && (
              <div className="mt-3">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-xs font-medium text-cyan-300 underline-offset-4 hover:text-cyan-200 hover:underline md:text-sm"
                >
                  阅读完整文章
                </a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;

