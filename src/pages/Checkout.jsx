import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/Ul/CommonSection'
import '../style/checkout.css'

import { useSelector } from 'react-redux'

const Checkout = () => {

  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)


  return (
    <Helmet title='Checkout'>
      <CommonSection title='结账' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>帐单信息</h6>
              <Form className='billing-form'>
                <FormGroup className="form-group">
                  <input type="text" placeholder='输入名字' />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="email" placeholder='输入邮箱' />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="number" placeholder='输入电话号码' />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder='输入地址' />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder='输入邮政号' />
                </FormGroup>

                <FormGroup className="form-group">
                  <input type="text" placeholder='输入国家' />
                </FormGroup>

              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout-cart">
                <h6>总数量 : <span>{totalQty}件商品</span></h6>
                <h6>总金额 : <span>${totalAmount}</span></h6>
                <h6> <span>运费 : <br /> 免费运送 </span> <span>$0</span></h6>

                <h4>Total Cost: <span>${totalAmount}</span> </h4>
                <button className='buy-btn auth-btn w-100'>下单</button>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout