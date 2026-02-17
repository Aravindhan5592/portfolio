"use client";

import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Volunteering() {
    const { volunteering } = data;

    return (
        <Section id="volunteering" className="relative">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-16 flex items-center justify-center"
            >
                <div className="p-3 rounded-full bg-rose-500/10 text-rose-500 mr-4 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                    <Heart className="h-8 w-8 fill-rose-500/20" />
                </div>
                Community Leadership
            </motion.h2>

            <div className="grid gap-8 max-w-4xl mx-auto">
                {volunteering.map((role, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-10 border border-slate-700/50 transition-all hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.1)]"
                    >
                        <div className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-rose-500/10 blur-3xl transition-all group-hover:bg-rose-500/20" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{role.organization}</h3>
                                    <div className="text-xl text-rose-400 font-medium tracking-wide">{role.role}</div>
                                </div>
                                {role.logo && (
                                    <div className="bg-white p-2 rounded-full shadow-lg">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={role.logo} alt="Organization Logo" className="w-8 h-8 object-contain" />
                                    </div>
                                )}
                            </div>

                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                {role.description}
                            </p>

                            {role.url && (
                                <a
                                    href={role.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-rose-400 hover:text-rose-300 font-medium transition-colors"
                                >
                                    Visit Community Page
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
