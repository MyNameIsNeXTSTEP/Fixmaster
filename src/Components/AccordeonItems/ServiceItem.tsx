import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const C= styled.div`
margin-bottom: 10px;
`

Card.Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 15px;
  border-bottom: 1px solid #bbbbbb;
  background-color: #e6eeff;
`;
const CardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`
const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
`;
const Min = styled.div`
  font-size: 12px;
`;

const ServiceItem = ( { text = "", price = 0, minTime = 0, description = "" } ) => {
  return (
    <C>
      <Card >
        <Card.Header >
          <CardTitle >{ text }</CardTitle >
          <div >
            <Price >
            от { price } р <br />
            </Price >
            <Min>
              от { minTime } мин
            </Min>
          </div >
        </Card.Header >
        <Card.Body >
          <Card.Text >
            { description }
          </Card.Text >
        </Card.Body >
      </Card >
    </C >
  );
};

export default ServiceItem;