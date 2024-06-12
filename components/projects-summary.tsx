import Link from 'next/link'
import StackList from './stack-list'


interface ProjectItem {
    anchor: string
    thumbnail: string
    summary: string
    slug: string
    stacks: string
}

interface ProjectSummaryProps {
    projects: ProjectItem[]
}

function ProjectSummary({ projects }: ProjectSummaryProps) {
    return (
        <section className="projects-summary-container" id="top">
            <div className="projects-summary-title">
                <h1>My Projects:</h1>
            </div>
            <div className="projects-summary">
                <ul className="projects-summary-list">
                    {projects.map((project) => {
                        return (
                            <li key={project.slug}>
                                <div className="summary-image-container">
                                    <Link href={`/project/#${project.anchor}`}>
                                        <img
                                            id=""
                                            src={project.thumbnail}
                                            alt=""
                                            className="summary-image"
                                        />
                                    </Link>
                                </div>
                                <div className="summary-anchor-link">
                                    <Link href={`/project/#${project.anchor}`}>
                                        {project.summary}
                                    </Link>
                                </div>
                                <StackList stacks={project.stacks} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ProjectSummary
