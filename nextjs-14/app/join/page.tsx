'use client';

import { useState } from "react";
const SERVER = 'http://localhost:8080'

export default function Join() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleChangeUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const handleChangeName = (e:any) => {
        setName(e.target.value)
    }
    const handleChangePhone = (e:any) => {
        setPhone(e.target.value)
    }
    const handleChangeAddress = (e:any) => {
        setAddress(e.target.value)
    }
    const handleSubmit = () => {
        alert('리퀘스트가 가져가는 이름 : ' + username + password)
        const url = `${SERVER}/join`
        const data = {username, password, name, phone, address}
        const config = {
            headers:{
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                Authorization: `Bearer blah ~` ,
                "Access-Control-Allow-Origin": "*",
            }}
        
    }

    return(<>

        <h2>회원가입 페이지</h2>
        <h5>아이디 : <input type="text" onChange={handleChangeUsername} /></h5> 
        <h5>비밀번호 : <input type="text" onChange={handleChangePassword} /></h5> 
        <h5>이름 : <input type="text" onChange={handleChangeName} /></h5> 
        <h5>전화번호 : <input type="text" onChange={handleChangePhone} /></h5> 
        <h5>주소 : <input type="text" onChange={handleChangeAddress} /></h5> 
        <button onClick={handleSubmit}>회원가입 하기</button>
    </>
    )

}