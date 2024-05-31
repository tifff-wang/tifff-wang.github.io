import { formatDate } from '@/lib/utils'
import Link from 'next/link'

interface ProjectItemProps {
    slug: string
    title: string
    description?: string
    date: string
    cover: string
    stacks: string
    website: string
    github: string
}

function ProjectItem(props: ProjectItemProps) {
    const { slug, title, description, date, cover, stacks, website, github } =
        props

    return (
        <article className="project-item-container">
            <div className="img-wrapper">
                <img className="project-image" id="" src={cover} alt="" />
            </div>

            <div className="project-info-container">
                <div>
                    <p className="date">{formatDate(date)}</p>
                    <h2 className="project-title">{title}</h2>
                    <p className="project-description">{description}</p>
                    <p className="stacks">
                        <i>{stacks}</i>
                    </p>
                </div>
                <div className="project-links-container">
                    {/* <div>
                        <Link href={slug} className="view-more">
                            View More
                        </Link>
                    </div> */}
                    <div className="links-icons-container">
                        <Link href={website} target="_blank">
                            <img
                                className="host-icon"
                                src="icons/host-icon.svg"
                                alt="website logo"
                            />
                        </Link>

                        <Link href={github} target="_blank">
                            <img
                                className="project-icon"
                                src="icons/github-icon.png"
                                alt="github logo"
                            />
                        </Link>
                    </div>

                    <Link
                        href={slug}
                        className="btn-animate btn-animate__around-2"
                    >
                        <svg xmlns="#">
                            <rect height="100%" width="100%"></rect>
                        </svg>
                        View More
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem
