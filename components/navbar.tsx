"use client"

import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Download, Menu, X} from "lucide-react"
import {useLanguageStore} from "@/context/language-context";

const translations = {
    es: {
        experience: "Experiencia",
        projects: "Proyectos",
        education: "Educación",
        demos: "Demos",
        certifications: "Certificaciones",
        tech: "Tecnologías",
    },
    en: {
        experience: "Experience",
        projects: "Projects",
        education: "Education",
        demos: "Demos",
        certifications: "Certifications",
        tech: "Technologies",
    },
}

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language, setLanguage } = useLanguageStore()
    const t = translations[language]

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
        setMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo/Name */}
                <div className="flex titleStyle items-center">
                    <span className="text-2xl">&lt;</span>
                    <h1 className="text-xl">GonzaloRamos</h1>
                    <span className="text-2xl">/&gt;</span>
                </div>

                {/*<a href="#" className="font-semibold text-lg text-foreground hover:text-primary transition">*/}
                {/*    Portfolio*/}
                {/*</a>*/}

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {[
                        {id: "experience", label: t.experience},
                        {id: "projects", label: t.projects},
                        {id: "education", label: t.education},
                        {id: "demos", label: t.demos},
                        {id: "certifications", label: t.certifications},
                        {id: "technologies", label: t.tech},
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="px-3 py-2 text-sm text-neutral-300 hover:text-primary transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    {/* Language Toggle */}
                    <div className="flex items-center border border-border rounded-lg p-1 bg-neutral-50">
                        <button
                            onClick={() => setLanguage("es")}
                            className={`px-2 py-1 text-xs font-medium transition cursor-pointer ${
                                language === "es" ? "bg-primary text-white" : "text-neutral-600"
                            }`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLanguage("en")}
                            className={`px-2 py-1 text-xs font-medium transition cursor-pointer ${
                                language === "en" ? "bg-primary text-white" : "text-neutral-600"
                            }`}
                        >
                            EN
                        </button>
                    </div>

                    <Button size="sm" className="gap-2 hidden sm:flex bg-transparent hover:text-primary"
                            variant="outline" asChild>
                        <a href={language === "en" ? "/CV--RAMOS-GONZALO-EN.pdf" : "/CV--RAMOS-GONZALO-ES.pdf"}
                           download>
                            <Download className="w-4 h-4"/>
                            CV
                        </a>
                    </Button>

                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-foreground">
                        {mobileMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden bg-background border-t border-border">
                    <div className="max-w-6xl mx-auto px-4 py-4 space-y-2">
                        {[
                            { id: "experience", label: t.experience },
                            { id: "projects", label: t.projects },
                            { id: "education", label: t.education },
                            { id: "demos", label: t.demos },
                            { id: "certifications", label: t.certifications },
                            { id: "technologies", label: t.tech },
                        ].map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="block w-full text-left px-3 py-2 text-sm text-neutral-300 hover:text-foreground transition hover:bg-neutral-800 rounded"
                            >
                                {item.label}
                            </button>
                        ))}
                        <Button size="sm" className="gap-2 hidden sm:flex bg-transparent hover:text-primary"
                                variant="outline" asChild>
                            <a href={language !== "en" ? "/CV--RAMOS-GONZALO-ES.pdf" : "/CV--RAMOS-GONZALO-EN.pdf"}
                               download>
                                <Download className="w-4 h-4"/>
                                CV
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
