import { useEffect, useState } from "react";
import firebaseDB from "./firebase";
import { Link } from "react-router-dom";
import card from "../assets/img/1.jpg";
import card2 from "../assets/img/2.jpg";
import card3 from "../assets/img/3.jpg";
import card4 from "../assets/img/4.jpg";
import home from "../assets/img/home.png";
import "./Component.css";
import wifi from "../assets/img/wifi-signal-icon.png";
import washingMachine from "../assets/img/washing-machine-icon.png";
import food from "../assets/img/breakfast-icon.png";
import water from "../assets/img/water-tap-icon.png";
import room from "../assets/img/capacity (1)-icon.png";
const Body = () => {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      firebaseDB.child("project").on("value", (snapshot) => {
        if (snapshot.val()) {
          setGetData(snapshot.val());
        }
      });
    };

    fetchData();

    // Clean up subscription on unmount
    return () => firebaseDB.child("project").off();
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url(${home})` }}>
        <div className="container mt-4">
          {/* <div className="card border-0 ms-5 me-5">
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
          </div> */}
          {getData && (
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
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {Object.keys(getData).map((key, index) => {
                  const item = getData[key];
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                      data-bs-interval={index === 0 ? 10000 : 2000}
                    >
                      <img
                        src={item.room_img}
                        className="d-block fixed-size-img"
                        alt={`Slide ${index + 1}`}
                      ></img>
                      {/* <div className="carousel-caption d-none d-md-block">
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div> */}
                    </div>
                  );
                })}
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
          )}
          <div className="row">
            <div className="col-12 d-flex align-items-center ps-5 ms-3 mt-3">
              <img
                src={room}
                width={50}
                height={50}
                alt="Capacity Icon" // Adding alt attribute for better accessibility
              />
              <h2 className="ms-3">Hostel Rooms</h2>
            </div>
          </div>
          <div className="row ms-md-5 me-md-5 mt-md-3 ms-3 me-3">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0">
                <Link to="/Singleshare">
                  <img src={card} className="card-img-top" alt="..."></img>
                </Link>
                <div className="text-center text-dark fst-italic">
                  Single Share
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0">
                <Link to="/Doubleshare">
                  <img src={card2} className="card-img-top" alt="..."></img>
                </Link>
                <div className="text-center text-dark fst-italic">
                  Double Share
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0">
                <Link to="/Thribleshare">
                  <img src={card3} className="card-img-top" alt="..."></img>
                </Link>
                <div className="text-center text-dark fst-italic">
                  Thrible Share
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
              <div className="card border-0">
                <Link to="/Fourshare">
                  <img src={card4} className="card-img-top" alt="..."></img>
                </Link>
                <div className="text-center text-dark fst-italic">
                  Four Share
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Hostel Providing Facilities
              </h2>
              {/* <p className="mt-6 text-lg leading-8 text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe
                et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                laborum.
              </p> */}
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Hostel membership
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Clean and well-maintained rooms, available in various
                  configurations (single, double, or shared), to suit
                  different.High-speed internet access for academic,
                  professional, and personal use. budget requirements.On-site
                  washing machines and dryers or laundry services to handle
                  residents laundry needs.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
                    <img src={wifi} width={50} height={50}></img>
                    <b>Free wifi</b>
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src={washingMachine}
                      width={50}
                      height={50}
                      alt="Washing Machine"
                    />
                    <b>Free washing Machine</b>
                  </li>
                  <li className="flex gap-x-3">
                    <img src={water} width={50} height={50}></img>
                    <b>24/7 Water</b>
                  </li>
                  <li className="flex gap-x-3">
                    <img src={food} width={50} height={50}></img>
                    <b> 3 Time Food</b>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19">
                  <div className="mx-auto max-w-xs ">
                    <img src={card}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19">
                  <div className="mx-auto max-w-xs ">
                    <img
                      src="src/assets/img/hostel-kitchen.jpg"
                      width={500}
                    ></img>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Timings For Food
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Either a shared kitchen where residents can cook their meals
                  or a mess providing nutritious, home-cooked-style food.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/breakfast-icon.png"
                      width={50}
                      height={50}
                    ></img>
                    <b>BreakFast</b>(6:00am - 10:00am)
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/lunch-box-icon.png"
                      width={50}
                      height={50}
                    ></img>
                    <b>Lunch</b>(12:00pm - 3:00pm)
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/christmas-dinner-icon.png"
                      width={50}
                      height={50}
                    ></img>
                    <b>Dinner</b>(7:00pm - 10:00pm)
                  </li>
                  {/* <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/breakfast-icon.png"
                      width={50}
                      height={50}
                    ></img>
                    <b> 3 Time Food</b>
                  </li> */}
                </ul>
              </div>
            </div>
            <div
              className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
              style={{ backgroundImage: `url(${home})` }}
            >
              {/* <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19">
                  <div className="mx-auto max-w-xs ">
                    <img
                      src="src/assets/img/hostel-kitchen.jpg"
                      width={500}
                    ></img>
                  </div>
                </div>
              </div> */}
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Sharing Rents
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  While hostel sharing rentals offer many benefits, its
                  important to consider potential downsides like lack of
                  privacy, noise, and the need for good interpersonal skills to
                  manage shared living dynamics effectively.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                    What’s included
                  </h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6"
                >
                  <li className="flex gap-x-3">
                    <img
                      src="./images/single-bed-icon.png"
                      width={100}
                      height={100}
                    ></img>
                    <b>Single Share</b>
                    <p className="badge text-dark">$4500/month && $200/day</p>
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/double-bed-icon.jpg"
                      width={100}
                      height={100}
                    ></img>
                    <b>Two Share</b>
                    <p className="badge text-dark">$4500/month && $200/day</p>
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/thrible-ded-icon.jpg"
                      width={100}
                      height={100}
                    ></img>
                    <b>Three Share</b>
                    <p className="badge text-dark">$4500/month && $200/day</p>
                  </li>
                  <li className="flex gap-x-3">
                    <img
                      src="src/assets/img/four-bed-icon.jpg"
                      width={100}
                      height={100}
                    ></img>
                    <b>Four Share </b>
                    <p className="badge text-dark">$4500/month && $200/day</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
