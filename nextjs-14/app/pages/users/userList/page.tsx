'use client'
import { IUser } from "@/redux/features/users/user.model";
import { fetchAllUsers } from "@/redux/features/users/user.service";
import { getAllUsers } from "@/redux/features/users/user.slice";
import { NextPage } from "next";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserListPage : NextPage = () => {
    const dispatch = useDispatch()
    const allUsers : [] = useSelector(getAllUsers)

    if(allUsers !== undefined){
        console.log('allUsers is defined')
        console.log('length is ' + allUsers.length)
        for (let i = 0; i < allUsers.length; i++) {
            console.log(JSON.stringify(allUsers[i]))
        }
    
    } else {
        console.log('allUsers is undefined')
    }

    useEffect( () => {
        dispatch(fetchAllUsers(1))
    },[]  )

    return(<>
    
    <h2>사용자 목록 UserList</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>username</th>
                    <th>password</th>
                    <th>email</th>
                    <th>name</th>
                    <th>phone</th>
                    <th>job</th>
                </tr>
            </thead>
            <tbody>
                {allUsers?.map((props:IUser) => (
                    <tr key={props.id}>
                        <td>{props.username}</td>
                        <td>{props.password}</td>
                        <td>{props.email}</td>
                        <td>{props.name}</td>
                        <td>{props.phone}</td>
                        <td>{props.job}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}

export default UserListPage