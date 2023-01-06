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
                <li><a className="navbar-item" href="community">Community</a></li>
                <li><a className="navbar-item" href="community-server">Community Server</a></li>
                <li><a className="navbar-item" href="about">About</a></li>
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