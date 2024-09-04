import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.08 * i,
            duration: 0.3,
        },
    }),
}

function TechSkillsSection({ mousePosition }) {
    const { x, y } = mousePosition
    const skills = [
        'HTML',
        'CSS',
        'React',
        'Redux',
        'TypeScript',
        'C#',
        '.NET',
        'Next.js',
        'Node.js',
        'Tailwind',
        'SASS',
        'Git',
        'Express',
        'SQLite3',
        'PostgreSQL',
    ]
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
                    src={`/images/about-me/tech-skill/vignette.png`}
                    alt="image"
                    fill
                />
            </motion.div>
        </section>
    )
}

export default TechSkillsSection
