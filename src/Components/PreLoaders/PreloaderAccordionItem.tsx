import React from 'react';
import { Placeholder, Spinner } from 'react-bootstrap';
import { AccordionPlaceholderItem } from '../AccordeonItems/styled';



export const PreloaderAccordionItem = () => {
    return (
        <AccordionPlaceholderItem>
            <Spinner animation='grow' variant='secondary'/>
            <Placeholder size='lg' animation='wave' bg="secondary" xs={3}/>
        </AccordionPlaceholderItem>
    );
};