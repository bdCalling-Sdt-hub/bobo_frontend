import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: "include", 
    prepareHeaders: (headers, { getState }) => {
        const token = getState()?.auth?.token; 
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        const signUpToken = localStorage.getItem("signupToken");
        if (signUpToken) {
            headers.set("token", signUpToken);
        }
        const guestToken = sessionStorage.getItem("guestToken");
        if (guestToken) {
            headers.set("token", guestToken);
        }
        const forgetPasswordToken = localStorage.getItem("signupToken");
        if (forgetPasswordToken) {
            headers.set("token", forgetPasswordToken);
        }
       
        return headers;
    },
});
const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    const refreshToken = localStorage.getItem("refreshToken");
    console.log("refresh",refreshToken)
   
    if (result?.error?.status === 401) {
      const res = await fetch(`${ process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
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
    tagTypes: ["schoolteacher"],
    baseQuery:baseQueryWithRefreshToken,
    endpoints: () => ({}),
});
