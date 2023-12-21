import React from 'react'
import './footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import {
  AimOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons'




const Footer = () => {
  const year = new Date().getFullYear()
  // 获取当前的年份

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' className='mb-4' >
            <div className="logo">

              <div>
                <h1 className='text-white'>简易购物</h1>
              </div>

            </div>
            <p className="footer-text mt-4">
            欢迎来到我们的购物网站！我们提供各种各样的商品，从时尚服饰到家居用品，都能在我们的网站上找到。
            </p>
          </Col>

          <Col lg='3' className='mb-4'>
            <div className="footer-quick-links">
              <h4 className="quick-links-title">
                商品分类
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>电子设备</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>现代沙发</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>现代椅子</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>时髦手表</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2' className='mb-4' >
            <div className="footer-quick-links">
              <h4 className="quick-links-title">
                相关连接
              </h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>商城</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/Cart'>购物车</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>登录</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>隐私政策</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3' className='mb-4' >
            <div className="footer-quick-links">
              <h4 className="quick-links-title">
                联系我们
              </h4>
              <ListGroup className='footer-contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><AimOutlined /></span>
                  <p>123 ShenZhen,GuangDong</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><PhoneOutlined /></span>
                  <p>+0234568894</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><MailOutlined /></span>
                  <p>lip2651551@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer-copyright">
              版权 {year}
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer