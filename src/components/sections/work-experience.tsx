"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const workExperienceData = [
  {
    id: "coderower",
    company: "CodeRower Software Private Limited",
    logoUrl: "/coderower.png",
    title: "Full Stack Developer Intern",
    duration: "Mar 2025 - Sep 2025",
    location: "Gurgaon, India",
    description: [
      "Revamped FAB Builder and Coderower into dynamic, data-driven platforms — cutting manual updates by 80%",
      "Built Next.js landing pages for Coderower, enabling client acquisition campaigns",
      "Developed a React Native app (TypeScript, GraphQL) with offline support, boosting DAUs by 40%",
      "Enhanced Dream IT with Blogs/Case Studies and integrated validated Career/Enquiry forms",
      "Optimized multiple client sites for responsiveness and integrated csfabbuilder API"
    ],
  },
  {
    id: "freelance",
    company: "Freelance Full Stack Developer",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d53f7cfe-4a7d-4f06-9570-1e8cf87ab80e-devpro-aceternity-vercel-app/assets/images/images_4.png",
    title: "Full Stack Developer",
    duration: "2022 - Present",
    location: "India (Remote)",
    description: [
      "Delivered 8+ live projects with 100% client satisfaction rate",
      "Specialized in React.js, TypeScript, Node.js, and AI Integration",
      "Achieved 40% increase in qualified inquiries for Perpetual Power Services",
      "Improved lead quality by 85% for Rudra Infocom through optimized web solutions",
      "Built scalable e-commerce platforms and SaaS applications for global clients"
    ],
  },
];

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(workExperienceData[0].id);

  const activeExperience = workExperienceData.find((exp) => exp.id === activeTab);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8">
      <h1 className="text-2xl md:text-3xl text-white font-bold mt-20 md:mt-40">
        Work Experience
      </h1>
      <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide">
        Building scalable web applications and AI-powered solutions that drive real business results.
      </p>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-2xl mx-auto">
        <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible">
          <div className="absolute -left-6 w-px h-full bg-zinc-800 hidden md:block overflow-hidden">
            <span className="absolute z-20 h-[0.1rem] w-[0.1rem] rounded-full bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__iBwXl -left-0 before:content-[''] before:absolute before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500 before:w-[150px] before:h-px"></span>
          </div>

          {workExperienceData.map((exp) => (
            <div key={exp.id} className="relative my-2">
              <button
                onClick={() => setActiveTab(exp.id)}
                className={`px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group transition-colors duration-200 ${
                  activeTab === exp.id ? "bg-zinc-800 text-white" : "hover:bg-zinc-800/50"
                }`}
              >
                <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800">
                  <Image
                    src={exp.logoUrl}
                    alt={exp.company}
                    width={12}
                    height={12}
                    className="flex-shrink-0"
                  />
                </div>
                <span>{exp.company}</span>
              </button>
            </div>
          ))}
        </div>

        <div key={activeTab} className="md:pl-10 flex-1 animate-all animate-fadeIn">
          {activeExperience && (
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold text-zinc-100">
                  {activeExperience.title}{" "}
                  <span className="text-cyan-500">@ {activeExperience.company}</span>
                </h3>
                <div className="text-zinc-400 text-sm tracking-widest">
                  {activeExperience.duration}
                </div>
                <p className="text-zinc-400 text-sm">
                  {activeExperience.location}
                </p>
                <div>
                  {activeExperience.description.map((item, index) => (
                    <div key={index} className="flex flex-row space-x-2 items-start my-2">
                      <Check className="text-cyan-500 mt-[3px] flex-shrink-0 h-4 w-4" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;