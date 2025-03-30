import { createSlice } from "@reduxjs/toolkit";
const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state)=>{
            state.color="green"
        },
      
    }
})
export const {changeColor}=ColorSlice.actions;
export default ColorSlice.reducer;