import ContactMethods from '@/components/contact-methods'
import PixelCover from '@/components/pixel-cover'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <PixelCover />
            <section id="hero">
                <div className="tiff-portfolio-text-container">
                    <div className="title-container">
                        <div>
                            <h1 className="color-change-text">Tiff's</h1>
                        </div>
                        <div className="short-intro">
                            <h2>
                                Hey, I'm Tiff! I'm a full stack software
                                developer!
                            </h2>
                        </div>
                    </div>
                    <div className="portfolio-text-container">
                        <h1 className="portfolio-text">
                            P
                            <span className="replace-o">
                                <img
                                    src="/images/profile.png"
                                    className="profile-image"
                                />
                            </span>
                            RTFOLIO
                        </h1>
                    </div>
                </div>

                <div className="buttons-container">
                    <div className="button-container">
                        <div className="hero-section-button-animate"></div>
                        <div className="hero-section-button">
                            <Link href="/project">MyProjects()</Link>
                        </div>
                    </div>
                    <div className="button-container">
                        <div className="hero-section-button-animate about-me-animate"></div>
                        <div className="hero-section-button about-me">
                            <Link href="/about" className="about-me-button">
                                AboutMe()
                            </Link>
                        </div>
                    </div>
                </div>
                <ContactMethods />
            </section>
        </>
    )
}
