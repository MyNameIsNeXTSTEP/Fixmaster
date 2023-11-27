import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import SearchForm from './SearchForm';
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo";

function OffcanvasExample(): JSX.Element {

    return (
        <>
            <Navbar expand={false} className="bg-body-tertiary mb-3">
                <Container>
                <Link to='/'>
                    <Navbar.Brand href="/">
                        <Logo width={'25'} height={'36'}/>
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