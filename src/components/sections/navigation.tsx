"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Blogs", href: "#blogs" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex flex-row items-center justify-between sm:justify-between py-8 max-w-5xl mx-auto relative z-[100] px-4 sm:px-8">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800">
          <Link
            href="/"
            className="font-bold text-sm flex items-center justify-center text-white space-x-2"
          >
            <Image
              src="/linkedin image.png"
              alt="Rishav Kamboj"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="font-inter font-bold">Rishav Kamboj</span>
          </Link>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white text-sm relative hover:text-cyan-500 transition-colors duration-200 cursor-pointer"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {item.name}
              </span>
            </a>
          ))}
        </div>
        <a
          href="/Rishav-Kamboj.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,0,0,0.1),0_3px_6px_rgba(0,0,0,0.05)] hover:shadow-[rgba(0,0,0,0.2)_0_2px_8px] active:outline-none hover:opacity-80"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            href="/"
            className="font-bold text-sm flex items-center justify-center text-zinc-100 space-x-2 min-w-0 flex-1"
          >
            <Image
              src="/linkedin image.png"
              alt="Rishav Kamboj"
              width={30}
              height={30}
              className="rounded-full flex-shrink-0"
            />
            <span className="font-inter font-bold text-zinc-100 truncate">
              Rishav Kamboj
            </span>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-zinc-100 z-50 flex-shrink-0 ml-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-zinc-900 z-40 flex flex-col items-center justify-center space-y-8 lg:hidden animate-in fade-in-20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const element = document.querySelector(item.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white text-2xl font-bold hover:text-cyan-500 transition-colors duration-200 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Rishav-Kamboj.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-lg px-6 py-3 transition duration-150 shadow-[0_10px_20px_rgba(0,0,0,0.1),0_3px_6px_rgba(0,0,0,0.05)] hover:shadow-[rgba(0,0,0,0.2)_0_2px_8px] active:outline-none hover:opacity-80 mt-4"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}