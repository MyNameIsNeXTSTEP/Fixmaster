import React from 'react';
import { Link } from 'react-router-dom';
import salonsData from '../../salonsData';
import { Button, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { Card, InfoRow, SocialRow } from '../AccordeonItems/styled';

interface IProps {
	id?: string;
}


const SalonCard = ({id}: IProps): JSX.Element => {
	const title = salonsData[Number( id ) - 1].info.title;
	const address = salonsData[Number( id ) - 1].info.address;
	const work_schedule = salonsData[Number( id ) - 1].info.work_schedule;
	const time_begin = salonsData[Number( id ) - 1].info.time_begin;
	const time_end = salonsData[Number( id ) - 1].info.time_end;

    const tg = require("../../assets/telegram.svg") as string;
    const wh = require("../../assets/whatsapp.svg") as string;
    const lc = require("../../assets/location.svg") as string;

	return (
		<div>
            <Card>
                <h2>{title}</h2>
                <Carousel>
                    {salonsData[Number( id ) - 1].info.images.map( el => {
						return <Carousel.Item>
                            <img src={el} alt=''/>
                        </Carousel.Item>;
					} )}
                </Carousel>
            </Card>

            <SocialRow>
                <div className='left'>
                    <a href='#!'>
                        <Button>
                            <img src={tg} alt=''/>
                        </Button>
                    </a>
                    <a href='#!'>
                        <Button variant='success'>
                            <img src={wh} alt=''/>
                        </Button>
                    </a>
                </div>
                <Link to={`/record/${id}`}>
                    <Button variant='info'>Записаться онлайн</Button>
                </Link>
            </SocialRow>

            <InfoRow>
                <div className='adress'>
                    <img src={lc} alt=''/>
                    Ул. {address}</div>
                <div className='chart'>График работы:</div>
                <div>{work_schedule} {time_begin}-{time_end}</div>
                <div>Закроется через 30мин</div>
            </InfoRow>
        </div>);
};

export default SalonCard;