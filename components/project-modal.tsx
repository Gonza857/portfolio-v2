"use client"

import {useLanguageStore} from "@/context/language-context"
import {Button} from "@/components/ui/button"
import {ExternalLink, X} from "lucide-react"

const translations = {
    es: {close: "Cerrar", visitProject: "Visitar Proyecto", technologies: "Tecnologías"},
    en: {close: "Close", visitProject: "Visit Project", technologies: "Technologies"},
}

// @ts-ignore
export function ProjectModal({project, onClose}) {
    const {language} = useLanguageStore()
    const t = translations[language]

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-background rounded-lg max-w-2xl w-full shadow-xl" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-lg transition z-10"
                    >
                        <X className="w-5 h-5"/>
                    </button>

                    <div className="h-80 overflow-hidden rounded-t-lg">
                        <img src={project.image || "/placeholder.svg"} alt={project.title}
                             className="w-full h-full object-cover"/>
                    </div>

                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-foreground mb-4">{project.title}</h2>
                        <p className="text-neutral-600 text-lg mb-6">{project.details}</p>

                        <div className="mb-6">
                            <h3 className="font-semibold text-foreground mb-3">{t.technologies}:</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech: string) => (
                                    <span key={tech}
                                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button onClick={onClose} variant="secondary">
                                {t.close}
                            </Button>
                            <Button asChild className="gap-2">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4"/>
                                    {t.visitProject}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
