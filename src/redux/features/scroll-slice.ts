import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
    value: ScrollState
}

export type ScrollState = number

export const initialState: InitialState = {
    value: 0
}

export const scrollSlice = createSlice({
    name: "text-to-speech",
    initialState,
    reducers: {
        scroll(state, action: PayloadAction<number>) {
            state.value = action.payload
            return state
        }
    }
})


export const { scroll } = scrollSlice.actions
export default scrollSlice.reducer