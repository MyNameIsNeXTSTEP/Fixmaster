import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import SalonPage from "./pages/SalonPage";

const App = (): JSX.Element => {
  return (
    <>
    {/*<MainPage />*/}
    <Routes >
        <Route path="/" element={ <MainPage /> } />
        <Route path="/salon/:id" element={ <SalonPage /> } />
    </Routes >
    </>
  );
};

export default App;