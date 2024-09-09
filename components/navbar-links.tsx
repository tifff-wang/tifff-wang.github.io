import { useState } from 'react'
import ContactDropdown from './contact-dropdown'
import ContactMethods from './contact-methods'

function NavbarLinks() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className="hamburger-menu">
                <div className="hamburger-icon-container" onClick={toggleMenu}>
                    <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <a href="/project" className="navbar-link">
                        MyProjects<span className="brackets">()</span>
                    </a>

                    <a href="/about" className="navbar-link">
                        AboutMe<span className="brackets">()</span>
                    </a>
                    <div className="mobile-menu-contact">
                        <ContactMethods />
                    </div>
                </div>
            </div>
            <div className="navbar-links-container">
                <a href="/project" className="navbar-link">
                    MyProjects<span className="brackets">()</span>
                </a>

                <a href="/about" className="navbar-link">
                    AboutMe<span className="brackets">()</span>
                </a>

                <ContactDropdown />
            </div>
        </>
    )
}

export default NavbarLinks
