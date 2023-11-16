import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import SearchForm from './SearchForm';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';

function OffcanvasExample(): JSX.Element {

    const logo = require("../../assets/logo.svg") as string;

    return (
        <>
            <Navbar expand={false} className="bg-body-tertiary mb-3">
                <Container>
                <Link to='/'>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="logo"/>
                    </Navbar.Brand>
                </Link>
                    <SearchForm/>
                    <NavMenu/>
                </Container>
            </Navbar>
        </>
    );
}

export default OffcanvasExample;