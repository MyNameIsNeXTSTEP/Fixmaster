import SaloonCard from "../../Components/SaloonCard";
import React from "react";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <SaloonCard />
            <Link to={'/salon/:id'}>Salon</Link>
        </>
    )
}

export default MainPage