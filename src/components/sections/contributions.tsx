"use client";

import { useState } from "react";
import { GitFork, Star } from "lucide-react";

interface Contribution {
  name: string;
  description: string;
  url: string;
  forks: number;
  stars: number;
}

const contributions: Contribution[] = [
  {
    name: "react-code-editor",
    description: "💻 Build your own code editor that compiles and runs 40+ programming languages.",
    url: "https://github.com/manuarora700/react-code-editor",
    forks: 57,
    stars: 158,
  },
  {
    name: "simple-developer-portfolio-website",
    description: "✈️ A simple portfolio for developers to showcase their skills and projects. Blog and tutorial at fre...",
    url: "https://github.com/manuarora700/simple-developer-portfolio-website",
    forks: 116,
    stars: 272,
  },
  {
    name: "devmedium",
    description: "🚀 A Dev.to & Medium like blogging platform with custom usernames in Next.js",
    url: "https://github.com/manuarora700/devmedium",
    forks: 1,
    stars: 7,
  },
  {
    name: "manuarora.in",
    description: "🙌🏻 Personal website built using Next.js & TailwindCSS.",
    url: "https://github.com/manuarora700/manuarora.in",
    forks: 17,
    stars: 53,
  },
  {
    name: "sendgrid-contact-form",
    description: "✉️ A working contact form integrated with SendGrid for your Nextjs project. Blog live on freeCodeCam...",
    url: "https://github.com/manuarora700/sendgrid-contact-form",
    forks: 20,
    stars: 38,
  },
  {
    name: "integrate-payments",
    description: "🤑 Integrate payments with Next.js, TailwindCSS, and Razorpay. Blog live on freeCodeCamp 🔥.",
    url: "https://github.com/manuarora700/integrate-payments",
    forks: 12,
    stars: 30,
  },
  {
    name: "tictactoe",
    description: "🤘 An Angular based Tic Tac Toe game. Learning Angular, Firebase and PWA🦾",
    url: "https://github.com/manuarora700/tictactoe",
    forks: 1,
    stars: 2,
  },
  {
    name: "hashnode-github-backup",
    description: "🔙 Take backup of your hashnode blogs with the Hashnode and GitHub API.",
    url: "https://github.com/manuarora700/hashnode-github-backup",
    forks: 2,
    stars: 5,
  },
  {
    name: "100-days-interview-preparation",
    description: "⚡️ 100 Days of DS Algo for interview preparation (C++ and Javascript)",
    url: "https://github.com/manuarora700/100-days-interview-preparation",
    forks: 20,
    stars: 80,
  },
];

const ContributionCard = ({ repo }: { repo: Contribution }) => (
  <a
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative rounded-2xl border border-zinc-800 shadow-sm p-4 bg-gradient-to-b from-zinc-800 to-zinc-900 flex flex-col justify-between h-full transition-all duration-300 hover:border-zinc-700"
  >
    <div className="relative z-10 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-base text-zinc-100 font-bold">{repo.name}</h2>
        <p className="text-zinc-400 font-normal text-sm leading-loose mt-4 tracking-wide">
          {repo.description}
        </p>
      </div>
      <div className="mt-4 flex flex-row space-x-4 items-center text-zinc-500 group-hover:text-cyan-500 transition-colors duration-200">
        <div className="font-normal text-sm flex flex-row space-x-1 items-center">
          <GitFork className="h-4 w-4" strokeWidth={1} />
          <span>{repo.forks}</span>
        </div>
        <div className="font-normal text-sm flex flex-row space-x-1 items-center">
          <Star className="h-4 w-4" strokeWidth={1} />
          <span>{repo.stars}</span>
        </div>
      </div>
    </div>
  </a>
);

export default function Contributions() {
  const [visibleItems, setVisibleItems] = useState(6);

  const showMore = () => {
    setVisibleItems(contributions.length);
  };

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto px-4 sm:px-8 mt-40">
        Latest contributions to open source
      </h1>
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {contributions.slice(0, visibleItems).map((repo) => (
            <ContributionCard key={repo.name} repo={repo} />
          ))}
        </div>
        {visibleItems < contributions.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMore}
              className="px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 text-sm hover:bg-zinc-800 hover:text-white transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
}