import { createSlice } from "@reduxjs/toolkit";
import result from '../../Evaluation'

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
            if(!isSpecial(state.value[top]) && !isSpecial(action.payload)){
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
        },
        evaluate:(state)=>{
            state.value = [result(state.value)]
        }
    }
})
export const {add, remove, evaluate} = calculateSlice.actions
export default calculateSlice.reducer


function isOprator(val)
{
    return "+-x/<<=".includes(val)
}

function isSpecial(val)
{
    return "+-x/<<=()".includes(val)
}