const { baseApi } = require("./baseApi");

const pakageApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getStanderdPackages: builder.query({
            query: () => ({
                url: '/package?type=standard',
                method: 'GET',
            }),
        }),
        getPremiumPackages: builder.query({
            query: () => ({
                url: '/package?type=premium',
                method: 'GET',
            }),
        }),
        getPremiumProPackages: builder.query({
            query: () => ({
                url: '/package?type=premium_pro',
                method: 'GET',
            }),
        }),

      
    }),

 
})



export const {useGetStanderdPackagesQuery,useGetPremiumPackagesQuery,useGetPremiumProPackagesQuery}=pakageApi