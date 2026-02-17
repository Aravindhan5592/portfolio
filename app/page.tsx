import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Volunteering } from "@/components/volunteering";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-neon-purple selection:text-white">
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
