import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import SalonPage from "./pages/SalonPage";
import Main from './pages/Main';

const App = (): JSX.Element => {
	return <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/salon/:id" element={<SalonPage/>} />
        </Routes>
    </>
};

export default App;