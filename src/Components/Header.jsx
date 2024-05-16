import logo from "../assets/img/logo.jpeg";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container">
          <a className="navbar-brand ps-lg-5 ms-lg-5 ps-3 ms-3" href="#">
            <img src={logo} alt="Bootstrap" width="50" height="50"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-bg-light "></span>
          </button>
          <div
            className="collapse navbar-collapse text-white "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link active text-white "
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/about"
                  className="nav-link active text-white "
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/contact"
                  className="nav-link active text-white "
                  href="#"
                >
                  Contact us
                </Link>
              </li>
              <li className="nav-item  dropdown">
                <Link
                  to="/services"
                  className="nav-link active text-white  dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/ownstatus" className="dropdown-item" href="#">
                      Own Status
                    </Link>
                  </li>
                  <li>
                    <Link to="/createpage" className="dropdown-item" href="#">
                      Create Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/uploadads" className="dropdown-item" href="#">
                      Upload Add
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item   ">
                <button
                  className="btn btn-close-white border text-white"
                  href="#"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
export default Header;
