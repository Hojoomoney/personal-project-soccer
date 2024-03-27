'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from "next/navigation";
const SERVER = 'http://localhost:8080'

interface IArticle {
    id: number,
    title: string,
    content: string,
    writer: string,
    registerDate: string;
}


export default function Articles() {
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    const url = `${SERVER}/api/articles`
    const config = {
        headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            Authorization: `Bearer blah ~`,
            "Access-Control-Allow-Origin": "*",
        }
    }
    useEffect(() => {

        axios.get(url, config)
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
        <h2>글목록</h2>

        <table>
            <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>작성자</th>
                    <th>등록일</th>
                </tr>
            </thead>
            <tbody>
                {articles.map((props: IArticle) => (
                    <tr key={props.id}>
                        <td>{props.title}</td>
                        <td>{props.content}</td>
                        <td>{props.writer}</td>
                        <td>{props.registerDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}