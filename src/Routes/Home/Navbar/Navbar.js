import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div id="navbar" className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img alt="icon" height="32px" src="/FirstLibrary.png"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <a className="underlineOnHover nav-item nav-link" href="/#about">
              About
            </a>
            <a
              className="underlineOnHover nav-item nav-link"
              href="/#resources"
            >
              Resources
            </a>
            <a className="underlineOnHover nav-item nav-link" href="/#projects">
              Other Projects
            </a>
            <a
              className="underlineOnHover nav-item nav-link"
              href="/#managedby"
            >
              Managed by
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
