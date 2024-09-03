import Image from 'next/image'
import { motion } from 'framer-motion'

function SelfIntroSection({ mousePosition }) {
    const { x, y } = mousePosition
    return (
        <div className="gallery">
            <div className="gallery-background self-intro-container">
                <p className="self-intro">
                    Hello 👋! I'm Tiff, a junior full-stack developer with a
                    passion for building engaging web applications. My journey
                    into the world of tech has been quite unique, transitioning
                    from a background in early childhood{' '}
                    <span style={{ color: 'rgb(233, 160, 255)', fontWeight:"bolder"}}>
                        education 
                    </span>
                     and studies in <span style={{ color: 'rgb(233, 160, 255)', fontWeight:"bolder"}}></span>accounting and digital design. This
                    diverse experience has enriched my approach to software
                    development, especially in communication, creativity, problem solving, and understanding user's needs.
                </p>
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
