import React from 'react'
import '../style/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
import { Container, Row, Col } from 'reactstrap'

import {
  DeleteOutlined
} from '@ant-design/icons';

// import tdImg from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


 


const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  // 通过useSelector从redux里面获取到数据，每当Redux状态树中与该函数返回值有所更改时，React组件都会自动重新渲染。

  return (
    <Helmet title='Cart'>
      {/* 页面标题 */}
      <CommonSection title='购物车' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {/* 进行判断购物车是否有数据，如果有则展示数据，没有则提示购物车没有东西 */}
              {
                cartItems.length === 0 ? <h2 className='fs-4 text-center'>没有商品添加到购物车</h2> : <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>图片</th>
                      <th>标题</th>
                      <th>价格</th>
                      <th>数量</th>
                      <th>删除</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))
                    }
                  </tbody>
                </table>
              }

            </Col>
            <Col lg='3'>
              <div>
                <h6 className='d-flex align-items-center justify-content-between'>总金额</h6>
                <span className='fs-4 fw-bold'>￥{totalAmount}</span>
              </div>
              <p className='fs-6 mt-2'>运费将在结账时计算</p>
              <div>
                <button className="buy-btn w-100">
                  <Link to='/shop'>继续购买</Link>
                </button>
                <br></br>
                <button className="buy-btn w-100 mt-3">
                  <Link to='/checkout'>结账处</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = ({ item }) => {
  const dispatch = useDispatch()

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr>
      <td><img src={item.imgUrl} alt="" /></td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <motion.td whileTap={{ scale: 1.1 }} onClick={deleteProduct} ><DeleteOutlined /></motion.td>
    </tr>
  )
}

export default Cart