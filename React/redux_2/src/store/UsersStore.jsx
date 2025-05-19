
import usersReducer from '../users/UserSlice'
import productsReducer from '../users/ProductsSlice'
import { configureStore } from '@reduxjs/toolkit'
let store=configureStore({
    reducer:{
        users:usersReducer,
        products:productsReducer
    }
})
export default store
