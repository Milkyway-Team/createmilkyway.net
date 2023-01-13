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

function About() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/about.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">About Create: Milkyway</h1> 
                <h3 className="main-image-container-subtext">Who is behind this project?</h3> 
            </div>
            <div className="main-content-image-repeat">
                <div className="about-main">
                    <h1>Who created all this?</h1>
                    <p>Initially (MilkFur#1566) and Pouffy (Pouffy#5186) created the Modpack, and soon published this to Curseforge for the <a href="/community-server">MilkywaySMP</a>. The pack quickly gained attention on Reddit and many people joined the community.
</p>
                    <p>Pouffy is now working actively on this pack to make it better and to finish it. The pack is currently not finished, but a big thanks to the contributors that help develop this pack besides Pouffy.</p>
                    <p>I you want to support this massive project, consider donating to <a href="https://www.patreon.com/Pouffy">Pouffy's Patreon</a> or boosting the <a href="https://discord.gg/DyDrykhDNU">Discord Server</a></p>
                    <h1>A big thanks to all the contributors and Pouffy on GitHub ❤</h1>
                    <h3>List of contributors on GitHub: </h3>
                    <ul>
                        <li>Kirgirbir - kirgirbir#7653</li>
                        <li>iHouqLF - iHouqLF#8910</li>
                        <li>Adrikikicp - !! Adrikikicp#9212</li>
                        <li>SkyJay1</li>
                        <li>Svein - Svein#6372</li>
                    </ul>
                    <h1>A big thanks to all other people in the Community ❤</h1>
                </div>
            </div>
        </div>
    )
}

function Aboutpage() {
    return (
        <div className="Homepage">
            <NavBar />
            <About />
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Aboutpage />);