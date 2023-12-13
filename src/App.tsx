import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import SalonPage from "./pages/SalonPage";
import RecordPage from './pages/RecordPage';
import RecordedPage from './pages/RecordedPage';
import MainPage from './pages/MainPage';
import AgreementDataPage from "./pages/AgreementDataPage";

const App = (): JSX.Element => {
    return <>
        <Navbar />
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path='/salon/:id' element={<SalonPage/>}/>
            <Route path='/record/:id' element={<RecordPage/>}/>
            <Route path='/recorded' element={<RecordedPage/>}/>
            <Route path={'/agreement_on_the_processing_of_personal_data'} element={<AgreementDataPage/>}/>
        </Routes>
    </>
};

export default App;