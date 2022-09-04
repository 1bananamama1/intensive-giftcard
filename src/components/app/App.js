import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import Card from "../card/card";
import { TextContext } from "../../context/text-context";
import { ImgContext } from "../../context/img-context";
import { HolidayContextProvider } from "../../context/holiday-context";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

const App = () => {
  return (
    <div style={wrapper}>
      <HolidayContextProvider>
        <TextContext>
          <ImgContext>
            <Header />
            <Card />
            <Footer />
          </ImgContext>
        </TextContext>
      </HolidayContextProvider>
    </div>
  );
};

export default App;
