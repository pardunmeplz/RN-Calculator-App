import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from './slices/calculate'
const store = configureStore(
    {reducer:{
        calculate:calculateReducer
    }})

export type RootState = ReturnType<typeof store.getState>
// since get state returns same object type as a reducer

export default store