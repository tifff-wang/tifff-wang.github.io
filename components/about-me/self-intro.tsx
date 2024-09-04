import Image from 'next/image'
import { motion } from 'framer-motion'

function SelfIntroSection({ mousePosition }) {
    const { x, y } = mousePosition
    return (
        <div className="gallery">
            <div className="gallery-background self-intro-container">
                <div className="self-intro">
                    <p>
                        {' '}
                        Hello 👋! I'm Tiff, a junior full-stack developer with a
                        passion for building engaging web applications.
                    </p>
                    <p>
                        {' '}
                        My journey into the world of tech has been quite unique,
                        transitioning from a background in early childhood
                        education and studies in accounting and digital design.
                    </p>
                    <p>
                        This diverse experience has enriched my approach to
                        software development, especially in communication,
                        creativity, problem solving, and understanding user's
                        needs.
                    </p>
                </div>
                <p></p>
            </div>

            <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/general/vignette.jpg`}
                    alt="image"
                    fill
                />
            </motion.div>
        </div>
    )
}

export default SelfIntroSection
