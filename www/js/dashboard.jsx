var _username = getCookie("email")




if (getCookie("token") != "" && getCookie("email") != "") {
    fetch('http://localhost/check-token', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'email': getCookie("email"),
        'token': getCookie('token')
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.valid == true) {
            console.log("valid")
        } else {
            console.log("not valid")
            window.location.href = "http://localhost/login";
        }
    })
    .catch((error) => {});
} else {
    window.location.href = "http://localhost/login";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function Dashboard() {

    function logout() {
        setCookie("token", "", -1)
        window.location.href = "/login";
    }
    let profileImage = {
        "transform": "rotate(15deg)",
        "width": "70px",
        "height": "70px",
    }
    return (
        <div>
            <div id="wrapper">
                <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">

                </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                                <ul className="navbar-nav flex-nowrap ms-auto">
                                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                            <form className="me-auto navbar-search w-100">
                                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                <h6 className="dropdown-header">Notifications</h6><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown no-arrow mx-1">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"></a>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" />
                                                        <div className="bg-success status-indicator"></div>
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                        <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg" />
                                                        <div className="status-indicator"></div>
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                        <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg" />
                                                        <div className="bg-warning status-indicator"></div>
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                        <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                                    </div>
                                                </a><a className="dropdown-item d-flex align-items-center" href="#">
                                                    <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" />
                                                        <div className="bg-success status-indicator"></div>
                                                    </div>
                                                    <div className="fw-bold">
                                                        <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                        <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                                    </div>
                                                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                            </div>
                                        </div>
                                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                                    </li>
                                    <div className="d-none d-sm-block topbar-divider"></div>
                                    <li className="nav-item dropdown no-arrow">
                                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">{_username}</span><img className="border rounded-circle img-profile" src={"/CDN/" + _username + ".jpg"} style={{"width":"30px", "heigth":"30px"}} /></a>
                                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                                <div className="dropdown-divider"></div><a className="dropdown-item" href="#" onClick={() => logout()}><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                                <h3 className="text-dark mb-0">Dashboard</h3>
                            </div>
                            <div className="row">
                                <div className="col-md-12 offset-md-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="text-muted card-subtitle mb-2">Server Status<span className="badge bg-success" style={{"marginLeft": "5px"}}>Online</span></h6><button className="btn btn-danger" type="button" style={{"fontSize": "13px"}}>Stop Server<i className="fas fa-stop" style={{"marginLeft": "8px"}}></i></button>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h6 className="text-muted card-subtitle mb-2">Subtitle</h6>
                                            <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-primary py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>Online players</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>3/20</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-users fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-success py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>RAM Usage</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>3410mb/18000mb</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fab fa-stack-overflow fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-info py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>CPU USAGE</span></div>
                                                    <div className="row g-0 align-items-center">
                                                        <div className="col-auto">
                                                            <div className="text-dark fw-bold h5 mb-0 me-3"><span>50%</span></div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm">
                                                                <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{"width": "50%"}}><span className="visually-hidden">50%</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-laptop fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-3 mb-4">
                                    <div className="card shadow border-start-warning py-2">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col me-2">
                                                    <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>DISK USAGE</span></div>
                                                    <div className="text-dark fw-bold h5 mb-0"><span>18gb/70gb</span></div>
                                                </div>
                                                <div className="col-auto"><i className="fas fa-save fa-2x text-gray-300"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white sticky-footer">
                        <div className="container my-auto">
                            <div className="text-center my-auto copyright"></div>
                        </div>
                    </footer>
                </div>
                <a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Dashboard />);