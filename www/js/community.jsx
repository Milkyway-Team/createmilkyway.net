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