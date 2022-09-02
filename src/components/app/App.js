import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import Card from "../card/card";
import { TextContext } from "../../context/text-context";
import { ImgContext } from "../../context/img-context";
import { HolidayContext } from "../../context/holiday-context";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const App = () => {
  return (
    <div style={wrapper}>
      <TextContext>
        <ImgContext>
          <HolidayContext>
            <Header />
            <Card />
            <Footer />
          </HolidayContext>
        </ImgContext>
      </TextContext>
    </div>
  );
};

export default App;
