import React from "react";
import { Nav, NavDropdown, Navbar, Form, Container, Row, Col, FormControl, Button, ListGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../dist/css/main.css'
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <div className="header__top bg-light">
                <Container>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <div className="header__top--social">
                                <ListGroup horizontal as="ul">
                                    <ListGroup.Item as="li" className="border-0 rounded-circle bg-dark mx-1"><FontAwesomeIcon icon={['fas', 'twitter']} className="text-light" /></ListGroup.Item>
                                    <ListGroup.Item as="li" className="border-0 rounded-circle bg-dark mx-1"><FontAwesomeIcon icon="coffee" className="text-light" /></ListGroup.Item>
                                    <ListGroup.Item as="li" className="border-0 rounded-circle bg-dark mx-1"><FontAwesomeIcon icon="coffee" className="text-light" /></ListGroup.Item>
                                    <ListGroup.Item as="li" className="border-0 rounded-circle bg-dark mx-1"> <FontAwesomeIcon icon="coffee" className="text-light" /></ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="header__top--info">
                            <ListGroup horizontal as="ul">
                                    <ListGroup.Item as="li" className="border-0 bg-light"><Link to="/" className="text-dark text-decoration-none "> <FontAwesomeIcon icon="coffee" className="text-danger" /> (+1) 234 5678 9101</Link></ListGroup.Item>
                                    <ListGroup.Item as="li" className="border-0 bg-light"><Link to="/" className="text-dark text-decoration-none"><FontAwesomeIcon icon="coffee" className="text-danger" /> (+1) 234 5678 9101</Link></ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="header__bottom">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown title="Link" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </header>
    );
}

export default Header;  