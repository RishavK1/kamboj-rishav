const usesItems = [
  {
    title: "React.js & TypeScript",
    description: "My primary frontend stack for building modern, type-safe web applications. I love the developer experience and the ecosystem.",
  },
  {
    title: "Node.js & Express",
    description: "Backend development with Node.js for scalable server-side applications. Express for building robust APIs and microservices.",
  },
  {
    title: "MongoDB & Database Design",
    description: "NoSQL database expertise for flexible data modeling. I design optimized schemas for performance and scalability.",
  },
  {
    title: "AI Integration & APIs",
    description: "OpenAI API, Gemini API, and ChatGPT integrations. Building AI-powered features that add real business value.",
  },
  {
    title: "Deployment & DevOps",
    description: "AWS, Vercel, and cloud hosting expertise. I handle everything from development to production deployment and maintenance.",
  },
];

export default function UsesSection() {
  return (
    <div>
      <h3 className="font-bold text-xl tracking-wide text-zinc-50 mb-8">
        Tech Stack & Expertise
      </h3>
      <div className="flex flex-col space-y-8">
        {usesItems.map((item) => (
          <div key={item.title}>
            <p className="font-bold text-base text-zinc-50">
              {item.title}
            </p>
            <p className="text-sm mt-2 leading-relaxed tracking-wide text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}