import React from "react";
import salonsData from "../../salonsData";

interface IProps {
    id?: string;
}

const SaloonCard = ({ id }: IProps): JSX.Element => {
  return <div >
    <h2>{salonsData[Number(id) - 1].info.title}</h2>
    <div>{salonsData[Number(id) - 1].info.address}</div>
    <div>{salonsData[Number(id) - 1].info.work_schedule}</div>
    <div>{salonsData[Number(id) - 1].info.time_begin} - {salonsData[Number(id) - 1].info.time_end}</div>
    Салон { id } <br/>

    {salonsData[Number(id) - 1].masters.map(el => {
        return <div>
            <img src={el.image} alt="" />
        </div>
    })}
  </div >;
};

export default SaloonCard;