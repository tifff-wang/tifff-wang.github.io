import Image from 'next/image'
import { motion } from 'framer-motion'

function SelfIntroSection({ mousePosition }) {
    const { x, y } = mousePosition
    return (
        <section className="gallery">
            <div className="gallery-background self-intro-container">
                <div className="self-intro">
                    <p>Hello 👋! I'm Tiff,</p>
                    <span className="first-sentence">
                        a
                        <div className="rotating-words">
                            <span>curious</span>
                            <span>communicative</span>
                            <span>creative</span>
                            <span>proactive</span>
                            <span>artistic</span>
                        </div>
                        full-stack developer.
                    </span>
                    <p>
                        My journey into the world of tech has been quite unique,
                        transitioning from a background in early childhood
                        education and studies in accounting and digital design.
                    </p>
                    <p>
                        This diverse experience has enriched my approach to
                        software development, especially in communication,
                        creativity, problem solving, and collaboration with
                        cross-functional teams. I am eager to continue learning
                        and growing in this ever-evolving field, and
                        collaborating with people to create engaging web
                        applications that positively impact people's lives ✨.
                    </p>
                </div>
            </div>

            <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/self-intro/vignette.jpg`}
                    alt="image"
                    fill
                    priority
                />
            </motion.div>
        </section>
    )
}

export default SelfIntroSection
