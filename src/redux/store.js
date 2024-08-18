import { configureStore } from "@reduxjs/toolkit";
import { api } from "./task-api-slice";

export const store = configureStore({
    reducer:{
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware)=>( [...getDefaultMiddleware(), api.middleware] )
})