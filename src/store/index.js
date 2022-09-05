import { configureStore } from "@reduxjs/toolkit";
import holidaysSlice from "./holidays-slice";
import imageSlice from "./img-slice";
import textSlice from "./text-slice";

export const store = configureStore({
    reducer: {
        holidays: holidaysSlice,
        text: textSlice,
        image: imageSlice
    }
})