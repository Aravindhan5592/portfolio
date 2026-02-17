import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Code2, Cloud, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
    const { skills } = data;

    const categories = [
        { title: "Languages & Frameworks", icon: Code2, items: skills.technologies, color: "text-neon-cyan" },
        { title: "Cloud & Infrastructure", icon: Cloud, items: skills.cloud.concat(skills.devops), color: "text-neon-purple" },
        { title: "AI & Emerging Tech", icon: Cpu, items: skills.ai, color: "text-rose-400" },
        { title: "Tools & Platforms", icon: Terminal, items: skills.tools, color: "text-emerald-400" },
    ];

    return (
        <Section id="skills" className="relative">
            {/* Gradient glow behind section */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-slate-900/50 to-primary pointer-events-none" />

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-16 text-center relative z-10"
            >
                Skills & <span className="text-neon-purple">Technologies</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-xl hover:bg-slate-800/60 hover:border-slate-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                    >
                        <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-2xl bg-slate-950/50 border border-slate-800 ${category.color} mr-4 group-hover:scale-110 transition-transform`}>
                                <category.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
