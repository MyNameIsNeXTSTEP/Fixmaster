import React, { useEffect, useState } from 'react';
import { Accordion, Card, Placeholder, Spinner } from 'react-bootstrap';
import salonsData from '../../salonsData';
import MasterItem from '../AccordeonItems/MasterItem';
import { MyContainer } from '../AccordeonItems/styled';
import { PreloaderAccordionItem } from './PreloaderAccordionItem';

export const PreloaderAccordion = () => {
    return (
        <div>
           <MyContainer>
               <Accordion defaultActiveKey='0'>
                   <Accordion.Item eventKey='0'>
                       <Accordion.Header>
                           <Placeholder size='lg' animation='wave' bg='secondary' xs={3}/>
                       </Accordion.Header>
                       <Accordion.Body>
                           <PreloaderAccordionItem/>
                           <PreloaderAccordionItem/>
                           <PreloaderAccordionItem/>
                           <PreloaderAccordionItem/>
                       </Accordion.Body>
                   </Accordion.Item>
               </Accordion>
           </MyContainer>
        </div>
    );
};