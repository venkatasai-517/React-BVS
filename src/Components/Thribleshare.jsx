import { useEffect, useState } from "react";
import firebaseDB from "./firebase";
import "./Component.css";

function App() {
  const [getData, setGetData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      firebaseDB.child("thrible").on("value", (details) => {
        if (details.val()) {
          setGetData(details.val());
        }
      });
    };

    fetchData();

    // Cleanup subscription on unmount
    return () => firebaseDB.child("thrible").off();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        {getData &&
          Object.keys(getData).map((key) => {
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
                      <span className="text-primary">T</span>
                      <span className="text-secondary">h</span>
                      <span className="text-success">r</span>
                      <span className="text-danger">i</span>
                      <span className="text-primary">b</span>
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
                      a Thrible-share room offers more privacy and personal
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
