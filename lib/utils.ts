import { Project } from '#site/content'

export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
    })
}

export function sortProjects(projects: Array<Project>) {
    return projects.sort((a, b) => {
        if (a.date > b.date) return -1
        if (a.date < b.date) return 1
        return 0
    })
}
