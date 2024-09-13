import Image from 'next/image'
import { motion } from 'framer-motion'
import { skills } from '../../lib/constants'

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03 * i,
            duration: 0.2,
        },
    }),
}

function TechSkillsSection({ mousePosition }) {
    const { x, y } = mousePosition

    return (
        <section className="gallery">
            <div className="gallery-background tech-skills-container">
                <div className="tech-skills">
                    <h1>My Tech Skills</h1>
                    <ul>
                        {skills.map((skill, i) => (
                            <motion.li
                                key={i}
                                variants={fadeInAnimation}
                                initial="initial"
                                whileInView="animate"
                                custom={i}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <p></p>
            </div>

            <motion.div className="gallery-vignette" style={{ x, y }}>
                <Image
                    src={`/images/about-me/tech-skill/vignette.jpg`}
                    alt="image"
                    fill
                    priority
                />
            </motion.div>
        </section>
    )
}

export default TechSkillsSection
