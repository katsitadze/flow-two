import React, { FormEvent, useState } from 'react'
import { AuthProps } from '../../interface/auth.interface'
import { TextField,Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'




const AuthForms:React.FC<AuthProps> = ({type,onSubmit}) => {
 const [email, setEmail]=useState('')
 const [password, setPassword]=useState ('')
const navigate=useNavigate()

 const handleSubmit = (e:FormEvent <HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({email, password})
        navigate('/users') 
        setEmail('')
        setPassword('')
       
 }
  return (
    <form onSubmit={handleSubmit} style ={{width:'500px', margin:'50px auto', display:'flex', flexDirection:'column'}}>
        <h1>{ type=== 'login' ? 'login' : 'register'}</h1>
        <TextField 
        label='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        variant='outlined'
        type='email'
        fullWidth
        required
       />
       <TextField 
        label='Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        variant='outlined'
        type='passwprd'
        fullWidth
        required
       />
       <Button type='submit'>
        <Typography>
        { type=== 'login' ? 'login' : 'register'}
            </Typography>
        </Button>
    </form>
  )
}

export default AuthForms;