'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const pixelAnimation = {
    initial: {
        opacity: 1,
    },

    open: (index: number) => ({
        opacity: 1,
        transition: { duration: 0, delay: 0.02 * index },
    }),

    closed: (index: number) => ({
        opacity: 0,
        transition: { duration: 0, delay: 0.02 * index },
    }),
}

function PixelCover() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 500)
    }, [])

    const getPixelBlocks = () => {
        const { width, height } = useWindowDimensions()

        if (width == 0 || height == 0) {
            return <div className="pixel-background"></div>
        }

        const pixelSize = width * 0.05
        const amountOfPixels = Math.ceil(height / pixelSize)
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
                return (
                    <div key={i} className="pixel-column">
                        {getPixelBlocks()}
                    </div>
                )
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
