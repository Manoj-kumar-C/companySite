import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import wishlistSlice from "./features/wishlist/wishlistSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }),
})

export default store