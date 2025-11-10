"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Bot, Code2, Rocket, Server, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
      title: "Bloom",
      description: "AI-powered app builder transforming natural language prompts into production-ready Next.js applications through conversational AI.",
      link: "https://bloom-dusky-eight.vercel.app/",
      image: "/bloom1.png",
    },
    {
      title: "PixelorCode",
      description: "Modern web studio delivering high-converting, responsive experiences with performance-led builds, automated lead funnels, and ongoing growth experimentation.",
      link: "https://pixelorcode.com/",
      image: "/pixelorcode.png",
    },
    {
      title: "Perpetual Power Services",
      description: "Renewable energy corporate website with 40% increase in qualified inquiries, established online credibility, and improved brand perception.",
      link: "https://github.com/RishavK1",
      image: "/power.png",
    },
    {
      title: "MERN Job Portal",
      description: "Feature-rich job portal with dual authentication for recruiters and seekers, real-time filtering, and production-ready deployment.",
      link: "https://job-portal-beige-seven.vercel.app/",
      image: "/job.png",
    },
    {
      title: "Rose Cafe",
      description: "Elegant pastel aesthetic website with vintage floral vibe, resulting in increased online reservations and enhanced customer engagement.",
      link: "https://rose-petal-scroll.vercel.app/",
      image: "/rose.png",
    },
    {
      title: "Rudra Infocom",
      description: "IT & Telecom Solutions Platform with 85% lead quality improvement through optimized design.",
      link: "https://rudrainfo.co.in/",
      image: "/rudra.png",
    },
    {
      title: "Ruvira Atelier",
      description: "Luxury Jewelry E-commerce platform with 2x increase in online inquiries and sales.",
      link: "https://ruviraatelier.com/",
      image: "/ruvira.png",
    },
    {
      title: "Mema Play World",
      description: "Playground equipment catalog with 30% increase in product inquiries, improved parent confidence, and enhanced safety information display.",
      link: "https://memaplayworld.com/",
      image: "/meema.png",
    },
    {
      title: "Airbnb Clone",
      description: "Full-stack rental platform built with MERN stack, featuring real-time booking and payments.",
      link: "https://my-air-bnb-tar5.vercel.app/listings",
      image: "/airbnb.jpeg",
    },
    {
      title: "Car Rental Website",
      description: "MERN stack application with advanced search, booking system, and admin dashboard.",
      link: "https://car-rental-virid-three.vercel.app/",
      image: "/car.png",
    },
];

const TechIcons = () => (
  <div className="flex flex-row flex-wrap mt-8">
    <span className="text-gray-500 mr-4 inline-block">
      <Bot className="h-5 w-5" strokeWidth={1} />
    </span>
    <span className="text-gray-500 mr-4 inline-block">
      <Code2 className="h-5 w-5" strokeWidth={1} />
    </span>
    <span className="text-gray-500 mr-4 inline-block">
      <Rocket className="h-5 w-5" strokeWidth={1} />
    </span>
    <span className="text-gray-500 mr-4 inline-block">
      <Server className="h-5 w-5" strokeWidth={1} />
    </span>
  </div>
);

const ProjectsGrid = () => {
    const [showAll, setShowAll] = useState(false);
    const initialProjects = 6;
    const displayedProjects = showAll ? projects : projects.slice(0, initialProjects);

    return (
        <div>
            <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-4 sm:px-8 mt-40">
                Featured Projects & Portfolio
            </h1>
            <div className="max-w-5xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                    {displayedProjects.map((project) => (
                        <a 
                          key={project.title} 
                          href={project.link} 
                          className="relative group block p-2" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            <div className="rounded-2xl overflow-hidden bg-zinc-800 border border-transparent group-hover:border-zinc-700 relative z-50 transition-colors duration-300">
                                <div className="relative z-50">
                                    <div className="h-44 sm:h-60 md:h-44 w-full relative transition duration-500 bg-black/10 group-hover:bg-transparent">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="absolute inset-0 object-cover object-center mix-blend-multiply"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{project.title}</h4>
                                        <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">{project.description}</p>
                                        <TechIcons />
                                        <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
                                            <ArrowUpRight className="h-3 w-3 text-zinc-500 group-hover:text-cyan-500 transition-colors" strokeWidth={1.5} />
                                            <p className="text-zinc-500 group-hover:text-cyan-500 text-xs transition-colors">View Source</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                
                {projects.length > initialProjects && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-200"
                        >
                            {showAll ? (
                                <>
                                    <ChevronUp className="h-4 w-4 mr-2" />
                                    Show Less
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="h-4 w-4 mr-2" />
                                    Show More Projects
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsGrid;