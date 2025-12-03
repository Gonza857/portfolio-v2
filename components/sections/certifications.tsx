"use client"

import {useLanguageStore} from "@/context/language-context"
import {Card} from "@/components/ui/card"
import {Award, ExternalLink} from "lucide-react"
import Image from "next/image";

const certificationsData = {
    es: [
        {
            id: 1,
            title: "Carrera de Desarrollo Frontend React",
            issuer: "Coderhouse",
            logo: "/certifications/coderhouse.jpg",
            link: "https://pub.coderhouse.com/legacy-certificates/63adf19a282a65000e3e0bdc?lang=es",
            date: "2022",
        },
        {
            id: 2,
            title: "Next.js",
            issuer: "Coderhouse",
            logo: "/certifications/coderhouse.jpg",
            link: "https://pub.coderhouse.com/legacy-certificates/66e98c9378b2539e51c02cb8?lang=es",
            date: "2024",
        },
    ],
    en: [
        {
            id: 1,
            title: "React Frontend Development Career",
            issuer: "Coderhouse",
            logo: "/certifications/coderhouse.jpg",
            link: "https://pub.coderhouse.com/legacy-certificates/63adf19a282a65000e3e0bdc?lang=es",
            date: "2022",
        },
        {
            id: 2,
            title: "Next.js",
            issuer: "Coderhouse",
            logo: "/certifications/coderhouse.jpg",
            link: "https://pub.coderhouse.com/legacy-certificates/66e98c9378b2539e51c02cb8?lang=es",
            date: "2024",
        },
    ],
}

const translations = {
    es: { title: "Certificaciones", viewCertificate: "Ver certificado" },
    en: { title: "Certifications", viewCertificate: "View certificate" },
}

export function Certifications() {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = certificationsData[language]

    return (
        <section id="certifications" className="py-20 px-4 bg-slate-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.map((cert) => (
                        <Card key={cert.id} className="p-6 text-center gap-2">
                            <div className="flex justify-center">
                                {cert.logo ? (
                                    <Image
                                        width={48}
                                        height={48}
                                        src={cert.logo || "/placeholder.svg"}
                                        alt={cert.issuer}
                                        className="w-12 h-12 object-contain"
                                    />
                                ) : (
                                    <div
                                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Award className="w-6 h-6 text-primary"/>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-lg font-semibold text-foreground text-center">{cert.title}</h3>
                            <p className="text-accent text-sm font-medium text-center">{cert.issuer}</p>
                            <p className="text-neutral-500 text-sm text-center mb-2">{cert.date}</p>

                            {cert.link ? (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                                >
                                    {t.viewCertificate}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : null}

                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
