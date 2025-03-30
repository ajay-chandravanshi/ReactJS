import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./ColorSlice";

const store=configureStore({
    reducer:{
        mycolor:myReducer
    }
})
export default store;