import React from 'react';
import { Link } from 'react-router-dom';
import { PreloaderAccordion } from '../Components/PreLoaders/PreloaderAccordion';
import { Container } from 'react-bootstrap';
import { PreloaderSalonCard } from '../Components/PreLoaders/PreloaderSalonCard';

const MainPage = (): JSX.Element => {
    return (
        <Container>
        <ul>
            <Link to='/salon/1'>Салон 1</Link><br/>
            <Link to='/salon/2'>Салон 2</Link><br/>
            <Link to='/salon/3'>Салон 3</Link><br/>
            <Link to='/salon/4'>Салон 4</Link><br/>
            <Link to='/salon/5'>Салон 5</Link><br/>
        </ul>
        </Container>
    );
};

export default MainPage;