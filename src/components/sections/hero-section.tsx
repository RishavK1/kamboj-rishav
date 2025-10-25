import React from 'react';

const HeroSection = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-8 md:mt-20">
      <h1 className="max-w-3xl text-3xl font-bold leading-tight text-zinc-50 md:text-5xl">
        I&apos;m a Full Stack Developer who turns{' '}
        <span className="text-cyan-500">business problems into elegant solutions.</span>
      </h1>
      <p className="mt-8 max-w-2xl text-sm leading-loose tracking-wide text-zinc-400 md:text-base">
        Meet Rishav Kamboj, a passionate Full Stack Developer specializing in React.js, TypeScript, 
        Node.js, and AI Integration. With 3+ years of experience, I help businesses worldwide 
        transform their ideas into scalable, secure web applications that drive real results.
      </p>
      <div className="mt-8 max-w-2xl text-sm leading-loose tracking-wide text-zinc-400 md:text-base">
        Currently working as{' '}
        <span className="font-bold text-zinc-200">
          Full Stack Developer Intern at CodeRower Software
        </span>{' '}
        and building{' '}
        <a
          href="https://github.com/RishavK1"
          className="font-bold text-zinc-200 outline-none transition duration-150 hover:text-cyan-500"
        >
          innovative projects
        </a>{' '}
        that solve real-world problems.
      </div>
    </div>
  );
};

export default HeroSection;