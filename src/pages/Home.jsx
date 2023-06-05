import React, {useState, useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/wisudaaa.jpg';
import { Link }from "react-router-dom";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductList";
import products from "../assets/data/products";
import counterImg from "../assets/images/makul.jpg";
import Clock from "../components/UI/Clock";

const Home = () => {
    const [data, setData] = useState(products)
    let month = new Date().getUTCMonth();

    if (month===0) month = "Januari";
    if (month===1) month = "Februari";
    if (month===2) month = "Maret";
    if (month===3) month = "April";
    if (month===4) month = "Mei";
    if (month===5) month = "Juni";
    if (month===6) month = "Juli";
    if (month===7) month = "Agustus";
    if (month===8) month = "September";
    if (month===9) month = "Oktober";
    if (month===10) month = "November";
    if (month===11) month = "Desember";

    useEffect(()=>{
        const filteredProducts = products.filter((item)=>item.category === 'trending');
        setData(filteredProducts);
    },[]);

    return <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className="hero__subtitle">Produk Terbaik dibulan {month}</p>
                            <h2>Kapan Wisuda?</h2>
                            <p>Sebuah paket lengkap bagi para wisudawan pada bulan ini. Praktis dan anti-scam, bagi kakak-kakak yang mau di wisuda boleh nih masukin keranjang. Buat yang udah bosen kuliah dan pengin cepet wisuda juga boleh. Ayok Wisudaan!</p>
                            <motion.button whileTap={{scale:.94}} className="buy__btn">
                                <Link to="/shop">SELENGKAPNYA</Link>
                            </motion.button>
                        </div>

                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg="12" className="text-center">
                        <h2 className="section__title">Produk yang sedang Trending</h2>
                    </Col>
                    <ProductsList data={data}/>
                </Row>
            </Container>
        </section>
        <section className="timer__count">
            <Container>
                <Row>
                    <Col lg='6' md='12' className="count__down-col">
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Penawaran Terbatas</h4>
                            <h3 className="text-white fs-2 mb-3">Mahasiswa Kulbet</h3>
                        </div>
                        <Clock/>
                        <motion.button whileTap={{scale:0.94}} className="buy__btn store__btn">
                            <Link to="/shop">Lihat Produk</Link>
                        </motion.button>
                    </Col>
                    <Col lg='6' md='12' className="text-end counter__img">
                        <img src={counterImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Home;