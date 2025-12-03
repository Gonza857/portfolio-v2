"use client"

import {useLanguageStore} from "@/context/language-context"
import {Card} from "@/components/ui/card"
import {Github} from "lucide-react";

const demosData = {
    es: [
        {
            id: 1,
            title: "Truco",
            description: "Aplicación para jugar al truco entre 2 jugadores. Proyecto en equipo.",
            technologies: ["Java", "Spring", "Hibernate", "MySQL", "Thymeleaf", "Tailwind CSS"],
            github: "https://github.com/LukasGava/truco_tallerweb2",
        },
        {
            id: 2,
            title: "Preguntones",
            description: "Sitio web para jugar preguntas y respuestas (preguntados) realizada con estructura Modelo Vista Controlador. Bibliotecas: Mailer, Gráficos, PDF. Proyecto en equipo.",
            technologies: ["PHP", "MySQL", "Mustache"],
            github: "https://github.com/lorenzo-noceda/PW2-Preguntones",
        },
        {
            id: 3,
            title: "AvengersLens",
            description: "Aplicacion Web para reconocer Avengers usando Machine Learning. Proyecto en equipo.",
            technologies: [".NET", "Entity Framework", "SQL Server", "ML.NET", "Razor"],
            github: "https://github.com/avrilsandoval12/pw3-avengerslens",
        },
        {
            id: 4,
            title: "E-Commerce",
            description: "Sitio web para e-commerce para hacer pedidos de productos. Incluye sección administrativa. Proyecto en equipo.",
            technologies: ["Angular", "Node.js", "Express", "Prisma", "PostgreSQL"],
            github: "https://github.com/Gonza857/twii-ecommerce",
        },
        {
            id: 5,
            title: "Pokedex",
            description: "ABM de Pokemones.",
            technologies: ["PHP", "MySQL", "Mustache"],
            github: "https://github.com/Gonza857/pokedex-pw2",
        },
    ],
    en: [
        {
            id: 1,
            title: "Truco",
            description: "Application to play Truco (card game) between 2 players. Team project.",
            technologies: ["Java", "Spring", "Hibernate", "MySQL", "Thymeleaf", "Tailwind CSS"],
            github: "https://github.com/LukasGava/truco_tallerweb2",
        },
        {
            id: 2,
            title: "Preguntones",
            description: "Trivia game website built with Model-View-Controller (MVC) architecture. Libraries: Mailer, Charts, PDF. Team project.",
            technologies: ["PHP", "MySQL", "Mustache"],
            github: "https://github.com/lorenzo-noceda/PW2-Preguntones",
        },
        {
            id: 3,
            title: "AvengersLens",
            description: "Web application to recognize Avengers characters using Machine Learning. Team project.",
            technologies: [".NET", "Entity Framework", "SQL Server", "ML.NET", "Razor"],
            github: "https://github.com/avrilsandoval12/pw3-avengerslens",
        },
        {
            id: 4,
            title: "E-Commerce",
            description: "E-commerce website for product ordering. Includes an administrative section. Team project.",
            technologies: ["Angular", "Node.js", "Express", "Prisma", "PostgreSQL"],
            github: "https://github.com/Gonza857/twii-ecommerce",
        },
        {
            id: 5,
            title: "Pokedex",
            description: "Pokémon CRUD application.",
            technologies: ["PHP", "MySQL", "Mustache"],
            github: "https://github.com/Gonza857/pokedex-pw2",
        },
    ],
}

const translations = {
    es: {
        title: "Proyectos de Práctica",
        viewRepo: "Ver repositorio",
    },
    en: {
        title: "Practice Projects",
        viewRepo: "View repository",
    },
}

export function Demos() {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = demosData[language]

    return (
        <section id="demos" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {data.map((demo) => (
                        <Card key={demo.id}
                              className="p-6 bg-slate-900 hover:shadow-md transition flex flex-col h-full gap-2">
                            <h3 className="text-lg font-semibold text-foreground mb-2">{demo.title}</h3>
                            <p className="text-neutral-300 text-sm mb-4 flex-grow">{demo.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {demo.technologies.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                                          {tech}
                                        </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                                {demo.github && (
                                    <a
                                        href={demo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
                                    >
                                        <Github size={16}/>
                                        <span className="text-xs font-medium">{t.viewRepo}</span>
                                    </a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
