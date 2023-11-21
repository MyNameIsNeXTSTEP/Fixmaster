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

    const [inEndTime, setInEndTime] = useState('')
    const [inStartTime, setInStartTime] = useState('')

    useEffect(() => {
        const hourEnd = Number(timeEnd.split(':')[0])
        const minEnd = Number(timeEnd.split(':')[1])
        const hourStart = Number(timeStart.split(':')[0])
        const minStart = Number(timeStart.split(':')[1])

        const tEnd = new Date().setHours(hourEnd, minEnd, 0)
        const tStart = new Date().setHours(hourStart, minStart, 0)
        const timeNow = new Date().getTime()
        const distance = tEnd - timeNow;
        if (distance > tEnd - tStart) {
            const distanceStart = tStart - timeNow
            const hours = Math.floor((distanceStart / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distanceStart / 1000 / 60) % 60);
            hours < 1 ? setInStartTime(rtf.format(minutes, 'minute')) : setInStartTime(rtf.format(hours, 'hour'))
        } else if (distance > 0) {
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / 1000 / 60) % 60);
            hours < 1 ? setInEndTime(rtf.format(minutes, 'minute')) : setInEndTime(rtf.format(hours, 'hour'))
        }
    }, [])

    const map = require('../../assets/map-pin.svg') as string;

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
                        <img src={map} style={{margin: '0 5px 5px 0', width: '22px', height: '22px'}}/>
                        {address}
                    </Card.Text>
                    <Card.Text>
                        {inEndTime && `Закрыто ${inEndTime}`}
                        {inStartTime && `Открыто ${inStartTime}`}
                    </Card.Text>
                    <Card.Text>
                        {status ? 'Открыто' : 'Закрыто'}
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;