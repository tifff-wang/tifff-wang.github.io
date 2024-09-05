'use client'
import Image from 'next/image'
import { funFactsData } from '@/lib/data'
import { motion } from 'framer-motion'
import FunFactsCard from './fun-facts-card'

function FunFactsSection({ mousePosition }) {
    const { x, y } = mousePosition
    return (
        <section className="gallery fun-fact-gallery">
            <div className="gallery-background fun-facts-container">
                <div className="main">
                    <h1>Some fun facts</h1>
                    {funFactsData.map((project, i) => {
                        return <FunFactsCard key={i} {...project} i={i} />
                    })}
                </div>
            </div>

            <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/fun-facts/vignette.jpg`}
                    alt="image"
                    fill
                />
            </motion.div>
        </section>
    )
}

export default FunFactsSection
