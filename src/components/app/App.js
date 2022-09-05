import React from "react";

import Card from "../card/card";
import EmptyCard from "../empty-card/empty-card";
import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";



const App = () => {
  return (
    
    <Routes>
      <Route path='/' element={ <Layout/> }>
        <Route index element={<EmptyCard />} />         
        <Route path='card/:holiday' element={<Card />} />    
      </Route>  
      <Route path='singleCard/:idText/:idImg' element={<Card />} />
    </Routes>
      
  );
};

export default App;
