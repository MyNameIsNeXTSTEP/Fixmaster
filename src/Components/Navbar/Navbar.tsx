import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import SearchForm from './SearchForm';
import NavMenu from './NavMenu';

function OffcanvasExample(): JSX.Element {

    const logo = require("../../assets/logo.svg") as string;

    return (
        <>
            <Navbar expand={false} className="bg-body-tertiary mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                    <SearchForm/>
                    <NavMenu/>
                </Container>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;