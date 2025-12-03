"use client"

import {useLanguageStore} from "@/context/language-context"

const technologiesData = {
    es: {
        frontend: ["React.js", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "Cypress"],
        backend: ["Java", "Spring Boot", "C#", ".NET", "Node.js", "Express",],
        databases: ["PostgreSQL", "MySQL", "SQL Server",  "Firebase", "Hibernate", "Entity Framework", "Prisma"],
        tools: ["Git", "GitHub", "Gitlab", "Figma", "Vercel"],
    },
    en: {
        frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Cypress"],
        backend: ["Java", "Spring Boot", "C#", ".NET", "Node.js", "Express",],
        databases: ["PostgreSQL", "MySQL", "SQL Server",  "Firebase", "Hibernate", "Entity Framework", "Prisma"],
        tools: ["Git", "GitHub", "Gitlab", "Figma", "Vercel"],
    },
}

const translations = {
    es: {
        title: "Tecnologías",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de datos",
        tools: "Herramientas",
    },
    en: {
        title: "Technologies",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        tools: "Tools",
    },
}

export function Technologies() {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = technologiesData[language]

    return (
        <section id="technologies" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="grid md:grid-cols-4 gap-12">
                    {/* Frontend */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">{t.frontend}</h3>
                        <div className="space-y-2">
                            {data.frontend.map((tech) => (
                                <div
                                    key={tech}
                                    className="p-3 bg-primary/20 border border-primary/20 rounded-lg text-foreground font-medium text-sm hover:bg-primary/50 transition"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">{t.backend}</h3>
                        <div className="space-y-2">
                            {data.backend.map((tech) => (
                                <div
                                    key={tech}
                                    className="p-3 bg-primary/20 border border-accent/20 rounded-lg text-foreground font-medium text-sm hover:bg-primary/50 transition"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">{t.databases}</h3>
                        <div className="space-y-2">
                            {data.databases.map((tech) => (
                                <div
                                    key={tech}
                                    className="p-3 bg-primary/20 border border-primary/20 rounded-lg text-foreground font-medium text-sm hover:bg-primary/50 transition"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-xl font-semibold text-foreground mb-6">{t.tools}</h3>
                        <div className="space-y-2">
                            {data.tools.map((tech) => (
                                <div
                                    key={tech}
                                    className="p-3 bg-primary/20 border border-primary/20 rounded-lg text-foreground font-medium text-sm hover:bg-primary/50 transition"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
