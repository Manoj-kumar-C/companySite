import { getLocalStorage, setLocalStorage } from "@/src/utils/localstorage";
import { createSlice } from "@reduxjs/toolkit"; 
import { toast } from "react-toastify"; 


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => { 
            const productIndex = state.cart.findIndex(item => item.id == payload.id);
            if(productIndex >= 0){
            state.cart[productIndex].quantity +=1;
            toast.info(`${payload.title} Increase Product Quantity`, {
                position: 'top-right'
            })
            }
            else {
            const tempProduct = {...payload,quantity:1};
            state.cart.push(tempProduct)
            toast.success(`${payload.title} added to cart`, {
                position: 'top-right'
            })
            }
        setLocalStorage("cart", state.cart)

        }, 
        decrease_quantity:(state,{payload}) => {
            const cartIndex = state.cart.findIndex(item => item.id === payload.id);
            if(state.cart[cartIndex].quantity > 1){
              state.cart[cartIndex].quantity -= 1
              toast.error(`${payload.title} Decrease cart quantity`, {
                position: 'top-right'
              })
            }
        setLocalStorage("cart", state.cart)

          },
        remove_cart_product:(state,{payload}) => {
            state.cart = state.cart.filter(item => item.id !== payload.id);
            toast.error(`remove from your cart`, {
              position: 'top-right'
            }),
        setLocalStorage("cart", state.cart)

        },
        clear_cart:(state) => {
            const confirmMsg = window.confirm('Are you sure deleted your all cart items ?');
            if(confirmMsg){
              state.cart = [];
            }
            setLocalStorage("cart", state.cart)
        },
        get_cart_products: (state) => {
          state.cart = getLocalStorage("cart");
        },

        quantityDecrement: (state, { payload }) => {
          state.cart.map((item) => {
            if (item.id === payload.id) {
              if (item.orderQuantity > 1) {
                item.orderQuantity = item.orderQuantity - 1;
              }
            }
            return { ...item };
          });
          setLocalStorage("cart", state.cart);
        },
    }
})


export const {addToCart, decrease_quantity, remove_cart_product, clear_cart, get_cart_products, quantityDecrement}  = cartSlice.actions
export default cartSlice.reducer