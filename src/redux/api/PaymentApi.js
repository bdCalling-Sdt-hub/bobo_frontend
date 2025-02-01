const { baseApi } = require("./baseApi");



const PaymentApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        checkOut : builder.mutation({
            query:(data)=>({
                url: '/payments/checkout',
                method: 'POST',
                body : {"subscription" : data},
            })
        }),
    }),
 
});


export const {useCheckOutMutation}= PaymentApi