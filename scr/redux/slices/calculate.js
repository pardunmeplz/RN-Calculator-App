import { createSlice } from "@reduxjs/toolkit";

const initialState={value:['0']}

export const calculateSlice = createSlice({

    name:'calculate',
    initialState,
    reducers:{
        add:(state, action)=>{
            const top = state.value.length-1
            console.log(state.value)
            if(isOprator(state.value[top]) && isOprator(action.payload))
            {
                state.value[top] = action.payload
                return
            }
            if(!isOprator(state.value[top]) && !isOprator(action.payload)){
                state.value[top]+=action.payload
                
                return
            }
            state.value.push(action.payload)  
        },
        remove:(state)=>{
            state.value.pop()
            if(!state.value.length)
            {
                state.value.push('0')
            }
        }
    }
})
export const {add, remove} = calculateSlice.actions
export default calculateSlice.reducer


function isOprator(val)
{
    return "+-x/()<<=".includes(val)
}