import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { ProductReducers } from './productsReducers'
import { modulReducer } from './modulReducer'
import { OrderReducers } from './orderReducers'

const rootReducer = combineReducers({
  products: ProductReducers,
  modal: modulReducer,
  order: OrderReducers,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  // middleware: [thunkMiddleware],
})

export type RootState = ReturnType<typeof store.getState>
