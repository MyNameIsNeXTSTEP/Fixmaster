import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react";
import salonsData from "../../salonsData";

interface ISaloon {
    id: number
}

const rtf = new Intl.RelativeTimeFormat('ru', {
    numeric: 'auto',
    style: 'long',
    localeMatcher: "best fit"
})

function BasicExample({id}: ISaloon) {

    const [inTime, setInTime] = useState('')

    useEffect(() => {
        const min = new Date().getMinutes()
        const hour = new Date().getHours()
        const hourEndNum = Number(timeEnd.slice(0,2))
        const minEndNum = Number(timeEnd.slice(-2))
        if (hourEndNum - hour < 1) {
            setInTime('')
        } else if (hourEndNum - hour === 1) {
            setInTime(rtf.format(60 - min, 'minute'))
        } else if (hourEndNum - hour > 1 && minEndNum === 0 && min < 30) {
            setInTime(rtf.format(hourEndNum - hour, 'hour'))
        } else if (hourEndNum - hour > 1 && minEndNum === 0 && min > 30) {
            setInTime(rtf.format(hourEndNum - hour - 1, 'hour'))
        }
    }, [])

    const map = require('../../assets/map-pin.svg') as string;

    const title = salonsData[id - 1].info.title
    const img = salonsData[id - 1].info.images[0]
    const address = salonsData[id - 1].info.address
    const timeEnd = salonsData[id - 1].info.time_end
    const status = salonsData[id - 1].info.status

    return (
        <Card style={{width: '25rem', margin: '10px'}}>
            <Card.Img variant="top" src={img} width={350} height={250}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <img src={map} style={{margin: '0 5px 5px 0', width: '22px', height: '22px'}}/>
                        {address}
                    </Card.Text>
                    <Card.Text>
                        {inTime && inTime}
                    </Card.Text>
                    <Card.Text>
                        {status ? 'Открыто' : 'Закрыто'}
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;