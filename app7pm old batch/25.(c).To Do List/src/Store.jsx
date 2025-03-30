import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./todoSlice"
const Store=configureStore({
    reducer:{
        mytodo:myReducer
    }
})
export default Store;