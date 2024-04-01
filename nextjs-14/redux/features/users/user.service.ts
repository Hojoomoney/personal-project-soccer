import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsersAPI } from "./user.api";

export const fetchAllUsers : any = createAsyncThunk(
    'users/fetchAllUsers',
    async (page:number) => {
        console.log('fetchAllUsers page : '+ page)
        const data : any = await fetchAllUsersAPI(1);
        return data;
    }
)