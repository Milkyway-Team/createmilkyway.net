function MainContent() {
    return (
        <div className="main-content">
            
            <h1>Nothing too see here :P (yet)</h1>  
            <p className="btm-text">Copyright 2023 Milkyway Communtity ©</p>
        </div>
    )
}

function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li><a className="navbar-item active" href="">Create: Milkyway</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="community">Community</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="community-server">Community Server</a></li>
                <li><a className="navbar-item nb-hide-on-mobile" href="about">About</a></li>
                <li><button className="nb-button-menu"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button></li>
            </ul>
        </div>
    )
}

function Homepage() {
    return (
        <div className="Homepage">
            <NavBar />
            <MainContent />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Homepage />);