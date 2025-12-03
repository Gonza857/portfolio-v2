"use client"

import {useLanguageStore} from "@/context/language-context"
import {Card} from "@/components/ui/card"
import {GraduationCap} from "lucide-react";

const educationData = {
    es: [
        {
            id: 1,
            school: "Universidad Nacional de La Matanza",
            degree: "Tecnicatura en Desarrollo Web",
            period: "2023 - 2025",
            details: "Desarrollo integral de aplicaciones web",
            logo: "/education/unlamsinfondo.svg",
            icon: "GraduationCap",
        },
        {
            id: 2,
            school: "Jorge Newbery E.E.S.T.N°8",
            degree: "Técnico electromecánico",
            period: "2015 - 2022",
            details: "Educación Secundaria Técnica",
            logo: "/education/jn8_logo.png",
            icon: "GraduationCap",
        },
        {
            id: 3,
            school: "Asociación Argentina de Cultura Inglesa",
            degree: "Inglés Superior",
            period: "2021",
            details: "Inglés Superior B2",
            logo: "/education/aaci_logo.png",
            icon: "GraduationCap",
        },
    ],
    en: [
        {
            id: 1,
            school: "Universidad Nacional de La Matanza",
            degree: "Associate Degree in Web Development", // Cambio aplicado aquí
            period: "2023 - 2025",
            details: "Comprehensive web application development",
            logo: "/education/unlamsinfondo.svg",
            icon: "GraduationCap",
        },
        {
            id: 2,
            school: "Jorge Newbery E.E.S.T.N°8",
            degree: "Electromechanical Technician",
            period: "2015 - 2022",
            details: "Technical High School Diploma",
            logo: "/education/jn8_logo.png",
            icon: "GraduationCap",
        },
        {
            id: 3,
            school: "Asociación Argentina de Cultura Inglesa",
            degree: "Advanced English",
            period: "2021",
            details: "Upper Intermediate / B2 Level",
            logo: "/education/aaci_logo.png",
            icon: "GraduationCap",
        },
    ],
}

const translations = {
    es: { title: "Educación" },
    en: { title: "Education" },
}

export function Education() {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = educationData[language]

    return (
        <section id="education" className="py-20 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="space-y-6">
                    {data.map((edu) => (
                        <Card key={edu.id} className="p-6">
                            <div className="flex gap-4 mb-4">
                                <div className="flex-shrink-0">
                                    {edu.logo ? (
                                        <img
                                            src={edu.logo || "/placeholder.svg"}
                                            alt={edu.school}
                                            className="w-16 h-16 object-contain rounded"
                                        />
                                    ) : (
                                        <div
                                            className="w-16 h-16 bg-accent/10 rounded flex items-center justify-center">
                                            <GraduationCap size={32} className="text-accent"/>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                                        <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                                        <span className="text-sm text-neutral-500">{edu.period}</span>
                                    </div>
                                    <p className="text-accent font-medium mb-2">{edu.school}</p>
                                    <p className="text-neutral-500">{edu.details}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
