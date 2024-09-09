'use client'
import Image from 'next/image'
import { funFactsData } from '@/lib/data'
import { motion, useScroll } from 'framer-motion'
import FunFactsCard from './fun-facts-card'
import { useRef } from 'react'

function FunFactsSection({ mousePosition }) {
    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    })

    const { x, y } = mousePosition
    return (
        <section className="gallery fun-fact-gallery">
            <div className="gallery-background fun-facts-container">
                <div ref={container} className="fun-facts">
                    <h1>When I'm not working, I love...</h1>
                    {funFactsData.map((project, i) => {
                        const scaleRange = [i * 0.25, 1]
                        const scaleAmount = 1 - (funFactsData.length - i) * 0.04

                        return (
                            <FunFactsCard
                                key={i}
                                {...project}
                                i={i}
                                scrollYProgress={scrollYProgress}
                                scaleRange={scaleRange}
                                scaleAmount={scaleAmount}
                            />
                        )
                    })}
                </div>
            </div>

            {/* <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/fun-facts/vignette.jpg`}
                    alt="image"
                    fill
                />
            </motion.div> */}
        </section>
    )
}

export default FunFactsSection
