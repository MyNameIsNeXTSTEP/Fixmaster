import React from "react";
import {Link} from "react-router-dom";

const SalonPage = () => {

    return (
        <>
            <div>
                <Link to={'/'}>Салоны</Link>
                <Link to={'/salon/:id'}>Красная Дива</Link>
            </div>
        </>
    )
}

export default SalonPage