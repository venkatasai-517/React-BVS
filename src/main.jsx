import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Components/Parent";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Parent />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
