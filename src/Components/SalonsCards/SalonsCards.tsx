import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react";
import salonsData from "../../salonsData";
import MapPin from "../../assets/map-pin";


interface ISaloon {
    id: number
}

const rtf = new Intl.RelativeTimeFormat('ru', {
    numeric: 'auto',
    style: 'long',
    localeMatcher: "best fit"
})

class CalcTime {
    private distance

    constructor(distance: number) {
        this.distance = distance
    }

    calcTime() {
        const hours = Math.floor((this.distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((this.distance / 1000 / 60) % 60);
        if (hours < 1) {
            const timeType:Intl.RelativeTimeFormatUnit = 'minute'
            const time = minutes
            return {timeType, time}
        } else {
            const timeType:Intl.RelativeTimeFormatUnit = 'hour'
            const time = hours
            return {timeType, time}
        }
    }
}

const SalonsCards = ({id}:ISaloon) => {

    const [inEndTime, setInEndTime] = useState('')
    const [inStartTime, setInStartTime] = useState('')

    useEffect(() => {
        const workEndTimeInHours = Number(timeEnd.split(':')[0])
        const workEndTimeInMinutes = Number(timeEnd.split(':')[1])
        const workStartTimeInHours = Number(timeStart.split(':')[0])
        const workStartTimeInMinutes = Number(timeStart.split(':')[1])

        const tEnd = new Date().setHours(workEndTimeInHours, workEndTimeInMinutes, 0)
        const tStart = new Date().setHours(workStartTimeInHours, workStartTimeInMinutes, 0)
        const timeNow = new Date().getTime()
        const distance = tEnd - timeNow;
        if (distance > tEnd - tStart) {
            const distanceStart = tStart - timeNow
            const setTime = new CalcTime(distanceStart).calcTime()
            setInStartTime(rtf.format(setTime.time, setTime.timeType))
        } else if (distance > 0) {
            const setTime = new CalcTime(distance).calcTime()
            setInEndTime(rtf.format(setTime.time, setTime.timeType))
        }
    }, [])

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
                        {inEndTime && `Закроется ${inEndTime}`}
                        {inStartTime && `Откроется ${inStartTime}`}
                    </Card.Text>
                    <Card.Text>
                        {status ? 'Открыто' : 'Закрыто'}
                    </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default SalonsCards;