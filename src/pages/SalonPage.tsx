import React from "react";
import { Link } from "react-router-dom";
import SaloonCard from "../Components/SaloonCard";
import { Container } from "react-bootstrap";

const SalonPage = (): JSX.Element => {
  return <>
      <h2 >Salon Page</h2 >


      <Container >

      <SaloonCard />
      </Container >
    </>;
};

export default SalonPage;