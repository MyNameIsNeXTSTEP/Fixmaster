import React, { useEffect, useState } from 'react';
import RecordPageAccordion from '../Components/AccordeonItems/RecordPageAccordion';
import { Link, Params, useParams } from 'react-router-dom';
import salonsData from '../salonsData';
import { Button, Container } from 'react-bootstrap';
import { PreloaderAccordion } from '../Components/PreLoaders/PreloaderAccordion';

const RecordPage = () => {
    const {id} = useParams<Params>();
    const [ preloaderVisible, setPreloaderVisible ] = useState( true );
    useEffect( () => {
        const timer = setTimeout( () => {
            setPreloaderVisible( false );
        }, 1500 );
        return () => clearTimeout( timer );
    }, [] );

    return (
        <Container>
			{preloaderVisible ? <PreloaderAccordion/>: <RecordPageAccordion/>}

        </Container>
    );
};

export default RecordPage;