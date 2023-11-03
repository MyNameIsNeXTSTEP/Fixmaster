import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = (): JSX.Element => {
	return <>
        <h1>The Fixmaster app</h1>
        <h2>MainPage</h2>
        <ul>
            <Link to='/salon/1'>Салон 1</Link><br/>
            <Link to='/salon/2'>Салон 2</Link><br/>
            <Link to='/salon/3'>Салон 3</Link><br/>
            <Link to='/salon/4'>Салон 4</Link><br/>
            <Link to='/salon/5'>Салон 5</Link><br/>
        </ul>
    </>;
};

export default MainPage;