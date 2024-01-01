import React, { useEffect, useState } from 'react';
import RecordPageAccordion from '../Components/AccordeonItems/RecordPageAccordion';
import { Params, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { PreloaderAccordion } from '../Components/PreLoaders/PreloaderAccordion';

const RecordPage = () => {

	const [preloaderVisible, setPreloaderVisible] = useState(true);
	const { id = '' } = useParams<Params>();

	useEffect(() => {
		const timer = setTimeout(() => {
			setPreloaderVisible(false);
		}, 1500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<Container>
			{preloaderVisible ? <PreloaderAccordion id={id} /> : <RecordPageAccordion />}
		</Container>
	);
};

export default RecordPage;