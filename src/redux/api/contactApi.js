const { baseApi } = require("./baseApi");





const contactApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        sendContactForm: builder.mutation({
            query: (data) => ({
                url: '/contacts/add',
                method: 'POST',
                body: data,
            }),
        }),


    }),
})


export const { useSendContactFormMutation } = contactApi;