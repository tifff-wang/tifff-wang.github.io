export function formatDate(input: string | number): string {
    const date = new Date(input)
    return date.toLocaleDateString('en-AU', {
        year: 'numeric',
        month: 'long',
    })
}

interface HasDate {
    date: Date
}

// export function sortProjects<T extends HasDate>(items: Array<T>): Array<T> {
//     return items.sort((a, b) => {
//         if (a.date > b.date) return -1
//         if (a.date < b.date) return 1
//         return 0
//     })
// }

export function sortProjects<T extends { date: string }>(items: Array<T>): Array<T> {
    return items.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
    })
}
