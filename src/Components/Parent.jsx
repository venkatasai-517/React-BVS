import About from "./About";
import Body from "./Body";
import Singleshare from "./Singleshare";
import { Route, Routes } from "react-router-dom";
import Room_img from "./Room_img";
import Doubleshare from "./Doubleshare";
import Thribleshare from "./Thribleshare";
import Fourshare from "./Fourshare";
const Parent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/room_img" element={<Room_img></Room_img>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/Singleshare"
          element={<Singleshare></Singleshare>}
        ></Route>
        <Route
          path="/Doubleshare"
          element={<Doubleshare></Doubleshare>}
        ></Route>
        <Route
          path="/Thribleshare"
          element={<Thribleshare></Thribleshare>}
        ></Route>
        <Route path="/Fourshare" element={<Fourshare></Fourshare>}></Route>
      </Routes>
    </>
  );
};
export default Parent;
