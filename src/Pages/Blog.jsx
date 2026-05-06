import React from 'react';
import { motion } from 'framer-motion';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Blog.css';

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
          <h1 className="section-title">My X Feed</h1>
          <p className="section-sub">Latest updates directly from Twitter.</p>
        </motion.div>

        <div className="blog-feed" style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            style={{ width: '100%', maxWidth: '600px' }}
          >
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="YSC_137" 
              options={{ height: 800, theme: 'dark' }} 
              transparent
              noHeader
              noBorders
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
