'use client';
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
const SERVER = 'http://localhost:8080'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        alert('리퀘스트가 가져가는 이름 : ' + username + password)
        const url = `${SERVER}/login`
        const data = {username, password}
        const config = {
            headers:{
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~` ,
                "Access-Control-Allow-Origin": "*",
            }}
        axios.post(url,data,config)
        .then(res => {
            alert('리스폰스가 가져온 이름 : ' + JSON.stringify(res.data))
        })
    }

    return(<>
        <h2>로그인 페이지</h2>
        <h5>아이디</h5>
        <input type="text" onChange={handleChangeUsername}/>
        <h5>비밀번호</h5>
        <input type="text" onChange={handleChangePassword}/>
        <button onClick={handleSubmit}>확인</button> <br/><br/>
        <Link href={"/join"}>회원가입</Link>
    </>
    )
}