import React from 'react';
import { Container } from 'react-bootstrap';
import { Params, useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

const RecordPage = () => {
	const {id = ''} = useParams<Params>();

	return (
		<div>
            <Container>
                <h2>Запись на салон №{id}</h2>
            </Container>
        </div>
	);
};

export default RecordPage;