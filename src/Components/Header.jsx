import logo from "../assets/img/hostel-logo.jpg";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand ps-lg-5 ms-lg-5 ps-3 ms-3" href="#">
          <img src={logo} alt="Bootstrap" width="75" height="50"></img>
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
          className="collapse navbar-collapse p-4 ms-5"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link active" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/room_img" className="nav-link active" href="#">
                Room Img
              </Link>
            </li>
            <li className="nav-item  dropdown">
              <Link
                to="/services"
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Singleshare" className="dropdown-item" href="#">
                    Singleshare
                  </Link>
                </li>
                <li>
                  <Link to="/Doubleshare" className="dropdown-item" href="#">
                    Doubleshare
                  </Link>
                </li>
                <li>
                  <Link to="/Thribleshare" className="dropdown-item" href="#">
                    Thribleshare
                  </Link>
                </li>
                <li>
                  <Link to="/Fourshare" className="dropdown-item" href="#">
                    Fourshare
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item   ">
                <button
                  className="btn btn-close-white border text-white"
                  href="#"
                >
                  Logout
                </button>
              </li>
            </ul> */}
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
export default Header;
