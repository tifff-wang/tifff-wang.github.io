import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import StackList from './stack-list'

interface AWSProjectItemProps {
    slug: string
    title: string
    date: string
    cover: string
    services: string
    index: number
}

function AWSProjectItem(props: AWSProjectItemProps) {
    const { slug, title, date, cover, services, index } = props

    return (
        <article className="aws-project-item-container">
            <div className="aws-img-container">
                <Link href={slug}>
                    <img
                        className="aws-project-image"
                        id=""
                        src={cover}
                        alt=""
                    />
                </Link>
            </div>

            <div className="aws-project-info-container">
                <div className="aws-info-container">
                    <StackList stacks={services} />
                </div>
            </div>
        </article>
    )
}

export default AWSProjectItem
