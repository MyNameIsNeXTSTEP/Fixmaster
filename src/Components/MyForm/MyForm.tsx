import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MyFormStyle = styled.div`
    button {
        margin: 0 auto;
    }

    a {
        color: #fff;
    }

    .form-btn-check {
        display: flex;

        button {
            height: auto;
        }
    }
`;

const MyForm = () => {

    const [nameError, setNameError] = useState('')

    const handleButton = () => {
        console.log( 'po' );
    };

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const result = /^[а-яА-Я ]+$/;
        if (!result.test(String(e.target.value).toLowerCase()) || e.target.value.length < 2){
            setNameError('Некорректное имя пользователя')
        } else setNameError('')
    }

    const blurName = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setNameError('Имя не может быть пустым')
        }
    }

    return (
        <MyFormStyle>
            <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleName(e)} onBlur={(e: React.FocusEvent<HTMLInputElement>) => blurName(e)} required type='name' placeholder='Введите ваше имя...'/>
                    {nameError && <div style={{color: 'red'}}>{nameError}</div>}
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                    <Form.Label>Телефон</Form.Label>
                    <Form.Control required type='tel'/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Комментарий</Form.Label>
                    <Form.Control as='textarea' rows={3}/>
                </Form.Group>
                <Form.Group className='mb-3 form-btn-check'>
                    <Form.Check required label='Даю согласие на обработку персональных данных' feedback='You must agree before submitting.' feedbackType='invalid'/>
                    <Button onClick={handleButton} type='submit'><Link to='/recorded'>Записаться</Link></Button>
                </Form.Group>
            </Form>
        </MyFormStyle>
    );
};

export default MyForm;