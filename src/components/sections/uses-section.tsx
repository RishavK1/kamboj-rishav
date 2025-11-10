const usesItems = [
  {
    title: "Next.js & React Ecosystem",
    description:
      "Ship production-grade web applications with Next.js, React, and TypeScript—leveraging server components, app router patterns, and performance-first architecture.",
  },
  {
    title: "Shadcn UI & Tailwind CSS",
    description:
      "Craft beautiful, accessible interfaces with Shadcn UI primitives and Tailwind CSS, rapidly customizing design systems without sacrificing polish.",
  },
  {
    title: "tRPC & TanStack Query",
    description:
      "Deliver end-to-end type-safe APIs and real-time UX using tRPC for contracts and TanStack Query for caching, invalidation, and optimistic updates.",
  },
  {
    title: "Prisma ORM & PostgreSQL",
    description:
      "Model relational data with Prisma and PostgreSQL, enabling migrations, performant queries, and maintainable schemas for mission-critical workloads.",
  },
  {
    title: "Clerk Authentication",
    description:
      "Implement secure authentication and user management flows with Clerk—supporting SSO, multi-tenant access, and granular session control.",
  },
  {
    title: "Inngest & E2B Automations",
    description:
      "Orchestrate durable workflows with Inngest and run secure, isolated code sandboxes using E2B to power background jobs and AI-driven automations.",
  },
  {
    title: "Node.js & Express",
    description:
      "Build scalable backend services, REST APIs, and microservices with Node.js, Express, and modern deployment practices.",
  },
  {
    title: "AI Integration & APIs",
    description:
      "OpenAI, Gemini, and LangChain integrations that embed intelligence into products while maintaining reliability and ethical guardrails.",
  },
  {
    title: "Deployment & DevOps",
    description:
      "AWS, Vercel, containerization, and CI/CD pipelines—owning the full lifecycle from prototype to production-ready infrastructure.",
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