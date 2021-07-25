import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../app/slices/basket.slice";

export const store = configureStore({
    reducer:{
        basket: basketSlice
    }
});