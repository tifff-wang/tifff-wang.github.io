'use client'
import SelfIntroSection from '@/components/about-me/self-intro'
import { useSpring } from 'framer-motion'
import TechSkillsSection from '@/components/about-me/tech-skills'
import FunFactsSection from '@/components/about-me/fun-facts'

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
        const targetX = clientX - (window.innerWidth / 3) * 0.4
        const targetY = clientY - (window.innerWidth / 3) * 0.6
        mousePosition.x.set(targetX)
        mousePosition.y.set(targetY)
    }

    return (
        <section onMouseMove={mouseMove} className="about-me">
            <SelfIntroSection mousePosition={mousePosition} />
            <TechSkillsSection mousePosition={mousePosition} />
            <FunFactsSection mousePosition={mousePosition} />
        </section>
    )
}

export default AboutPage
