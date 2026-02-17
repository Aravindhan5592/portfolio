"use client";

import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
    const { experience } = data;

    return (
        <Section id="experience" className="relative">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-16 flex items-center"
            >
                <div className="p-3 rounded-2xl bg-neon-cyan/10 text-neon-cyan mr-4 border border-neon-cyan/20">
                    <Briefcase className="h-8 w-8" />
                </div>
                Professional Experience
            </motion.h2>

            <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-16">
                {/* Gradient Line Overlay */}
                <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent h-full" />

                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        className="relative pl-8 md:pl-16"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-slate-950 border-2 border-neon-purple shadow-[0_0_10px_#a855f7] z-10" />

                        <div className="group relative overflow-hidden rounded-3xl bg-slate-800/30 border border-slate-700/50 p-8 backdrop-blur-sm hover:bg-slate-800/50 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{job.role}</h3>
                                <span className="text-sm font-mono text-neon-purple/80 bg-neon-purple/10 px-3 py-1 rounded-full border border-neon-purple/20">
                                    {job.duration}
                                </span>
                            </div>

                            <div className="text-lg text-slate-300 mb-2 font-medium">{job.company}</div>
                            <div className="text-sm text-slate-500 mb-6 flex items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2" />
                                {job.location}
                            </div>

                            {job.description && (
                                <p className="text-slate-400 leading-relaxed max-w-4xl">
                                    {job.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
