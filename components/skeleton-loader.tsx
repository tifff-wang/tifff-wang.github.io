'use client'

import { useEffect, useState } from 'react'

function SkeletonLoader({ children, loadingTime = 2000 }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, loadingTime)
        }
    }, [loading])

    if (loading) {
        return <div className="skeleton-box"></div>
    }

    return <div>{children}</div>
}

export default SkeletonLoader
