import bg from "../assets/img/home.png";
import { useEffect, useState } from "react";
import firebaseDB from "./firebase";
import "./Component.css";
const Contact = () => {
  const [getData, setGetData] = useState({});

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
  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container pt-4">
          <div className="grid grid-cols-3 gap-4">
            {getData &&
              Object.keys(getData).map((key) => {
                const item = getData[key];
                return (
                  <div className="box-content p-4 border-4" key={key}>
                    <img className="ixed-size-img" src={item.room_img}></img>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
