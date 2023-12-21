import React from 'react'

import { PlusOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import '../../style/product-card.css'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ item }) => {

    // 通过useDisatch()来获取派发器对象
    // 通过dispatch去向redux发送不同的指令，redux再通过不同的指令去操作数据
    const dispatch = useDispatch()
    // 定义addToCart函数，将商品添加到购物车
    const addToCart = () => {
        // 使用dispatch函数发送addItem action到redux store
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl,
        }))

        // alert('商品已经添加到购物车')
        toast.success('商品已经添加到购物车')
    }

    return (
        <Col lg='3' md='4' className='mb-2'>

            <div className="product-item">
                <div className="product-img">
                    <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 product-info'>
                    <h3 className="product-name">
                        <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product-card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">
                        ￥{item.price}
                    </span>
                    <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
                        <i><PlusOutlined /></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard