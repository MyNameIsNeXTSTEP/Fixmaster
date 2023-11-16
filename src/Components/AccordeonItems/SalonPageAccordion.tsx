import React from 'react';
import ServiceItem from './ServiceItem';
import { Accordion } from 'react-bootstrap';
import salonsData from '../../salonsData';
import MasterItem from './MasterItem';
import { Params, useParams } from 'react-router-dom';
import { MyContainer } from './styled';

const RecordPageAccordion = () => {
	const {id = ''} = useParams<Params>();

	return (
		<>
			<MyContainer>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Мастера салона</Accordion.Header>
                            <Accordion.Body>
                                {salonsData[Number( id ) - 1].masters.map( el => {
									return <div>
                                        <MasterItem image={el.image} name={el.name}/>
                                    </div>;
								} )}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </MyContainer>
                <MyContainer>
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Услуги салона</Accordion.Header>
                            <Accordion.Body>
                                {salonsData[Number( id ) - 1].services.map( el => {
									return <div>
                                        <ServiceItem text={el.title} price={el.price} description={el.description} minTime={el.min_time}/>
                                    </div>;
								} )}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </MyContainer>
		</>
	);
};

export default RecordPageAccordion;