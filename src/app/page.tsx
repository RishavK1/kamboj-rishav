import TopBanner from "@/components/sections/top-banner";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import WorkExperience from "@/components/sections/work-experience";
import ProjectsGrid from "@/components/sections/projects-grid";
import ContactForm from "@/components/sections/contact-form";
import BlogPosts from "@/components/sections/blog-posts";
import UsesSection from "@/components/sections/uses-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
      <TopBanner />
      <Navigation />
      <main>
        <section id="about">
          <HeroSection />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
        <section id="tech-stack">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 mt-40">
            <UsesSection />
          </div>
        </section>
        <section id="projects">
          <ProjectsGrid />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <section id="blogs">
          <div className="max-w-5xl mx-auto px-4 sm:px-8 mt-40">
            <h3 className="font-bold text-xl tracking-wide text-zinc-50 mb-8">
              Blog
            </h3>
            <BlogPosts />
          </div>
        </section>
        <div className="max-w-5xl mx-auto px-4 sm:px-8 pb-20">
          <Footer />
        </div>
      </main>
    </div>
  );
}