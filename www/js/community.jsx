function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li className="liul"><a className="navbar-item active" href="/">Create: Milkyway</a></li>
                <li className="liul"><a className="navbar-item nb-hide-on-mobile" href="community">Community</a></li>
                <li className="liul"><a className="navbar-item nb-hide-on-mobile" href="community-server">Community Server</a></li>
                <li className="liul"><a className="navbar-item nb-hide-on-mobile" href="about">About</a></li>
                <li className="liul"><button className="nb-button-menu"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button></li>
            </ul>
        </div>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/community.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">Milkyway Community</h1> 
                <h3 className="main-image-container-subtext">Be a part of this modpack</h3> 
            </div>
            <div className="main-content-image-repeat">
                <div className="mc-main">
                    <h1>The Milkyway Community</h1>
                </div>
            </div>
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