import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    const { profile } = data;

    return (
        <Section className="min-h-screen flex flex-col justify-center pt-20">
            <div className="space-y-6 max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm text-slate-300 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    Available for new opportunities
                </div>

                <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
                    Hi, I'm {profile.name}. <br />
                    <span className="text-slate-400">Building cloud-native solutions.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    {profile.headline}. {profile.summary}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Connect on LinkedIn
                        <Linkedin className="ml-2 h-4 w-4" />
                    </a>

                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Contact Me
                        <Mail className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </Section>
    );
}
