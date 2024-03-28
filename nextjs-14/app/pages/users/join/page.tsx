'use client';

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/app/atoms/enums/API";
import AxiosConfig from "@/app/organisms/configs/axios-config";
import { PG } from "@/app/atoms/enums/PG";
const SERVER = 'http://localhost:8080'

export default function Join() {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [job, setJob] = useState('')

    const handleChangeUsername = (e:any) => {
        setUsername(e.target.value)
    }
    const handleChangePassword = (e:any) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e:any) => {
        setEmail(e.target.value)
    }
    const handleChangeName = (e:any) => {
        setName(e.target.value)
    }
    const handleChangePhone = (e:any) => {
        setPhone(e.target.value)
    }
    const handleChangeJob = (e:any) => {
        setJob(e.target.value)
    }
    const router = useRouter();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.post(`${API.SERVER}/users`, 
        {username, password, email, name, phone, job},
         AxiosConfig())
        .then(res => {
            alert(JSON.stringify(res.data.message))
            router.push(`${PG.USER}/login`)
        })
    }

    return(<>

<div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>
    
    <label htmlFor="username "><b>Username</b></label> <br/>
    <input type="text" onChange={handleChangeUsername} placeholder="Enter Username" name="username" required /> <br/>

    <label htmlFor="password"><b>Password</b></label> <br/>
    <input type="text" onChange={handleChangePassword} placeholder="Enter Password" name="password" required /> <br/>

    <label htmlFor="email"><b>Email</b></label> <br/>
    <input type="text" onChange={handleChangeEmail} placeholder="Enter Email" name="email" required /> <br/>

    <label htmlFor="name"><b>Name</b></label> <br/>
    <input type="text" onChange={handleChangeName} placeholder="Enter Name" name="name" required /> <br/>

    <label htmlFor="phone"><b>Phone</b></label> <br/>
    <input type="text" onChange={handleChangePhone} placeholder="Enter Phone" name="phone" required /> <br/>

    <label htmlFor="job"><b>Job</b></label> <br/>
    <input type="text" onChange={handleChangeJob} placeholder="Enter Job" name="job" required /> <br/><br/>
    
    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
    </div>
</div>
    </>
    )

}