import { Routes, Route } from "react-router-dom";

import Header from "@components/Header";

import routesConfig from "@routes/routesConfig";

import styles from "./App.module.css";



const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            // exact={ route.exact}
            element={route.component}
          />
        ))}
         
          
         
      </Routes>

      {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
         
      </Routes> */}
    
   
    </>
  );
};

export default App;
