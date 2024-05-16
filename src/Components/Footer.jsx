const Footer = () => {
  return (
    <>
      <div className="text-white">
        <footer className="bg-dark p-5 ">
          <div className="row ">
            <div className="col-6 col-md-2 mb-3  ">
              <h5 className="">CONTENT</h5>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2  ">
                  <a href="#" className="nav-link p-0 text-white ">
                    Festivals
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-white">
                    Trending
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3  ">
              <h5>LEGAL</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link  text-white p-0 ">
                    Terms of use
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link  text-white p-0 ">
                    License
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link  text-white p-0 ">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3  ">
              <h5>Support</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-white ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0  text-white ">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form className="">
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  ></input>
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row justify-content-between border-top ">
            <p>&copy; 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link" href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="link" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
