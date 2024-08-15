'use client'
import AboutMeSection from '../../components/about-me/about-me-section'
import { useSpring } from 'framer-motion'

const aboutMe = [
    {
        section: 'general',
    },
    {
        section: 'tech-skill',
    },
    {
        section: 'hobbie',
    },
]

function AboutPage() {
    const spring = {
        stiffness: 100,
        damping: 15,
        mass: 0.1,
    }

    const mousePosition = {
        x: useSpring(0, spring),
        y: useSpring(0, spring),
    }

    const mouseMove = (e) => {
        const { clientX, clientY } = e
        const targetX = clientX - (window.innerWidth / 3) * 0.25
        const targetY = clientY - (window.innerWidth / 3) * 0.3
        mousePosition.x.set(targetX)
        mousePosition.y.set(targetY)
    }

    return (
        <section onMouseMove={mouseMove} className="about-me">
            {aboutMe.map(({ section }, i) => {
                return (
                    <AboutMeSection
                        mousePosition={mousePosition}
                        section={section}
                        key={i}
                    />
                )
            })}
        </section>
    )
}

export default AboutPage
