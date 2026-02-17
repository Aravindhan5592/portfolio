import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Volunteering } from "@/components/volunteering";

export default function Home() {
    return (
        <main className="bg-primary min-h-screen text-slate-200 selection:bg-accent/30 selection:text-white">
            <Hero />
            <Skills />
            <Experience />
            <Volunteering />

            <footer className="py-8 text-center text-slate-600 text-sm">
                <p>© {new Date().getFullYear()} Aravindhan M. Built with Next.js & Tailwind.</p>
            </footer>
        </main>
    );
}
