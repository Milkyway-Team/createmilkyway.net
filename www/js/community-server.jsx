var received_data = false

var online_status = "N/A"
var online_players = "N/A"
var max_players = "N/A"


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

function LoadingIcon() {
    return (
        <svg fill="white" className="l-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"/></svg>
    )
}

function MainContent() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/community-server.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">Community Server</h1> 
                <h3 className="main-image-container-subtext">The official community SMP</h3> 
            </div>
            <div className="main-content-image-repeat">
                <div className="main-content-text">
                    <h1>Community Server</h1>
                    <p>We have a public server for the Milkyway Community where anyone that has interests can play on.</p>
                    <p>You can join the server by joining our Discord server, writing your in-game name into the #minecraft-ign channel and getting the ip from #server-guide.</p>
                    <p>Don't worry about your builds! We have a mods that allows you to claim chunks from griefers, and you can even build with your friends together!</p>
                    <h1>Status: {(received_data) ? <h1> {online_status}</h1> : <LoadingIcon />}</h1>
                    <br></br>
                    <h1>Online players: </h1>
                    {(received_data) ? <h1> {online_players}/{max_players}</h1> : <LoadingIcon />}
                    <br />
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

function NaBadge() {
    return (
        <span class="badge bg-secondary">N/A</span>
    )
}

function OfflineBadge() {
    return (
        <span class="badge bg-danger">Offline</span>
    )
}

function OnlineBadge() {
    return (
        <span class="badge bg-success">Online</span>
    )
}

fetch('/api/server-status')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.status == "cached-result" || data.status == "success") {
            online_status = (data.online) ? <OnlineBadge /> : <OfflineBadge />
            online_players = data["players-online"]
            max_players = data["max-players"]
            received_data = true
            root.render(<Homepage />)
        } else {
            online_status = <NaBadge />
            online_players = <NaBadge />
            max_players = <NaBadge />
            received_data = true
            root.render(<Homepage />)
        }
    })
    .catch((err) => {
        console.log(err.message);
    });


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Homepage />);