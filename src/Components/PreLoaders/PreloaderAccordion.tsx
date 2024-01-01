import React from 'react';
import { Accordion, Placeholder} from 'react-bootstrap';
import salonsData from '../../salonsData';
import { MyContainer } from '../AccordeonItems/styled';
import { PreloaderAccordionItem } from './PreloaderAccordionItem';

interface IProps {
    id: string
}

interface IMaster {
    id: number,
    gender: string,
    name: string,
    work_schedule: string,
    telegram_id: string,
    surname: string,
    image: string,
    time_begin: string,
    time_end: string,
}

export const PreloaderAccordion = ({id}:IProps) => {
    return (
        <div>
           <MyContainer>
               <Accordion defaultActiveKey='0'>
                   <Accordion.Item eventKey='0'>
                       <Accordion.Header>
                           <Placeholder size='lg' animation='wave' bg='secondary' xs={3}/>
                       </Accordion.Header>
                       <Accordion.Body>
                           {salonsData[Number(id) - 1].masters.map((master:IMaster) => <PreloaderAccordionItem/>)}
                       </Accordion.Body>
                   </Accordion.Item>
               </Accordion>
           </MyContainer>
        </div>
    );
};