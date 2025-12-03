"use client"

import {useLanguageStore} from "@/context/language-context"
import {ExternalLink, Github, Linkedin, Mail} from "lucide-react"

export function Footer() {
    const { language } = useLanguageStore()

    const content = {
        es: {
            madeWith: "Hecho con",
            by: "por",
            rights: "Todos los derechos reservados",
            quickLinks: "Enlaces rápidos",
        },
        en: {
            madeWith: "Made with",
            by: "by",
            rights: "All rights reserved",
            quickLinks: "Quick links",
        },
    }

    const navigationOptions = {
        es: {
            ids: ["#experience", "#projects", "#education", "#demos", "#certifications", "#technologies"],
            names: ["Experiencia", "Proyectos", "Educación", "Demos", "Certificaciones", "Tecnologías"]
        },
        en: {
            ids: ["#experience", "#projects", "#education", "#demos", "#certifications", "#technologies"],
            names: ["Experience", "Projects", "Education", "Demos", "Certifications", "Technologies"]
        }
    }

    const t = content[language]
    const options = navigationOptions[language]
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-neutral-800 bg-neutral-950 py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Sección de redes sociales */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-cyan-400">Social</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 transition-colors hover:text-cyan-400"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 transition-colors hover:text-cyan-400"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:tu@email.com"
                                className="text-neutral-400 transition-colors hover:text-cyan-400"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Sección de enlaces rápidos */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-cyan-400">{t.quickLinks}</h3>
                        <nav className="space-y-2">
                            {options.ids.map((link, index) => (
                                <a
                                    key={link}
                                    href={link}
                                    className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-cyan-400"
                                >
                                    <ExternalLink size={14} />
                                    {options.names[index].charAt(0).toUpperCase() + options.names[index].substring(1)}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Sección de información */}
                    <div className="text-right">
                        <p className="text-sm text-neutral-400">
                            {t.madeWith} <span className="text-cyan-400">❤</span> {t.by}{" "}
                            <span className="font-semibold text-cyan-400">Gonzalo Ramos</span>
                        </p>
                        <p className="mt-4 text-xs text-neutral-500">
                            © {currentYear} {t.rights}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
