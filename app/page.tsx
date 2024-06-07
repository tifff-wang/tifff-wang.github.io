import { projects } from '@/.velite'
import PostItem from '@/components/project-item'
import { sortProjects } from '@/lib/utils'
import Link from 'next/link'

export default function Home() {
    const sortedProjects = sortProjects(
        projects.filter((project) => project.published)
    )
    return (
        <>
            <section id="hero">
                <div>
                    <h1>
                        <span>Tiff'</span>s<span id="tech">TECH</span> PORTFOLIO
                    </h1>

                    <h2>Hey, I'm Tiff! I'm a full stack software developer!</h2>
                </div>

                <div className="buttons-container">
                    <div className="button-container">
                        <div className="hero-section-button-animate"></div>
                        <div className="hero-section-button">
                            <Link href="/project" target="_blank">
                                MyProjects()
                            </Link>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="hero-section-button-animate about-me-animate"></div>
                        <div className="hero-section-button about-me">
                            <Link
                                href="/about"
                                className="about-me-button"
                                target="_blank"
                            >
                                AboutMe()
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="contact-icons-container">
                    <a href="mailto:thiffanyjun@hotmail.com">
                        <img
                            className="contact-icon"
                            src="/icons/mail-icon.png"
                            alt="an email icon"
                        />
                    </a>
                    <a href="https://github.com/tifff-wang" target="_blank">
                        <img
                            className="contact-icon"
                            src="/icons/github-icon.png"
                            alt="a Github icon"
                        />
                    </a>
                    <a
                        href="https://linkedin.com/in/tifff-wang"
                        target="_blank"
                    >
                        <img
                            className="contact-icon"
                            src="/icons/linkedin-icon.png"
                            alt="a Linkedin icon"
                        />
                    </a>
                </div>
                <hr />
            </section>
        </>
    )
}
