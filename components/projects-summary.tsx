import Link from 'next/link'

interface ProjectItem {
    anchor: string
    thumbnail: string
    summary: string
    slug: string

}

interface ProjectSummaryProps {
    projects: ProjectItem[]
}

function ProjectSummary({ projects }: ProjectSummaryProps) {
    return (
        <section className="projects-summary-container">
            <div className="projects-summary-title">
                <h1>My Projects:</h1>
            </div>
            <div className="projects-summary">
                <ul className="projects-summary-list">
                    {projects.map((project) => {
                        return (
                            <li key={project.slug}>
                                <div className="summary-image-container">
                                    <img
                                        id=""
                                        src={project.thumbnail}
                                        alt=""
                                        className="summary-image"
                                    />
                                </div>
                                <div className="summary-anchor-link">
                                    <Link
                                        href={`#${project.anchor}`}
                                        scroll={false}
                                    >
                                        {project.summary}
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default ProjectSummary
