function MainContent() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/main.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">Create: Milkyway</h1> 
                <h3 className="main-image-container-subtext">A semi-hardcore Create modpack... With a twist!</h3> 
            </div>
            <div className="main-content-text">
                <div className="mct-logo">
                    <img src="favicon.jpg"></img>
                </div>
                <div className="mct-text">
                    <h1>Create: Milkyway</h1>
                    <h3>A Minecraft Modpack developed & maintained by Pouffy</h3>   
                    <p>This modpack is based around Create and was originally developed for the <a href="/community-server">MilkywaySMP</a>. This modpack is built to have fun with friends and build awesome factories. We work close with our community to create custom production-lines and custom recipes. If you want to be part of the Milkyway community, consider joining our <a href="https://discord.gg/DyDrykhDNU">Discord Server</a>, or checking out the <a href="/community">Community page</a>.</p>
                    <p>We have decided to enable singleplayer compatibility so the community server is now optional. (Multiplayer is still better)</p>
                </div>
                <div className="mct-download">
                    <h1>Downloads</h1>
                    <p>Our pack can currently be downloaded on these platforms: </p>
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