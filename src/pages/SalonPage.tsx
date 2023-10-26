import React from "react";
import { Params, useParams } from "react-router-dom";
import SaloonCard from "../Components/SaloonCard";
import { Container } from "react-bootstrap";

const SalonPage = (): JSX.Element => {
  const { id } = useParams<Params>();
  return (
    <div>
        <h2 >Salon Page</h2>
        <Container>
            <SaloonCard id={id} />
        </Container>
    </div>
    );
};

export default SalonPage;