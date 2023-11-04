import React from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import SaloonCard from '../Components/SaloonCard/SalonCard';
import salonsData from '../salonsData';
import { Accordion, Button, Container } from 'react-bootstrap';
import ServiceItem, { MyContainer } from '../Components/AccordeonItems/ServiceItem';
import MasterItem from '../Components/AccordeonItems/MasterItem';
import styled from 'styled-components';

const Center = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

const SalonPage = (): JSX.Element => {
	const {id = ''} = useParams<Params>();
	return (
		<div>
            <Container>
                <h2>Salon Page</h2>
                <Button variant='success'><Link to='/'>Главная </Link></Button>
                <SaloonCard id={id}/>
                {/*@todo Аккордеоны вынести в отдельные компоненты */}
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
                <Center>
                    <Link to={`/record/${id}`}>
                        <Button variant='info'>Записаться онлайн</Button>
                    </Link>
                </Center>
            </Container>
        </div>);
};

export default SalonPage;