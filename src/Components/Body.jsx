import card from "../assets/img/card-img-2.jpg";
import card1 from "../assets/img/card-img-3.png";
import card2 from "../assets/img/card-img-4.png";
import card3 from "../assets/img/card-img-5.png";
import card4 from "../assets/img/card-img-6.png";
import bg from "../assets/img/card-img-7.png";
import home from "../assets/img/home.png";

import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${home})` }}>
        <div className="container mt-4">
          <div className="card border-0 ms-5 me-5">
            <img
              src={card}
              className="card-img rounded-5"
              alt="..."
              height="300"
            ></img>

            <div className="card-img-overlay">
              <div className="row justify-content-md-center mt-5 pt-5">
                <div className="col col-lg-5">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search here for user page"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="ps-5 ms-3 mt-3">You might want to try...</p>
          <div className="row ms-md-5 me-md-5 mt-md-3 ms-3 me-3 ">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0 ">
                <Link to="/ownstatus">
                  <img src={card1} className="card-img-top" alt="..."></img>

                  <div className="text-center card-img-overlay text-white mt-5 fst-italic">
                    Own Status
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0 ">
                <Link to="/createpage">
                  <img src={card2} className="card-img-top" alt="..."></img>
                  <div className="text-center card-img-overlay text-white mt-5 fst-italic">
                    Create Page
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0 ">
                <Link to="/userpage">
                  <img src={card3} className="card-img-top" alt="..."></img>
                  <div className="text-center card-img-overlay text-white mt-5 fst-italic">
                    Venkat
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0 ">
                <Link to="/uploadads">
                  <img src={card4} className="card-img-top" alt="..."></img>
                  <div className="text-center card-img-overlay text-white mt-5 fst-italic">
                    Upload Ads
                  </div>
                </Link>
              </div>
            </div>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={bg} className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-nbg d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={bg} className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-nbg d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={bg} className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-nbg d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <br></br>
        </div>
      </div>
    </>
  );
};
export default Body;
