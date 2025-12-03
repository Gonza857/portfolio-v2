"use client"

import {useLanguageStore} from "@/context/language-context"
import {Card} from "@/components/ui/card"
import {Building2} from "lucide-react";

const experienceData = {
    es: [
        {
            id: 1,
            company: "Netone",
            position: "Desarrollador Junior Fullstack",
            period: "Ago 2025 - Oct 2025",
            responsibilities: [
                "Responsable del desarrollo evolutivo y mantenimiento de módulos críticos en la plataforma de gestión de activos (Wise Capital).",
                "Desarrollé e implementé nuevas funcionalidades backend" +
                ", opmizando procesos de negocio clave y asegurando la performance del sistema.",
                "Automaticé pruebas funcionales E2E (End-to-End) con Cypress para las aplicaciones web (Angular) y mobile (Ionic), mejorando la cobertura de testing y agilizando la detección de regresiones.",
            ],
            technologies: ["Java", "Spring Boot", "jQuery", "Angular", "Ionic", "Cypress", "MySQL"],
            logo: "/experience/netone.png",
            icon: "Building2",
        },
        {
            id: 2,
            company: "Garret Games",
            position: "Emprendimiento",
            period: "2021 - Actualidad",
            responsibilities: [
                "Emprendimiento propio dedicado a la venta de juegos digitales, gestión integral y autónoma del inventario y atención al cliente",
            ],
            technologies: [],
            logo: null,
            icon: "Building2",
        },
    ],
    en: [
        {
            id: 1,
            company: "Netone",
            position: "Junior Full Stack Developer",
            period: "Aug 2025 - Oct 2025",
            responsibilities: [
                "Responsible for feature enhancements and maintenance of critical modules for the asset management platform (Wise Capital).",
                "Developed and implemented new backend functionalities, optimizing key business processes and ensuring system performance.",
                "Automated E2E functional tests using Cypress for web (Angular) and mobile (Ionic) applications, improving test coverage and accelerating regression detection.",
            ],
            technologies: ["Java", "Spring Boot", "jQuery", "Angular", "Ionic", "Cypress", "MySQL"],
            logo: "/experience/netone.png",
            icon: "Building2",
        },
        {
            id: 2,
            company: "Garret Games",
            position: "Founder / Entrepreneur",
            period: "2021 - Present",
            responsibilities: [
                "Personal venture dedicated to digital game sales, independently managing the entire inventory and providing customer support.",
            ],
            technologies: [],
            logo: null,
            icon: "Building2",
        },
    ],
}

const translations = {
    es: {title: "Experiencia Laboral"},
    en: {title: "Work Experience"},
}

export function Experience() {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = experienceData[language]

    return (
        <section id="experience" className="py-20 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="space-y-6">
                    {data.map((exp) => (
                        <Card key={exp.id} className="p-6 hover:shadow-md transition gap-2 md:gap-6">

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    {exp.logo ? (
                                        <img
                                            src={exp.logo || "/placeholder.svg"}
                                            alt={exp.company}
                                            className="w-16 h-16 object-contain rounded"
                                        />
                                    ) : exp.icon ? (
                                        <div
                                            className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                                            <Building2 size={32} className="text-primary"/>
                                        </div>
                                    ) : (
                                        <div
                                            className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center">
                                            <Building2 size={32} className="text-primary"/>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-xl font-semibold text-foreground">{exp.position}</h3>
                                            <p className="text-primary font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-neutral-500">{exp.period}</span>
                                    </div>
                                </div>
                            </div>

                            {exp.responsibilities && (
                                <ul className="list-disc list-inside mb-4 text-neutral-300 space-y-1">
                                    {exp.responsibilities.map((responsibility) => (
                                        <li key={responsibility}>{responsibility}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span key={tech}
                                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
