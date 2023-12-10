import React from 'react';
import { Link } from 'react-router-dom';
import SalonsCards from "../Components/SalonsCards/SalonsCards";
import salonsData from "../salonsData";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const MainPage = (): JSX.Element => {

	return (
        <Wrapper>
            {salonsData.map(salon => {
                return (
                    <Link style={{textDecoration: 'none'}} to={`/salon/${salon.info.id}`}>
                        <SalonsCards id={salon.info.id}/>
                    </Link>
                )
            })}
        </Wrapper>
    );
};

export default MainPage;