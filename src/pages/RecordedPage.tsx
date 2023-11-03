import React from 'react';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecordedStyles = styled.div`
    text-align: center;

    a {
        color: #0797ff;
        text-decoration: none;
    }

    .qr-code {
        width: 200px;
        height: 200px;
        display: grid;
        place-items: center;
        border: 1px solid #000;
        border-radius: 13px;
        margin: 30px auto 40px;
    }

    h1 {
        margin: 30px 0;
    }

    .text {
        padding: 30px;
    }
`

const RecordedPage = () => {
	return (
		<RecordedStyles>
			<Container>

			<div className='qr-code'>
				QR - КОД
			</div>
			<h4>Вы успешно записаны!</h4>
			<h1>t.me/fix_master_bot</h1>
			<p className='text'>Что бы отслеживать статус заявки перейдите по ссылке и запустите бота</p>
			<Button variant='outline-dark'><Link to='/'>Вернуться на главную</Link></Button>
			</Container>
		</RecordedStyles>
	);
};

export default RecordedPage;