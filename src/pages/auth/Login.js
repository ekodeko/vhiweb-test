import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../Login.scss';


function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function handleLogin() {
        setLoading(true)
        axios.post('https://reqres.in/api/login', {
            "email": email,
            "password": password
        }).then((res)=>{
            localStorage.setItem('user-access-token', res.data.token)
            localStorage.setItem('isLogin', true)
            setLoading(false)
            return navigate('/', {replace:true});
        }).catch((err)=>{
            console.log(err.response.data);
        })
    }

    return (
        <>
        <div className='login-bg'>
            <div className="blurred-box">
                <div className="user-login-box">
                    <span className="user-icon" />
                    <div className="user-name">Login Vhiweb</div>
                    <input type="email" className="user-username" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" className="user-password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className='my-btn' onClick={handleLogin}>{
                        loading ? 'Loading . . . ' : 'Login'
                    }</button>
                </div>
            </div>      
        </div>
        </>
    )
}

export default Login