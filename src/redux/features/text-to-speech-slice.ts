import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
    value: TextToSpeechState
}

export type TextToSpeechState = boolean

export const initialState: InitialState = {
    value: true
}

export const textToSpeech = createSlice({
    name: "text-to-speech",
    initialState,
    reducers: {
        toggle(state) {
            state.value = !state.value
            return state
        }
    }
})

export const { toggle } = textToSpeech.actions
export default textToSpeech.reducer