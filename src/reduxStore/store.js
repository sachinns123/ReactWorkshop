import {configureStore} from '@reduxjs/toolkit'
import contentReducer from './slice'

export const store = configureStore({
    reducer: {
        content: contentReducer
    }
})