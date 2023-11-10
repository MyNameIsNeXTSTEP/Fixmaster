import React from 'react';
import RecordPageAccordion from '../Components/AccordeonItems/RecordPageAccordion';
import { Link, Params, useParams } from 'react-router-dom';
import salonsData from '../salonsData';
import { Button, Container } from 'react-bootstrap';

const RecordPage = () => {
	const {id} = useParams<Params>();

	return (
		<Container>
			<h2>Запись на салон {salonsData[Number( id ) - 1].info.title}</h2>
			<Button variant='outline-dark'><Link to='/'>Главная </Link></Button>

            <RecordPageAccordion/>
        </Container>
	);
};

export default RecordPage;