import React from "react";
import { Link, Params, useParams } from "react-router-dom";
import SaloonCard from "../Components/SaloonCard";
import salonsData from "../salonsData";
import { Accordion, Button, Container } from "react-bootstrap";
import ServiceItem, { C } from "../Components/AccordeonItems/ServiceItem";
import MasterItem from "../Components/AccordeonItems/MasterItem";
import styled from "styled-components";

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const SalonPage = (): JSX.Element => {
  const { id = "" } = useParams<Params>();
  return (
    <div >



      <Container >
      <h2 >Salon Page</h2 >
      <Button variant="success" ><Link to="/" >Главная </Link ></Button >


        <SaloonCard id={ id } />
        <C >
          <Accordion >
            <Accordion.Item eventKey="0" >
              <Accordion.Header >Мастера салона</Accordion.Header >
              <Accordion.Body >
                { salonsData[Number( id ) - 1].masters.map( el => {
                  return <div >
                    <MasterItem image={ el.image } text={ el.name } />
                  </div >;
                } ) }
              </Accordion.Body >
            </Accordion.Item >
          </Accordion >
        </C >
        <C >
          <Accordion >
            <Accordion.Item eventKey="0" >
              <Accordion.Header >Услуги салона</Accordion.Header >
              <Accordion.Body >
                { salonsData[Number( id ) - 1].services.map( el => {
                  return <div >
                    <ServiceItem text={ el.title } price={ el.price } description={ el.description } minTime={ el.min_time } />
                  </div >;
                } ) }
              </Accordion.Body >
            </Accordion.Item >
          </Accordion >
        </C >
        <Center >
          <Button variant="info" >Записаться онлайн</Button >
        </Center >
      </Container >
    </div >
  );
};

export default SalonPage;