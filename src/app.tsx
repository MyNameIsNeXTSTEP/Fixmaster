import React from 'react';
import SaloonCard from './Components/SaloonCard';
import Navbar from "./Components/Navbar/Navbar";

const App = (): JSX.Element => {
    return <>
        <Navbar />
        <h1>The Fixmaster app</h1>
        <SaloonCard/>
    </>
};

export default App;