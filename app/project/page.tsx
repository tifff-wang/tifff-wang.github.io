import { projects } from '#site/content'
import ProjectItem from '@/components/project-item'
import ProjectSummary from '@/components/projects-summary'
import { sortProjects } from '@/lib/utils'

async function ProjectPage() {
    const sortedProjects = sortProjects(
        projects.filter((project) => project.published)
    )
    const displayProjects = sortedProjects
    return (
        <div className="projects-container">
            <ProjectSummary projects={displayProjects} />
            {displayProjects?.length > 0 ? (
                <ul className="project-list">
                    {displayProjects.map((project, index) => {
                        const {
                            slug,
                            date,
                            title,
                            description,
                            stacks,
                            website,
                            github,
                            cover,
                        } = project
                        return (
                            <li key={slug}>
                                <ProjectItem
                                    slug={slug}
                                    date={date}
                                    description={description}
                                    stacks={stacks}
                                    title={title}
                                    website={website}
                                    github={github}
                                    cover={cover}
                                    index={index}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>Project in progress</p>
            )}
        </div>
    )
}

export default ProjectPage
