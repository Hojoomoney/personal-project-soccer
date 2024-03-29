import { createSlice } from "@reduxjs/toolkit";

interface IArticle{
    id : number,
    username : string,
    password : string,
    email : string,
    name : string,
    phone : string,
    job : string,
}

const initialState : IArticle = {
    id : 0,
    username : '',
    password : '',
    email : '',
    name : '',
    phone : '',
    job : '',
}

export const articleSlice = createSlice({
    name : "article",
    initialState,
    reducers : {}
})

export const {} = articleSlice.actions

export default articleSlice.reducer;