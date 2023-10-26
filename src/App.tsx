import React from "react";
import SaloonCard from "./Components/SaloonCard";
import { Link, Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import SalonPage from "./pages/SalonPage";

const App = (): JSX.Element => {
  return <>
        <h1 >The Fixmaster app</h1 >
        <Link to="/" >Главная </Link >
      <ul >
        <Link to="/salon/1" >Салон 1</Link ><br />
        <Link to="/salon/2" >Салон 2</Link ><br />
        <Link to="/salon/3" >Салон 3</Link ><br />
        <Link to="/salon/4" >Салон 4</Link ><br />
        <Link to="/salon/5" >Салон 5</Link ><br />
      </ul >


        <Routes >
            <Route path="/" element={ <MainPage /> } />
            <Route path="/salon/:id" element={ <SalonPage /> } />
        </Routes >
    </>;
};

export default App;