import React from 'react';
import { Link, Params, useParams } from 'react-router-dom';
import SaloonCard from '../Components/SalonCard/SalonCard';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import SalonPageAccordion from '../Components/AccordeonItems/SalonPageAccordion';

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
                <Button variant='outline-dark'><Link to='/'>Главная </Link></Button>
                <SaloonCard id={id}/>

                <SalonPageAccordion/>

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