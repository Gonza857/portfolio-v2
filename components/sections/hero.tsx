"use client"

import {useLanguageStore} from "@/context/language-context"
import {Button} from "@/components/ui/button"
import {Linkedin, Mail} from "lucide-react";

const translations = {
    es: {
        salute: "Bienvenido",
        title: "Hola, soy Gonzalo",
        subtitle: "Full Stack Developer",
        description:
            "Me dedico a crear aplicaciones web modernas, accesibles y funcionales. Mi enfoque en el desarrollo está en el backend. En este portfolio vas a encontrar algunos de mis proyectos, tecnologías que manejo y lo que estoy aprendiendo.",
        cta: "Ver mis proyectos",
    },
    en: {
        salute: "Welcome",
        title: "Hi, I'm Gonzalo",
        subtitle: "Full Stack Developer",
        description:
            "I build modern, accessible, and functional web applications, with a strong focus on backend development. In this portfolio, you'll find some of my projects, the technologies I work with, and what I'm currently learning.",
        cta: "View my projects",
    },
}

export function Hero() {
    const { language } = useLanguageStore()
    const t = translations[language]

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="hero" className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo */}
                    <div className="flex justify-center">
                        <div className="w-64 h-64 rounded-lg bg-neutral-200 overflow-hidden shadow-lg">
                            <img src="/me.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-primary font-semibold text-sm mb-2">{t.salute.toUpperCase()}</p>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">{t.title}</h1>
                            <p className="text-2xl text-accent font-semibold mt-2">{t.subtitle}</p>
                        </div>

                        <p className="text-neutral-400 text-lg leading-relaxed max-w-md">{t.description}</p>

                        <div className="flex gap-4 pt-4">
                            <Button size="lg" onClick={scrollToProjects} className="bg-primary hover:bg-primary-light text-white">
                                {t.cta}
                            </Button>

                            <Button size="lg" variant="outline" asChild>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex gap-2 text-white hover:text-primary">
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                            </Button>

                            <Button size="lg" variant="outline" asChild>
                                <a href="mailto:tu@email.com" className="flex gap-2 text-white hover:text-primary">
                                    <Mail className="w-5 h-5" />
                                    Email
                                </a>
                            </Button>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}
