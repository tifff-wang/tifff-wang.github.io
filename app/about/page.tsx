import Link from 'next/link'

async function AboutPage() {
    return (
        <section className="about-me-section-container">
            <h1>About Me</h1>
            <div className="about-me-container">
                <div className="profile-image-container">
                    <img
                        src="/images/about-me.jpg"
                        alt="Tiff with her cat"
                        className="profile-image"
                    />
                </div>
                <div className="self-intro">
                    <p>
                        Hello 👋! I'm a junior full-stack web developer with a
                        passion for building engaging web applications. My
                        journey into the world of tech has been quite unique,
                        transitioning from a background in early childhood
                        education and studies in accounting and digital design.
                        This diverse experience has enriched my approach to
                        software development, especially in understanding user
                        needs and enhancing user experience.
                        <br />
                        <br />I am proficient in a range of technologies
                        including{' '}
                        <strong>
                            TypeScript, React, Node.js, .NET, RESTful APIs, and
                            AWS Cloud
                        </strong>
                        , and I am eager to continue learning and growing in
                        this ever-evolving field, and collaborating with people
                        to create impactful things ✨.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutPage
