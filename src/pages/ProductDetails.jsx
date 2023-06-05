import React, {useState, useRef, useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import "../styles/product-details.css";
import { motion } from "framer-motion";
import ProductsList from "../components/UI/ProductList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const {id} = useParams();
    const [rating, setRating] = useState(null);
    const product = products.find((item)=>item.id === id);
    const {imgUrl, productName, price, avgRating, reviews, category, description} = product;
    const relatedProducts = products.filter((item)=>item.category===category)
    const ndelokUser = useRef('');
    const ndelokMsg = useRef('');
    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        const ndelokUserName = ndelokUser.current.value;
        const ndelokUserMsg = ndelokMsg.current.value;
        
        const ndelokObj = {
            userName: ndelokUserName,
            text: ndelokUserMsg,
            rating,
        };
        console.log(ndelokObj);
        toast.success("Berhasil menambahkan ulasan komentar")
    };
    const addToCart = () => {
        dispatch(cartActions.addItem({
        id,
        productName,
        price,
        image: imgUrl,
        }))
        toast.success('Produk berhasil ditambahkan')
    }
    useEffect(()=>{
        window.scrollTo(0,0);
    },[product])
    return (
        <Helmet title={productName}>
            <div>
            <section className="pt-0">
         
                <Container className="detail">
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                            
                        <Col lg='6'>
                            <div className="product__detail">
                                <h2>{productName}</h2>
                                    <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                        <div>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        </div>
                                        <p>(<span>{avgRating}</span> ulasan)</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="product__price">Rp {price}</span>
                                        <span>Kategori: {category}</span>
                                        <p><h2></h2></p> 
                                    </div>
                                    <div className="description__product">
                                        <span>
                                            <h5>Deskripsi Produk</h5>
                                            <p className="mt-3">{description}</p>
                                        </span>
                                    </div>
                                    <motion.button whileTap={{scale:0.8}} className="buy__btn" onClick={addToCart} >Tambahkan ke Keranjang</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="reviewAkhlak">
                    <Row>
                        <Col>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6>Review ({reviews.length})</h6>
                            </div>
                            <div className="product__review">
                                <div className="review__wrapper">
                                    <ul>
                                        {
                                            reviews?.map((item,index)=>(
                                                <li kew={index} className="mb-4">
                                                    <h6>Farhan Nur</h6>
                                                    <span>{item.rating} (ulasan)</span>
                                                    <p>{item.text}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <div className="review__form">
                                        <h4>Tinggalkan komentar anda</h4>
                                        <form action="" onSubmit={submitHandler}>
                                            <div className="form__group">
                                                <input type="text" placeholder="Masukan nama" ref={ndelokUser} required/>
                                            </div>
                                            <div className="form__group-stars d-flex align-items-center gap-5">
                                                <motion.span whileTap={{scale:0.94}} onClick={()=> setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{scale:0.94}} onClick={()=> setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{scale:0.94}} onClick={()=> setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{scale:0.94}} onClick={()=> setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                                                <motion.span whileTap={{scale:0.94}} onClick={()=> setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                                            </div>
                                            <div className="form__group">
                                                <textarea row={4} type="text" placeholder="Berikan ulasan" ref={ndelokMsg} required/>
                                            </div>
                                            <motion.button whileTap={{scale:0.94}}type="submit" className="buy__btn">Kirim</motion.button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg='12' className="mt-5">
                            <h2 className="related__title">Kamu mungkin juga suka / kamu juga mungkin suka ?</h2>
                        </Col>
                        <ProductsList data={relatedProducts}/>
                    </Row>
                </Container>

            </section>
            <section>
                
            </section>
            </div>
        </Helmet>
    )
}

export default ProductDetails;