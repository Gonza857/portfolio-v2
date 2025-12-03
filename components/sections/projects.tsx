"use client"

import {useLanguageStore} from "@/context/language-context"
import {Card} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {ExternalLink} from "lucide-react"

const projectsData = {
    es: [
        {
            id: 0,
            title: "Neocivita",
            description: "Videojuego web para construir una ciudad sostenible con el medio ambiente y también para aprender y concientizar sobre el medio ambiente. Desarrollo en equipo.",
            image: "/projects/neocivita.png",
            technologies: ["Vite", "TypeScript", "Phaser.js", "Zustand", ".NET API", "SignalR", "Entity Framework", "PostgreSQL", "Azure", "Render", "Vercel", "TDD"],
            link: "https://front-civita.vercel.app/",
            details:
                "Si deseas ver más detalles, enviame un correo y te levanto el servidor para poder jugar.",
        },
        {
            id: 1,
            title: "Red Solana",
            description: "Sitio web para administrar cajeros, casinos y sorteos. Constituido por una parte para el usuario y un panel para administrar ABM's.",
            image: "/projects/redsolana.png",
            technologies: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
            link: "https://redsolana.net",
            details:
                "Sitio web para administrar cajeros, casinos y sorteos. Constituido por una parte para el usuario y un panel para administrar ABM's.",
        },
        {
            id: 2,
            title: "Las brenas",
            description: "E-commerce realizado para un almacen. Incluye parte administrativa con gestor de stock de productos, pedidos y categorias. Desarrollo en equipo.",
            image: "/projects/brenas.png",
            technologies: ["Next.js", "Firebase", "TailwindCSS"],
            link: "https://lasbrenas.net",
            details: "E-commerce realizado para un almacen. Incluye parte administrativa con gestor de stock de productos, pedidos y categorias.",
        },
        {
            id: 3,
            title: "Garret Games - Catálogo",
            description: "Catálogo web con administración de productos (juegos en stock, membresías, juegos en oferta) y secciones informativas.",
            image: "/projects/garretgames.png",
            technologies: ["Next.js", "Firebase", "TailwindCSS"],
            link: "https://garret-games.vercel.app/",
            details: "Catálogo web con administración de productos (juegos en stock, membresías, juegos en oferta) y secciones informativas.",
        },
        {
            id: 4,
            title: "GBM Ingeniería y Ambiente",
            description: "Sitio web informativo desarrollado para una consultora de ingeniería y ambiente.",
            image: "/projects/gbm.png",
            technologies: ["React.js"],
            link: "https://gbm-ingenieria-ambiente.vercel.app/",
            details: "Sitio web informativo desarrollado para una consultora de ingeniería y ambiente.",
        },
    ],
    en: [
        {
            id: 0,
            title: "Neocivita",
            description: "Web game focused on building an environmentally sustainable city, designed to educate and raise awareness about environmental issues. Team project.",
            image: "/projects/neocivita.png",
            technologies: ["Vite", "TypeScript", "Phaser.js", "Zustand", ".NET API", "SignalR", "Entity Framework", "PostgreSQL", "Azure", "Render", "Vercel", "TDD"],
            link: "https://front-civita.vercel.app/",
            details:
                "If you'd like to see more details, send me an email and I'll spin up the server so you can play.",
        },
        {
            id: 1,
            title: "Red Solana",
            description: "Website for managing cashiers, casinos, and raffles. Comprises a user-facing section and a dashboard for CRUD administration.",
            image: "/projects/redsolana.png",
            technologies: ["Next.js", "TypeScript", "Firebase", "TailwindCSS"],
            link: "https://redsolana.net",
            details:
                "Website for managing cashiers, casinos, and raffles. Comprises a user-facing section and a dashboard for CRUD administration.",
        },
        {
            id: 2,
            title: "Las brenas",
            description: "E-commerce developed for a local grocery store. Includes an administrative section with inventory, order, and category management. Team project.",
            image: "/projects/brenas.png",
            technologies: ["Next.js", "Firebase", "TailwindCSS"],
            link: "https://lasbrenas.net",
            details: "E-commerce developed for a local grocery store. Includes an administrative section with inventory, order, and category management.",
        },
        {
            id: 3,
            title: "Garret Games - Catalog",
            description: "Web catalog with product administration (in-stock games, memberships, special offers) and informational sections.",
            image: "/projects/garretgames.png",
            technologies: ["Next.js", "Firebase", "TailwindCSS"],
            link: "https://garret-games.vercel.app/",
            details: "Web catalog with product administration (in-stock games, memberships, special offers) and informational sections.",
        },
        {
            id: 4,
            title: "GBM Ingeniería y Ambiente",
            description: "Informational website developed for an engineering and environmental consulting firm. Team project.",
            image: "/projects/gbm.png",
            technologies: ["React.js"],
            link: "https://gbm-ingenieria-ambiente.vercel.app/",
            details: "Informational website developed for an engineering and environmental consulting firm.",
        },
    ],
}

const translations = {
    es: {title: "Proyectos Principales", viewDetails: "Ver detalles"},
    en: {title: "Main Projects", viewDetails: "View details"},
}

// @ts-ignore
export function Projects({onProjectSelect}) {
    const { language } = useLanguageStore()
    const t = translations[language]
    const data = projectsData[language]

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">{t.title}</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {data.map((project) => (
                        <Card key={project.id} className="overflow-hidden hover:shadow-lg transition bg-slate-900">
                            <div className="h-48 overflow-hidden bg-dark">
                                <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-full h-full object-contain hover:scale-105 transition duration-300"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                                <p className="text-neutral-300 text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech: string) => (
                                        <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                                          {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="default"
                                        className="flex-1"
                                        onClick={() => onProjectSelect(project)}
                                    >
                                        {t.viewDetails}
                                    </Button>
                                    <Button size="sm" variant="secondary" asChild className="w-10 hover:text-red-500">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="w-4 h-4"/>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
