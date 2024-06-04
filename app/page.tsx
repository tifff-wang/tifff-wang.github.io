import { projects } from '@/.velite'
import PostItem from '@/components/project-item'
import { sortProjects } from '@/lib/utils'

export default function Home() {
    const sortedProjects = sortProjects(
        projects.filter((project) => project.published)
    )
    return (
        <>
            <section id="hero">
                <h1>
                    <span>Tiff'</span>s<span id="tech">TECH</span> PORTFOLIO
                </h1>

                <h2>Hey, I'm Tiff! I'm a full stack software developer!</h2>

                <div id="buttons-container">
                    {/* <a
                        href="https://github.com/tifff-wang"
                        id="github-button"
                        target="_blank"
                    >
                        My Github
                    </a> */}
                    <a href="/project" id="github-button" target="_blank">
                        My Projects
                    </a>
                    {/* <a
                        href="https://drive.google.com/file/d/14wbq_boUuivqSpx_6mYn4skL99_wDf37/view?usp=sharing"
                        id="resume-button"
                        target="_blank"
                    >
                        My Resume
                    </a> */}
                    <a href="/about" id="resume-button" target="_blank">
                        About Me
                    </a>
                </div>
                <div className="contact-icons-wrapper">
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
