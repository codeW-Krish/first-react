import './Nav.css'

function Nav() {
  return (
    <div className="nav">
        <div className="logo-img">
          <a href="/" className="nav-logo">EV-olution</a>
        </div>

        <nav className='navbar'>
            <a href="/">Home</a>            
            <a href="/explore">Explore</a>            
            <a href="/about">About</a>            
            <a href="/contect" className ="nav-contact">Contect</a>            
        </nav>
    </div>
  )
}

export default Nav