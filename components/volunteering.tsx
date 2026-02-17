import { Section } from "@/components/ui/section";
import data from "@/data/profile.json";
import { Heart } from "lucide-react";

export function Volunteering() {
    const { volunteering } = data;

    return (
        <Section id="volunteering">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
                <Heart className="mr-3 h-8 w-8 text-rose-500" />
                Community Leadership
            </h2>

            <div className="grid gap-6">
                {volunteering.map((role, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-slate-700 transition-all hover:border-rose-500/50">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-rose-500/10 blur-2xl transition-all group-hover:bg-rose-500/20" />

                        <h3 className="text-2xl font-bold text-white mb-2">{role.organization}</h3>
                        <div className="text-lg text-rose-400 mb-4">{role.role}</div>
                        <p className="text-slate-400 leading-relaxed max-w-3xl">
                            {role.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
