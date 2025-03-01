const { baseApi } = require("./baseApi");


const SubsCriptionApi = baseApi.injectEndpoints ({
    endpoints: (builder)=>({
        CreateSubsCriptions: builder.mutation({
            query: ({pakage,member})=>({
                url: '/subscriptions',
                method: 'POST',
                body: {"package": pakage,
                    "member":member
                 }
            })
        }),
        GetrunningSubsCriptions: builder.query({
            query: ()=>({
                url: '/subscriptions/my-subscription',
                method: 'GET'
            })
        })
    })
 
});




export const {useCreateSubsCriptionsMutation,useGetrunningSubsCriptionsQuery}=SubsCriptionApi;