import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import styled from "styled-components";
import Logo from "../../assets/logo";
import {Link} from "react-router-dom";

const MenuTitle = styled.div`
  display: flex;
`

const TextTitle = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
`

const MainText = styled.div`
  font-size: 40px;
`

const SecondText = styled.div`
  font-weight: normal;
  font-size: 13px;
`

const NavMenu = () => {

    return (
        <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`}/>
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                placement="end"
            >
                <Offcanvas.Header>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                        <MenuTitle>
                            <Logo width={'50'} height={'50'}/>
                            <TextTitle>
                                <MainText>FIXMASTER</MainText>
                                <SecondText>Сервис удобного бронирования услуг</SecondText>
                            </TextTitle>
                        </MenuTitle>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/">Салон красоты</Nav.Link>
                        <Nav.Link href="#action2">Парикмахерские</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}

export default NavMenu