
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AuthRoute } from '../components/AuthComponent/AuthComponent'


import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'



const Routers = () => {
    return (
        // 构建出基本路由，如 http://localhost:3000/home、http://localhost:3000/shop...
        // path 表示路径，element里面是路径所对应的页面
        <Routes>
            {/* Navigate可以把根路由重定向到home页 */}
            <Route path='/' element={<Navigate to='home'></Navigate>}></Route>
            <Route path='home' element={<Home></Home>}></Route>
            <Route path='shop' element={<Shop></Shop>}></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
            <Route path='shop/:id' element={<ProductDetails></ProductDetails>}></Route>
            {/* 路由鉴权 */}
            <Route path='checkout' element={<AuthRoute><Checkout /></AuthRoute>}></Route>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='signup' element={<Signup></Signup>}></Route>

        </Routes>
        
    )
}

export default Routers




