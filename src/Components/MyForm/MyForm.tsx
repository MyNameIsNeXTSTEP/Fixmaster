import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import * as events from 'events';
import { Link } from 'react-router-dom';


const MyFormStyle = styled.div`
	button{
		margin: 0 auto;
	}
	a{
		color: #fff;
	}
`;

const MyForm = () => {

	const handleButton = () => {
		console.log( 'po' );
	};
	return (
		<MyFormStyle>
			<Form onSubmit={( e ) => e.preventDefault()}>
				<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
					<Form.Label>Имя</Form.Label>
					<Form.Control required type='name' placeholder='Введите ваше имя...'/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
					<Form.Label>Телефон</Form.Label>
					<Form.Control required type='tel' placeholder='Введите ваше номер телефона...'/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
					<Form.Label>Комментарий</Form.Label>
					<Form.Control as='textarea' rows={3}/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Check required label='Даю согласие на обработку персональных данных' feedback='You must agree before submitting.' feedbackType='invalid'/>
				</Form.Group>
				<Button onClick={handleButton} type='submit'><Link to='/recorded'>Записаться</Link></Button>
			</Form>
		</MyFormStyle>
	);
};

export default MyForm;