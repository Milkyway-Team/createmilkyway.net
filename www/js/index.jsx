function MainContent() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/main.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">Create: Milkyway</h1> 
                <h3 className="main-image-container-subtext">A semi-hardcore Create modpack... With a twist!</h3> 
            </div>
            <p className="btm-text">Copyright 2023 Milkyway Communtity</p>
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