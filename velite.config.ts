import { defineConfig, defineCollection, s } from 'velite'

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const projects = defineCollection({
    name: 'Project',
    pattern: 'project/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path(),
            description: s.string().max(999).optional(),
            date: s.isodate(),
            cover: s.string(),
            stacks: s.string(),
            website: s.string(),
            github: s.string(),
            metadata: s.metadata(),
            excerpt: s.excerpt(),
            content: s.markdown(),
            published: s.boolean().default(true),
            code: s.mdx(),
        })
        .transform(computedFields),
})

const awsprojects = defineCollection({
    name: 'awsproject',
    pattern: 'awsproject/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path(),
            date: s.isodate(),
            cover: s.string(),
            services: s.string(),
            metadata: s.metadata(),
            excerpt: s.excerpt(),
            content: s.markdown(),
            published: s.boolean().default(true),
            code: s.mdx(),
        })
        .transform(computedFields),
})

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },
    collections: { projects, awsprojects },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    },
})
