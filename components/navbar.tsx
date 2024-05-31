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
                            <a href="/project">My Works</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}

export default Navbar
