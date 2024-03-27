'use client';
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const SERVER = 'http://localhost:8080'

export default function Login() { //component

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('') //hook
    
    const handleChangeUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e:any) => { //eventhandler
        setPassword(e.target.value)
    }
    const router = useRouter();
    const handleSubmit = () => {
        alert('리퀘스트가 가져가는 이름 : ' + username + password)
        const url = `${SERVER}/api/login`
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
            const message = res.data.message
            alert(message)
            if(message==='SUCCESS'){
                router.push('/articles')
            }else if (message==='FAIL'){
                alert("Fail")
            }else{
                alert("지정되지 않은 값")
            }
        })
    }

    return(<>
        <h2>로그인 페이지</h2>
        <h5>아이디</h5>
        <input type="text" onChange={handleChangeUsername}/>
        <h5>비밀번호</h5>
        <input type="text" onChange={handleChangePassword}/>
        <button onClick={handleSubmit}>확인</button> <br/><br/>
    </>
    )
}