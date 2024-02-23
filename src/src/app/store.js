import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../../views/features/counter/counterSlice'

export const store = configureStore({
    reducer: { 'counter': counterSlice },
});