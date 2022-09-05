import { configureStore } from "@reduxjs/toolkit";
import holidaysSlice from "./holidays-slice";
import textSlice from "./text-slice";

export const store = configureStore({
    reducer: {
        holidays: holidaysSlice,
        text: textSlice
    }
})