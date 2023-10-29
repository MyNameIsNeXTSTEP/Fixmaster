import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import logo from '../../assets/logo.svg'
import SearchForm from "./SearchForm";
import NavMenu from "./NavMenu";

function OffcanvasExample(): JSX.Element  {

    return (
        <>
                <Navbar expand={false} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} alt="logo" />
                        </Navbar.Brand>
                        <SearchForm />
                        <NavMenu />
                    </Container>
                </Navbar>
        </>
    );
}

export default OffcanvasExample;