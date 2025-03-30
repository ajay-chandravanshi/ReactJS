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
        },
        taskComplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].status="complete";
                }
            }
        },
        taskIncomplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].status="InComplete";
                }
            }
        }
    }
})
export const{addTask,deleteTask,taskComplete,taskIncomplete}=todoSlice.actions;
export default todoSlice.reducer;