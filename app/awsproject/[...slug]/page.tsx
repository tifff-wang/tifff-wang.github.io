import { awsprojects } from '#site/content'
import BackToTopButton from '@/components/back-to-top-button'
import { MDXContent } from '@/components/mdx-component'
import { notFound } from 'next/navigation'

interface AWSProjectPageProps {
    params: {
        slug: string[]
    }
}

export async function getAWSProjectFromParams(
    params: AWSProjectPageProps['params']
) {
    const slug = params?.slug?.join('/')
    const awsproject = awsprojects.find(
        (project) => project.slugAsParams === slug
    )

    return awsproject
}

export async function generateStaticParams(): Promise<
    AWSProjectPageProps['params'][]
> {
    return awsprojects.map((project) => ({
        slug: project.slugAsParams.split('/'),
    }))
}

async function AWSProjectPage({ params }: AWSProjectPageProps) {
    const awsProject = await getAWSProjectFromParams(params)

    if (!awsProject || !awsProject.published) {
        notFound()
    }

    return (
        <>
            <article className="project-content">
                <MDXContent code={awsProject.code} />
                <hr />
            </article>
            <BackToTopButton />
        </>
    )
}

export default AWSProjectPage
