import React, { useState } from 'react'
import CommonSection from '../components/Ul/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import {
  SearchOutlined
} from '@ant-design/icons';
import '../style/shop.css'

import products from '../assets/data/products'
import ProductList from '../components/Ul/ProductsList'
// import ProductDetails from './ProductDetails';

const Shop = () => {

  const [productsData, setProductsData] = useState(products)

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === 'sofa') {
      const filterdProducts = products.filter(item => item.category === 'sofa')

      setProductsData(filterdProducts)
    } else if (filterValue === 'mobile') {
      const filterdProducts = products.filter(item => item.category === 'mobile')

      setProductsData(filterdProducts)
    } else if (filterValue === 'chair') {
      const filterdProducts = products.filter(item => item.category === 'chair')

      setProductsData(filterdProducts)
    } else if (filterValue === 'watch') {
      const filterdProducts = products.filter(item => item.category === 'watch')

      setProductsData(filterdProducts)
    } else if (filterValue === 'wireless') {
      const filterdProducts = products.filter(item => item.category === 'wireless')

      setProductsData(filterdProducts)
    }
  }

  const handleSearch = e => {
    const searchTerm = e.target.value

    const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchProducts)
  }

  return (
    <Helmet title='Shop'>
      <CommonSection title='产品' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className="filter-widget">
                <select onChange={handleFilter}>
                  <option>筛选</option>
                  <option value="sofa">沙发</option>
                  <option value="mobile">手机</option>
                  <option value="chair">椅子</option>
                  <option value="watch">手表</option>
                  <option value="wireless">电子产品</option>
                </select>
              </div>
            </Col>

            <Col lg='6' md='12'>
              <div className="search-box">
                <input type="text" placeholder='Search.....' onChange={handleSearch} />
                <span><SearchOutlined /></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0 ? <h1 className='text-center'>没有找到</h1> : <ProductList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Shop