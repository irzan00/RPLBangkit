import React, { useState, useEffect } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products"
import ProductsList from "../components/UI/ProductList"

const Shop = () => {
    const [productsData, setProductsData] = useState(products)

    useEffect(()=>{
        const hideTrendingOnShop = products.filter((item)=>item.category !== "trending");
        setProductsData(hideTrendingOnShop);
    },[]);

    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if(filterValue === "pakaian"){
            const filteredProducts = products.filter(
                (item) => item.category === "pakaian");

            setProductsData(filteredProducts);
        }
        if(filterValue === "makanan"){
            const filteredProducts = products.filter(
                (item) => item.category === "makanan");

            setProductsData(filteredProducts);
        }
        if(filterValue === "aksesoris"){
            const filteredProducts = products.filter(
                (item) => item.category === "aksesoris");

            setProductsData(filteredProducts);
        }
        if(filterValue === "produk"){
            const filteredProducts = products.filter(
                (item) => item.category === "produk");

            setProductsData(filteredProducts);
        }
        if(filterValue === "alat tulis"){
            const filteredProducts = products.filter(
                (item) => item.category === "alat tulis");

            setProductsData(filteredProducts);
        }
    }
    
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        const searchedProducts = products.filter(
            (item)=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }
    
    return ( 
        <Helmet title='Shop'>
            <CommonSection title='Katalog Produk'/>
                <section>
                    <Container className="widgets">
                        <Row>
                            <Col lg='3' md='3'>{setProductsData}
                                <div className="filter__widget">
                                    <select onChange={handleFilter}>
                                        <option>Filter Berdasarkan Kategori</option>
                                        <option value="pakaian">Pakaian</option>
                                        <option value="aksesoris">Aksesoris</option>
                                        <option value="produk">Produk</option>
                                        <option value="makanan">Makanan</option>
                                        <option value="alat tulis">Alat Tulis</option>
                                    </select>
                                </div>
                            </Col>

                            <Col lg='3' md='3'>
                                <div className="filter__widget">
                                    {/* <select>
                                        <option>Urutkan Produk secara</option>
                                        <option value="ascending">Menaik</option>
                                        <option value="descending">Menurun</option>
                                    </select> */}
                                </div>
                            </Col>

                            <Col lg='6' md='6'>
                                <div className="search__box">
                                    <input type="text" placeholder="Cari Produk" onChange={handleSearch} />
                                    <span>
                                        <i class="ri-search-line"></i>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row>
                            {
                                productsData.length === 0? <h1 className="text-center fs-4">Produk tidak ditemukan</h1> : <ProductsList data={productsData}/>
                            }
                        </Row>
                    </Container>
                </section>
        </Helmet>
    )
}

export default Shop;