import { projects } from '#site/content'
import PostItem from '@/components/project-item'
import { sortProjects } from '@/lib/utils'

async function ProjectPage() {
    const sortedProjects = sortProjects(
        projects.filter((project) => project.published)
    )
    const displayProjects = sortedProjects
    return (
        <div className="projects-container">
            <div>
                <h1>My Projects</h1>
            </div>
            {displayProjects?.length > 0 ? (
                <ul className="project-list">
                    {displayProjects.map((project) => {
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
                                <PostItem
                                    slug={slug}
                                    date={date}
                                    description={description}
                                    stacks={stacks}
                                    title={title}
                                    website={website}
                                    github={github}
                                    cover={cover}
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
