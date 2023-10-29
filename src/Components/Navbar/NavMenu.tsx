import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import React from "react";

const NavMenu = () => {
    return (
        <>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-false`}
                aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
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
        </>
    )
}

export default NavMenu