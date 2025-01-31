import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi"; 
import storage from "redux-persist/lib/storage";
import { 
    FLUSH, PAUSE, PERSIST, persistReducer, persistStore, 
    PURGE, REGISTER, REHYDRATE 
} from "redux-persist";
import authReducer from "./features/authSlice";

const persistConfig = {
    key: "teacher-comment-hub",
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer, 
        auth: persistedAuthReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        }).concat(baseApi.middleware),
});

export const persistor = persistStore(store);
