function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li><a className="navbar-item active" href="">Create: Milkyway</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="community">Community</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="community-server">Community Server</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="about">About</a></li>
                <li><button className="nb-button-menu"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button></li>
            </ul>
        </div>
    )
}