import { createSlice } from "@reduxjs/toolkit"


const todoSlice=createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },

    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        deleteTask:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id)
        
            
        }
    }
})
export const{addTask,deleteTask}=todoSlice.actions;
export default todoSlice.reducer;