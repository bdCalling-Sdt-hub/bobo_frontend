import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi"; 
// import counterReducer from "./features/CounterSlice";

export const store = configureStore({
    reducer: {
        // counter: counterReducer,
        [baseApi.reducerPath]: baseApi.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
