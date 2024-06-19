import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="text-white">
      <footer className="bg-dark p-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h5>Hostel Managment</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Free WiFi
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Shared Kitchen or Mess
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Bathrooms
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Housekeeping
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Support Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Common Areas
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-5 mb-3">
            <h5>CONTACT DETAILS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-white p-0">
                  Hostel_name
                </a>
              </li>
              <li className="nav-item mb-2">
                Owner contact:
                <a href="tel:+918523899330" className="nav-link text-white p-0">
                  8523899330
                </a>
                <a href="tel:+917993558948" className="nav-link text-white p-0">
                  7993558948
                </a>
              </li>
              <li className="nav-item mb-2">
                Email:
                <a
                  href="mailto:bvsadds@gmail.com"
                  className="nav-link text-white p-0"
                >
                  bvsadds@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-3">
            <h5>SOCIAL MEDIA</h5>
            <div className="d-flex">
              <a href="#" className="text-white me-3">
                <i className="fa-brands fa-facebook fa-3x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fa-brands fa-square-instagram fa-3x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa-brands fa-linkedin fa-3x"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between border-top pt-3">
          <p>&copy; 2024BVS Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-light" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-light" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      {/* <nav className="navbar navbar-dark bg-body fixed-bottom">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0 justify-content-center w-100 ">
            <li className="nav-item mx-3 badge bg-dark ">
              <a className="nav-link active">
                <i className="fa-solid fa-arrow-left "></i>
              </a>
            </li>
            <li className="nav-item mx-3 badge bg-dark">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav-item mx-3 badge bg-dark">
              <a className="nav-link active" href="#">
                <i className="fas fa-store"></i>
              </a>
            </li>
            <li className="nav-item mx-3 badge bg-dark">
              <a className="nav-link active" href="#">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li className="nav-item mx-3 badge bg-dark">
              <a className="nav-link active">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="nav-item mx-3 badge bg-dark">
              <a className="nav-link active">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default Footer;
