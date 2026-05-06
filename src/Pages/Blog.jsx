import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const blogs = [
  {
    id: 1,
    date: "May 6, 2026",
    text: "Just finalized the new glowing grid aesthetic for my portfolio! Using simple geometry and dynamic mask-images combined with the `color-mix()` CSS function has dramatically simplified the rendering logic. Sometimes, the best performance optimizations are just better design tokens. ✨",
    tags: ["#design", "#css", "#portfolio"]
  },
  {
    id: 2,
    date: "May 3, 2026",
    text: "Refactored the VoteSmart AI platform to use a robust state management system. Handling bilingual real-time data flow with an LLM backend requires strict debouncing and caching to avoid hitting API rate limits. Lesson learned: Never trust the client to throttle requests. 💡",
    tags: ["#react", "#ai", "#architecture"]
  },
  {
    id: 3,
    date: "April 24, 2026",
    text: "Spent the day debugging Supabase Row Level Security (RLS) policies. When relying on environment-variable-based role detection, timing is everything. Always ensure your user session is fully hydrated before querying protected tables! 🔒",
    tags: ["#supabase", "#backend", "#security"]
  },
  {
    id: 4,
    date: "April 9, 2026",
    text: "Working on 3D campus navigation tools! Implementing a third-person character-led tour and interactive path previews dramatically improves the spatial understanding for users. Three.js is incredible. 🗺️",
    tags: ["#threejs", "#webgl", "#3d"]
  }
];

const Blog = () => {
  return (
    <main className="blog-page">
      <div className="blog-page__inner">
        <motion.div 
          className="blog-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num">BLOGS</span>
          <h1 className="section-title">Learnings & Logs</h1>
          <p className="section-sub">Short updates, technical thoughts, and snippets.</p>
        </motion.div>

        <div className="blog-feed">
          {blogs.map((blog, idx) => (
            <motion.article 
              key={blog.id} 
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="blog-card__header">
                <div className="blog-card__avatar">YC</div>
                <div className="blog-card__meta">
                  <span className="blog-card__author">Yuvraj Chaudhari</span>
                  <span className="blog-card__date">{blog.date}</span>
                </div>
              </div>
              
              <div className="blog-card__content">
                <p>{blog.text}</p>
              </div>

              <div className="blog-card__tags">
                {blog.tags.map(tag => (
                  <span key={tag} className="blog-card__tag">{tag}</span>
                ))}
              </div>
              
              <div className="blog-card__glow" />
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
