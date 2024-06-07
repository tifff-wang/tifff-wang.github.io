'use client'

function Navbar() {
    return (
        <nav id="navigation">
            <section className="nav-section">
                <div className="left-section">
                    <a href="/">
                        <img
                            className="logo"
                            src="/images/logo.png"
                            alt="Tiff's personal logo"
                        />
                    </a>
                </div>

                <div className="right-section">
                    <ul id="navbar-list">
                        <li>
                            <a href="/project">
                                MyProjects<span className="brackets">()</span>
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                About<span className="brackets">()</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contact<span className="brackets">()</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
