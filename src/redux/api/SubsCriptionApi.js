const { baseApi } = require("./baseApi");


const SubsCriptionApi = baseApi.injectEndpoints ({
    endpoints: (builder)=>({
        CreateSubsCriptions: builder.mutation({
            query: (data)=>({
                url: '/subscriptions',
                method: 'POST',
                body: {"package": data}
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