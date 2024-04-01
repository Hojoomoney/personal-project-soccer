import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./user.init";
import { fetchAllUsers } from "./user.service";

const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ handleFulfilled 실행 ---------------')
    state.array = payload
    console.log(state.array)

}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}
export const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {},
    extraReducers :builder => {
        const {pending,rejected} = status;
        
        builder
        .addCase(fetchAllUsers.fulfilled, handleFulfilled)
    },
    
})
export const getAllUsers = (state:any) => {
    console.log('---------------- getAllUsers 실행 -----------------')
    console.log(JSON.stringify(state.user.array.result))
    return state.user.array.result
}

export const {} = userSlice.actions

export default userSlice.reducer;