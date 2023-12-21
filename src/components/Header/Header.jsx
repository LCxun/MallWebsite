import React, { useRef, useEffect } from 'react'
import './header.css'

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import { motion } from 'framer-motion'

import logo from '../../assets/images/eco-logo.png'
import { ShoppingCartOutlined, HeartOutlined, AccountBookOutlined, MenuOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux'
import { getToken } from "../../routers/Token";


const Nav_Link = [
  {
    path: 'home',
    display: '主页'
  },
  {
    path: 'shop',
    display: '商城'
  },
  {
    path: 'cart',
    display: '购物车'
  },
]



const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  // state本身是存有很多数据，但是我们只想要其他一个，所有我们需要一个回调函数帮我们取到值
  // 注意数据要指定store组件里面的cart
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const userName = localStorage.getItem('userName')
  // console.log(typeof userName);

  const isToken = getToken()

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky-header')
      } else {
        headerRef.current.classList.remove('sticky-header')

      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  }, [stickyHeaderFunc])

  const menuToggle = () => menuRef.current.classList.toggle('active-menu')

  const navigateToCart = () => {
    navigate('/cart')
  }
  /* 

  */

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>简易购物</h1>
              </div>
            </div>


            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {
                  Nav_Link.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav-active' : ''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav-icons">
              <span className='cart-icon' onClick={navigateToCart}>
                <ShoppingCartOutlined />
                <span className="badge">{totalQuantity}</span>

              </span>

              <span>
                {/* <Link to='/login'>登录</Link> */}
                {isToken ? userName.replace(/\[|]/g, '' ) : <Link to='/login'>登录</Link>}
              </span>
              <div className="mobile-menu">
                <span onClick={menuToggle}>
                  <MenuOutlined />
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header