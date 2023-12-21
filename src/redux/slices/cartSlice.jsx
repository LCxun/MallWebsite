import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    userName:''
}

const cartSlice = createSlice({
    // 用来自动生成action中的type
    name: 'cart',
    // state的初始值  initialState:initialState 可以简写
    initialState,
    reducers: { // 指定state的各种操作，直接添加方法
        // 通过不同的方法来指定对state的不同操作
        // 两个参数:state,action
        addItem: (state, action) => {

            const newItem = action.payload
            // console.log(newItem);
            
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            

            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,

                })
            } else {
                existingItem.quantity++
                existingItem.totalPrcie = Number(existingItem.totalPrice) + Number(newItem.price)
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
            
            // console.log(state.totalQuantity);
            // console.log(state.cartItems);
            // console.log(newItem);
        },
        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
        },
        showUserName:(state,action) => {
            // console.log(action.payload);
            state.userName = action.payload
            localStorage.setItem('userName',JSON.stringify(state.userName))
        }

    },

});

// Slice会自动帮我们生成action
// action对象的结构 {type:cart/函数名,payload:函数的参数}
export const cartActions = cartSlice.actions

export default cartSlice.reducer