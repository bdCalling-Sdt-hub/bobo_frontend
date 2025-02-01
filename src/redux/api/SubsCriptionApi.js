const { baseApi } = require("./baseApi");


const SubsCriptionApi = baseApi.injectEndpoints ({
    endpoints: (builder)=>({
        CreateSubsCriptions: builder.mutation({
            query: (data)=>({
                url: '/subscriptions',
                method: 'POST',
                body: {"package": data}
            })
        })
    })
 
});




export const {useCreateSubsCriptionsMutation}=SubsCriptionApi;