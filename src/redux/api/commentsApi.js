const { baseApi } = require("./baseApi");




const commentsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    
        createComment: builder.mutation({
            query: ({language,feedbackData,cycle}) => ({
                url: '/comments/generateFeedback',
                method: 'POST',
                body: {
                    "feedbackData":feedbackData,
                    "language": language,
                     cycle

                }
            }),
        }),

        
        getComments: builder.query({
            query: ()=>({
                url: '/comments',
                method: 'GET',
            })
        })
        
  
    
    }),
 
})


export const {useCreateCommentMutation,useGetCommentsQuery}=commentsApi