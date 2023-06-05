import React from "react";
import {Container, Row, Col, Form, FormGroup} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import {useSelector} from "react-redux";



const Checkout = () => {
    const totalQty = useSelector((state)=>state.cart.totalQuantity);
    const totalAmount = useSelector((state)=>state.cart.totalAmount);



    return ( 
        <Helmet title='Chechout'>
            <CommonSection title='Harap isi informasi dibawah'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <h6 className="mb-4 fw-bold">Informasi Pemesan</h6>
                            <Form className="billing__form">
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Masukan nama" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="alamat surel" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="number" placeholder="Nomor HP/WA" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Kabupaten/Kota" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Provinsi" />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="number" placeholder="Kode Pos" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col lg="4" className="co__total">
                            <div className="checkout__cart">
                                <h6>Kuantitas: <span>{totalQty}</span></h6>
                                <h6>Total Harga: <span>Rp {totalAmount}</span></h6>
                                <h6><span>Pengiriman: <br />Gratis Pengiriman</span>  <span>Rp 0</span></h6>
                                <h4>Biaya Total: <span>Rp {totalAmount}</span></h4>
                                <button className="buy__btn auth__btn w-100">Proses pemesanan</button>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Checkout;