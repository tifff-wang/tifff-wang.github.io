import { awsprojects } from '#site/content'
import AWSProjectItem from '@/components/aws-project-item'

async function AWSProjectPage() {
    const sortedProjects = awsprojects.filter((project) => project.published)

    return (
        <div className="aws-projects-container">
            {sortedProjects?.length > 0 ? (
                <ul className="aws-project-list">
                    {sortedProjects.map((project, index) => {
                        const { slug, date, title, services, cover } = project
                        return (
                            <li key={slug}>
                                <AWSProjectItem
                                    slug={slug}
                                    date={date}
                                    services={services}
                                    title={title}
                                    cover={cover}
                                    index={index}
                                />
                            </li>
                        )
                    })}
                </ul>
            ) : (
                <p>AWS Project in progress</p>
            )}
        </div>
    )
}

export default AWSProjectPage
