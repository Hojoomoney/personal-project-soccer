'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
import { Button, Input, Box } from "@mui/material";
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";
const SERVER = 'http://localhost:8080'

export default function Articles() {
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    useEffect(() => {

        axios.get(`${API.SERVER}/articles`, AxiosConfig())
            .then(res => {
                const message = res.data.message
                console.log(message)
                if (message === "SUCCESS") {
                    alert("게시글이 있습니다");
                    const arr = res.data.result

                    for (const value of arr) {
                        console.log(value);
                    }
                    setArticles(res.data.result)
                } else if (message === "FAIL") {
                    console.log("게시글이 없습니다");
                } else {
                    console.log("저장되지 않은 값");
                }

            })

    }, [])

    return (<>
        <h2>게시글 목록</h2>

        <Box sx={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      /> */}
    </Box>
    </>)
}