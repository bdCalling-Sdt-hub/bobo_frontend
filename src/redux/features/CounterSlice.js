const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    count:1
}

// Action creators and reducers for the counter slice.
 export const counterSlice = createSlice({

    // The `name` field specifies the name of the slice
    name: 'counter',
    //  Define the initial state for the counter slice
    initialState,
// The `reducers` field contains functions that handle each action type.
// Action creators and reducers
    reducers: {

        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        reset: (state) => {
            state.count = 0;
        },

        
       
    },
})

// Action creators for the counter slice.
export const { increment, decrement, reset } = counterSlice.actions;

// The reducer function for the counter slice.
export default counterSlice.reducer