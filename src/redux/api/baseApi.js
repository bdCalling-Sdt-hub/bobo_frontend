import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.10.147:3000/api",
    credentials: "include", 
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token; 
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        const signUpToken = sessionStorage.getItem("signupToken");
        if (signUpToken) {
            headers.set("token", signUpToken);
        }
        const guestToken = sessionStorage.getItem("guestToken");
        if (guestToken) {
            headers.set("token", guestToken);
        }
       
        return headers;
    },
});
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    if (result?.error?.status === 401) {
      const res = await fetch(`http://192.168.10.147:3000/api/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
  
      const data = await res.json();
      if (data?.data?.accessToken) {
        const user = api.getState().auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken,
          }),
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
      }
    }
    return result;
  };


export const baseApi = createApi({ 
    reducerPath: "baseApi",
    baseQuery:baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
