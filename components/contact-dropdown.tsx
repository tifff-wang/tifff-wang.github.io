import { useRef, useState } from 'react'
import ContactMethods from './contact-methods'
import useClickOutside from '@/hooks/useClickOutside'

function ContactDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    useClickOutside(dropdownRef, () => setDropdownOpen(false))
    const handleClick = () => {
        setDropdownOpen(!dropdownOpen)
    }

    return (
        <div className="contact-dropdown-container" ref={dropdownRef}>
            <div onClick={handleClick} className="navbar-link contact-link">
                Contact<span className="brackets">()</span>
            </div>
            {dropdownOpen && (
                <div className="contact-dropdown">
                    <ContactMethods />
                </div>
            )}
        </div>
    )
}

export default ContactDropdown
