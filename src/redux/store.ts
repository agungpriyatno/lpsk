import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./features/scroll-slice";
import textToSpeechReducer from "./features/text-to-speech-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        scrollReducer,
        textToSpeechReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector