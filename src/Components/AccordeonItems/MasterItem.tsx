import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #e0ebff;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 5px 15px;
  display: flex;
`;
const CardName = styled.div`
  font-size: 18px;
  margin-left: 20px;
  margin-right: auto;
  width: 100px;
  display: flex;
  align-items: center;
  font-weight: 600;
  white-space: nowrap;
`;
const CardJobName = styled.div`
  font-size: 11px;
`;
const CardImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f0ff89;
`;

const MasterItem = ( { image = "", text = "", children = "" } ) => {
  return (
    <div >
      <Card >
        <CardImage >
          <div >
            <img width={"100%"} src={ `${ image }` } alt="Аватарка" />
          </div >
        </CardImage >
        <CardName >Мастер { text }</CardName >
        <div >
          <CardJobName >Маникюр</CardJobName >
          <CardJobName >Маникюр</CardJobName >
          <CardJobName >Маникюр</CardJobName >
        </div >
      </Card >
    </div >
  );
};

export default MasterItem;