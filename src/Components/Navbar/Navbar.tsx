import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from "react";
import logo from '../../assets/logo.svg'

function OffcanvasExample(): JSX.Element  {

    return (
        <>
            {/* @todo Don't need this `[false].map…` thing, it's bad, why you need the `map` though ? */}
            {[false].map((expand: boolean) => (
                <Navbar expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} alt="logo" />
                            Fixmaster
                        </Navbar.Brand>
                        {/* @todo Move `<Form…/>` search component below into another file.
                            So move the `<Navbar.Offcanvas…/>` into another file too.
                            Then just combine them all together like this:
                            ./Navbar
                                - SearchForm.tsx
                                - NavMenu.tsx
                            And current Navbar.tsx component would have:
                                …return (
                                    …<Navbar…
                                    …<SearchForm
                                    …<NavMenu
                                )
                        */}
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Найти"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    FIXMASTER
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Салон красоты</Nav.Link>
                                    <Nav.Link href="#action2">Парикмахерские</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;