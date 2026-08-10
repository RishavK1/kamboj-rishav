"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const workExperienceData = [
  {
    id: "subhx",
    company: "Subhx InfoTech (OPC) Private Limited",
    logoUrl: "/subhx-logo.svg",
    title: "Full Stack Software Developer",
    duration: "Apr 2026 - Jun 2026",
    location: "Remote",
    description: [
      "Built the CoinsPe Basket investment platform feature end-to-end, enabling users to discover crypto baskets, invest and redeem via wallet, and track portfolio performance",
      "Developed the backend system connecting wallet flows, basket composition, transaction tracking, admin operations, and live coin master data",
      "Designed and integrated RESTful APIs for basket investing operations, including investment transactions, redemption workflows, real-time portfolio tracking, and admin-level data management using Node.js and PostgreSQL",
    ],
  },
  {
    id: "75way",
    company: "75way Technologies Pvt. Ltd.",
    logoUrl: "/75way-logo.png",
    title: "Software Developer Intern",
    duration: "Jan 2026 - Apr 2026",
    location: "Mohali, India",
    description: [
      "Contributed to Inception, a financial management platform, shipping features across full-stack UI components, backend APIs, and database logic",
      "Resolved 20+ critical production bugs across React.js frontend and Node.js/Express.js backend, improving platform stability",
      "Built and optimized RESTful APIs for financial data workflows, improving processing performance and reliability",
    ],
  },
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
    logoUrl: "/freelance-logo.svg",
    title: "Full Stack Developer",
    duration: "2022 - Present",
    location: "India (Remote)",
    description: [
      "Led 1+ years of freelance product delivery across discovery, architecture, development, deployment, and post-launch optimization",
      "Owned end-to-end delivery for 16+ production web applications using React.js, TypeScript, Node.js, Next.js, and AI-powered integrations",
      "Translated ambiguous business requirements into scalable technical roadmaps, clean interfaces, reusable components, and maintainable backend systems",
      "Drove measurable client outcomes, including a 40% increase in qualified inquiries for Perpetual Power Services and an 85% lead-quality improvement for Rudra Infocom",
      "Built and shipped e-commerce, SaaS, and service-business platforms with performance, SEO, reliability, and conversion-focused user experience as core delivery standards"
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
                className={`px-4 py-2 text-zinc-400 relative z-20 min-w-56 md:w-64 text-left rounded-md flex flex-row space-x-2 items-center group transition-colors duration-200 ${
                  activeTab === exp.id ? "bg-zinc-800 text-white" : "hover:bg-zinc-800/50"
                }`}
              >
                <div className="p-1 h-8 w-8 flex items-center justify-center rounded-md bg-white">
                  <Image
                    src={exp.logoUrl}
                    alt={exp.company}
                    width={24}
                    height={24}
                    className="h-full w-full flex-shrink-0 object-contain"
                  />
                </div>
                <span className="text-sm leading-snug">{exp.company}</span>
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
