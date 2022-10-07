import { createSlice } from "@reduxjs/toolkit";

const buySlice = createSlice({
    name:"buy",
    initialState:[],
    reducers:{
        itemadd(state,action)
        {
            state.push(...action.payload)
        },
        removeItem (state,action)
        {
            return state.filter((item) => item.id !== action.payload);
        }
    }
})

export const buyitem = (state) => state.buy

export const {itemadd , removeItem } = buySlice.actions

export default buySlice.reducer