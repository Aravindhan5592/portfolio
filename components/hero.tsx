"use client";

import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    const { profile } = data;

    return (
        <Section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8 max-w-4xl relative z-10"
            >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full p-1 bg-gradient-to-r from-neon-purple to-neon-cyan shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900 relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/images/profile.jpg"
                            alt={profile.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                // Fallback to initials if image fails to load
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-800 text-4xl font-bold text-slate-500">
                            {profile.name.charAt(0)}
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-tight">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">{profile.name}</span>. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
                        Building AI native solutions.
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    {profile.headline}. {profile.summary}
                </p>

                <motion.div
                    className="flex flex-wrap gap-4 pt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-slate-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Connect on LinkedIn
                        <Linkedin className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                        href={`mailto:${profile.email}`}
                        className="group inline-flex items-center justify-center rounded-full border border-slate-700 bg-white/5 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    >
                        Contact Me
                        <Mail className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </motion.div>
        </Section>
    );
}
