function MainContent() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/main.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">Create: Milkyway</h1> 
                <h3 className="main-image-container-subtext">A semi-hardcore Create modpack... With a twist!</h3> 
            </div>
            <div className="main-content-image-repeat">
                <div className="main-content-text">
                    <div className="mct-logo">
                        <img src="favicon.jpg"></img>
                    </div>
                    <div className="mct-text">
                        <h1>Create: Milkyway</h1>
                        <h3>A Minecraft Modpack developed & maintained by Pouffy</h3>   
                        <p>This modpack is based around the Create mod, and it was originally developed for the <a href="/community-server">MilkywaySMP</a>. This modpack is built to have fun with friends and build awesome factories, and we work close with our community to create custom production-lines and custom recipes. If you want to be part of the Milkyway community, consider joining our <a href="https://discord.gg/DyDrykhDNU">Discord Server</a>, or checking out the <a href="/community">Community page</a>.</p>
                        <p>We have decided to enable singleplayer compatibility so the community server is now optional. (Multiplayer is still better)</p>
                    </div>
                </div>
                <div className="main-content-download">
                    <h1>Downloads</h1>
                    <p>Our modpack can currently be downloaded on these platforms: </p>
                    <form action="https://www.curseforge.com/minecraft/modpacks/milkyway" method="get" target="_blank">
                        <button type="submit">
                            Curseforge 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="link-open-icon bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                            </svg>
                        </button>
                    </form>
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