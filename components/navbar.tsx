'use client'

import NavbarLinks from './navbar-links'

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

                <NavbarLinks />
            </section>
        </nav>
    )
}

export default Navbar
