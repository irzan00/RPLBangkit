import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart.cartItems)
    const totalAmount = useSelector((state)=>state.cart.totalAmount)
    return (
        <Helmet title='cart'>
            <CommonSection title='Keranjang anda'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                cartItems.length === 0? (<h2 className="fs-4 text-center">Tidak ada produk pada keranjang</h2>) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Nama Produk</th>
                                            <th>Harga</th>
                                            <th>Kuantitas</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems.map((item, index)=>(
                                               <Tr item={item} key={index}/> 
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg='3' className="box__total">
                            <div>
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Total harga
                                    <span className="fs-5 fw-bold">Rp {totalAmount}</span>
                                </h6>
                                
                            </div>
                            <p className="fs-6 mt-2">Pajak & pengiriman akan dihitung saat checkout</p>
                            <div>
                                <button className="buy__btn w-100"><Link to="/shop">Lanjut berbelanja</Link></button>
                                <button className="buy__btn w-100"><Link to="/checkout">Checkout</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({item}) =>{
    const dispatch = useDispatch();
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id));
    };

    return (
        <tr>
            <td><img src={item.imgUrl} /></td>
            <td>{item.productName}</td>
            <td>Rp {item.price}</td>
            <td>{item.quantity}</td>
            <td><motion.i whileTap={{scale:0.94}} onClick={deleteProduct} class="ri-delete-bin-line"></motion.i></td>
        </tr>
    )
}
export default Cart;