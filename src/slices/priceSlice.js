import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 5,
};

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        addValue: (state, action) => {
            state.counter += action.payload;
        },
    },
});

export const { increment, decrement, addValue } = priceSlice.actions;
export default priceSlice.reducer;
