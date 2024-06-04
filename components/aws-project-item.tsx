import { formatDate } from '@/lib/utils'
import Link from 'next/link'

interface AWSProjectItemProps {
    slug: string
    title: string
    date: string
    cover: string
    services: string
    index: number
}

function AWSProjectItem(props: AWSProjectItemProps) {
    const {
        slug,
        title,
        date,
        cover,
        services,
        index,
    } = props

    return (
        <article className="aws-project-item-container">
            <div className="aws-img-container">
                <img className="aws-project-image" id="" src={cover} alt="" />
            </div>

            <div className="aws-project-info-container">
                <div>
                    <p className="aws-date">{formatDate(date)}</p>
                    <h2 className="aws-project-title">{title}</h2>
                    <p className="aws-stacks">
                        <i>{services}</i>
                    </p>
                </div>
                <div className="aws-project-links-container">
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

export default AWSProjectItem
