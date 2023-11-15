import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import salonsData from "../../salonsData";



const SaloonCard = (): JSX.Element => {
  let { id } = useParams<Params>();

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