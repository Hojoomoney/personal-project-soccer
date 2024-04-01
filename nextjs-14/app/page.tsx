'use client'
import { useState } from "react"
import axios from 'axios';
import Link from "next/link";
import "./globals.css";
import { Button, Input } from "@mui/material";
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";

export default function Home() {
  const [name, setName] = useState('')
  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleClick = () => {
    alert('리퀘스트가 가져가는 이름 : ' + name)
    axios.post(`${API.SERVER}/name`, {name}, AxiosConfig())
      .then(res => {
        alert('alert : ' + JSON.stringify(res.data))
        console.log('console : ' + JSON.stringify(res.data))
      }
      )

  }

  return (
    <div className='text-center'>
      <div><h1>Welcome to React World !</h1></div><br />
      <span className='text-red-500'>이름 입력</span>
      <Input type="text" onChange={handleChange} />
      <Button variant="outlined" onClick={handleClick}>전 송</Button><br /><br />
      <Link href={`${PG.USER}/login`} >로그인</Link><br />
      <Link href={`${PG.USER}/join`}>회원가입</Link><br />
      <Link href={`${PG.DEMO}/mui-demo`}>MUI 데모</Link><br />
      <Link href={`${PG.DEMO}/companies`}>회사 목록</Link><br />
      <Link href={`${PG.DEMO}/counter`}>카운터 데모</Link><br />
      <Link href={`${PG.DEMO}/redux-counter`}>리덕스 카운터 데모</Link><br />
      <Link href={`${PG.BOARD}/articles`}>전체 글 목록</Link><br />
      <Link href={`${PG.USER}/userList`}>사용자 목록</Link>
    </div>
  )


}