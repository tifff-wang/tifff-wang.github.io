import { projects } from '#site/content'
import ProjectItem from '@/components/project-item'
import ProjectSummary from '@/components/projects-summary'
import { sortProjects } from '@/lib/utils'
import Link from 'next/link'

async function ProjectPage() {
    const sortedProjects = sortProjects(
        projects.filter((project) => project.published)
    )
    const displayProjects = sortedProjects

    return (
        <>
            <div className="projects-container">
                <ProjectSummary projects={displayProjects} />
                {displayProjects?.length > 0 ? (
                    <ul className="project-list">
                        {displayProjects.map((project, index) => {
                            return (
                                <li key={project.slug}>
                                    <ProjectItem
                                        slug={project.slug}
                                        date={project.date}
                                        description={project.description}
                                        stacks={project.stacks}
                                        title={project.title}
                                        website={project.website}
                                        github={project.github}
                                        cover={project.cover}
                                        index={index}
                                        anchor={project.anchor}
                                    />
                                    <aside>
                                        <a href="#top" >
                                            <button>back to top</button>
                                        </a>
                                    </aside>
                                </li>
                            )
                        })}
                    </ul>
                ) : (
                    <p>Project in progress</p>
                )}
            </div>
        </>
    )
}

export default ProjectPage
