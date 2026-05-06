import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const TwitterTimeline = () => {
  useEffect(() => {
    // Inject the Twitter widget script if it's not already on the page
    if (!document.getElementById('twitter-widget-script')) {
      const script = document.createElement('script');
      script.id = 'twitter-widget-script';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '600px', backgroundColor: 'transparent' }}>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="800"
        data-chrome="nofooter noheader transparent noborders"
        href="https://twitter.com/YSC_137?ref_src=twsrc%5Etfw"
      >
        Tweets by YSC_137
      </a>
    </div>
  );
};

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
            <TwitterTimeline />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
