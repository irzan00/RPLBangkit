import React from "react";
import  "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear()
    return ( 
        <footer className="footer">
            
            <Row className="footer-awikwok">
                <Col lg="5" className="mt-4" md='6'>
                <div className="footer__logo">
                    <h4 className="quick__links-title">Botani Store</h4>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam unde beatae accusantium aspernatur error autem, a debitis et similique ab modi tempora consequatur aut quae ipsum accusamus nihil eveniet pariatur.</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg="2" className="mt-4" md='3'>
                    <div className="footer__quick-links">
                        <h4 className="quick__links-title">Links</h4>
                        <ListGroup>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/shop'>Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/cart'>Cart</Link>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0">
                                <Link to='/login'>Login</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>   
                </Col>
                <Col lg="5" className="mt-4" md='4'>
                    <div>
                        <h4 className="quick__links-title">Contact</h4>
                        <ListGroup className="footer__contact">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-4">
                                <span>
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                <p>Jl. Raya Dramaga. Kampus IPB Dramaga Bogor. 16680 Jawa Barat, Indonesia.</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-4">
                                <span>
                                    <i className="ri-phone-line"></i>
                                </span>
                                <p>+628987929xxx</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-4">
                                <span>
                                    <i className="ri-mail-line"></i>
                                </span>
                                <p>botani.store@apps.ipb.ac.id</p>
                            </ListGroupItem>
                        </ListGroup>
                    </div>   
                </Col>
                <Col lg='12'>
                    <div>
                        <p className="footer__copyright">Copyright {year} developed by RPL Jaya. All rights reserved.</p>
                    </div>
                </Col>
            </Row>
        </footer>
    )
};

export default Footer;