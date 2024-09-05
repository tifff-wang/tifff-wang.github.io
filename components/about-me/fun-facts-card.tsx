'use client'
import { motion, progress, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const FunFactsCard = ({
    i,
    title,
    description,
    imageUrl,
    color,
    scrollYProgress,
    scaleRange,
    scaleAmount,
}) => {
    const container = useRef(null)
    const scale = useTransform(scrollYProgress, scaleRange, [1, scaleAmount])

    return (
        <div
            ref={container}
            className="card-container"
            style={{ top: `calc(${i * 50}px)` }}
        >
            <motion.div
                className="card"
                style={{
                    backgroundColor: color,
                    scale,
                }}
            >
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="fun-fact-image-container">
                    <img src={imageUrl} alt="cat image"></img>
                </div>
            </motion.div>
        </div>
    )
}

export default FunFactsCard
