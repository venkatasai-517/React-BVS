import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="text-white">
      <footer className="bg-dark p-5">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <h5>BUSINESS VICTORY SOLUTIONS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Website Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Mobile App Development
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Advertising, Ads Designing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Social Media Promotion
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Brand & Logo Designing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-white">
                  Celebrity Promotion
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle p-0 text-white"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Digital Media Marketing
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Google Ads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Facebook Ads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Instagram Ads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      YouTube Ads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Website Ads
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      addtheadd.com ads
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-5 mb-3">
            <h5>CONTACT DETAILS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link text-white p-0">
                  business victory solutions
                </a>
              </li>
              <li className="nav-item mb-2">
                Manager contact:
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
      <nav className="navbar navbar-dark bg-dark fixed-bottom">
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav d-flex flex-row mb-2 mb-lg-0 justify-content-center w-100">
            <li className="nav-item mx-3">
              <a className="nav-link disabled">
                <i className="fa-solid fa-arrow-left"></i>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                <i className="fas fa-store"></i>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                <i className="fas fa-search"></i>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link disabled">
                <i className="fas fa-user"></i>
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link disabled">
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
