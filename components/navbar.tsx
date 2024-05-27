function Navbar() {
    return (
        <nav id="navigation">
            <section className="nav-section">
                <div className="left-section">
                    <a href="index.html">
                        <img
                            className="logo"
                            src="images/logo.png"
                            alt="Tiff's personal logo"
                        />
                    </a>
                </div>

                <div className="right-section">
                    <ul id="navbar-list">
                        <li>
                            <a href="#project-container">My Works</a>
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
