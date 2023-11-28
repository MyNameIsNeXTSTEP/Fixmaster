import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react";
import salonsData from "../../salonsData";
import MapPin from "../../assets/map-pin";

interface ISaloon {
    id: number
}

const SalonsCards = ({id}:ISaloon): JSX.Element => {

    const title = salonsData[id - 1].info.title
    const img = salonsData[id - 1].info.images[0]
    const address = salonsData[id - 1].info.address
    const timeEnd = salonsData[id - 1].info.time_end
    const timeStart = salonsData[id - 1].info.time_begin
    const status = salonsData[id - 1].info.status

    return (
        <Card style={{width: '25rem', margin: '10px'}}>
            <Card.Img variant="top" src={img} width={350} height={250}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <MapPin />
                        {address}
                    </Card.Text>
                    <Card.Text>
                    </Card.Text>
                    <Card.Text>
                        {status ? `Открыто до ${timeEnd}` : `Закрыто до ${timeStart}`}
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SalonsCards;