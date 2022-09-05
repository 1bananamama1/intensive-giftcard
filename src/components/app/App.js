import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import Card from "../card/card";
import { ImgContext } from "../../context/img-context";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const App = () => {
  return (
    <div style={wrapper}>
      <ImgContext>
        <Header />
        <Card />
        <Footer />
      </ImgContext>
    </div>
  );
};

export default App;
