import Image from 'next/image'
import { motion } from 'framer-motion'

function FunFactsSection({ mousePosition }) {
    const { x, y } = mousePosition
    return (
        <section className="gallery">
            <div className="gallery-background fun-facts-container"></div>

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
