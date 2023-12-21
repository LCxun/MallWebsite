import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";

// 创建store对象，以便全局使用
const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;