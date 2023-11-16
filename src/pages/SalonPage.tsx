import React, { useEffect, useState } from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import SaloonCard from '../Components/SalonCard/SalonCard';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import SalonPageAccordion from '../Components/AccordeonItems/SalonPageAccordion';
import { PreloaderAccordion } from '../Components/PreLoaders/PreloaderAccordion';
import { PreloaderSalonCard } from '../Components/PreLoaders/PreloaderSalonCard';

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

const SalonPage = (): JSX.Element => {
    const {id = ''} = useParams<Params>();
    const [ preloaderVisible, setPreloaderVisible ] = useState( true );
    useEffect( () => {
        const timer = setTimeout( () => {
            setPreloaderVisible( false );
        }, 1500 );
        return () => clearTimeout( timer );
    }, [] );
    return (
        <div>
            <Container>
            {preloaderVisible ? <PreloaderSalonCard/>: <SaloonCard id={id}/>}



            {preloaderVisible ? <PreloaderAccordion/>: <SalonPageAccordion/>}

            <Center>

            <Link to={`/record/${id}`}>

                <Button variant='info'>Записаться онлайн</Button>

            </Link>

            </Center>
            </Container>
        </div>
    );
};

export default SalonPage;