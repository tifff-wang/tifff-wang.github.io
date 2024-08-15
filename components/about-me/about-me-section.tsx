import Image from 'next/image'
import { motion } from 'framer-motion'

function AboutMeSection({ mousePosition, section }) {
    const { x, y } = mousePosition
    return (
        <div className="gallery">
            <div className="gallery-background">
                <Image
                    src={`/images/about-me/${section}/background.jpg`}
                    alt="image"
                    fill
                />
            </div>

            <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/${section}/vignette.jpg`}
                    alt="image"
                    fill
                />
            </motion.div>
        </div>
    )
}

export default AboutMeSection
