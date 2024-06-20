import { useState } from 'react';
import React from 'react';
import Cookies from 'js-cookie'
import {useHistory } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const Login = ()=>{

    const history = useHistory()
    const [username , setUsername] = useState("rahul")
    const [password , setPassword] = useState("rahul@2021")

    const  OnSuccess = (jwtToken)=>{
        Cookies.set('jwt_tokenn', jwtToken, {expires: 30})
        console.log(jwtToken)
       
    }

    const onSubmit = async (event)=>{
        event.preventDefault()
        const userDetails = {username,password}
        const options = {method:'POST',body:JSON.stringify(userDetails)}
        const url = "https://apis.ccbp.in/login";
        const response = await fetch(url , options)
        const data = await response.json()
        if(response.ok===true) {
            OnSuccess(data.jwt_token)
            history.push('/');
        }
        

    }
    const onChangeUser =(e)=>{
        setUsername(e.target.value)
    }
    const onChangePass =(e)=>{
        setPassword(e.target.value)
    }

    return <div className="form-div">
    <form className='form-con' onSubmit={onSubmit}>
        <h1 className='heading'>Login</h1>
        <label>Username</label>
        <input value = {username} type="text" onChange={onChangeUser}/>
        <label>Password</label>
        <input value = {password} type="password" onChange={onChangePass}/>
        <button className = "btn-custom "type="submit">Submit</button>
    </form>
    </div>
}

export default Login