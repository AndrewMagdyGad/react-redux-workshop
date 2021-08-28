import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
};

export const fetchCounter = createAsyncThunk("hello", () => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(100);
        }, 2000);
    });
});

const counterSlice = createSlice({
    name: "counter",
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
    // extraReducers: (builder) => {
    //     builder.addCase(fetchCounter.fulfilled, (state, action) => {
    //         console.log(
    //             fetchCounter.fulfilled,
    //             fetchCounter.pending,
    //             fetchCounter.rejected,
    //             action
    //         );
    //         state.counter += action.payload;
    //     });
    //     builder.addCase(fetchCounter.pending, (state, action) => {
    //         console.log(fetchCounter.pending);
    //         state.counter = 20;
    //     });
    //     builder.addCase(fetchCounter.rejected, (state, action) => {
    //         console.log(fetchCounter.rejected, action);
    //         state.counter = -100;
    //     });
    // },

    extraReducers: {
        [fetchCounter.fulfilled]: (state, action) => {
            console.log(
                fetchCounter.fulfilled,
                fetchCounter.pending,
                fetchCounter.rejected,
                action
            );
            state.counter += action.payload;
        },
        [fetchCounter.pending]: (state, action) => {
            console.log(fetchCounter.pending);
            state.counter = 20;
        },
        [fetchCounter.rejected]: (state, action) => {
            console.log(fetchCounter.rejected, action);
            state.counter = -100;
        },
    },
});

export const { increment, decrement, addValue } = counterSlice.actions;
export default counterSlice.reducer;
