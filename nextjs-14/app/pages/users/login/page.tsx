'use client';
import { API } from "@/redux/common/enums/API";
import { PG } from "@/redux/common/enums/PG";
import AxiosConfig from "@/redux/common/configs/axios-config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { NextPage } from "next";

const LoginPage : NextPage = () => { //component

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
        axios.post(`${API.SERVER}/login`,{username, password},AxiosConfig())
        .then(res => {
            const message = res.data.message
            alert(message)
            if(message==='SUCCESS'){
                router.push(`${PG.BOARD}/articles`)
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

export default LoginPage;