import React from 'react';
import { Link } from 'react-router-dom';
import salonsData from '../../salonsData';
import { Button, Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import MasterItem from '../AccordeonItems/MasterItem';

interface IProps {
	id?: string;
}

const Card = styled.div`

    padding: 5px 15px 10px;
    border: 1px solid #c7c7c7;
    border-radius: 8px;

    margin-bottom: 15px;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

const SocialRow = styled.div`
    display: flex;
    margin-bottom: 30px;

    .left {
        display: flex;
        gap: 10px;
        margin-right: auto;
    }
`;

const InfoRow = styled.div`
    margin-bottom: 30px;
    font-size: 20px;

    .adress {
        display: flex;
        gap: 10px;
        margin-bottom: 3px;
    }

    .chart {
        font-weight: 600;
    }
`;

const SalonCard = ( {id}: IProps ): JSX.Element => {
	const title = salonsData[Number( id ) - 1].info.title;
	const address = salonsData[Number( id ) - 1].info.address;
	const work_schedule = salonsData[Number( id ) - 1].info.work_schedule;
	const time_begin = salonsData[Number( id ) - 1].info.time_begin;
	const time_end = salonsData[Number( id ) - 1].info.time_end;

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
                            <svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' fill='currentColor' className='bi bi-telegram' viewBox='0 0 16 16'>
                                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z'/>
                            </svg>
                        </Button>
                    </a>
                    <a href='#!'>
                        <Button variant='success'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' fill='currentColor' className='bi bi-whatsapp' viewBox='0 0 16 16'>
                                <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'/>
                            </svg>
                        </Button>
                    </a>
                </div>
                <Link to={`/record/${id}`}>
                    <Button variant='info'>Записаться онлайн</Button>
                </Link>
            </SocialRow>

            <InfoRow>
                <div className='adress'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-geo-alt' viewBox='0 0 16 16'>
                        <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'/>
                        <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/>
                    </svg>
                    Ул. {address}</div>
                <div className='chart'>График работы:</div>
                <div>{work_schedule} {time_begin}-{time_end}</div>
                <div>Закроется через 30мин</div>
            </InfoRow>
        </div>);
};

export default SalonCard;