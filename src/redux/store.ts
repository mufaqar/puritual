import { configureStore } from '@reduxjs/toolkit'
import addToCart from './features/add-to-cart-slice'
import sideCartSlice from "./features/side-cart-slice"

export const store = configureStore({
    reducer: {
        cart: addToCart,
        sideCart: sideCartSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch