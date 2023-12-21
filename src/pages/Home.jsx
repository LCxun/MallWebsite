import React, { useEffect, useState } from 'react'

import Helmet from '../components/Helmet/Helmet'
import '../style/home.css'
import { Carousel } from 'antd';

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../assets/data/products'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img.png'

import Services from '../services/Services'
import ProductsList from '../components/Ul/ProductsList'
import Clock from '../components/Ul/Clock'

import counterImg from '../assets/images/counter-timer-img.png'
import banner01 from '../assets/images/banner01.png'
import banner02 from '../assets/images/banner02.png'
import banner03 from '../assets/images/banner03.png'
import banner04 from '../assets/images/banner04.png'



const Home = () => {

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [mobileProducts, setMobileProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])


    const year = new Date().getFullYear()

    useEffect(() => {
        const filterdTrendingProducts = products.filter(item => item.category === 'chair')
        const filterdBestSalesProducts = products.filter(item => item.category === 'sofa')
        const filterdMobileProducts = products.filter(item => item.category === 'mobile')
        const filterdWirelessProducts = products.filter(item => item.category === 'wireless')
        const filterdPopularProducts = products.filter(item => item.category === 'watch')



        setTrendingProducts(filterdTrendingProducts);
        setBestSalesProducts(filterdBestSalesProducts)
        setMobileProducts(filterdMobileProducts)
        setWirelessProducts(filterdWirelessProducts)
        setPopularProducts(filterdPopularProducts)
        // console.log(trendingProducts);
    }, [])
    // useEffect将会在组件渲染完毕后执行，用于清除副作用 [] 表示只会在初始化时执行一次

    

    return (
        <Helmet title={'Home'}>
            <section className="hero-section">
                <Row>
                    <Carousel>
                        <div>
                            <img src={banner01} alt="" />
                        </div>
                        <div>
                            <img src={banner02} alt="" />
                        </div>
                        <div>
                            <img src={banner03} alt="" />
                        </div>
                        <div>
                            <img src={banner04} alt="" />
                        </div>
                    </Carousel>

                </Row>
            </section>

            <Services>

            </Services>

            <section className="trending-products">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section-title">
                                热门产品
                            </h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best-sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section-title">
                                畅销产品
                            </h2>
                        </Col>

                        <ProductsList data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer-count">
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='count-down-col'>
                            <div className="clock-top-content">
                                <h4 className='text-white fs-6 mb-2'>
                                    限量优惠
                                </h4>
                                <h3 className='text-white fs-5 mb-3'>
                                    优质产品
                                </h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{ scale: 1.2 }} className='buy-btn store-btn'><Link to='/shop'>访问商城</Link></motion.button>
                        </Col>
                        <Col lg='6' md='12' className='text-end counter-img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="new-arrivals">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className="section-title">
                                新品
                            </h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>

            <section className="popular-category">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-5'>
                            <h2 className="section-title">
                                最受欢迎
                            </h2>
                        </Col>
                        <ProductsList data={popularProducts} />

                    </Row>
                </Container>
            </section>

        </Helmet>
    )
}

export default Home