import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import '../css/Blog.css';

// TODO: Add proper loading of blog posts
// This is a temporary method (hopefully) to load the raw markdown file for the blog post
// Eventually this should get loaded dynamically because we'll have multiple posts
import raw from 'raw.macro';
const post = raw('../static/0_idea.md');

console.log(post);
const Blog = () => (
  <div className="Blog">
    <ReactMarkdown
      source={post}
      escapeHtml={false}
    />
  </div>
);

export default Blog;
