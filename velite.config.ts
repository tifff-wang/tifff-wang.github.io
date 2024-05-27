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
            cover: s.image(),
            video: s.file().optional(),
            metadata: s.metadata(),
            excerpt: s.excerpt(),
            content: s.markdown(),
            published: s.boolean().default(true),
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
    collections: { projects },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    },
})
