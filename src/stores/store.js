import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import pharmacyReducer from './pharmacy'

export default configureStore({
    reducer: {
       auth: authReducer,
       pharmacy: pharmacyReducer
    },
})