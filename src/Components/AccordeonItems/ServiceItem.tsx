import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const ServiceCard = styled.div`
    cursor: pointer;

    .card-title {
        font-size: 18px;
        font-weight: 600;
    }

    .price {
        font-size: 18px;
        font-weight: 600;
        white-space: nowrap;
    }
`;
export const MyContainer = styled.div`
    margin: 10px 0;
`;

Card.Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    //border-bottom: 1px solid #bbbbbb;
`;
const Min = styled.div`
    font-size: 12px;
`;
interface  ServiceItemProps{
    text: string,
    price: number,
    minTime: number,
    description: string,
    onClick?: () => void
}

const ServiceItem = ( {text , price , minTime , description, onClick }:ServiceItemProps ) => {
	return (
		<MyContainer>
            <ServiceCard onClick={onClick}>
                <Card>
                    <Card.Header>
                        <div className='card-title'>{text}</div>
                        <div>
                            <div className='price'>
                                от {price} р <br/>
                            </div>
                            <div className={'min'}>
                                от {minTime} мин
                            </div>
                        </div>
                    </Card.Header>{description ? <Card.Body>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>: ''}
                </Card>
            </ServiceCard>
        </MyContainer>
	);
};

export default ServiceItem;