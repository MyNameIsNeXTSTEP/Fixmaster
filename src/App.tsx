import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SalonPage from "./pages/SalonPage";
import RecordPage from './pages/RecordPage';
import RecordedPage from './pages/RecordedPage';
import MainPage from './pages/MainPage';

const App = (): JSX.Element => {
	return <>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/salon/:id' element={<SalonPage/>}/>
            <Route path='/record/:id' element={<RecordPage/>}/>
            <Route path='/recorded' element={<RecordedPage/>}/>
        </Routes>
    </>
};

export default App;