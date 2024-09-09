'use client'

import { useEffect, useState } from 'react'

function SkeletonLoader({ children, loadingTime = 1000 }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, loadingTime)
        }
    }, [loading])

    return (
        <div className={`skeleton-box ${loading ? 'loading' : 'finished'}`}>
            <div
                style={{
                    display: loading ? 'none' : 'block',
                    overflow: 'visible',
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default SkeletonLoader
