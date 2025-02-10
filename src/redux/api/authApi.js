

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

    GuestAuthSignUp : builder.mutation({
        query:(data)=>({
            url: '/auth/create-guest',
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
            body: {"email":data}
        })
    }),

    forgetPassword : builder.mutation({
        query:(data)=>({
            url: '/auth/forgot-password',
            method: 'POST',
            body: data
        })
    }),

    resetPassword : builder.mutation({
        query:(data)=>({
            url: '/auth/reset-password',
            method: 'PATCH',
            body: data
        })
    }),

    changepassword : builder.mutation({
        query:(data)=>({
            url: '/auth/change-password',
            method: 'PATCH',
            body: data
        })
    }),
    
    GuestAuthInitialForm : builder.mutation({
        query:(data)=>({
            url: '/auth/admin-register-email',
            method: 'POST',
            body: data
        })
    }),
    addSchoolTeacher : builder.mutation({
        query:(data)=>({
            url: '/users/add-school-teacher',
            method: 'POST',
            body: data
        }),
        invalidatesTags:["schoolteacher"]
    })


   }),

});

export const {useSignUpMutation,useSignInMutation,useVerifyEmailMutation,useResendOtpMutation,useForgetPasswordMutation,useResetPasswordMutation,useGuestAuthSignUpMutation,useGuestAuthInitialFormMutation,useChangepasswordMutation,useAddSchoolTeacherMutation}=authApi