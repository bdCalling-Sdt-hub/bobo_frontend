const { baseApi } = require("./baseApi");


const authApi = baseApi.injectEndpoints({
   endpoints:(builder)=>({
    signUp : builder.mutation({
        query:(data)=>({
            url: '/auth/create',
            method: 'POST',
            body: data
        })
    }),

    signIn : builder.mutation({
        query:(data)=>({
            url: '/auth/login',
            method: 'POST',
            body: data
        })
    }),
    verifyEmail : builder.mutation({
        query:(data)=>({
            url: '/auth/verify-otp',
            method: 'POST',
            body: data,
        })
    }),
    resendOtp : builder.mutation({
        query:(data)=>({
            url: '/auth/resend-otp',
            method: 'POST',
            body: data
        })
    }),

    forgetPassword : builder.mutation({
        query:(data)=>({
            url: '/auth/forget-password',
            method: 'POST',
            body: data
        })
    }),

    resetPassword : builder.mutation({
        query:(data)=>({
            url: '/auth/reset-password',
            method: 'POST',
            body: data
        })
    })
   }),

});

export const {useSignUpMutation,useSignInMutation,useVerifyEmailMutation,useResendOtpMutation,useForgetPasswordMutation,useResetPasswordMutation}=authApi