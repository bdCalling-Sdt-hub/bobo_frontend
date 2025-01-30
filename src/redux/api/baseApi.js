import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.example.com/v1",
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token; 
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseApi = createApi({ 
    reducerPath: "baseApi",
    baseQuery,
    endpoints: () => ({}),
});
