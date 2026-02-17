import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Briefcase } from "lucide-react";

export function Experience() {
    const { experience } = data;

    return (
        <Section id="experience">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Briefcase className="mr-3 h-8 w-8 text-accent" />
                Experience
            </h2>

            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-slate-900" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                            <span className="text-sm text-slate-500 font-mono">{job.duration}</span>
                        </div>

                        <div className="text-lg text-slate-300 mb-2">{job.company}</div>
                        <div className="text-sm text-slate-500 mb-4">{job.location}</div>

                        {job.description && (
                            <p className="text-slate-400 leading-relaxed max-w-3xl">
                                {job.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}
