import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export default function MERNStackBlog() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/#blogs" 
          className="inline-flex items-center text-cyan-500 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Blog Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 text-sm text-zinc-400 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              January 15, 2025
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              8 min read
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              Rishav Kamboj
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Scalable Web Applications with MERN Stack
          </h1>
          
          <p className="text-xl text-zinc-400 leading-relaxed">
            A comprehensive guide to building full-stack web applications using MongoDB, 
            Express.js, React, and Node.js. Learn best practices, architecture patterns, 
            and deployment strategies for modern web development.
          </p>
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none">
          <div className="text-zinc-300 leading-relaxed space-y-6">
            
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is the MERN Stack?</h2>
            <p>
              The MERN stack is a popular JavaScript-based technology stack for building 
              dynamic web applications. It consists of four key technologies:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong className="text-cyan-400">MongoDB</strong> - A NoSQL database for storing data</li>
              <li><strong className="text-cyan-400">Express.js</strong> - A web application framework for Node.js</li>
              <li><strong className="text-cyan-400">React</strong> - A JavaScript library for building user interfaces</li>
              <li><strong className="text-cyan-400">Node.js</strong> - A JavaScript runtime for server-side development</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Choose MERN Stack?</h2>
            <p>
              The MERN stack offers several advantages for modern web development:
            </p>
            
            <div className="bg-zinc-800 p-6 rounded-lg my-6">
              <h3 className="text-lg font-semibold text-white mb-3">Key Benefits:</h3>
              <ul className="space-y-2">
                <li>• <strong>Full JavaScript:</strong> Use the same language across the entire stack</li>
                <li>• <strong>Rapid Development:</strong> Quick prototyping and development cycles</li>
                <li>• <strong>Scalability:</strong> Easy to scale individual components</li>
                <li>• <strong>Large Community:</strong> Extensive documentation and community support</li>
                <li>• <strong>Flexibility:</strong> Highly customizable and adaptable</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Project Structure</h2>
            <p>
              A well-organized MERN stack project typically follows this structure:
            </p>
            
            <div className="bg-zinc-800 p-4 rounded-lg my-6 font-mono text-sm">
              <pre className="text-zinc-300">
{`mern-project/
├── client/          # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js backend
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── package.json
└── package.json     # Root package.json`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Best Practices</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Database Design</h3>
            <p>
              Design your MongoDB schemas with scalability in mind. Use proper indexing, 
              avoid deep nesting, and consider data relationships carefully.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. API Design</h3>
            <p>
              Create RESTful APIs with clear endpoints, proper HTTP status codes, 
              and consistent response formats. Use middleware for authentication and validation.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. State Management</h3>
            <p>
              Use Redux or Context API for complex state management in React applications. 
              Keep your state predictable and avoid prop drilling.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Security</h3>
            <p>
              Implement proper authentication, use HTTPS, validate inputs, and sanitize data. 
              Consider using JWT tokens for stateless authentication.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Deployment Strategies</h2>
            <p>
              Deploying a MERN stack application requires careful consideration of both 
              frontend and backend components:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Frontend:</strong> Deploy React apps to Vercel, Netlify, or AWS S3</li>
              <li><strong>Backend:</strong> Use Heroku, AWS EC2, or DigitalOcean for Node.js</li>
              <li><strong>Database:</strong> MongoDB Atlas for cloud database hosting</li>
              <li><strong>CI/CD:</strong> Set up automated deployment pipelines</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Real-World Example</h2>
            <p>
              In my experience building applications like Airbnb clones and car rental platforms, 
              the MERN stack provides excellent flexibility. The ability to handle real-time 
              features, complex data relationships, and scalable architecture makes it ideal 
              for modern web applications.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg my-8 border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-3">💡 Pro Tip</h3>
              <p className="text-zinc-300">
                Start with a simple CRUD application to understand the flow, then gradually 
                add complex features like authentication, real-time updates, and advanced 
                database queries.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p>
              The MERN stack is an excellent choice for building modern web applications. 
              Its JavaScript-based nature, combined with powerful tools and frameworks, 
              makes it ideal for both beginners and experienced developers. With proper 
              planning and best practices, you can build scalable, maintainable applications 
              that meet today's web development demands.
            </p>

            <p className="text-zinc-400 mt-8">
              Ready to start your MERN stack journey? Check out my projects on GitHub 
              or get in touch to discuss your next web application project.
            </p>
          </div>
        </article>

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-zinc-700">
          <div className="flex items-center space-x-4">
            <img 
              src="/linkedin image.png" 
              alt="Rishav Kamboj" 
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">Rishav Kamboj</h3>
              <p className="text-zinc-400">Full Stack Developer</p>
              <p className="text-sm text-zinc-500 mt-1">
                Specializing in React.js, TypeScript, Node.js, and AI Integration. 
                Building scalable web applications that drive real business results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
