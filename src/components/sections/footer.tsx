"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Instagram, Briefcase } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
    { href: "#blogs", label: "Blogs" },
  ];

  const socialLinks = [
    { href: "https://github.com/RishavK1", icon: <Github size={16} /> },
    { href: "https://linkedin.com/in/rishavkamboj-dev", icon: <Linkedin size={16} /> },
    { href: "https://www.upwork.com/freelancers/~016b9e0c71a048e0e7", icon: <Briefcase size={16} /> },
    { href: "https://www.instagram.com/kamboj_rishav12/", icon: <Instagram size={16} /> },
  ];

  return (
    <footer className="mt-20 sm:mt-40 px-4 sm:px-0">
      <div className="flex flex-col items-center">
        <Link href="/" className="font-bold text-sm flex items-center justify-center text-white space-x-2">
          <Image
            src="/linkedin image.png"
            alt="Rishav Kamboj"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="font-inter font-bold">Rishav Kamboj</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 items-center antialiased mt-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-white text-sm relative hover:text-cyan-500 transition-colors duration-150 cursor-pointer"
            >
              <span className="relative z-10 px-2 py-2 inline-block">{link.label}</span>
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-8 sm:mt-12">
          <p className="text-xs text-zinc-400">© 2025 Rishav Kamboj. All rights reserved.</p>
          <div className="mt-4 flex flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.href}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 text-sm hover:text-cyan-500 transition-colors duration-150 p-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;