import ContactDropdown from "./contact-dropdown";

function NavbarLinks() {
  return (
      <div className="navbar-links-container">
          <a href="/project" className="navbar-link">
              MyProjects<span className="brackets">()</span>
          </a>

          <a href="/about" className="navbar-link">
              About<span className="brackets">()</span>
          </a>

          <ContactDropdown />
      </div>
  )
}

export default NavbarLinks