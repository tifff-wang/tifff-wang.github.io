'use client'

import React, { useState } from 'react'

const BackToTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <aside>
            <button
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
            >
                back to top
            </button>
        </aside>
    )
}

export default BackToTopButton
