const { baseApi } = require("./baseApi");


const UserApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: '/users/my-profile',
                method: 'GET',
            }),
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: '/users/update-my-profile',
                method: 'PATCH',
                body: data,
            }),
        }),
    }),
})


export const {useGetUserQuery,useUpdateUserMutation}=UserApi