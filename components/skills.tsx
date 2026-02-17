import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Code2, Cloud, Terminal, Cpu } from "lucide-react";

export function Skills() {
    const { skills } = data;

    const categories = [
        { title: "Languages & Frameworks", icon: Code2, items: skills.technologies },
        { title: "Cloud & Infrastructure", icon: Cloud, items: skills.cloud.concat(skills.devops) }, // Merged for better display
        { title: "AI & Emerging Tech", icon: Cpu, items: skills.ai },
        { title: "Tools & Platforms", icon: Terminal, items: skills.tools },
    ];

    return (
        <Section id="skills" className="bg-slate-900/50">
            <h2 className="text-3xl font-bold text-white mb-12">Skills & Technologies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="flex items-center mb-6">
                            <category.icon className="h-6 w-6 text-accent mr-3" />
                            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-full text-sm font-medium bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
