function Footer() {
    return (
        <>
            <footer id="contact">
                <h3>Contact Me</h3>
                <p className="contact-message">
                    Keen to share your thoughts with me?
                    <br />
                    Feel free to contact me through email or social media.
                </p>

                <div className="contact-icons-wrapper">
                    <a href="mailto:thiffanyjun@hotmail.com">
                        <img
                            className="contact-icon"
                            src="icons/mail-icon.png"
                            alt="an email icon"
                        />
                    </a>
                    <a href="https://github.com/tifff-wang" target="_blank">
                        <img
                            className="contact-icon"
                            src="icons/github-icon.png"
                            alt="a Github icon"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tiff-wang-512887274/"
                        target="_blank"
                    >
                        <img
                            className="contact-icon"
                            src="icons/linkedin-icon.png"
                            alt="a Linkedin icon"
                        />
                    </a>
                </div>
                <div className="copyright">
                    <p>©Copyright 2023 by Tiffany Wang. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
