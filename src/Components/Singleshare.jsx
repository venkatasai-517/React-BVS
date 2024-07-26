import { useEffect, useState } from "react";
import firebaseDB from "./firebase";
import "./Component.css";

function App() {
  const [getData, setGetData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = () => {
      firebaseDB.child("project").on("value", (details) => {
        if (details.val()) {
          setGetData(details.val());
        }
      });
    };

    fetchData();

    // Cleanup subscription on unmount
    return () => firebaseDB.child("project").off();
  }, []);

  const handleFilter = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the data based on the search query
  const filteredData = Object.keys(getData).filter((key) => {
    const item = getData[key];
    return (
      item.room_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.floor_number.toString().includes(searchQuery) ||
      item.price.toString().includes(searchQuery)
    );
  });

  return (
    <div className="container mt-3">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          onChange={handleFilter}
        />
      </div>
      <div className="row">
        {filteredData &&
          filteredData.map((key) => {
            const item = getData[key];
            return (
              <div className="col-md-4" key={key}>
                <div className="card mb-4">
                  <img
                    src={item.room_img}
                    className="card-img-top fixed-size-img"
                    alt="Room"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="text-primary">S</span>
                      <span className="text-secondary">i</span>
                      <span className="text-success">n</span>
                      <span className="text-danger">g</span>
                      <span className="text-warning">l</span>
                      <span className="text-info">e</span>
                      <span className="text-dark"> </span>
                      <span className="text-primary">S</span>
                      <span className="text-secondary">h</span>
                      <span className="text-success">a</span>
                      <span className="text-danger">r</span>
                      <span className="text-warning">e</span>
                    </h5>
                    <p className="card-text text-bold">
                      a single-share room offers more privacy and personal
                      space. It typically includes a single bed, desk, and
                      storage for personal belongings.
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Room Number:{" "}
                      <span className="badge bg-primary">
                        {item.room_number}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Status:
                      <span
                        className={`badge text-bg-success ${
                          item.status === "Available"
                            ? "badge-available"
                            : "badge text-bg-danger"
                        }`}
                      >
                        {item.status}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Floor:{" "}
                      <span className="badge bg-warning">
                        {item.floor_number}
                      </span>
                    </li>
                    <li className="list-group-item">
                      Price:{" "}
                      <span className="badge bg-primary">${item.price}</span>
                    </li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
