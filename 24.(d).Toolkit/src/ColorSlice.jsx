import { createSlice } from "@reduxjs/toolkit";
const ColorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state,actions)=>{
            console.log(actions.payload)
            state.color=actions.payload;
        },
      
    }
})
export const {changeColor}=ColorSlice.actions;
export default ColorSlice.reducer;