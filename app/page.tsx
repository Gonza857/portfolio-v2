"use client"

import {useState} from "react"
import {Hero} from "@/components/sections/hero"
import {Experience} from "@/components/sections/experience"
import {Projects} from "@/components/sections/projects"
import {Education} from "@/components/sections/education"
import {Demos} from "@/components/sections/demos"
import {Certifications} from "@/components/sections/certifications"
import {Technologies} from "@/components/sections/technologies"
import {ProjectModal} from "@/components/project-modal"
import {Footer} from "@/components/sections/footer";

export default function Home() {
    const [language, setLanguage] = useState<"es" | "en">("es")
    const [selectedProject, setSelectedProject] = useState(null)

    return (
        <>
            <main>
                <Hero/>
                <Experience/>
                <Projects onProjectSelect={setSelectedProject}/>
                <Education/>
                <Demos/>
                <Certifications/>
                <Technologies/>

                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>}
            </main>
            <Footer/>
        </>
    )
}
