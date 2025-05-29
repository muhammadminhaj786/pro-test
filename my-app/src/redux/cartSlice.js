import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items: []
    },
    reducers: {
        addToCart: (state,action)=> {
            const item = action.payload;
            const existing = state.items.find((i)=> i.id=== item.id)

            if(existing){
                existing.quantity += 1;
            }else{
                state.items.push({...item,quantity:1})
            }

        },
        removeFromCart: (state,action)=>{
            state.items =state.items.filter((i)=>i.id !== action.payload)
        },
        updateQuantiy: (state,action)=>{
            const {id,quantity} = action.payload

            const item = state.items.find((i)=> i.id === id)

            if(item){
                item.quantity = quantity
            }
        },
        emptyCart:(state) => {
            state.items = []
        }
    }
})

export const {addToCart , removeFromCart, updateQuantiy, emptyCart} = cartSlice.actions
export default cartSlice.reducer