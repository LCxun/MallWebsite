import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
// import heroImg from '../assets/images/hero-img.png'
import {
  StarFilled
} from '@ant-design/icons';
import '../style/Product-details.css'
import { motion } from 'framer-motion'
import ProductsList from '../components/Ul/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'


const ProductDetails = () => {

  const [tab, setTab] = useState('desc')
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()


  const [rating, setRating] = useState(null)
  const { id } = useParams()
  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = product

  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value

    // console.log(reviewUserName, reviewUserMsg, rating);
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    }
    console.log(reviewObj);
    toast.success('评论成功')
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    }))
    toast.success('商品已经添加到购物车')
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <Helmet title={productName}>
      <CommonSection title={productName}></CommonSection>

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6' >
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg='6' >

              <div className="product-details">
                <h2>{productName}</h2>
                <div className="product-rating d-flex align-center gap-5 mb-3">
                  <div>
                    <span><StarFilled /></span>
                    <span><StarFilled /></span>
                    <span><StarFilled /></span>
                    <span><StarFilled /></span>
                    <span><StarFilled /></span>
                  </div>
                  <p>
                    (<span>{avgRating}</span>ratings)
                  </p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                  <span className='product-price'>￥{price}</span>
                  <span>{category}</span>
                </div>
                <p className='mt-3'>{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className='buy-btn' onClick={addToCart}>添加到购物车</motion.button>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tap-wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active-tab' : ''}`} onClick={() => setTab('desc')}>描述</h6>
                <h6 className={`${tab === 'rev' ? 'active-tab' : ''}`} onClick={() => setTab('rew')}>评论({reviews.length})</h6>
              </div>

              {
                tab === 'desc' ? <div className="tab-content mt-5"><p>{description}</p></div> :
                  <div className='product-review mt-5'>
                    <div className="review-wrapper">
                      <ul>
                        {
                          reviews?.map((item, index) => (<li key={index} className='mb-4'><h6>Jhon Doe</h6><span>{item.rating}(rating)</span><p>{item.text}</p></li>))
                        }
                      </ul>
                      <div className="review-form">
                        <h4>留下你的评价</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form-group">
                            <input type="text" placeholder='输入姓名' ref={reviewUser} required />
                          </div>
                          <div className="form-group d-flex align-items-center gap-5 rating-group">
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<StarFilled /></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<StarFilled /></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<StarFilled /></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<StarFilled /></motion.span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<StarFilled /></motion.span>
                          </div>
                          <div className="form-group">
                            <textarea ref={reviewMsg} rows={4} type="text" placeholder='留下评价' required />
                          </div>
                          <motion.button type='submit' className='buy-btn'>提交</motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
              }
            </Col>
            <Col lg='12' className='mt-5'>
              <h2 className="related-title">
                推荐
              </h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet >
  )
}

export default ProductDetails