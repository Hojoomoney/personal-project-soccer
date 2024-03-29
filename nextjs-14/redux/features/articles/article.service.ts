import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config";
import axios from "axios";
import { API } from "@/redux/common/enums/API";

export const getAllArticles: any = createAsyncThunk(
    'articles/getAllArticles',
    async (page: number)=>{
        console.log('getArticles page : '+ page)
        const data:any = await  getAllArticlesAPI(1);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)