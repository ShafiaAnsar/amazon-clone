import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Login.css'
import {auth } from '../firebase'
function Login() {
  const navigate = useNavigate()
  const [email ,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = e =>{
    e.preventDefault()
    console.log('signIn')
    auth 
    .signInWithEmailAndPassword(email,password).then(auth =>{
      navigate('/')
    }).catch(error => alert (error.message))
    // e.target.reset()
  }
  const register = e =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      console.log(auth)
      if(auth){
        navigate('/')
      }
    }).catch(error => alert(error.message))
    e.target.reset()
  }
  return (
    <div className='login'>
    <Link to= '/'>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
      className='login_logo' />
    </Link>
    <div className='login_container'>
      <h1>Sign-In</h1>
      <form>
    <h5>Email</h5>
    <input type='email' value={email} onChange={e => setEmail(e.target.value)}      placeholder='Email'/>
    <h5>Password</h5>
    <input type='password' value={password} onChange={e => setPassword(e.target.value) }    placeholder='Password'/>
    <button className='login_signInButton' onClick={signIn} type= 'submit'>SignIn</button>
      </form>
      <p>By signing-in you agree to  Amazon Condition of use &Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice.</p>
      <button className='login_registerButton' onClick={register} >Create Your Amazon account</button>
    </div>

    </div>
  )
}

export default Login
