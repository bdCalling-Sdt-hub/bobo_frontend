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

        getSchoolTeachers: builder.query ({
            query: () => ({
                url: '/users/school-teachers',
                method: 'GET',
            }),
            providesTags:["schoolteacher"]
        }),

        deleteSchoolTeachers: builder.mutation({
            query: (id) => ({
                url: `/users/school-teacher/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:["schoolteacher"]
        }),
        UpdateSchoolteacher : builder.mutation({
            query: ({id,data}) => ({
                url: `/users/update-school-teacher/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags:["schoolteacher"]
        })
    }),
})


export const {useGetUserQuery,useUpdateUserMutation, useGetSchoolTeachersQuery,useDeleteSchoolTeachersMutation,useUpdateSchoolteacherMutation}=UserApi