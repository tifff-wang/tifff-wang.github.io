'use client'

import React, { useEffect, useState } from 'react'

export function BackToTopButton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    useEffect(() => {
        // Ensures this code block only runs on the client side
        window.addEventListener('scroll', toggleVisible)

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', toggleVisible)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <aside>
            <button
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            >
                ^Top
            </button>
        </aside>
    )
}


