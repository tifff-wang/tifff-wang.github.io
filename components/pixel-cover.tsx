'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const pixelAnimation = {
    initial: {
        opacity: 1,
    },

    open: (index: number) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.03 * index },
    }),

    closed: (index: number) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.03 * index },
    }),
}

function PixelCover() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 1000)
    }, [])

    const getPixelBlocks = () => {
        const { innerWidth, innerHeight } = window
        const pixelSize = innerWidth * 0.04
        const amountOfPixels = Math.ceil(innerHeight / pixelSize)
        const pixelRadomDelays = shuffle(
            [...Array(amountOfPixels)].map((pixel, index) => index)
        )
        return pixelRadomDelays.map((randomDelay, index) => {
            return (
                <motion.div
                    key={index}
                    className="pixel-block"
                    variants={pixelAnimation}
                    initial="initial"
                    animate={isVisible ? 'open' : 'closed'}
                    custom={randomDelay}
                ></motion.div>
            )
        })
    }

    return (
        <div className="pixel-background-container">
            {[...Array(25)].map((_, i) => {
                return <div className="pixel-column">{getPixelBlocks()}</div>
            })}
        </div>
    )
}

export default PixelCover

const shuffle = (a) => {
    var j, x, i
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        x = a[i]
        a[i] = a[j]
        a[j] = x
    }

    return a
}
