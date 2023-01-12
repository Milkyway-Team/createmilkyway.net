function About() {
    return (
        <div className="main-content">
            <div className="main-image-container">
                <img src="/images/about.png" className="img-bg-main"></img>
                <h1 className="main-image-container-text">About Create: Milkyway</h1> 
                <h3 className="main-image-container-subtext">Who is behind this project?</h3> 
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