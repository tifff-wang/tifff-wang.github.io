import { projects } from '#site/content'
import BackButton from '@/components/back-button'
import BackToTopButton from '@/components/back-to-top-button'
import { MDXContent } from '@/components/mdx-component'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
    params: {
        slug: string[]
    }
}

export async function getProjectFromParams(params: ProjectPageProps['params']) {
    const slug = params?.slug?.join('/')
    const project = projects.find((project) => project.slugAsParams === slug)

    return project
}

export async function generateStaticParams(): Promise<
    ProjectPageProps['params'][]
> {
    return projects.map((project) => ({
        slug: project.slugAsParams.split('/'),
    }))
}

async function ProjectPage({ params }: ProjectPageProps) {
    const project = await getProjectFromParams(params)

    if (!project || !project.published) {
        notFound()
    }

    return (
        <>
            <BackButton />
            <article className="project-content">
                <MDXContent code={project.code} />
                <hr />
            </article>
            <BackToTopButton />
        </>
    )
}

export default ProjectPage
