import About from "./About";
import Body from "./Body";
import Ownstatus from "./Ownstatus";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Createpages from "./Createpage";
import Upload from "./Uploadads";
import User from "./Userpage";
const Parent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/ownstatus" element={<Ownstatus></Ownstatus>}></Route>
        <Route path="/createpage" element={<Createpages></Createpages>}></Route>
        <Route path="/uploadads" element={<Upload></Upload>}></Route>
        <Route path="/userpage" element={<User></User>}></Route>
      </Routes>
    </>
  );
};
export default Parent;
