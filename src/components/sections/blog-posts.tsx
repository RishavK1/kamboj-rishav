import React from "react";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div>
      <Link href="/blog/mern-stack-complete-guide">
        <div className="cursor-pointer">
          <p className="text-zinc-400 text-sm tracking-wide">January 15, 2025</p>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-2">
            Building Scalable Web Applications with MERN Stack
          </h1>
          <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed">
            A comprehensive guide to building full-stack web applications using MongoDB, 
            Express.js, React, and Node.js. Learn best practices, architecture patterns, 
            and deployment strategies for modern web development.
          </p>
          <p className="font-bold text-cyan-500 mt-4 hover:text-cyan-400 text-sm">
            Read More
          </p>
        </div>
      </Link>
      <Link href="/blog/ai-integration-web-development">
        <div className="mt-20 block cursor-pointer">
          <p className="text-zinc-400 text-sm tracking-wide">January 10, 2025</p>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-2">
            AI Integration in Modern Web Development
          </h1>
          <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed">
            Explore how artificial intelligence is revolutionizing web development. 
            From OpenAI API integration to ChatGPT features, discover practical 
            ways to add AI capabilities to your web applications.
          </p>
          <p className="font-bold text-cyan-500 mt-4 hover:text-cyan-400 text-sm">
            Read More
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPosts;