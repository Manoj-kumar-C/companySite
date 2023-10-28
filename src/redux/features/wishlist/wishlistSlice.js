import { getLocalStorage, setLocalStorage } from '@/src/utils/localstorage';
import { createSlice } from '@reduxjs/toolkit';  
import { toast } from 'react-toastify';


const initialState = {
    wishlist: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState, 
    reducers: {
        add_to_wishlist:(state,{payload}) => {
            const productIndex = state.wishlist.findIndex(item => item.id === payload.id);
            if(productIndex >= 0){
              toast.error(`${payload.title} already added to wishlist`, {
                position: 'top-right'
              })
            }
            else {
              state.wishlist.push(payload);
              toast.success(`${payload.title} added to wishlist`, {
                position: 'top-right'
              })
            }
          setLocalStorage("wishlist", state.wishlist)
        },
        remove_wishlist_product:(state,{payload}) => {
            state.wishlist = state.wishlist.filter(item => item.id !== payload.id);
            toast.error(`remove from your wishlist`, {
              position: 'top-right'
            })
            setLocalStorage("wishlist", state.wishlist)
        },
        get_wishlist_products: (state, { payload }) => {
          state.wishlist = getLocalStorage("wishlist");
        },

    }
})

export const {add_to_wishlist, remove_wishlist_product,get_wishlist_products}  = wishlistSlice.actions
export default wishlistSlice.reducer