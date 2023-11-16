import { Link, Params, useParams } from 'react-router-dom';
import React, { ReactNode, useState } from 'react';
import { Dayjs } from 'dayjs';
import { Accordion, useAccordionButton } from 'react-bootstrap';
import salonsData from '../../salonsData';
import ServiceItem from './ServiceItem';
import MasterItem from './MasterItem';
import Calendar from '../Calendar/Calendar';
import MyForm from '../MyForm/MyForm';
import { MyContainer } from './styled';

interface IProps {
	children: ReactNode;
	eventKey: string;
}

export const CustomToggle = ({children, eventKey}: IProps) => {
	const decoratedOnClick = useAccordionButton( eventKey, () =>
		console.log( 'totally custom!' ),
	);

	return (
		<div onClick={decoratedOnClick}>
				{children}
			</div>
	);
};

const RecordPageAccordion = () => {
	const {id} = useParams<Params>();
	const [ accordionTitles, setAccordionTitles ] = useState( [ 'Выбор мастера', 'Выбор услуги', 'Выбрвть время' ] );
	const [ twoAccordionActive, setTwoAccordionActive ] = useState( false );
	const [ threeAccordionActive, setThreeAccordionActive ] = useState( false );
	const [ fourAccordionActive, setFourAccordionActive ] = useState( false );

	const visibleTwoAccordion = (name = '') => {
		setTwoAccordionActive( true );
		setAccordionTitles( [ `Мастер: ${name}`, accordionTitles[1], accordionTitles[2] ] );
	};
	const visibleThreeAccordion = (name = '') => {
		setThreeAccordionActive( true );
		setAccordionTitles( [ accordionTitles[0], `Услуга: ${name}`, accordionTitles[2] ] );
	};
	const visibleFourAccordion = (name: string = '12:00', value?: Dayjs | null | undefined) => {
		setFourAccordionActive( true );
		setAccordionTitles( [ accordionTitles[0], accordionTitles[1], `${value?.date()}.${value?.month() ? value?.month() + 1: ''}.${value?.year()} на ${name}` ] );
	};

	return (
		<>
			<MyContainer>
				<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>{accordionTitles[0]}</Accordion.Header>
						<Accordion.Body>
							{salonsData[Number( id ) - 1].masters.map( el => {
								return <div>
									<CustomToggle eventKey='5'>
										<MasterItem onClick={() => {
											visibleTwoAccordion( el.name );
										}} image={el.image} name={el.name}/>
									</CustomToggle>
								</div>;
							} )}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</MyContainer>

			<MyContainer>
				{twoAccordionActive ?
					<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>{accordionTitles[1]}</Accordion.Header>
						<Accordion.Body>
							{salonsData[Number( id ) - 1].services.map( el => {
								return <div>
									<CustomToggle eventKey='0'>
									<ServiceItem onClick={() => {
										visibleThreeAccordion( el.title );
									}} text={el.title} minTime={el.min_time} description={el.description} price={el.price}/>
									</CustomToggle>
								</div>;
							} )}
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>: ''}
			</MyContainer>

			<MyContainer>
				{threeAccordionActive ?
					<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>{accordionTitles[2]}</Accordion.Header>
						<Accordion.Body>
							<Calendar onClick={visibleFourAccordion}/>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>: ''}
			</MyContainer>

			<MyContainer>
				{fourAccordionActive ?
					<Accordion defaultActiveKey='0'>
					<Accordion.Item eventKey='0'>
						<Accordion.Header>Дополнительно</Accordion.Header>
						<Accordion.Body>
							<MyForm/>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>: ''}
			</MyContainer>
		</>
	);
};

export default RecordPageAccordion;