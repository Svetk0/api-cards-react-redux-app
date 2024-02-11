import {  Routes, Route } from "react-router-dom";

import HomePage from "@containers/HomePage/";
import PeoplePage from "@containers/PeoplePage";


import styles from "./App.module.css";

const App = () => {

  return (
    <>
      

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
         
       </Routes>
    </>
  );
};

export default App;
