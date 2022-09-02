import React from "react";
import Footer from "../footer";
import Header from "../header/header";
import Card from "../card/card";

const wrapper = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};


const App = () => {
  return (
    <div style={wrapper}>
      <Header/>
      <Card/>
      <Footer />
    </div>
  );
};

export default App;
