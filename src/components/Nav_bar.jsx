import './Nav_bar.css'

function Nav_bar(){
    return(
      <div>
        <header className="header">
        <div className="logoimg">
          <a href="/" className="logo">Logo</a>
        </div>

        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      </div>
    )
}
export default Nav_bar