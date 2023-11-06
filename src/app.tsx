import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SalonPage from "./pages/SalonPage/SalonPage";

const App = (): JSX.Element => {
    return <>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/salon/:id" element={<SalonPage/>} />
        </Routes>
    </>
};

export default App;